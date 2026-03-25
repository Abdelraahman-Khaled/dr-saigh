import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollingTicker from "./components/ScrollingTicker";
import About from "./components/About";
import Services from "./components/Services";
import BMICalculator from "./components/BMICalculator";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ClientScripts from "./components/ClientScripts";
import { getBlogs } from "@/api/blog";
import { headers, cookies } from "next/headers";

export async function generateMetadata() {
  const headersList = await headers();
  const currentPath = headersList.get("x-current-path") || "/ar";
  const cookieStore = await cookies();
  const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

  // Build the relative path without the language prefix for hreflang construction
  const strippedPath = currentPath.replace(/^\/(ar|en)/, "") || "";

  return {
    alternates: {
      canonical: `https://aalsaigh.com${currentPath}`,
      languages: {
        ar: `https://aalsaigh.com/ar${strippedPath}`,
        en: `https://aalsaigh.com/en${strippedPath}`,
        "x-default": `https://aalsaigh.com/ar${strippedPath}`,
      },
    },
  };
}

export const dynamic = "force-dynamic";

export default async function Home() {
  let initialBlogs = [];
  try {
    initialBlogs = (await getBlogs()) || [];
  } catch (err) {
    console.error("Error fetching blogs for home:", err);
  }

  // Only show first 3 blogs on home page
  const homeBlogs = initialBlogs.reverse().slice(0, 3);

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <ScrollingTicker />
        <About />
        <Services />
        <BMICalculator />
        <WhyChooseUs />
        <FAQ />
        <Blog initialBlogs={homeBlogs} />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
