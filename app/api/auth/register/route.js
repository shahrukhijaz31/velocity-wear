import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import { SESSION_COOKIE, cookieOptions, getSession, signSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Bootstrap the first admin (when none exist), and lets an authenticated admin
// add more accounts afterwards.
export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    const cleanEmail = String(email || '').toLowerCase().trim();
    if (!cleanEmail || !password || String(password).length < 8) {
      return NextResponse.json({ error: 'A valid email and an 8+ character password are required.' }, { status: 400 });
    }

    const count = await prisma.adminUser.count();
    const isBootstrap = count === 0;

    // After the first admin exists, only an authenticated admin can add more.
    if (!isBootstrap) {
      const session = await getSession();
      if (!session) return NextResponse.json({ error: 'Not authorized.' }, { status: 403 });
    }

    const exists = await prisma.adminUser.findUnique({ where: { email: cleanEmail } });
    if (exists) return NextResponse.json({ error: 'An account with that email already exists.' }, { status: 409 });

    const user = await prisma.adminUser.create({
      data: { email: cleanEmail, name: name || null, password: await bcrypt.hash(password, 10) },
    });

    const res = NextResponse.json({ ok: true });
    // Auto-login the very first admin.
    if (isBootstrap) {
      const token = await signSession({ sub: user.id, email: user.email, name: user.name });
      res.cookies.set(SESSION_COOKIE, token, cookieOptions);
    }
    return res;
  } catch (e) {
    return NextResponse.json({ error: 'Could not create the account. Check the database connection.' }, { status: 500 });
  }
}
