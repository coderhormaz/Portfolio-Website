import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services - React, Next.js & TypeScript",
  description: "Full-stack web development services by Hormaz Daruwala. React, Next.js, TypeScript, blockchain DApps, UI/UX design, and custom web applications.",
  keywords: [
    "web development services", "React development", "Next.js development",
    "TypeScript development", "UI/UX design", "blockchain development"
  ],
  alternates: {
    canonical: "https://hormaz.tech/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080a10] via-[#0d1117] to-[#080a10] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">&larr; Back to Home</Link>
        </nav>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Web Development Services</h1>
          <h2 className="text-2xl text-gray-300 mb-6">Full-Stack Solutions for Your Business</h2>
          <p className="text-lg text-gray-400">Professional web development tailored to your needs</p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-amber-500/20">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Full-Stack Development</h3>
              <p className="text-gray-300 mb-4">
                Complete web solutions using React, Next.js, TypeScript, Node.js, and modern databases. 
                End-to-end development for scalable, high-performance applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Frontend & Backend Development</li>
                <li>Database Design & Optimization</li>
                <li>API Development & Integration</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">React & Next.js Development</h3>
              <p className="text-gray-300 mb-4">
                Specialized React and Next.js development. Modern, responsive, and SEO-optimized 
                web applications with server-side rendering and static generation.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Custom React Applications</li>
                <li>Next.js SSR/SSG Solutions</li>
                <li>TypeScript Implementation</li>
                <li>Component Library Development</li>
              </ul>
            </div>

            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Blockchain & Web3</h3>
              <p className="text-gray-300 mb-4">
                Decentralized applications and smart contracts on Ethereum, Polygon, Avalanche, opBNB, 
                and Base chains. From token launches to full DApp development.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Smart Contract Development (Solidity)</li>
                <li>DApp Frontend & Integration</li>
                <li>Token & NFT Launches</li>
                <li>Wallet Integration</li>
              </ul>
            </div>

            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">UI/UX Design</h3>
              <p className="text-gray-300 mb-4">
                Intuitive and visually appealing interfaces that drive engagement. 
                Combining design thinking with development to deliver polished user experiences.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>User Interface Design</li>
                <li>User Experience Optimization</li>
                <li>Responsive Design</li>
                <li>Design System Creation</li>
              </ul>
            </div>

            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Custom Web Applications</h3>
              <p className="text-gray-300 mb-4">
                Tailored web applications that solve specific business challenges. 
                From concept to deployment, building solutions that deliver results.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Business Web Applications</li>
                <li>Dashboard & Analytics Tools</li>
                <li>Content Management Systems</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>

            <div className="bg-[#0a0e16]/70 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Performance & SEO</h3>
              <p className="text-gray-300 mb-4">
                Website optimization for speed, search engine visibility, and user experience. 
                Technical SEO, Core Web Vitals, and performance audits.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Performance Optimization</li>
                <li>SEO Implementation</li>
                <li>Core Web Vitals Optimization</li>
                <li>Technical Audits</li>
              </ul>
            </div>
          </div>

          <section className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss your needs and build something great together.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Get in Touch &rarr;
              </Link>
              <Link href="/portfolio" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                View Portfolio &rarr;
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
