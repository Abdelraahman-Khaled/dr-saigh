import { getBlogs } from '@/api/blog';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollingTicker from './components/ScrollingTicker';
import About from './components/About';
import Services from './components/Services';
import BMICalculator from './components/BMICalculator';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ClientScripts from './components/ClientScripts';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let initialBlogs = [];
  try {
    initialBlogs = (await getBlogs()) || [];
  } catch (err) {
    console.error('Error fetching blogs for home:', err);
  }

  // Only show first 3 blogs on home page
  const homeBlogs = initialBlogs.slice(0, 3);

  return (
    <>
      <Preloader />
      <Header />
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
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
