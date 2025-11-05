import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { ObjectId } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('BlogingBot');
    
    // Check if Admin collection exists and has the user
    let admin = await db.collection('Admin').findOne({ email });

    // If admin doesn't exist, create the default admin
    if (!admin) {
      const result = await db.collection('Admin').insertOne({
        email: 'captainx@gmail.com',
        password: 'Captainx2busyO', // In production, use hashed passwords
        createdAt: new Date()
      });
      
      // Check if the login matches the default admin
      if (email === 'captainx@gmail.com' && password === 'Captainx2busyO') {
        admin = await db.collection('Admin').findOne({ _id: result.insertedId });
      }
    }

    // Verify credentials
    if (!admin || admin.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create session
    const sessionDoc = {
      userId: admin._id,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    };

    const result = await db.collection('Sessions').insertOne(sessionDoc);
    const sessionId = result.insertedId.toString();

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      admin: { email: admin.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
