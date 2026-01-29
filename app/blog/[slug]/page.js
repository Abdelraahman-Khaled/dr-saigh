import { getBlogDetails } from '@/api/blog';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import BlogHero from './components/BlogHero';
import BlogContent from './components/BlogContent';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import ClientScripts from '../../components/ClientScripts';

export const dynamic = 'force-dynamic';

// Helper to fetch data with resilient slug handling
async function getBlog(slug) {
    try {
        // 1. Try with the original slug
        let data = await getBlogDetails(slug);

        if (data && data.id) return data;

        // 2. If it has hyphens, try replacing them with spaces
        if (slug.includes('-')) {
            const spaceSlug = slug.replace(/-/g, ' ');
            data = await getBlogDetails(spaceSlug);

            if (data && data.id) return data;
        }

        // 3. If it has spaces, try replacing them with hyphens
        if (slug.includes(' ')) {
            const hyphenSlug = slug.replace(/ /g, '-');
            data = await getBlogDetails(hyphenSlug);

            if (data && data.id) return data;
        }

        return null;
    } catch (error) {
        console.error(`Error fetching blog "${slug}":`, error.message);
        return null;
    }
}



// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug: encodedSlug } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const blog = await getBlog(slug);

    if (!blog) return {};

    const cookieStore = await cookies();
    const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

    const title = language === 'ar'
        ? (blog.meta_title_ar || blog.title_ar)
        : (blog.meta_title_en || blog.title_en);

    const description = language === 'ar'
        ? (blog.meta_description_ar || blog.description_ar)
        : (blog.meta_description_en || blog.description_en);

    const keywords = language === 'ar'
        ? `${blog.title_ar || ''}, جراحة السمنة, الدكتور الصائغ, مقالات طبية`
        : `${blog.title_en || ''}, bariatric surgery, Dr. Alsaigh, medical articles`;

    const currentSlug = language === 'ar' ? (blog.slug_ar || blog.slug) : (blog.slug_en || blog.slug);

    return {
        title: `Dr. Alsaigh | ${title}`,
        description,
        keywords,
        icons: {
            icon: '/images/icons/favicon.ico',
            shortcut: '/images/icons/favicon.ico',
        },
        openGraph: {
            type: "article",
            url: `https://aalsaigh.com/blog/${currentSlug}`,
            title: `Dr. Alsaigh | ${title}`,
            description,
            images: blog.photo_url ? [blog.photo_url] : ["/images/icons/favicon.ico"],
        },
        twitter: {
            card: "summary_large_image",
            url: `https://aalsaigh.com/blog/${currentSlug}`,
            title: `Dr. Alsaigh | ${title}`,
            description,
            images: blog.photo_url ? [blog.photo_url] : ["/images/icons/favicon.ico"],
        },
        alternates: {
            canonical: `/blog/${currentSlug}`,
            languages: {
                ar: `/blog/${blog.slug_ar || blog.slug}`,
                en: `/blog/${blog.slug_en || blog.slug}`,
            }
        }
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug: encodedSlug } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const blog = await getBlog(slug);
    const cookieStore = await cookies();
    const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

    if (!blog) notFound();

    return (
        <>
            <Preloader />
            <Header />
            <BlogHero
                title={language === 'ar' ? (blog.title_ar || blog.title) : (blog.title_en || blog.title || blog.title_ar)}
                author={language === 'ar' ? "د. عبدالرحمن الصائغ" : "Dr. Alsaigh"}
                date={blog.created_at}
            />
            <BlogContent blog={blog} />
            <Footer />
            <WhatsAppButton />
            <ClientScripts />
        </>
    );
}
