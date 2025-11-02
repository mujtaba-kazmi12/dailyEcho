import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import MainNewsGrid from './components/MainNewsGrid';
import BusinessNewsCarousel from './components/BusinessNewsCarousel';
import PoliticsScienceSection from './components/PoliticsScienceSection';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <Navbar />
      <NewsSection />
      <MainNewsGrid />
      <BusinessNewsCarousel />
      <PoliticsScienceSection />
    </div>
  );
}
