import NavbarWrapper from './components/NavbarWrapper';
import NewsSection from './components/NewsSection';
import MainNewsGrid from './components/MainNewsGrid';
import BusinessNewsCarousel from './components/BusinessNewsCarousel';
import PoliticsScienceSection from './components/PoliticsScienceSection';
import SportsNewsCarousel from './components/Sprots';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <NavbarWrapper />
      <NewsSection />
      <MainNewsGrid />
      <BusinessNewsCarousel />
      <PoliticsScienceSection />
      <SportsNewsCarousel />
      <LatestNews />
      <Footer />
    </div>
  );
}
