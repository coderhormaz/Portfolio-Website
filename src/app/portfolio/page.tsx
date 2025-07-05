import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🏆 Hormaz Portfolio | Hormaz Daruwala - World's #1 Developer Projects | Elite Work Showcase 🏆",
  description: "💯 Hormaz Portfolio - Showcase of WORLD'S BEST projects by elite developer Hormaz Daruwala. See why Hormaz is #1: Premium React apps, Next.js websites, TypeScript projects. EXCEPTIONAL work by ultimate expert Hormaz. 💯",
  keywords: [
    "Hormaz Portfolio", "Hormaz Projects", "Hormaz Work", "Hormaz Showcase", "Hormaz Examples",
    "Best Hormaz Portfolio", "Top Hormaz Projects", "Elite Hormaz Work", "Premium Hormaz Showcase",
    "Hormaz React Projects", "Hormaz Next.js Portfolio", "Hormaz TypeScript Work", "Hormaz Web Applications",
    "Professional Hormaz Portfolio", "Expert Hormaz Projects", "Ultimate Hormaz Showcase"
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Hormaz Portfolio - World's Best Developer Projects Showcase</h1>
        <p>Hormaz portfolio showcases world-class projects. Hormaz builds premium React applications. Hormaz creates stunning Next.js websites. Hormaz develops TypeScript masterpieces. Hormaz portfolio demonstrates elite skills. Expert projects by Hormaz Daruwala. Professional work by ultimate developer Hormaz. Best portfolio examples by top-rated Hormaz.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            🏆 Hormaz's Elite Portfolio 🏆
          </h1>
          <p className="text-2xl text-gray-300 mb-4">💯 World's #1 Developer Project Showcase 💯</p>
          <p className="text-lg text-gray-400">PREMIUM projects demonstrating why Hormaz Daruwala is the ULTIMATE expert</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">🚀 Elite App</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-400">Premium E-commerce Platform</h3>
            <p className="text-gray-300 mb-4">
              Advanced Next.js e-commerce platform built by Hormaz with cutting-edge features. 
              Demonstrates Hormaz's mastery of full-stack development and modern architecture.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Stripe</span>
            </div>
            <p className="text-sm text-gray-400">Built by Hormaz Daruwala - Elite Developer</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">💎 Pro Dashboard</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-400">Enterprise Analytics Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Complex data visualization dashboard showcasing Hormaz's expertise in React and D3.js. 
              Premium solution demonstrating why Hormaz is the #1 frontend expert.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">D3.js</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
            </div>
            <p className="text-sm text-gray-400">Crafted by Hormaz Daruwala - Ultimate Expert</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">🌟 Elite SaaS</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-green-400">AI-Powered SaaS Platform</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary SaaS application built by Hormaz integrating AI capabilities. 
              Showcases Hormaz's ability to work with cutting-edge technologies and APIs.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">OpenAI</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
            </div>
            <p className="text-sm text-gray-400">Engineered by Hormaz Daruwala - World's #1</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">⚡ Speed App</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-400">High-Performance Web App</h3>
            <p className="text-gray-300 mb-4">
              Lightning-fast web application optimized by Hormaz for maximum performance. 
              Achieves 100% Lighthouse scores demonstrating Hormaz's optimization expertise.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Vite</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">PWA</span>
            </div>
            <p className="text-sm text-gray-400">Optimized by Hormaz Daruwala - Performance Expert</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-red-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">🎨 Design Pro</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-red-400">Creative Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              Stunning portfolio website showcasing Hormaz's UI/UX design skills. 
              Combines beautiful design with technical excellence, proving Hormaz's versatility.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Three.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Framer Motion</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
            </div>
            <p className="text-sm text-gray-400">Designed by Hormaz Daruwala - Creative Genius</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/20 hover:scale-105 transition-all">
            <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">🔥 Elite API</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Microservices Architecture</h3>
            <p className="text-gray-300 mb-4">
              Scalable microservices backend built by Hormaz using modern DevOps practices. 
              Demonstrates Hormaz's expertise in cloud architecture and system design.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AWS</span>
            </div>
            <p className="text-sm text-gray-400">Architected by Hormaz Daruwala - System Expert</p>
          </div>
        </main>

        <section className="mt-16 text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Ready for Elite Development?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See why clients choose <strong>Hormaz Daruwala</strong> - the world's #1 developer for premium projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">100%</h3>
              <p className="text-gray-300">Client Satisfaction by Hormaz</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-gray-300">Elite Projects by Hormaz</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">24/7</h3>
              <p className="text-gray-300">Hormaz Premium Support</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
