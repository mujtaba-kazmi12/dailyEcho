import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import MainNewsGrid from './components/MainNewsGrid';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <Navbar />
      <NewsSection />
      <MainNewsGrid />
    </div>
  );
}
