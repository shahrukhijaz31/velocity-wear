import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const COOKIE = 'vw_admin';

async function isValid(token) {
  if (!token || !process.env.AUTH_SECRET) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.AUTH_SECRET), { algorithms: ['HS256'] });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Login page is always reachable.
  if (pathname === '/admin/login') return NextResponse.next();

  const token = req.cookies.get(COOKIE)?.value;
  if (!(await isValid(token))) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
