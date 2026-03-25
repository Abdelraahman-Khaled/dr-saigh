import { getBlogs } from "@/api/blog";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientScripts from "../components/ClientScripts";

export const dynamic = "force-dynamic";

import { headers, cookies } from "next/headers";

export async function generateMetadata() {
  const headersList = await headers();
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value || "ar";
  const currentPath = headersList.get("x-current-path") || `/${language}/blog`;
  const strippedPath = currentPath.replace(/^\/(ar|en)/, "") || "/blog";

  return {
    title: "المدونة - الدكتور عبدالرحمن الصائغ | Blog - Dr. Abdulrahman AlSaigh",
    description:
      "أحدث المقالات والنصائح الطبية من د. عبدالرحمن الصائغ حول جراحة السمنة والمناظير | Medical articles by Dr. AlSaigh",
    keywords:
      "مدونة طبية, medical blog, جراحة السمنة, bariatric surgery, نصائح طبية, medical advice, الدكتور الصائغ, Dr AlSaigh, مقالات طبية, medical articles",
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
      title:
        "المدونة - الدكتور عبدالرحمن الصائغ | Blog - Dr. Abdulrahman AlSaigh",
      description:
        "أحدث المقالات والنصائح الطبية من د. عبدالرحمن الصائغ حول جراحة السمنة والمناظير",
      images: [
        {
          url: "https://aalsaigh.com/images/cover.png",
          width: 1200,
          height: 630,
          alt: "Dr. Abdelrahman Alsaigh Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "المدونة - الدكتور عبدالرحمن الصائغ | Blog - Dr. Abdulrahman AlSaigh",
      description:
        "أحدث المقالات والنصائح الطبية من د. عبدالرحمن الصائغ حول جراحة السمنة والمناظير",
      images: ["https://aalsaigh.com/images/cover.png"],
    },
  };
}

export default async function BlogPage() {
  let initialBlogs = [];
  let error = null;

  try {
    initialBlogs = await getBlogs();
  } catch (err) {
    console.error("Error fetching blogs on server:", err);
    error = err.message || "Failed to fetch blogs";
  }

  return (
    <>
      <Preloader />
      <Header />
      <BlogHero />
      <BlogGrid initialBlogs={initialBlogs} initialError={error} />
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
