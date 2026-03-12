import { NextResponse } from 'next/server'

// Change this to whatever password you want
const PASSWORD = 'youreinsight2026'

export async function POST(request) {
  const { password } = await request.json()

  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('yi-access', 'granted', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    return response
  }

  return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
}
