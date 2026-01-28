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

    // Find the appropriate image for Open Graph
    const arabicImage = blog.photos?.find(photo => photo.is_arabic === true);
    const imageUrl = arabicImage?.url || blog.photos?.[0]?.url || 'https://aalsaigh.com/images/cover.png';

    // Get title and description based on language
    const title = language === 'ar'
        ? (blog.meta_title_ar || blog.title_ar)
        : (blog.meta_title_en || blog.title_en);

    // Get description from meta fields or extract from content
    const content = language === 'ar'
        ? (blog.contents?.[0]?.content_ar || '')
        : (blog.contents?.[0]?.content_en || '');
    const plainText = content.replace(/<[^>]*>/g, '');

    const description = language === 'ar'
        ? (blog.meta_description_ar || plainText.substring(0, 160) || blog.title_ar)
        : (blog.meta_description_en || plainText.substring(0, 160) || blog.title_en);

    const keywords = language === 'ar'
        ? `${blog.title_ar}, جراحة السمنة, الدكتور الصايغ, مقالات طبية`
        : `${blog.title_en}, bariatric surgery, Dr. Alsaigh, medical articles`;

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
            url: `https://aalsaigh.com/blog/${blog.slug_ar}`,
            title: `Dr. Alsaigh | ${title}`,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            url: `https://aalsaigh.com/blog/${blog.slug_ar}`,
            title: `Dr. Alsaigh | ${title}`,
            description,
            images: [imageUrl]
        },
        alternates: {
            canonical: `/blog/${blog.slug_ar}`,
            languages: {
                ar: `/blog/${blog.slug_ar}`,
                en: `/blog/${blog.slug_en || blog.slug_ar}`,
            }
        }
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug: encodedSlug } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const blog = await getBlog(slug);

    if (!blog) notFound();

    return (
        <>
            <Preloader />
            <Header />
            <BlogHero
                title={blog.title_ar}
                author="د. عبدالرحمن الصائغ"
                date={blog.created_at}
            />
            <BlogContent blog={blog} />
            <Footer />
            <WhatsAppButton />
            <ClientScripts />
        </>
    );
}
