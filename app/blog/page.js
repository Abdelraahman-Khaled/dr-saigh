import Preloader from '../components/Preloader';
import Header from '../components/Header';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ClientScripts from '../components/ClientScripts';

export const metadata = {
    title: "المدونة - الدكتور عبدالرحمن الصايغ",
    description: "اطلع على أحدث المقالات والنصائح الطبية من الدكتور عبدالرحمن الصايغ حول جراحة السمنة والمناظير",
    keywords: "مدونة طبية, جراحة السمنة, نصائح طبية, الدكتور الصايغ, مقالات طبية, السمنة المفرطة, تكميم المعدة, تحويل مسار المعدة",
    openGraph: {
        type: "website",
        url: "https://aalsaigh.com/blog",
        title: "المدونة - الدكتور عبدالرحمن الصايغ",
        description: "اطلع على أحدث المقالات والنصائح الطبية من الدكتور عبدالرحمن الصايغ حول جراحة السمنة والمناظير",
        images: [
            {
                url: "https://aalsaigh.com/images/cover.png",
                width: 1200,
                height: 630,
                alt: "Dr. Abdelrahman Alsaigh Blog"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        url: "https://aalsaigh.com/blog",
        title: "المدونة - الدكتور عبدالرحمن الصايغ",
        description: "اطلع على أحدث المقالات والنصائح الطبية من الدكتور عبدالرحمن الصايغ حول جراحة السمنة والمناظير",
        images: ["https://aalsaigh.com/images/cover.png"]
    }
};

export default function BlogPage() {
    return (
        <>
            <Preloader />
            <Header />
            <BlogHero />
            <BlogGrid />
            <Footer />
            <WhatsAppButton />
            <ClientScripts />
        </>
    );
}
