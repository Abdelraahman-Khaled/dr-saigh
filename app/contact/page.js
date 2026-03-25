import { cookies, headers } from "next/headers";
import translations from "../translations";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import GoogleMap from "./components/GoogleMap";
import ContactForm from "./components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientScripts from "../components/ClientScripts";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value || "ar";
  const t = translations[language] || translations["ar"];
  const isAr = language === "ar";

  const headersList = await headers();
  const currentPath = headersList.get("x-current-path") || `/${language}/contact`;
  const strippedPath = currentPath.replace(/^\/(ar|en)/, "") || "/contact";

  const title = t.contactPage.metadata.title;
  const description = t.contactPage.metadata.description;
  const keywords = isAr
    ? "اتصل بنا, تواصل معنا, الدكتور الصائغ, جراحة السمنة الرياض, حجز موعد"
    : "contact us, Dr AlSaigh, bariatric surgery Riyadh, book appointment";

  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    alternates: {
      canonical: `https://aalsaigh.com${currentPath}`,
      languages: {
        ar: `https://aalsaigh.com/ar${strippedPath}`,
        en: `https://aalsaigh.com/en${strippedPath}`,
        "x-default": `https://aalsaigh.com/ar${strippedPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      siteName: isAr ? "الدكتور عبدالرحمن الصائغ" : "Dr. Abdulrahman AlSaigh",
      title,
      description,
      images: [
        {
          url: "https://aalsaigh.com/images/cover.png",
          width: 1200,
          height: 630,
          alt: "Dr. Abdelrahman Alsaigh Contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://aalsaigh.com/images/cover.png"],
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <GoogleMap />
      </main>
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
