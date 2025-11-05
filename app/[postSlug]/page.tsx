import NavbarWrapper from '../components/NavbarWrapper';
import PostDetailWrapper from '../components/PostDetailWrapper';
import Footer from '../components/FooterWrapper';
import { Metadata } from 'next';

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

async function getPost(slug: string): Promise<Post | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
  
  try {
    const postRes = await fetch(
      `${baseUrl}/api/posts?slug=${slug}`,
      { cache: 'no-store' }
    );
    const postData = await postRes.json();
    return postData.success ? postData.post : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ postSlug: string }> }
): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await getPost(postSlug);

  if (!post) {
    return {
      title: 'Post Not Found | DailyEcho',
      description: 'The requested post could not be found.'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

  const metadata: Metadata = {
    title: post.blogContent.title || 'DailyEcho',
    description: post.blogContent.metaDescription || post.blogContent.title,
    keywords: post.blogContent.keywords || '',
    openGraph: {
      title: post.blogContent.title,
      description: post.blogContent.metaDescription || post.blogContent.title,
      type: 'article',
      url: `${baseUrl}/${post.slug}`,
      images: post.firebaseImages && post.firebaseImages.length > 0 ? [
        {
          url: post.firebaseImages[0].url,
          alt: post.firebaseImages[0].alt || post.blogContent.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.blogContent.title,
      description: post.blogContent.metaDescription || post.blogContent.title,
      images: post.firebaseImages && post.firebaseImages.length > 0 ? [post.firebaseImages[0].url] : [],
    },
  };

  return metadata;
}

export default async function PostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  // Await params in Next.js 16
  const { postSlug } = await params;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }} suppressHydrationWarning>
      <NavbarWrapper />
      <PostDetailWrapper postSlug={postSlug} />
      <Footer />
    </div>
  );
}
