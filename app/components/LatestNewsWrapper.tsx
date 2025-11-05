import LatestNews from './LatestNews';

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

interface LatestNewsWrapperProps {
  currentPage?: number;
}

async function getLatestNews(page: number = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const postsRes = await fetch(
      `${baseUrl}/api/posts?page=${page}&limit=12`,
      { cache: 'no-store' }
    );
    const postsData = await postsRes.json();

    return {
      posts: postsData.success ? postsData.posts : [],
      pagination: postsData.pagination || null
    };
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return { posts: [], pagination: null };
  }
}

export default async function LatestNewsWrapper({ currentPage = 1 }: LatestNewsWrapperProps) {
  const { posts, pagination } = await getLatestNews(currentPage);

  return <LatestNews posts={posts} pagination={pagination} currentPage={currentPage} />;
}
