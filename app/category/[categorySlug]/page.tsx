import NavbarWrapper from '../../components/NavbarWrapper';
import CategoryNewsWrapper from '../../components/CategoryNewsWrapper';
import Footer from '../../components/FooterWrapper';
import { Metadata } from 'next';

interface CategorySeoData {
  title?: string;
  keywords?: string;
  description?: string;
  authors?: string;
}

async function getCategorySeo(categorySlug: string): Promise<CategorySeoData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/seo/category?categorySlug=${categorySlug}`, { cache: 'no-store' });
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching category SEO:', error);
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ categorySlug: string }> }
): Promise<Metadata> {
  const { categorySlug } = await params;
  const seoData = await getCategorySeo(categorySlug);

  if (!seoData) {
    return {
      title: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} | DailyEcho`,
      description: `Latest news and updates in ${categorySlug}`
    };
  }

  const metadata: Metadata = {
    title: seoData.title || `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} | DailyEcho`,
    description: seoData.description || `Latest news and updates in ${categorySlug}`,
    keywords: seoData.keywords || '',
    authors: seoData.authors ? [{ name: seoData.authors }] : undefined,
  };

  return metadata;
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  // Await params in Next.js 16
  const { categorySlug } = await params;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }} suppressHydrationWarning>
      <NavbarWrapper />
      <CategoryNewsWrapper categorySlug={categorySlug} currentPage={1} />
      <Footer />
    </div>
  );
}
