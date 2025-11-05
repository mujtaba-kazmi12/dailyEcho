import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('admin_session')?.value;

    if (sessionId) {
      const client = await clientPromise;
      const db = client.db('BlogingBot');
      
      // Delete session from database
      await db.collection('Sessions').deleteOne({
        _id: new ObjectId(sessionId)
      });
    }

    // Clear cookie
    cookieStore.delete('admin_session');

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
