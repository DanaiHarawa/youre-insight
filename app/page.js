'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default function Home() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}

      <div className="page-wrapper">
        {/* HERO */}
        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow fade-up">Vol. 01 — 2026</div>
            <h1 className="hero-headline fade-up delay-1">
              Where community<br />finds its <em>voice.</em>
            </h1>
            <p className="hero-sub fade-up delay-2">Stories, programs, and connections that matter.</p>
            <p className="hero-body fade-up delay-3">
              You&apos;re Insight is a community platform redefining the 9-5 for Black professionals, amplifying perspectives, achievements, and ideas through storytelling, programs, events, and networking that connects the thinkers, builders, and changemakers shaping tomorrow.
            </p>
            <div className="hero-actions fade-up delay-4">
              <Link href="/spotlight" className="btn-primary">Read the Spotlight</Link>
              <Link href="/about" className="btn-ghost">Our Story</Link>
            </div>
          </div>
          <div className="hero-right">
            <Image src="/danai.jpeg" alt="Danai Harawa" fill style={{objectFit:'cover',objectPosition:'center top',opacity:0.35}} priority />
            <div className="hero-right-bg" style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(26,26,24,0.3) 0%,rgba(26,26,24,0.7) 60%,rgba(26,26,24,0.95) 100%)',zIndex:1}}></div>
            <div className="hero-grid-lines"></div>
            <div className="hero-big-num">01</div>
            <div className="hero-right-content">
              <div className="hero-issue-label">Featured — The Spotlight</div>
              <div className="hero-issue-title">&ldquo;The intersection of design, community, and curiosity is where I live.&rdquo;</div>
              <div className="hero-issue-author">Danai Harawa · UX Design & Community Building</div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="hero-ticker">
          <div className="ticker-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{display:'flex',alignItems:'center'}}>
                <span className="ticker-item">The Spotlight<span className="ticker-dot"></span></span>
                <span className="ticker-item">Community Events<span className="ticker-dot"></span></span>
                <span className="ticker-item">Get Involved<span className="ticker-dot"></span></span>
                <span className="ticker-item">Voices & Perspectives<span className="ticker-dot"></span></span>
                <span className="ticker-item">Issue 01 — 2026<span className="ticker-dot"></span></span>
                <span className="ticker-item">Programs & Networking<span className="ticker-dot"></span></span>
              </span>
            ))}
          </div>
        </div>

        {/* TEASER GRID */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'1px solid var(--border)'}}>
          {[
            {href:'/spotlight', label:'The Spotlight', title:'In-depth profiles of people doing extraordinary things', cta:'Read profiles'},
            {href:'/events', label:'Events & Programs', title:'Programs, events, and networking that move people forward', cta:'View events & programs'},
            {href:'/involved', label:'Get Involved', title:'Contribute your voice, time, or expertise to the community', cta:'Join us'},
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{padding:'48px',borderRight: i < 2 ? '1px solid var(--border)' : 'none',cursor:'pointer',transition:'background .2s',textDecoration:'none',color:'var(--ink)',display:'block'}}
              onMouseEnter={e => e.currentTarget.style.background='var(--cream-dark)'}
              onMouseLeave={e => e.currentTarget.style.background=''}>
              <div className="sec-eyebrow" style={{marginBottom:'16px'}}>{item.label}</div>
              <div style={{fontFamily:'var(--serif)',fontSize:'22px',fontWeight:400,fontStyle:'italic',lineHeight:1.3,marginBottom:'12px'}}>{item.title}</div>
              <div style={{fontSize:'13px',color:'var(--ink-60)',fontWeight:300}}>{item.cta} →</div>
            </Link>
          ))}
        </div>

        <Footer onContactOpen={() => setModal('contact')} />
      </div>
    </>
  )
}
