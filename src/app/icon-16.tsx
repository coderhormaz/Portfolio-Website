import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 16,
  height: 16,
}
export const contentType = 'image/png'

export default async function SmallIcon() {
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
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui',
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
