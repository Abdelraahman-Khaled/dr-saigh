import { getBlogDetails } from "@/api/blog";
import { cookies } from "next/headers";
import { redirect, permanentRedirect } from "next/navigation";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import BlogContent from "./components/BlogContent";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ClientScripts from "../../components/ClientScripts";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const dynamic = "force-dynamic";

// Helper to fetch data with resilient slug handling
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);

  if (!blog) return {};

  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  const title =
    language === "ar"
      ? blog.meta_title_ar || blog.title_ar
      : blog.meta_title_en || blog.title_en;

  const description =
    language === "ar"
      ? blog.meta_description_ar || blog.description_ar
      : blog.meta_description_en || blog.description_en;

  const keywords =
    language === "ar"
      ? `${blog.title_ar}, جراحة السمنة, الدكتور الصائغ, مقالات طبية`
      : `${blog.title_en}, bariatric surgery, Dr. Alsaigh, medical articles`;

  const safeSlugAr = blog.slug_ar || blog.slug;
  const safeSlugEn = blog.slug || blog.slug_ar;
  const currentSlug = language === "ar" ? safeSlugAr : safeSlugEn;

  const featuredPhoto =
    blog.photos?.find((p) => p.is_arabic === (language === "ar")) ||
    blog.photos?.[0];
  const photoUrl = featuredPhoto?.url || blog.photo_url;

  return {
    title: `${title}`,
    description,
    keywords,
    icons: {
      icon: "/images/icons/favicon.ico",
      shortcut: "/images/icons/favicon.ico",
    },
    openGraph: {
      type: "article",
      title: `${title}`,
      description,
      images: blog.photo_url ? [blog.photo_url] : ["/images/icons/favicon.ico"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title}`,
      description,
      images: blog.photo_url ? [blog.photo_url] : ["/images/icons/favicon.ico"],
    },
    alternates: {
      canonical: `https://aalsaigh.com/${language}/blog/${currentSlug}`,
      languages: {
        ar: `https://aalsaigh.com/ar/blog/${safeSlugAr}`,
        en: `https://aalsaigh.com/en/blog/${safeSlugEn}`,
        "x-default": `https://aalsaigh.com/ar/blog/${safeSlugAr}`,
      },
    },
  };
}

// Generate metadata for SEO
export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  const queryClient = new QueryClient();

  // Use getBlogDetails for prefetching
  await queryClient.prefetchQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogDetails(slug),
  });

  // Get the data from cache or fetch again if needed (usually it's in cache now)
  const blog = queryClient.getQueryData(["blog", slug]);

  if (!blog) redirect("/");

  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  const decodedSlug = decodeURIComponent(slug);

  // REDIRECTION LOGIC: Handle cross-language slug matches
  // If user enters an English slug while in Arabic context → Switch to English
  if (language === "ar" && decodedSlug === blog.slug) {
    permanentRedirect(`/en/blog/${blog.slug}`);
  }
  // If user enters an Arabic slug while in English context → Switch to Arabic
  if (language === "en" && decodedSlug === blog.slug_ar) {
    permanentRedirect(`/ar/blog/${blog.slug_ar}`);
  }

  // Same-language normalization (e.g. if slug is slightly different from canonical)
  if (language === "ar" && blog.slug_ar && decodedSlug !== blog.slug_ar) {
    permanentRedirect(`/ar/blog/${blog.slug_ar}`);
  } else if (language === "en" && blog.slug && decodedSlug !== blog.slug) {
    permanentRedirect(`/en/blog/${blog.slug}`);
  }

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Preloader />
        <Header />
        <main>
          <BlogContent slug={slug} initialBlog={blog} />
        </main>
        <Footer />
        <WhatsAppButton />
        <ClientScripts />
      </HydrationBoundary>
    </>
  );
}
