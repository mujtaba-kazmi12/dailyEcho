import PostDetail from './PostDetail';

interface Post {
  _id: string;
  postId: string;
  slug: string;
  blogContent: {
    title: string;
    content?: string;
    metaDescription?: string;
    keywords?: string;
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

async function getPostDetail(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const postRes = await fetch(
      `${baseUrl}/api/posts?slug=${slug}`,
      { 
        next: { revalidate: 300 } // Cache for 5 minutes - posts don't change often
      }
    );
    const postData = await postRes.json();

    // Fetch related posts from the same category
    let relatedPosts = [];
    if (postData.success && postData.post) {
      const relatedRes = await fetch(
        `${baseUrl}/api/posts?categorySlug=${postData.post.categorySlug}&page=1&limit=4`,
        { 
          next: { revalidate: 60 } // Cache for 1 minute
        }
      );
      const relatedData = await relatedRes.json();
      relatedPosts = relatedData.success ? relatedData.posts.filter((p: Post) => p.slug !== slug).slice(0, 3) : [];
    }

    return {
      post: postData.success ? postData.post : null,
      relatedPosts
    };
  } catch (error) {
    console.error('Error fetching post detail:', error);
    return { post: null, relatedPosts: [] };
  }
}

export default async function PostDetailWrapper({ postSlug }: { postSlug: string }) {
  const { post, relatedPosts } = await getPostDetail(postSlug);

  if (!post) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-12 text-white">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  return <PostDetail post={post} relatedPosts={relatedPosts} />;
}
