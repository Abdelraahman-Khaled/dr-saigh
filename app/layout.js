import Script from 'next/script';
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
  description: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة. خبرة واسعة في جراحات السمنة، تكميم المعدة، تحويل مسار المعدة، والجراحة بالمناظير في الرياض، المملكة العربية السعودية",
  keywords: "الدكتور عبدالرحمن الصايغ, جراحة السمنة, تكميم المعدة, تحويل مسار المعدة, جراحة المناظير, استشاري جراحة, الرياض, السعودية, علاج السمنة, جراحة عامة",
  authors: [{ name: "Dr. Abdelrahman Alsaigh" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://aalsaigh.com/",
    siteName: "الدكتور عبدالرحمن الصايغ",
    title: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
    description: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
    images: [
      {
        url: "https://aalsaigh.com/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Dr. Abdelrahman Alsaigh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    url: "https://aalsaigh.com/",
    title: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
    description: "الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير و الجراحة العامة",
    images: ["https://aalsaigh.com/images/cover.png"]
  },
  verification: {
    google: "",
    yandex: "",
    other: {}
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Favicon - WebP with fallback */}
        <link rel="icon" type="image/webp" href="/images/favicon.webp" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />

        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
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
            })(window,document,'script','dataLayer','GTM-PMBCVLQ5');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMBCVLQ5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <LanguageProvider initialLanguage="ar">
          {children}
        </LanguageProvider>

        {/* JavaScript Files */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
