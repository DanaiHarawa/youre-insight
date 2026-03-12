'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

export default function Who() {
  const [modal, setModal] = useState(null)
  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      <div className="page-wrapper">
        <div className="sec-header">
          <div>
            <div className="sec-eyebrow">The People</div>
            <h2 className="sec-title">Who <em>we are</em></h2>
          </div>
          <p className="sec-desc">The team behind You&apos;re Insight — storytellers and community builders united by a belief in the power of authentic narrative.</p>
        </div>

        <div className="team-grid">
          <div className="team-founder">
            <div className="team-founder-info">
              <div className="team-avatar" style={{width:80,height:80,fontSize:28,marginBottom:24}}>D</div>
              <div className="founder-tag">Founder</div>
              <div style={{fontFamily:'var(--serif)',fontSize:28,fontWeight:400,marginBottom:6}}>Danai Harawa</div>
              <div className="team-role">Founder · Community Builder</div>
              <div className="team-bio" style={{maxWidth:320}}>A UX designer by profession and storyteller by nature. Danai launched You&apos;re Insight from a conviction that Black professionals redefining the 9-5 deserved a platform as thoughtful as they are.</div>
            </div>
            <div className="team-founder-extended">
              <div className="founder-pull">&ldquo;I wanted to create something that felt like a great conversation — one you replay in your head long after it&apos;s over.&rdquo;</div>
            </div>
          </div>

          {[
            {initial:'E', name:'Editorial Lead', role:'Content & Narrative', bio:'Shapes every story with a discerning eye. Believes the best interviews feel less like interviews and more like conversations.'},
            {initial:'C', name:'Community Director', role:'Events & Partnerships', bio:'Builds bridges between the platform and the people it serves. Transforms ideas into gatherings and gatherings into movements.'},
            {initial:'D', name:'Creative Director', role:'Design & Visual Identity', bio:'Ensures every visual element honours the depth of the stories we tell. Beauty and clarity, never one without the other.'},
          ].map(m => (
            <div key={m.initial} className="team-card">
              <div className="team-avatar">{m.initial}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-bio">{m.bio}</div>
            </div>
          ))}

          <div className="team-card" style={{background:'var(--ink)',borderRight:'none',gridColumn:'1/-1',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'48px 56px'}}>
            <div>
              <div style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'.16em',textTransform:'uppercase',color:'rgba(200,169,110,0.6)',marginBottom:16}}>We&apos;re growing</div>
              <div style={{fontFamily:'var(--serif)',fontSize:32,fontWeight:300,fontStyle:'italic',color:'var(--cream)',lineHeight:1.2}}>Interested in being<br/>part of this story?</div>
            </div>
            <button className="btn-primary" onClick={() => setModal('contact')} style={{borderColor:'var(--cream)',background:'transparent',color:'var(--cream)',flexShrink:0}}>Get In Touch</button>
          </div>
        </div>

        <Footer onContactOpen={() => setModal('contact')} />
      </div>
    </>
  )
}
