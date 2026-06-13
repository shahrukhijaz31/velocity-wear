import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Admin: read a content setting by key (?key=products).
export async function GET(req) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const key = req.nextUrl.searchParams.get('key');
  if (!key) return NextResponse.json({ error: 'Missing key' }, { status: 400 });
  const row = await prisma.contentSetting.findUnique({ where: { key } });
  return NextResponse.json({ value: row?.value ?? null });
}

// Admin: save a content setting (JSON value).
export async function PUT(req) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { key, value } = await req.json();
    if (!key) return NextResponse.json({ error: 'Missing key' }, { status: 400 });
    let parsed = value;
    if (typeof value === 'string') {
      try {
        parsed = JSON.parse(value);
      } catch {
        return NextResponse.json({ error: 'Value must be valid JSON.' }, { status: 400 });
      }
    }
    await prisma.contentSetting.upsert({
      where: { key },
      update: { value: parsed },
      create: { key, value: parsed },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Could not save content.' }, { status: 500 });
  }
}
