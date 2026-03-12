'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Enter() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setLoading(true)
    setError(false)

    const res = await fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1A1A18',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif",
      padding: '24px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px rgba(255,255,255,0.04) inset !important; -webkit-text-fill-color: #F7F5F0 !important; }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,169,110,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(200,169,110,0.04) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: '420px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '0',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '48px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: '#F7F5F0', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg viewBox="0 0 14 14" width="14" height="14" fill="#1A1A18"><circle cx="7" cy="7" r="5"/></svg>
          </div>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px', fontWeight: 500,
            color: '#F7F5F0', letterSpacing: '0.02em',
          }}>You&apos;re Insight</span>
        </div>

        {/* Card */}
        <div style={{
          width: '100%',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '6px',
          padding: '48px 40px',
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(200,169,110,0.6)',
            marginBottom: '16px',
          }}>Private Access</div>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '32px', fontWeight: 300, fontStyle: 'italic',
            color: '#F7F5F0', lineHeight: 1.2,
            marginBottom: '8px',
          }}>Enter to continue.</div>

          <div style={{
            fontSize: '13px', fontWeight: 300,
            color: 'rgba(247,245,240,0.4)',
            lineHeight: 1.7, marginBottom: '32px',
          }}>This site is currently in private preview. Enter the password to access.</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false); }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${error ? '#C8443A' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '3px',
                color: '#F7F5F0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                padding: '14px 16px',
                outline: 'none',
                transition: 'border-color .2s',
              }}
            />

            {error && (
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px', letterSpacing: '0.1em',
                color: '#C8443A',
              }}>Incorrect password. Try again.</div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || !password}
              style={{
                background: password && !loading ? '#C8A96E' : 'rgba(200,169,110,0.2)',
                color: password && !loading ? '#1A1A18' : 'rgba(200,169,110,0.4)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px',
                borderRadius: '3px', border: 'none',
                cursor: password && !loading ? 'pointer' : 'not-allowed',
                transition: 'all .2s',
              }}
            >
              {loading ? 'Checking...' : 'Enter'}
            </button>
          </div>
        </div>

        <div style={{
          marginTop: '24px',
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '0.1em',
          color: 'rgba(247,245,240,0.2)',
        }}>© 2026 You&apos;re Insight</div>
      </div>
    </div>
  )
}
