import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <Navbar />
      <NewsSection />
    </div>
  );
}
