import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Message Sent Successfully',
  description: 'Thank you for contacting Hormaz Daruwala. Your message has been received and you will receive a response soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Message Sent Successfully!
          </h1>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.
          </p>
          
          <div className="space-y-3 text-sm text-gray-400">
            <p>✅ Your message has been delivered</p>
            <p>✅ You should receive a confirmation email shortly</p>
            <p>✅ I'll respond to your inquiry soon</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Portfolio
          </a>
          
          <p className="text-xs text-gray-500">
            You can also reach me directly at{' '}
            <a 
              href="mailto:hormazdaruwala86@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              hormazdaruwala86@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
