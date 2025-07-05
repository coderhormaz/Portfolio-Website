import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
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
          borderRadius: '6px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
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
