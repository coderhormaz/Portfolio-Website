import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hormaz Daruwala - Full Stack Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// OG Image for Hormaz Daruwala Portfolio
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff08 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0000ff15 0%, transparent 50%)',
            opacity: 0.6,
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '60px',
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 20px 0',
              lineHeight: 1.1,
            }}
          >
            Hormaz Daruwala
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: '#e5e7eb',
              margin: '0 0 30px 0',
              fontWeight: '500',
            }}
          >
            Full-Stack Developer & UI/UX Designer
          </p>
          
          {/* Keywords */}
          <p
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              margin: '0',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            coderhormaz • React Expert • Next.js Specialist • TypeScript Developer
          </p>
          
          {/* Badge */}
          <div
            style={{
              marginTop: '40px',
              padding: '16px 32px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '50px',
              color: '#60a5fa',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            🚀 Creating Exceptional Digital Experiences
          </div>
        </div>
        
        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: '24px',
            color: '#6b7280',
            fontWeight: '500',
          }}
        >
          hormaz.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
