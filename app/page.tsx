import NavbarWrapper from './components/NavbarWrapper';
import NewsSectionWrapper from './components/NewsSectionWrapper';
import MainNewsGridWrapper from './components/MainNewsGridWrapper';
import BusinessNewsCarouselWrapper from './components/BusinessNewsCarouselWrapper';
import PoliticsScienceSectionWrapper from './components/PoliticsScienceSectionWrapper';
import SportsNewsCarouselWrapper from './components/SportsNewsCarouselWrapper';
import LatestNewsWrapper from './components/LatestNewsWrapper';
import Footer from './components/FooterWrapper';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }} suppressHydrationWarning>
      <NavbarWrapper />
      <NewsSectionWrapper />
      <MainNewsGridWrapper />
      <BusinessNewsCarouselWrapper />
      <PoliticsScienceSectionWrapper />
      <SportsNewsCarouselWrapper />
      <LatestNewsWrapper currentPage={1} />
      <Footer />
    </div>
  );
}
