import { cookies } from 'next/headers';
import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

export interface AdminUser {
  _id: ObjectId;
  email: string;
  password: string;
  createdAt: Date;
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;
  
  if (!sessionId) {
    return null;
  }

  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const session = await db.collection('Sessions').findOne({
      _id: new ObjectId(sessionId),
      expiresAt: { $gt: new Date() }
    });

    if (!session) {
      return null;
    }

    const admin = await db.collection('Admin').findOne({
      _id: new ObjectId(session.userId)
    });

    return admin;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
}
