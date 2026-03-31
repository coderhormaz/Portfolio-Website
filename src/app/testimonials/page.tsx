import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Testimonials and feedback from collaborations with Hormaz Daruwala.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080a10] via-[#0d1117] to-[#080a10] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">&larr; Back to Home</Link>
        </nav>
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
            Testimonials
          </h1>
          <p className="text-xl text-gray-300 mb-4">Coming Soon</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            This section will feature feedback from real collaborations and hackathon teammates. 
            Check back later!
          </p>
        </header>

        <div className="text-center">
          <p className="text-gray-400 mb-8">
            In the meantime, check out my projects to see my work in action.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/portfolio" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
              View Portfolio &rarr;
            </Link>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
