import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    
    const seoData = await db.collection('Seo').findOne({ type: 'global' });

    return NextResponse.json({
      success: true,
      data: seoData || null
    });
  } catch (error) {
    console.error('Error fetching SEO data:', error);
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
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImageUrl,
      twitterCardType,
      twitterTitle,
      twitterDescription,
      twitterImageUrl,
      robotsDirective
    } = body;

    const client = await clientPromise;
    const db = client.db('BlogingBot');

    const seoDoc = {
      type: 'global',
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImageUrl,
      twitterCardType,
      twitterTitle,
      twitterDescription,
      twitterImageUrl,
      robotsDirective,
      updatedAt: new Date()
    };

    const result = await db.collection('Seo').updateOne(
      { type: 'global' },
      { $set: seoDoc },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: 'SEO data saved successfully',
      data: seoDoc
    });
  } catch (error: any) {
    console.error('Error saving SEO data:', error);
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
