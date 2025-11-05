import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get('categorySlug');

    const client = await clientPromise;
    const db = client.db('BlogingBot');
    
    if (categorySlug) {
      // Get specific category SEO
      const seoData = await db.collection('Seo').findOne({ 
        type: 'category',
        categorySlug 
      });
      
      return NextResponse.json({
        success: true,
        data: seoData || null
      });
    } else {
      // Get all category SEO
      const seoData = await db.collection('Seo').find({ 
        type: 'category'
      }).toArray();
      
      return NextResponse.json({
        success: true,
        data: seoData
      });
    }
  } catch (error) {
    console.error('Error fetching category SEO data:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const {
      categorySlug,
      title,
      keywords,
      description,
      authors
    } = body;

    if (!categorySlug) {
      return NextResponse.json(
        { success: false, message: 'Category slug is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('BlogingBot');

    const seoDoc = {
      type: 'category',
      categorySlug,
      title,
      keywords,
      description,
      authors,
      updatedAt: new Date()
    };

    await db.collection('Seo').updateOne(
      { type: 'category', categorySlug },
      { $set: seoDoc },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Category SEO data saved successfully',
      data: seoDoc
    });
  } catch (error: any) {
    console.error('Error saving category SEO data:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  return POST(request);
}
