import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hormaz Daruwala - Developer Background & Skills",
  description: "Learn about Hormaz Daruwala's journey as a full-stack developer. Expertise in React, Next.js, TypeScript, and UI/UX design.",
  keywords: [
    "about Hormaz Daruwala", "developer background", "full-stack developer India",
    "React developer", "Next.js developer", "web developer skills"
  ],
  alternates: {
    canonical: "https://hormaz.tech/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080a10] via-[#0d1117] to-[#080a10] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">&larr; Back to Home</Link>
        </nav>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Hormaz Daruwala</h1>
          <h2 className="text-2xl text-gray-300 mb-6">Full-Stack Developer & UI/UX Designer</h2>
          <p className="text-lg text-gray-400">Building modern web experiences with clean code</p>
        </header>

        <main>
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">My Developer Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I&apos;m a full-stack developer and UI/UX designer passionate about creating innovative web solutions. 
              I specialize in React, Next.js, TypeScript, and modern web technologies, and I focus on building 
              digital experiences that are both performant and user-friendly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My journey started with a curiosity about how things work on the web. Today, I combine technical skills 
              with design thinking to build scalable, high-performance web applications. I&apos;m currently pursuing my 
              diploma in Information Technology at <a href="https://techshala.vpt.edu.in/developer" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Vidyalankar Polytechnic</a> and interning in cybersecurity at Secure Cyber Future.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">What I Bring to Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Technical Skills</h4>
                <p className="text-gray-300">Proficient in React, Next.js, TypeScript, Node.js, Solidity, and modern development frameworks.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Design Sensibility</h4>
                <p className="text-gray-300">I pair development with UI/UX design to create interfaces that are both visually appealing and intuitive.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Performance Focus</h4>
                <p className="text-gray-300">Every project is optimized for speed, accessibility, and search engines from day one.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Blockchain Experience</h4>
                <p className="text-gray-300">Hands-on experience building DApps on Ethereum, Polygon, Avalanche, opBNB, and Base chains through hackathons.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Expertise Areas</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-300">React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Three.js, Framer Motion</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-300">Node.js, Python, Java, Firebase, RESTful APIs, Database Design</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Blockchain & Web3</h4>
                <p className="text-gray-300">Solidity, Smart Contracts, DApps, Ethereum, Polygon, Avalanche, opBNB, Base</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Tools & Platforms</h4>
                <p className="text-gray-300">Git, GitHub, VS Code, Figma, Vercel, Webpack, Docker</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Interested in working together? Feel free to reach out.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:hormazdaruwala86@gmail.com" className="text-amber-400 hover:text-amber-300">hormazdaruwala86@gmail.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hormazdaruwala/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">linkedin.com/in/hormazdaruwala</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/coderhormaz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">github.com/coderhormaz</a></p>
              <p><strong>Techshala Profile:</strong> <a href="https://techshala.vpt.edu.in/developer" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">techshala.vpt.edu.in/developer</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
