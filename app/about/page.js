'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

export default function About() {
  const [modal, setModal] = useState(null)
  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      <div className="page-wrapper">
        <div className="about-hero">
          <div className="about-left">
            <div className="about-eyebrow">Our Story</div>
            <h2 className="about-headline">Built on the belief that <em>every voice</em> deserves a platform.</h2>
            <p className="about-body">You&apos;re Insight began with a simple observation: <strong>the most important stories often go untold.</strong> The researchers, community leaders, entrepreneurs, and everyday people doing remarkable work rarely have a space that honours both the depth of their thinking and the warmth of their humanity.</p>
            <div className="about-divider"></div>
            <p className="about-body">We built this platform to change that. Community in spirit, intentional in standard — You&apos;re Insight is where rigorous storytelling meets genuine connection. We don&apos;t just profile people. We sit with them. We explore what drives them, what shaped them, and what they want to leave behind.</p>
            <div className="about-values">
              {[
                {num:'01', label:'Community First', text:'We centre the people, not the platform.'},
                {num:'02', label:'Representation', text:'Diverse voices. Authentic stories.'},
                {num:'03', label:'Programs with Purpose', text:'Every event and program is built to move people forward.'},
                {num:'04', label:'Depth Over Noise', text:'We trade virality for meaning.'},
              ].map(v => (
                <div key={v.num} className="about-val">
                  <div className="about-val-num">{v.num}</div>
                  <div className="about-val-label">{v.label}</div>
                  <div className="about-val-text">{v.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-bg"></div>
            <div className="about-manifesto">
              <div className="about-manifesto-label">Our Manifesto</div>
              <div className="about-manifesto-quote">The world doesn&apos;t need more noise. It needs more <em>connection</em>, more <em>programs that actually serve people</em>, and more spaces where remarkable people feel genuinely seen.</div>
            </div>
            <div className="about-pillars">
              {[
                {name:'The Spotlight', tag:'Long-form profiles'},
                {name:'Community Events', tag:'Live + digital'},
                {name:'Programs & Series', tag:'Themed programs'},
                {name:'Member Network', tag:'Networking & community'},
              ].map(p => (
                <div key={p.name} className="about-pillar">
                  <div className="about-pillar-name">{p.name}</div>
                  <div className="about-pillar-tag">{p.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer onContactOpen={() => setModal('contact')} />
      </div>
    </>
  )
}
