'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav({ onContactOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="white"><circle cx="7" cy="7" r="5"/></svg>
          </div>
          You&apos;re Insight
        </Link>
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/who" className={`nav-link ${pathname === '/who' ? 'active' : ''}`}>Who We Are</Link>
          <Link href="/spotlight" className={`nav-link ${pathname === '/spotlight' ? 'active' : ''}`}>The Spotlight</Link>
          <Link href="/events" className={`nav-link ${pathname === '/events' ? 'active' : ''}`}>Events</Link>
          <Link href="/involved" className={`nav-link ${pathname === '/involved' ? 'active' : ''}`}>Get Involved</Link>
          <button className="nav-link nav-cta" onClick={onContactOpen}>Contact Us</button>
        </div>
      </nav>
    </>
  )
}
