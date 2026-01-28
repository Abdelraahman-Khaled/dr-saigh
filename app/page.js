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

export default function Home() {
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
      <Blog />
      <Videos />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ClientScripts />
    </>
  );
}
