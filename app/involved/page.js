'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

const ways = [
  {num:'01', title:'Contact Us', body:"We'd love to hear from you. Whether you have a question, idea, or just want to connect — our door is always open.", cta:'Get in touch', modal:'contact'},
  {num:'02', title:'Nominate for the Spotlight', body:'Know someone whose story deserves to be told? Nominate them — or yourself. We read every submission personally.', cta:'Submit a nomination', modal:'spotlight'},
  {num:'03', title:'Partner With Us', body:'Align your organisation with authentic community storytelling. We work with partners who share our values.', cta:'Start a conversation', modal:'partner'},
  {num:'04', title:'Write for Us', body:'Have a perspective that needs a platform? We welcome thoughtful contributions from community members on topics that matter.', cta:'Pitch an idea', modal:'write'},
  {num:'05', title:'Host an Event', body:"Want to bring the You're Insight community together in your city or space? We'd love to support and co-create events.", cta:"Let's talk", modal:'partner'},
]

export default function Involved() {
  const [modal, setModal] = useState(null)
  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      <div className="page-wrapper">
        <div className="involved-intro">
          <div>
            <div style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--accent-deep)',marginBottom:20}}>Participate</div>
            <h2 className="involved-headline">This platform belongs to <em>all of us.</em></h2>
            <p className="involved-body">You&apos;re Insight is only as powerful as the community behind it. Whether you want to contribute a story, nominate someone for the Spotlight, host an event, or simply show up — there is a place here for you.</p>
          </div>
          <div>
            <div className="involved-stat"><div className="involved-stat-num">01</div><div className="involved-stat-label">Inaugural issue — and many more to come</div></div>
            <div className="involved-stat"><div className="involved-stat-num">∞</div><div className="involved-stat-label">Stories left to tell</div></div>
          </div>
        </div>

        <div className="ways-grid">
          {ways.map(w => (
            <div key={w.num} className="way-card">
              <div className="way-num">{w.num}</div>
              <div className="way-title">{w.title}</div>
              <div className="way-body">{w.body}</div>
              <button className="way-cta" onClick={() => setModal(w.modal)}>{w.cta}</button>
            </div>
          ))}
          <div className="way-card" style={{background:'var(--accent-pale)',borderColor:'rgba(200,169,110,0.3)'}}>
            <div style={{fontFamily:'var(--serif)',fontSize:28,fontWeight:300,fontStyle:'italic',color:'var(--accent-deep)',lineHeight:1.3,marginBottom:28}}>
              &ldquo;Every great community starts with someone saying — <em>I want this to exist.</em>&rdquo;
            </div>
            <button className="btn-primary" onClick={() => setModal('contact')}>Contact Us</button>
          </div>
        </div>

        <Footer onContactOpen={() => setModal('contact')} />
      </div>
    </>
  )
}
