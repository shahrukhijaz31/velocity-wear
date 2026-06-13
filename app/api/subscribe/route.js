import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Admin: list subscribers.
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const items = await prisma.subscriber.findMany({ orderBy: { createdAt: 'desc' }, take: 1000 });
  return NextResponse.json({ items });
}

// Public: newsletter / email signup.
export async function POST(req) {
  try {
    const { email } = await req.json();
    const clean = String(email || '').toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }
    await prisma.subscriber.upsert({
      where: { email: clean },
      update: {},
      create: { email: clean, source: 'newsletter' },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Could not subscribe.' }, { status: 500 });
  }
}
