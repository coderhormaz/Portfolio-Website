import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default async function AppleTouchIcon() {
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
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
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
