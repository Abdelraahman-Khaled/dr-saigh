import { NextResponse } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

// Paths that should not be redirected/rewritten
const IGNORED_PATHS = [
  "/_next",
  "/api",
  "/images",
  "/css",
  "/js",
  "/webfonts",
  "/favicon",
  "/icon",
  "/sitemap",
  "/robots",
];

function shouldIgnore(pathname) {
  return (
    IGNORED_PATHS.some((p) => pathname.startsWith(p)) || pathname.includes(".")
  );
}

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  // Ignore static assets and Next.js internals
  if (shouldIgnore(pathname)) return NextResponse.next();

  // Check if pathname already has a locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    // Strip locale prefix → rewrite to the actual page
    const strippedPath = pathname.replace(`/${pathnameLocale}`, "") || "/";
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = strippedPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-current-path", pathname);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });

    // Set locale cookie so server components know the language
    response.cookies.set("NEXT_LOCALE", pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });

    return response;
  }

  // No locale in URL → redirect to preferred locale
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : defaultLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|icon.png|icon.webp).*)",
  ],
};
