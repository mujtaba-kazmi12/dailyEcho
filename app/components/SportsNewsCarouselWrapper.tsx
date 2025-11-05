import SportsNewsCarousel from './Sprots';
import clientPromise from '@/lib/mongodb';

interface Post {
  _id: string;
  postId: string;
  slug: string;
  blogContent: {
    title: string;
    content?: string;
    metaDescription?: string;
  };
  firebaseImages: Array<{
    url: string;
    title?: string;
    alt?: string;
  }>;
  categoryId: string;
  categorySlug: string;
  createdAt: string;
}

interface Category {
  name: string;
  slug: string;
}

async function getSportsNews() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const categories = await db
      .collection('Categories')
      .find({})
      .sort({ sequence: 1 })
      .toArray();

    // Get category with sequence 8
    const sportsCategory = categories.find((cat: any) => cat.sequence === 8);

    if (!sportsCategory) {
      return { posts: [], category: null };
    }

    // Fetch posts for category sequence 8
    const postsRes = await fetch(
      `${baseUrl}/api/posts?categorySlug=${sportsCategory.slug}&page=1&limit=6`,
      { cache: 'no-store' }
    );
    const postsData = await postsRes.json();

    return {
      posts: postsData.success ? postsData.posts : [],
      category: { name: sportsCategory.name, slug: sportsCategory.slug }
    };
  } catch (error) {
    console.error('Error fetching sports news:', error);
    return { posts: [], category: null };
  }
}

export default async function SportsNewsCarouselWrapper() {
  const { posts, category } = await getSportsNews();

  return <SportsNewsCarousel posts={posts} category={category} />;
}
