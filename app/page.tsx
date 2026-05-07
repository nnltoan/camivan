import Nav from './components/Nav';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BeforeAfterSection from './components/BeforeAfterSection';
import About from './components/About';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WaFloat from './components/WaFloat';
import MobileFAM from './components/MobileFAM';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <BrandsMarquee />
      <Services />
      <Gallery />
      <BeforeAfterSection />
      <About />
      <Reviews />
      <Blog />
      <FAQ />
      <BookingForm />
      <CTA />
      <Footer />
      <WaFloat />
      <MobileFAM />
    </>
  );
}
