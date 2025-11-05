import NewsSection from './NewsSection';

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

async function getNewsData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    // Fetch categories
    const categoriesRes = await fetch(`${baseUrl}/api/categories`, {
      cache: 'no-store'
    });
    const categoriesData = await categoriesRes.json();

    if (!categoriesData.success || categoriesData.data.length === 0) {
      return { posts: [], breakingNews: [] };
    }

    // Get first category by sequence
    const firstCategory = categoriesData.data.sort((a: Category, b: Category) => a.sequence - b.sequence)[0];

    // Fetch posts for that category and breaking news in parallel
    const [postsRes, breakingNewsRes] = await Promise.all([
      fetch(
        `${baseUrl}/api/posts?categorySlug=${firstCategory.slug}&page=1&limit=4`,
        { cache: 'no-store' }
      ),
      fetch(
        `${baseUrl}/api/posts?page=1&limit=5`,
        { cache: 'no-store' }
      )
    ]);

    const postsData = await postsRes.json();
    const breakingNewsData = await breakingNewsRes.json();

    return {
      posts: postsData.success ? postsData.posts : [],
      breakingNews: breakingNewsData.success ? breakingNewsData.posts : []
    };
  } catch (error) {
    console.error('Error fetching news data:', error);
    return { posts: [], breakingNews: [] };
  }
}

export default async function NewsSectionWrapper() {
  const { posts, breakingNews } = await getNewsData();

  return <NewsSection posts={posts} breakingNews={breakingNews} />;
}
