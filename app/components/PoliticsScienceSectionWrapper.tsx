import PoliticsScienceSection from './PoliticsScienceSection';
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

async function getPoliticsScienceData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const categories = await db
      .collection('Categories')
      .find({})
      .sort({ sequence: 1 })
      .toArray();

    // Get categories with sequence 6 and 7
    const politicsCategory = categories.find((cat: any) => cat.sequence === 6);
    const scienceCategory = categories.find((cat: any) => cat.sequence === 7);

    if (!politicsCategory || !scienceCategory) {
      return { politicsPosts: [], sciencePosts: [], politicsCategory: null, scienceCategory: null };
    }

    // Fetch posts for both categories in parallel
    const [politicsPostsRes, sciencePostsRes] = await Promise.all([
      fetch(`${baseUrl}/api/posts?categorySlug=${politicsCategory.slug}&page=1&limit=3`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/posts?categorySlug=${scienceCategory.slug}&page=1&limit=3`, { cache: 'no-store' })
    ]);

    const [politicsPostsData, sciencePostsData] = await Promise.all([
      politicsPostsRes.json(),
      sciencePostsRes.json()
    ]);

    return {
      politicsPosts: politicsPostsData.success ? politicsPostsData.posts : [],
      sciencePosts: sciencePostsData.success ? sciencePostsData.posts : [],
      politicsCategory: { name: politicsCategory.name, slug: politicsCategory.slug },
      scienceCategory: { name: scienceCategory.name, slug: scienceCategory.slug }
    };
  } catch (error) {
    console.error('Error fetching politics/science data:', error);
    return { politicsPosts: [], sciencePosts: [], politicsCategory: null, scienceCategory: null };
  }
}

export default async function PoliticsScienceSectionWrapper() {
  const { politicsPosts, sciencePosts, politicsCategory, scienceCategory } = await getPoliticsScienceData();

  return (
    <PoliticsScienceSection 
      politicsPosts={politicsPosts}
      sciencePosts={sciencePosts}
      politicsCategory={politicsCategory}
      scienceCategory={scienceCategory}
    />
  );
}
