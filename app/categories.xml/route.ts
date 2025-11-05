import { NextResponse } from 'next/server';

interface Category {
  slug: string;
  updatedAt?: string;
  createdAt: string;
}

async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/categories`, {
      cache: 'no-store',
    });
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error);
    return [];
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  const categories = await getAllCategories();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${categories
    .map(
      (category) => `
  <url>
    <loc>${baseUrl}/category/${category.slug}</loc>
    <lastmod>${new Date(category.updatedAt || category.createdAt).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
