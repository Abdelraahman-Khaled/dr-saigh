import Preloader from "../components/Preloader";
import Header from "../components/Header";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import GoogleMap from "./components/GoogleMap";
import ContactForm from "./components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientScripts from "../components/ClientScripts";

export const metadata = {
  title:
    "تواصل معنا - الدكتور عبدالرحمن الصائغ | Contact Us - Dr. Abdulrahman AlSaigh",
  description:
    "تواصل مع د. عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير في الرياض | Contact Dr. AlSaigh - Bariatric Surgery",
  keywords:
    "اتصل بنا, تواصل معنا, contact us, الدكتور الصائغ, Dr AlSaigh, جراحة السمنة الرياض, bariatric surgery Riyadh, حجز موعد, book appointment",
  robots: "index, follow",
  alternates: {
    canonical: "https://aalsaigh.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://aalsaigh.com/contact",
    siteName: "الدكتور عبدالرحمن الصائغ | Dr. Abdulrahman AlSaigh",
    title:
      "تواصل معنا - الدكتور عبدالرحمن الصائغ | Contact Us - Dr. Abdulrahman AlSaigh",
    description:
      "تواصل مع د. عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير في الرياض",
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
    url: "https://aalsaigh.com/contact",
    title:
      "تواصل معنا - الدكتور عبدالرحمن الصائغ | Contact Us - Dr. Abdulrahman AlSaigh",
    description:
      "تواصل مع د. عبدالرحمن الصائغ - استشاري جراحة السمنة والمناظير في الرياض",
    images: ["https://aalsaigh.com/images/cover.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Preloader />
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
