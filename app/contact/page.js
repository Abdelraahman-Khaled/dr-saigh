import Preloader from '../components/Preloader';
import Header from '../components/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import GoogleMap from './components/GoogleMap';
import ContactForm from './components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ClientScripts from '../components/ClientScripts';

export const metadata = {
    title: "تواصل معنا - الدكتور عبدالرحمن الصايغ",
    description: "تواصل مع الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير. نحن هنا للإجابة على استفساراتك وحجز موعدك. اتصل بنا على +966 552 200 258",
    keywords: "اتصل بنا, تواصل معنا, الدكتور الصايغ, جراحة السمنة الرياض, حجز موعد, استشارة طبية, عيادة جراحة السمنة",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "ar_SA",
        url: "https://aalsaigh.com/contact",
        siteName: "الدكتور عبدالرحمن الصايغ",
        title: "تواصل معنا - الدكتور عبدالرحمن الصايغ",
        description: "تواصل مع الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير. نحن هنا للإجابة على استفساراتك وحجز موعدك",
        images: [
            {
                url: "https://aalsaigh.com/images/cover.png",
                width: 1200,
                height: 630,
                alt: "Dr. Abdelrahman Alsaigh Contact"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        url: "https://aalsaigh.com/contact",
        title: "تواصل معنا - الدكتور عبدالرحمن الصايغ",
        description: "تواصل مع الدكتور عبدالرحمن الصايغ - استشاري جراحة السمنة والمناظير. نحن هنا للإجابة على استفساراتك وحجز موعدك",
        images: ["https://aalsaigh.com/images/cover.png"]
    }
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
