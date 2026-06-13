import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// Admin: list all posts.
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const items = await prisma.post.findMany({ orderBy: { updatedAt: 'desc' } });
  return NextResponse.json({ items });
}

// Admin: create a post.
export async function POST(req) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const d = await req.json();
    const title = String(d.title || '').trim();
    if (!title) return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
    const slug = d.slug ? slugify(d.slug) : slugify(title);
    const post = await prisma.post.create({
      data: {
        slug,
        title,
        excerpt: d.excerpt || null,
        category: d.category || null,
        body: d.body || null,
        keywords: d.keywords || null,
        readMins: Number(d.readMins) || 5,
        published: !!d.published,
      },
    });
    return NextResponse.json({ ok: true, post });
  } catch (e) {
    const msg = e?.code === 'P2002' ? 'A post with that slug already exists.' : 'Could not create the post.';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
