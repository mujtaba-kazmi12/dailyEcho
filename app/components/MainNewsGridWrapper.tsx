import MainNewsGrid from './MainNewsGrid';
import clientPromise from '@/lib/mongodb';

interface Category {
  _id: string;
  name: string;
  slug: string;
  sequence: number;
}

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

async function getGridData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    // Fetch categories
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const categories = await db
      .collection('Categories')
      .find({})
      .sort({ sequence: 1 })
      .toArray();

    if (categories.length < 4) {
      return { leftPosts: [], centerPosts: [], rightPosts: [], leftCategory: null, centerCategory: null, rightCategory: null };
    }

    // Get categories by sequence (2, 3, 4)
    const leftCategory = categories.find((cat: any) => cat.sequence === 2);
    const centerCategory = categories.find((cat: any) => cat.sequence === 3);
    const rightCategory = categories.find((cat: any) => cat.sequence === 4);

    // Fetch posts for each category in parallel
    const [leftPostsRes, centerPostsRes, rightPostsRes] = await Promise.all([
      fetch(`${baseUrl}/api/posts?categorySlug=${leftCategory?.slug}&page=1&limit=6`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/posts?categorySlug=${centerCategory?.slug}&page=1&limit=4`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/posts?categorySlug=${rightCategory?.slug}&page=1&limit=6`, { cache: 'no-store' })
    ]);

    const [leftPostsData, centerPostsData, rightPostsData] = await Promise.all([
      leftPostsRes.json(),
      centerPostsRes.json(),
      rightPostsRes.json()
    ]);

    return {
      leftPosts: leftPostsData.success ? leftPostsData.posts : [],
      centerPosts: centerPostsData.success ? centerPostsData.posts : [],
      rightPosts: rightPostsData.success ? rightPostsData.posts : [],
      leftCategory: leftCategory ? { name: leftCategory.name, slug: leftCategory.slug } : null,
      centerCategory: centerCategory ? { name: centerCategory.name, slug: centerCategory.slug } : null,
      rightCategory: rightCategory ? { name: rightCategory.name, slug: rightCategory.slug } : null
    };
  } catch (error) {
    console.error('Error fetching grid data:', error);
    return { leftPosts: [], centerPosts: [], rightPosts: [], leftCategory: null, centerCategory: null, rightCategory: null };
  }
}

export default async function MainNewsGridWrapper() {
  const { leftPosts, centerPosts, rightPosts, leftCategory, centerCategory, rightCategory } = await getGridData();

  return (
    <MainNewsGrid 
      leftPosts={leftPosts}
      centerPosts={centerPosts}
      rightPosts={rightPosts}
      leftCategory={leftCategory}
      centerCategory={centerCategory}
      rightCategory={rightCategory}
    />
  );
}
