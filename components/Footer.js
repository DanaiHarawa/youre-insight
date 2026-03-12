'use client'
import Link from 'next/link'

export default function Footer({ onContactOpen }) {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">You&apos;re Insight</div>
          <div className="footer-tagline">A community platform redefining the 9-5 for Black professionals.</div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/spotlight">The Spotlight</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Get Involved</div>
          <ul className="footer-links">
            <li><a onClick={onContactOpen}>Contact Us</a></li>
            <li><Link href="/involved">Get Involved</Link></li>
            <li><Link href="/who">Who We Are</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><a>Instagram</a></li>
            <li><a>LinkedIn</a></li>
            <li><a>Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 You&apos;re Insight. All rights reserved.</div>
      </div>
    </footer>
  )
}
