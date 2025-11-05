import { NextResponse } from 'next/server';

interface Post {
  slug: string;
  createdAt: string;
}

async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/posts?page=1&limit=1000`, {
      cache: 'no-store',
    });
    const data = await response.json();
    return data.success ? data.posts : [];
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    return [];
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  const posts = await getAllPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${new Date(post.createdAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
