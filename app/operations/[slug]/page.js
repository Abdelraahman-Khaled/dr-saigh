import { getOperationDetails } from "@/api/operations";
import { cookies } from "next/headers";
import { redirect, permanentRedirect } from "next/navigation";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import OperationsContent from "./components/OperationsContent";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ClientScripts from "../../components/ClientScripts";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const operation = await getOperationDetails(slug);

  if (!operation) return {};

  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  const title =
    language === "ar"
      ? operation.meta_title_ar || operation.title_ar
      : operation.meta_title_en || operation.title_en;

  const description =
    language === "ar"
      ? operation.meta_description_ar || operation.description_ar
      : operation.meta_description_en || operation.description_en;

  const keywords =
    language === "ar"
      ? `${operation.title_ar}, جراحة السمنة, الدكتور الصائغ, عمليات`
      : `${operation.title_en}, bariatric surgery, Dr. Alsaigh, operations`;

  const safeSlugAr = operation.slug_ar || operation.slug;
  const safeSlugEn = operation.slug || operation.slug_ar;
  const currentSlug = language === "ar" ? safeSlugAr : safeSlugEn;

  // Prefer a non-landing photo for OG image
  const featuredPhoto =
    operation.photos?.find((p) => p.is_landing === false) ||
    operation.photos?.[0];
  const photoUrl = featuredPhoto?.url;

  return {
    title: `Dr. Alsaigh | ${title}`,
    description,
    keywords,
    icons: {
      icon: "/images/icons/favicon.ico",
      shortcut: "/images/icons/favicon.ico",
    },
    openGraph: {
      type: "article",
      title: `Dr. Alsaigh | ${title}`,
      description,
      images: photoUrl ? [photoUrl] : ["/images/icons/favicon.ico"],
    },
    twitter: {
      card: "summary_large_image",
      title: `Dr. Alsaigh | ${title}`,
      description,
      images: photoUrl ? [photoUrl] : ["/images/icons/favicon.ico"],
    },
    alternates: {
      canonical: `https://aalsaigh.com/${language}/operations/${currentSlug}`,
      languages: {
        ar: `https://aalsaigh.com/ar/operations/${safeSlugAr}`,
        en: `https://aalsaigh.com/en/operations/${safeSlugEn}`,
        "x-default": `https://aalsaigh.com/ar/operations/${safeSlugAr}`,
      },
    },
  };
}

export default async function OperationDetailsPage({ params }) {
  const { slug } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["operation", slug],
    queryFn: () => getOperationDetails(slug),
  });

  const operation = queryClient.getQueryData(["operation", slug]);

  if (!operation) redirect("/");

  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  const decodedSlug = decodeURIComponent(slug);

  // REDIRECTION LOGIC: Handle cross-language slug matches
  // If user enters an English slug while in Arabic context → Switch to English
  if (language === 'ar' && decodedSlug === operation.slug) {
    permanentRedirect(`/en/operations/${operation.slug}`);
  }
  // If user enters an Arabic slug while in English context → Switch to Arabic
  if (language === 'en' && decodedSlug === operation.slug_ar) {
    permanentRedirect(`/ar/operations/${operation.slug_ar}`);
  }

  // Same-language normalization (e.g. if slug is slightly different from canonical)
  if (language === 'ar' && operation.slug_ar && decodedSlug !== operation.slug_ar) {
    permanentRedirect(`/ar/operations/${operation.slug_ar}`);
  } 
  if (language === 'en' && operation.slug && decodedSlug !== operation.slug) {
    permanentRedirect(`/en/operations/${operation.slug}`);
  }

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Preloader />
        <Header />
        <main>
          <OperationsContent slug={slug} initialOperation={operation} />
        </main>
        <Footer />
        <WhatsAppButton />
        <ClientScripts />
      </HydrationBoundary>
    </>
  );
}
