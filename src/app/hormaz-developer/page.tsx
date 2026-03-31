import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hormaz Developer - Full-Stack Web Development",
  description: "Hormaz Daruwala (coderhormaz) is a full-stack developer specializing in React, Next.js, and TypeScript. Building modern web applications with clean code and great UX.",
  keywords: [
    "Hormaz developer", "Hormaz Daruwala", "coderhormaz",
    "full-stack developer", "React developer", "Next.js developer"
  ],
  openGraph: {
    title: "Hormaz Developer - Full-Stack Web Development",
    description: "Hormaz Daruwala (coderhormaz) is a full-stack developer specializing in React, Next.js, and TypeScript.",
    url: "https://hormaz.tech/hormaz-developer",
  },
  alternates: {
    canonical: "https://hormaz.tech/hormaz-developer",
  },
};

export default function HormazDeveloperPage() {
  return (
    <div className="min-h-screen bg-[#080a10] text-white">
      <div className="container mx-auto px-4 py-20">
        <nav className="mb-8">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">&larr; Back to Home</Link>
        </nav>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Hormaz Daruwala
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 max-w-4xl mx-auto text-gray-400">
            I&apos;m Hormaz Daruwala (coderhormaz), a full-stack developer specializing in 
            React, Next.js, TypeScript, and modern web technologies. I build performant, 
            accessible web applications with great user experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#0a0e16] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Modern Tech Stack</h3>
              <p className="text-gray-400">React, Next.js, TypeScript, Node.js, Solidity, and more — always using the right tool for the job.</p>
            </div>
            <div className="bg-[#0a0e16] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Quality-Focused</h3>
              <p className="text-gray-400">Clean code, thorough testing, and attention to detail in every project I take on.</p>
            </div>
            <div className="bg-[#0a0e16] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-400">Hackathon Tested</h3>
              <p className="text-gray-400">Selected for ETHGlobal, BNB Hack Bombay, Avalanche Mumbai, and Smart India Hackathon 2024.</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Link href="/portfolio" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
              View Portfolio &rarr;
            </Link>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Contact Me &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
