import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import MapContact from '@/components/MapContact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-oak-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
        <Reviews />
        <Gallery />
        <MapContact />
      </main>
      <Footer />
    </div>
  );
}
