import { getOperations } from "@/api/operations";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import OperationsHero from "./components/OperationsHero";
import OperationsGrid from "./components/OperationsGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientScripts from "../components/ClientScripts";

export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "العمليات - الدكتور عبدالرحمن الصائغ | Operations - Dr. Abdulrahman AlSaigh",
  description:
    "تعرف على أنواع عمليات السمنة والمناظير التي يجريها د. عبدالرحمن الصائغ | Learn about bariatric and laparoscopic operations performed by Dr. AlSaigh",
  keywords:
    "عمليات السمنة, bariatric surgery, تكميم المعدة, gastric sleeve, تحويل مسار, bypass, الدكتور الصائغ, Dr AlSaigh, جراحة المناظير, laparoscopic surgery",
  openGraph: {
    type: "website",
    title:
      "العمليات - الدكتور عبدالرحمن الصائغ | Operations - Dr. Abdulrahman AlSaigh",
    description:
      "تعرف على أنواع عمليات السمنة والمناظير التي يجريها د. عبدالرحمن الصائغ",
    images: [
      {
        url: "https://aalsaigh.com/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Dr. Abdelrahman Alsaigh Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "العمليات - الدكتور عبدالرحمن الصائغ | Operations - Dr. Abdulrahman AlSaigh",
    description:
      "تعرف على أنواع عمليات السمنة والمناظير التي يجريها د. عبدالرحمن الصائغ",
    images: ["https://aalsaigh.com/images/cover.png"],
  },
};

export default async function OperationsPage() {
  let initialOperations = [];
  let error = null;

  try {
    initialOperations = await getOperations();
  } catch (err) {
    console.error("Error fetching operations on server:", err);
    error = err.message || "Failed to fetch operations";
  }

  return (
    <>
      <Preloader />
      <Header />
      <OperationsHero />
      <OperationsGrid
        initialOperations={initialOperations}
        initialError={error}
      />
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
