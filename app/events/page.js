'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

const events = [
  {day:'22',month:'March',type:'Panel · In Person · Melbourne',title:'The Insight Forum: Equity in Every Room',detail:'A curated evening of conversation, community, and cross-sector ideas. Doors 6pm.',badge:'Upcoming',badgeClass:'badge-upcoming'},
  {day:'05',month:'April',type:'Workshop · Online · Free',title:'Telling Your Story: A Narrative Workshop',detail:'Learn how to articulate your journey with clarity and confidence. Limited to 30 participants.',badge:'Registering',badgeClass:'badge-open'},
  {day:'18',month:'April',type:'Fireside Chat · Online',title:'In Conversation: Danai Harawa on Design, Community & Building You\'re Insight',detail:'A deep-dive with our founder and current Spotlight feature. Open Q&A to close.',badge:'Registering',badgeClass:'badge-open'},
  {day:'10',month:'May',type:'Networking · In Person · Melbourne',title:"You're Insight Community Mixer — Vol. 01",detail:'Our first community evening. Meet the people behind the platform and each other.',badge:'Sold Out',badgeClass:'badge-full'},
]

export default function Events() {
  const [modal, setModal] = useState(null)
  return (
    <>
      <Nav onContactOpen={() => setModal('contact')} />
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      <div className="page-wrapper">
        <div className="sec-header">
          <div>
            <div className="sec-eyebrow">Calendar</div>
            <h2 className="sec-title">Events & <em>Gatherings</em></h2>
          </div>
          <button className="sec-link" onClick={() => setModal('contact')}>Get notified of new events →</button>
        </div>

        <div className="events-layout">
          <div className="events-main">
            {events.map((e, i) => (
              <div key={i} className="event-row">
                <div>
                  <div className="event-day">{e.day}</div>
                  <div className="event-month">{e.month}</div>
                </div>
                <div>
                  <div className="event-type">{e.type}</div>
                  <div className="event-title">{e.title}</div>
                  <div className="event-detail">{e.detail}</div>
                </div>
                <div className={`event-badge ${e.badgeClass}`}>{e.badge}</div>
              </div>
            ))}
          </div>

          <div className="events-sidebar">
            <div className="sidebar-subscribe">
              <div className="sidebar-sub-title">Stay in the loop.</div>
              <div className="sidebar-sub-body">Get event announcements, new Spotlight releases, and community updates delivered to you.</div>
              <input className="sidebar-input" type="email" placeholder="your@email.com" />
              <button className="sidebar-btn">Subscribe</button>
            </div>
            <div className="sidebar-label">Browse by Topic</div>
            <div className="categories-list">
              {[
                ['Community & Equity','04'],['Entrepreneurship','03'],['Health & Science','02'],
                ['Technology','03'],['Arts & Culture','01'],['Policy & Advocacy','02'],
              ].map(([name, count]) => (
                <div key={name} className="cat-item">
                  <span className="cat-name">{name}</span>
                  <span className="cat-count">{count}</span>
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
