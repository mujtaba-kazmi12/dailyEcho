import BusinessNewsCarousel from './BusinessNewsCarousel';
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

async function getBusinessNews() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const categories = await db
      .collection('Categories')
      .find({})
      .sort({ sequence: 1 })
      .toArray();

    // Get category with sequence 5
    const businessCategory = categories.find((cat: any) => cat.sequence === 5);

    if (!businessCategory) {
      return { posts: [], category: null };
    }

    // Fetch posts for category sequence 5
    const postsRes = await fetch(
      `${baseUrl}/api/posts?categorySlug=${businessCategory.slug}&page=1&limit=6`,
      { cache: 'no-store' }
    );
    const postsData = await postsRes.json();

    return {
      posts: postsData.success ? postsData.posts : [],
      category: { name: businessCategory.name, slug: businessCategory.slug }
    };
  } catch (error) {
    console.error('Error fetching business news:', error);
    return { posts: [], category: null };
  }
}

export default async function BusinessNewsCarouselWrapper() {
  const { posts, category } = await getBusinessNews();

  return <BusinessNewsCarousel posts={posts} category={category} />;
}
