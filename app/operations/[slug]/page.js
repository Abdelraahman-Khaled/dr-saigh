import { getOperationDetails } from "@/api/operations";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

  const currentSlug = language === "ar" ? operation.slug_ar : operation.slug;

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
      url: `https://aalsaigh.com/${language}/operations/${currentSlug}`,
      title: `Dr. Alsaigh | ${title}`,
      description,
      images: photoUrl ? [photoUrl] : ["/images/icons/favicon.ico"],
    },
    twitter: {
      card: "summary_large_image",
      url: `https://aalsaigh.com/${language}/operations/${currentSlug}`,
      title: `Dr. Alsaigh | ${title}`,
      description,
      images: photoUrl ? [photoUrl] : ["/images/icons/favicon.ico"],
    },
    alternates: {
      canonical: `https://aalsaigh.com/${language}/operations/${currentSlug}`,
      languages: {
        ar: `https://aalsaigh.com/ar/operations/${operation.slug_ar}`,
        en: `https://aalsaigh.com/en/operations/${operation.slug}`,
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
  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  if (!operation) redirect("/");

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
