import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

function shouldIgnore(pathname: string) {
  return (
    IGNORED_PATHS.some((p) => pathname.startsWith(p)) || pathname.includes(".")
  );
}

export function middleware(request: NextRequest) {
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
  const acceptLanguage = request.headers.get("accept-language") || "";
  const browserLocale = acceptLanguage.startsWith("en") ? "en" : defaultLocale;

  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : browserLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|icon.png|icon.webp).*)",
  ],
};
