import CategoryNews from './CategoryNews';

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

interface CategoryNewsWrapperProps {
  categorySlug: string;
  currentPage?: number;
}

async function getCategoryNews(categorySlug: string, page: number = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const postsRes = await fetch(
      `${baseUrl}/api/posts?categorySlug=${categorySlug}&page=${page}&limit=12`,
      { cache: 'no-store' }
    );
    const postsData = await postsRes.json();

    return {
      posts: postsData.success ? postsData.posts : [],
      pagination: postsData.pagination || null
    };
  } catch (error) {
    console.error('Error fetching category news:', error);
    return { posts: [], pagination: null };
  }
}

export default async function CategoryNewsWrapper({ categorySlug, currentPage = 1 }: CategoryNewsWrapperProps) {
  const { posts, pagination } = await getCategoryNews(categorySlug, currentPage);

  return <CategoryNews posts={posts} pagination={pagination} currentPage={currentPage} categorySlug={categorySlug} />;
}
