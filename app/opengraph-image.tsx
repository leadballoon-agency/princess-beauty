import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'HIFU Huntingdon | Princess Beauty Studio | Non-Surgical Facelift'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #fdf2f2 0%, #ffffff 30%, #fef3e2 70%, #fdf2f2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4a5a5 0%, #c48888 100%)',
            opacity: 0.15,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4af37 0%, #c9a030 100%)',
            opacity: 0.12,
            display: 'flex',
          }}
        />

        {/* Top gold accent bar */}
        <div
          style={{
            width: '100%',
            height: 6,
            background: 'linear-gradient(90deg, #d4af37, #e8c84a, #d4af37)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            padding: '40px 60px 30px',
          }}
        >
          {/* Left column */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: 40,
            }}
          >
            {/* Brand badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 20px',
                  border: '2px solid #d4af37',
                  borderRadius: 50,
                  background: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#a66d6d',
                    letterSpacing: '0.5px',
                  }}
                >
                  Princess Beauty Studio
                </span>
              </div>
            </div>

            {/* Heading */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  color: '#1e293b',
                  lineHeight: 1.1,
                }}
              >
                HIFU
              </span>
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #d4a5a5, #a66d6d)',
                  backgroundClip: 'text',
                  color: '#a66d6d',
                  lineHeight: 1.1,
                }}
              >
                Huntingdon
              </span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 18,
                color: '#64748b',
                marginBottom: 28,
                lineHeight: 1.5,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Non-surgical facelift with the advanced</span>
              <span style={{ fontWeight: 700, color: '#a66d6d' }}>
                TA2 7D HIFU System
              </span>
            </div>

            {/* Google rating */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
              }}
            >
              <div style={{ display: 'flex', gap: 2 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#d4af37"
                  >
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>
                4.90
              </span>
              <span style={{ fontSize: 14, color: '#94a3b8' }}>
                · 31 Google Reviews
              </span>
            </div>
          </div>

          {/* Right column — Pricing cards */}
          <div
            style={{
              width: 380,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 20,
            }}
          >
            {/* Jawline card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'white',
                border: '2px solid #e8d5d5',
                borderRadius: 20,
                padding: '28px 32px',
                boxShadow: '0 4px 20px rgba(212, 165, 165, 0.15)',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: '#d4af37', letterSpacing: '1px', marginBottom: 8 }}>
                INTRO OFFER
              </span>
              <span style={{ fontSize: 44, fontWeight: 800, color: '#a66d6d' }}>
                £195
              </span>
              <span style={{ fontSize: 18, color: '#475569', fontWeight: 600 }}>
                Jawline HIFU
              </span>
            </div>

            {/* Full face card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #a66d6d, #8b5a5a)',
                borderRadius: 20,
                padding: '28px 32px',
                boxShadow: '0 4px 20px rgba(166, 109, 109, 0.3)',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: '#d4af37', letterSpacing: '1px', marginBottom: 8 }}>
                MOST POPULAR
              </span>
              <span style={{ fontSize: 44, fontWeight: 800, color: 'white' }}>
                £395
              </span>
              <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                Full Face & Neck
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 60px',
            background: 'linear-gradient(135deg, #a66d6d, #8b5a5a)',
          }}
        >
          <div style={{ display: 'flex', gap: 32 }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              No Downtime
            </span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>•</span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              Natural Results
            </span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>•</span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              Results Last 2+ Years
            </span>
          </div>
          <span style={{ fontSize: 14, color: '#d4af37', fontWeight: 700, letterSpacing: '0.5px' }}>
            hifuhuntingdon.co.uk
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
