import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const categorySlug = searchParams.get('categorySlug');
    const slug = searchParams.get('slug');

    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const postsCollection = db.collection('Posts');

    // If slug is provided, return single post
    if (slug) {
      const post = await postsCollection.findOne({ slug });
      
      if (!post) {
        return NextResponse.json(
          {
            success: false,
            error: 'Post not found'
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        post: {
          _id: post._id.toString(),
          postId: post.postId,
          slug: post.slug,
          blogContent: post.blogContent,
          firebaseImages: post.firebaseImages || [],
          categoryId: post.categoryId,
          categorySlug: post.categorySlug,
          createdAt: post.createdAt
        }
      });
    }

    // Build query filter
    const filter: any = {};
    if (categorySlug) {
      filter.categorySlug = categorySlug;
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Get total count for pagination
    const totalPosts = await postsCollection.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / limit);

    // Fetch posts with pagination
    const posts = await postsCollection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // Format response
    const formattedPosts = posts.map(post => ({
      _id: post._id.toString(),
      postId: post.postId,
      slug: post.slug,
      blogContent: post.blogContent,
      firebaseImages: post.firebaseImages || [],
      categoryId: post.categoryId,
      categorySlug: post.categorySlug,
      createdAt: post.createdAt
    }));

    return NextResponse.json({
      success: true,
      posts: formattedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch posts'
      },
      { status: 500 }
    );
  }
}
