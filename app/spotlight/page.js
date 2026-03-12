'use client'
import { useState } from 'react'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

export default function Spotlight() {
  const [modal, setModal] = useState(null)
  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      <div className="page-wrapper">
        <div className="sec-header">
          <div>
            <div className="sec-eyebrow">Issue 01</div>
            <h2 className="sec-title">The <em>Spotlight</em></h2>
          </div>
          <button className="sec-link" onClick={() => setModal('spotlight')}>Submit a nomination →</button>
        </div>

        <div className="spotlight-grid">
          <div className="spotlight-featured">
            <Image src="/danai.jpeg" alt="Danai Harawa" fill style={{objectFit:'cover',objectPosition:'center top'}} />
            <div className="spotlight-featured-bg"></div>
            <div className="sf-label"><span className="sf-label-dot"></span>Featured Profile</div>
            <div className="sf-title">&ldquo;The intersection of design, community, and curiosity is where I live.&rdquo;</div>
            <div className="sf-name">Danai Harawa · UX Design & Community Building</div>
            <div style={{marginTop:'12px'}}>
              <div className="sf-tags">
                <span className="sf-tag">UX Design</span>
                <span className="sf-tag">Community</span>
                <span className="sf-tag">Tech</span>
              </div>
            </div>
          </div>

          <div className="spotlight-card">
            <div className="sc-issue">The Spotlight · Issue 01</div>
            <div className="sc-title">&ldquo;Building in public isn&apos;t vulnerability — it&apos;s strategy.&rdquo;</div>
            <div className="sc-meta">
              <span>Jordan Mwangi</span><span className="sc-meta-dot"></span>
              <span>Entrepreneurship</span><span className="sc-meta-dot"></span>
              <span>Technology</span>
            </div>
          </div>

          <div className="spotlight-card">
            <div className="sc-issue">The Spotlight · Issue 01</div>
            <div className="sc-title">&ldquo;Neuroscience taught me to listen to what the brain can&apos;t say out loud.&rdquo;</div>
            <div className="sc-meta">
              <span>Amara Nwosu</span><span className="sc-meta-dot"></span>
              <span>Neuroscience</span><span className="sc-meta-dot"></span>
              <span>Clinical Research</span>
            </div>
          </div>

          <div className="spotlight-card" style={{borderBottom:'none'}}>
            <div className="sc-issue">Coming Soon · Issue 02</div>
            <div className="sc-title" style={{color:'var(--ink-60)'}}>The next profile is waiting to be written. Could it be you?</div>
            <div className="sc-meta">
              <button onClick={() => setModal('spotlight')} style={{color:'var(--accent-deep)',fontWeight:500,background:'none',border:'none',cursor:'pointer',fontSize:'13px'}}>Submit a nomination →</button>
            </div>
          </div>
        </div>

        <Footer onContactOpen={() => setModal('contact')} />
      </div>
    </>
  )
}
