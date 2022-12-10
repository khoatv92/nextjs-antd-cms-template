import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const signed = request.cookies.get('signed')?.value;
  const { pathname } = request.nextUrl;
  if (!signed && pathname !== '/' && !pathname.startsWith('/_next')) {
    request.nextUrl.searchParams.set('from', request.nextUrl.pathname);
    request.nextUrl.pathname = '/';
    return NextResponse.redirect(request.nextUrl);
  }
  return NextResponse.next();
}
