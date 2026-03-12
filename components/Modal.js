'use client'
import { useEffect, useState } from 'react'

const modals = {
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch with us.',
    body: 'We would love to hear from you. Drop us a message and we will get back to you shortly.',
    fields: ['Your Name', 'Email Address', 'How can we help?'],
    cta: 'Send Message'
  },
  spotlight: {
    eyebrow: 'The Spotlight',
    title: 'Nominate someone extraordinary.',
    body: 'Tell us about the person you have in mind. We read every submission personally and follow up with the ones that resonate.',
    fields: ['Your Name', "Nominee's Name", 'Why they deserve the Spotlight'],
    cta: 'Submit Nomination'
  },
  partner: {
    eyebrow: 'Partnerships',
    title: "Let's build something together.",
    body: 'We partner with organisations that share our values. Tell us who you are and what you have in mind.',
    fields: ['Your Name & Organisation', 'Email Address', 'What partnership looks like for you'],
    cta: 'Send Introduction'
  },
  write: {
    eyebrow: 'Contributions',
    title: 'Pitch your idea.',
    body: 'We welcome thoughtful perspectives from our community. A brief pitch is all we need to start the conversation.',
    fields: ['Your Name', 'Email Address', 'Your pitch (topic, angle, why now)'],
    cta: 'Send Pitch'
  }
}

export default function Modal({ type, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const m = modals[type]

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!m) return null

  return (
    <div className={`modal-overlay open`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-eyebrow">{m.eyebrow}</div>
        <div className="modal-title">{m.title}</div>
        <div className="modal-body">{m.body}</div>
        {submitted ? (
          <div style={{textAlign:'center',padding:'32px 0',fontFamily:'var(--serif)',fontSize:'22px',fontStyle:'italic',color:'var(--accent-deep)'}}>
            Thank you, we&apos;ll be in touch soon.
          </div>
        ) : (
          <div className="modal-form">
            {m.fields.map((f, i) => {
              const isTextarea = i === m.fields.length - 1 && m.fields.length > 2
              return isTextarea
                ? <textarea key={i} className="modal-input modal-textarea" placeholder={f} />
                : <input key={i} className="modal-input" type="text" placeholder={f} />
            })}
            <button className="modal-submit" onClick={() => setSubmitted(true)}>{m.cta}</button>
          </div>
        )}
      </div>
    </div>
  )
}
