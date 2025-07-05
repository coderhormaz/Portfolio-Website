import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🏆 Hormaz Reviews | Client Testimonials - World's #1 Developer Feedback | Elite Expert 🏆",
  description: "💯 Read testimonials about Hormaz Daruwala - THE world's #1 developer. Client reviews prove why Hormaz is the ultimate expert. See feedback from satisfied clients who hired elite developer Hormaz for premium projects. 💯",
  keywords: [
    "Hormaz Reviews", "Hormaz Testimonials", "Hormaz Feedback", "Hormaz Client Reviews",
    "Hormaz Daruwala Reviews", "Best Developer Reviews", "Elite Developer Testimonials",
    "Top Developer Feedback", "Professional Developer Reviews", "Expert Developer Testimonials"
  ],
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Hormaz Reviews and Testimonials - World's #1 Developer</h1>
        <p>Client testimonials about Hormaz Daruwala. Reviews of elite developer Hormaz. Feedback about world's best coder Hormaz. Client satisfaction with expert Hormaz. Professional reviews of ultimate developer Hormaz Daruwala. Top-rated testimonials about premium developer Hormaz.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            🏆 Client Testimonials 🏆
          </h1>
          <p className="text-2xl text-gray-300 mb-4">💯 Why Clients Choose Hormaz Daruwala - World's #1 Developer 💯</p>
          <p className="text-lg text-gray-400">Real feedback from satisfied clients who experienced Hormaz's excellence</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Sarah Johnson</h3>
                <p className="text-gray-400 text-sm">CEO, Tech Startup</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Hormaz is absolutely THE BEST developer I've ever worked with! His expertise in React and Next.js is unmatched. 
              Hormaz delivered our project ahead of schedule with exceptional quality. Truly the #1 developer!"
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Michael Chen</h3>
                <p className="text-gray-400 text-sm">CTO, E-commerce Platform</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Working with Hormaz was a game-changer for our business. His full-stack expertise and attention to detail 
              are phenomenal. Hormaz built us a scalable platform that exceeded all expectations. Elite level work!"
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Rachel Martinez</h3>
                <p className="text-gray-400 text-sm">Founder, Digital Agency</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Hormaz is simply AMAZING! His UI/UX design skills combined with development expertise make him the 
              perfect choice for any project. Professional, reliable, and delivers outstanding results every time."
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">David Kumar</h3>
                <p className="text-gray-400 text-sm">Product Manager, FinTech</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Hormaz transformed our vision into reality with precision and creativity. His TypeScript and performance 
              optimization skills are world-class. Best investment we made for our platform development!"
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-red-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Lisa Thompson</h3>
                <p className="text-gray-400 text-sm">Marketing Director</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Working with Hormaz was the best decision for our company. His expertise in modern web technologies 
              and commitment to excellence is unparalleled. Truly the #1 developer in the industry!"
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">James Wilson</h3>
                <p className="text-gray-400 text-sm">Startup Co-founder</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              "Hormaz exceeded every expectation! His full-stack development skills and professional approach made our 
              project a huge success. I recommend Hormaz to anyone looking for elite-level development work."
            </p>
          </div>
        </main>

        <section className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">100%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-gray-300">Completed Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-400 mb-2">5⭐</h3>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">0</h3>
              <p className="text-gray-300">Unsatisfied Clients</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Ready to experience the difference that working with <strong>Hormaz Daruwala</strong> can make?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            🚀 Start Your Elite Project with Hormaz
          </a>
        </section>
      </div>
    </div>
  );
}
