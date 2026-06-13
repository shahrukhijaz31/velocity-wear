import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public: save a quote / contact submission.
export async function POST(req) {
  try {
    const d = await req.json();
    const name = String(d.name || '').trim();
    const email = String(d.email || '').trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 });
    }
    await prisma.submission.create({
      data: {
        name,
        email,
        phone: d.phone ? String(d.phone).slice(0, 60) : null,
        company: d.company ? String(d.company).slice(0, 160) : null,
        productType: d.productType ? String(d.productType).slice(0, 80) : null,
        quantity: d.quantity ? String(d.quantity).slice(0, 40) : null,
        message: d.message ? String(d.message).slice(0, 4000) : null,
        source: d.source ? String(d.source).slice(0, 40) : 'quote',
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Could not save your request.' }, { status: 500 });
  }
}

// Admin: list submissions.
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const items = await prisma.submission.findMany({ orderBy: { createdAt: 'desc' }, take: 500 });
  return NextResponse.json({ items });
}
