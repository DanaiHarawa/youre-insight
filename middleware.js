import { NextResponse } from 'next/server'

export function middleware(request) {
  const cookie = request.cookies.get('yi-access')
  
  // Allow access to the password page itself
  if (request.nextUrl.pathname === '/enter') {
    return NextResponse.next()
  }

  // If they have the cookie, let them through
  if (cookie?.value === 'granted') {
    return NextResponse.next()
  }

  // Otherwise redirect to password page
  return NextResponse.redirect(new URL('/enter', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)'],
}
