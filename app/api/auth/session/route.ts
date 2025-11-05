import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      authenticated: true,
      admin: { email: session.email }
    });
  } catch (error) {
    console.error('Session error:', error);
    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 500 }
    );
  }
}
