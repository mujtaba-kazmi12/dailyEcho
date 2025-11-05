import NavbarWrapper from '../../components/NavbarWrapper';
import LatestNewsWrapper from '../../components/LatestNewsWrapper';
import Footer from '../../components/FooterWrapper';

export default async function PageRoute({ params }: { params: Promise<{ pageNumber: string }> }) {
  // Await params in Next.js 16
  const { pageNumber } = await params;
  
  // Extract page number from pageNumber (e.g., "2", "3", etc.)
  const currentPage = parseInt(pageNumber) || 1;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }} suppressHydrationWarning>
      <NavbarWrapper />
      <LatestNewsWrapper currentPage={currentPage} />
      <Footer />
    </div>
  );
}
