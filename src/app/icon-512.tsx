import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default async function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
          borderRadius: '50px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '240px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 4px 8px rgba(0,0,0,0.5)',
            letterSpacing: '-8px',
          }}
        >
          H
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
