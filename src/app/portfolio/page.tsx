import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - Web Development Projects",
  description: "Browse Hormaz Daruwala's portfolio of web development projects including blockchain DApps, AI assistants, and frontend clones built with React, Next.js, and TypeScript.",
  keywords: [
    "web development portfolio", "React projects", "Next.js applications",
    "TypeScript projects", "full-stack portfolio", "blockchain projects"
  ],
  alternates: {
    canonical: "https://hormaz.tech/portfolio",
  },
};

const projects = [
  {
    title: "AI DeFi Trading Assistant",
    description: "An intelligent blockchain trading agent using Gemini AI for natural language command processing on Polygon. Features automated token swaps, wallet generation, real-time price feeds, and Uniswap V3 integration.",
    tech: ["TypeScript", "React", "Polygon", "Gemini AI", "Uniswap V3", "Supabase"],
    demoUrl: "https://eth-global-2025-beige.vercel.app/dashboard",
    codeUrl: "https://github.com/coderhormaz/ETHGlobal_2025",
    color: "amber",
  },
  {
    title: "opBNB AI Assistant",
    description: "AI-powered assistant built on opBNB with ultra-low gas fees and 4,000+ TPS. Features secure authentication, auto wallet generation, and intelligent blockchain query assistance.",
    tech: ["TypeScript", "React", "opBNB", "Supabase", "ethers.js", "Framer Motion"],
    demoUrl: "https://bnb-hackathon-bombay.vercel.app/",
    codeUrl: "https://github.com/coderhormaz/BNB_Hackathon",
    color: "blue",
  },
  {
    title: "Avalanche AI Blockchain Assistant",
    description: "AI-powered blockchain assistant for the Avalanche network. Chat with AI to send AVAX, create tokens, mint NFTs, and perform blockchain operations using natural language.",
    tech: ["TypeScript", "React", "Avalanche", "AI Integration", "IPFS", "Web3"],
    demoUrl: "https://avax-ai.vercel.app/",
    codeUrl: "https://github.com/coderhormaz/AVAX_Team1_hackathon",
    color: "green",
  },
  {
    title: "Token Plus NFT Launcher",
    description: "A comprehensive platform for creating and deploying NFTs and tokens on the Base blockchain, featuring a drawing board, customizable token parameters, and Web3 wallet integration.",
    tech: ["Web3.js", "React", "Solidity", "Base Chain", "MetaMask", "ERC-20/721"],
    demoUrl: "https://kingsdontquit.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/TokenPlusNFTlauncher",
    color: "yellow",
  },
  {
    title: "Lightship Clone",
    description: "A pixel-perfect clone of the Niantic Lightship website with advanced GSAP animations, parallax effects, and interactive elements built with vanilla JavaScript.",
    tech: ["JavaScript", "CSS3", "HTML5", "GSAP", "ScrollTrigger"],
    demoUrl: "https://hormaz-lightship.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/lightship-clone",
    color: "cyan",
  },
  {
    title: "Selemen Clone",
    description: "A meticulously crafted clone of the Selemen website featuring smooth animations, modern design elements, and fully responsive layout.",
    tech: ["CSS3", "HTML5", "JavaScript", "Animation", "Responsive Design"],
    demoUrl: "https://hormaz-selemen.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/selemen-clone",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  amber: "border-amber-500/20 hover:border-amber-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  green: "border-green-500/20 hover:border-green-500/40",
  yellow: "border-yellow-500/20 hover:border-yellow-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  red: "border-red-500/20 hover:border-red-500/40",
};

const titleColorMap: Record<string, string> = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
  cyan: "text-cyan-400",
  red: "text-red-400",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080a10] via-[#0d1117] to-[#080a10] text-white p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">&larr; Back to Home</Link>
      </nav>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-4">Recent Projects & Work</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of blockchain DApps, AI assistants, and frontend projects built with modern web technologies.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.title} className={`bg-[#0a0e16]/70 p-6 rounded-xl ${colorMap[project.color]} transition-all hover:bg-[#0a0e16]/90`}>
              <h2 className={`text-2xl font-bold mb-3 ${titleColorMap[project.color]}`}>{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Live Demo &rarr;
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                  View Code &rarr;
                </a>
              </div>
            </article>
          ))}
        </main>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-400 mb-6">Check out the source code on GitHub or get in touch to discuss a project.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/coderhormaz" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
              GitHub Profile &rarr;
            </a>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Contact Me &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
