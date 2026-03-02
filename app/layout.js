import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ReactQueryProvider from "./providers";
const faBrands = localFont({
  src: "../public/webfonts/fa-brands-400.woff2",
  variable: "--font-fa-brands",
  weight: "400",
});

const faRegular = localFont({
  src: "../public/webfonts/fa-regular-400.woff2",
  variable: "--font-fa-regular",
  weight: "400",
});

const faSolid = localFont({
  src: "../public/webfonts/fa-solid-900.woff2",
  variable: "--font-fa-solid",
  weight: "900",
});

const tajawal = localFont({
  src: [
    {
      path: "../public/webfonts/tajawal-200.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/webfonts/tajawal-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
  display: "swap",
});

import { headers } from "next/headers";

export async function generateMetadata() {
  const headersList = await headers();
  const currentPath = headersList.get("x-current-path") || "/ar";

  // Remove language prefix safely to build alternates
  const strippedPath = currentPath.replace(/^\/(ar|en)/, "") || "";

  return {
    title:
      "الدكتور عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
    description:
      "استشاري جراحة السمنة والمناظير د. عبدالرحمن الصائغ - تكميم المعدة، تحويل مسار المعدة، والجراحة بالمناظير في الرياض",
    keywords:
      "الدكتور عبدالرحمن الصائغ, جراحة السمنة, تكميم المعدة, تحويل مسار المعدة, جراحة المناظير, استشاري جراحة, الرياض, السعودية, علاج السمنة, جراحة عامة",
    authors: [{ name: "Dr. Abdelrahman Alsaigh" }],
    metadataBase: new URL("https://aalsaigh.com"),
    robots: "index, follow",
    alternates: {
      canonical: currentPath,
      languages: {
        ar: `/ar${strippedPath}`,
        en: `/en${strippedPath}`,
        "x-default": `/ar${strippedPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      siteName: "الدكتور عبدالرحمن الصائغ",
      title:
        "الدكتور عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
      description:
        "استشاري جراحة السمنة والمناظير د. عبدالرحمن الصائغ - تكميم المعدة، تحويل مسار المعدة، والجراحة بالمناظير في الرياض",
      images: [
        {
          url: "https://aalsaigh.com/images/cover.png",
          width: 1200,
          height: 630,
          alt: "Dr. Abdelrahman Alsaigh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "الدكتور عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
      description:
        "استشاري جراحة السمنة والمناظير د. عبدالرحمن الصائغ - تكميم المعدة، تحويل مسار المعدة، والجراحة بالمناظير في الرياض",
      images: ["https://aalsaigh.com/images/cover.png"],
    },
    verification: {
      google: "",
      yandex: "",
      other: {},
    },
  };
}

import { cookies } from "next/headers";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value || "ar";
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={language}
      dir={dir}
      className={`${faBrands.variable} ${faRegular.variable} ${faSolid.variable} ${tajawal.variable}`}
    >
      <head>
        {/* Favicon - WebP with fallback */}
        <link rel="icon" type="image/webp" href="/images/favicon.webp" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />

        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />

        <link href="/css/all.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2LX6WFB');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2LX6WFB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ReactQueryProvider>
          <LanguageProvider initialLanguage={language}>
            {children}
          </LanguageProvider>
        </ReactQueryProvider>

        {/* JavaScript Files */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.mb.YTPlayer.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
