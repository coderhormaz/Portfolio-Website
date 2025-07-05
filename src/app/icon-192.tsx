import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'

export default async function Icon192() {
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
          borderRadius: '20px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '-2px',
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
