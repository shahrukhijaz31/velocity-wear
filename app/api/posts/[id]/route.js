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

export async function PUT(req, { params }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const d = await req.json();
    const data = {};
    if (d.title !== undefined) data.title = String(d.title).trim();
    if (d.slug !== undefined) data.slug = slugify(d.slug);
    if (d.excerpt !== undefined) data.excerpt = d.excerpt || null;
    if (d.category !== undefined) data.category = d.category || null;
    if (d.body !== undefined) data.body = d.body || null;
    if (d.keywords !== undefined) data.keywords = d.keywords || null;
    if (d.readMins !== undefined) data.readMins = Number(d.readMins) || 5;
    if (d.published !== undefined) data.published = !!d.published;
    const post = await prisma.post.update({ where: { id: params.id }, data });
    return NextResponse.json({ ok: true, post });
  } catch (e) {
    const msg = e?.code === 'P2002' ? 'A post with that slug already exists.' : 'Could not update the post.';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

export async function DELETE(_req, { params }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await prisma.post.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
