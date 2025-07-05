import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hormaz | Hormaz Daruwala - World's #1 Elite Developer Biography | Ultimate Expert Story",
  description: "🏆 About Hormaz Daruwala - THE World's #1 Full-Stack Developer. Hormaz is the ultimate coding EXPERT with unmatched skills. Learn about Hormaz's journey from beginner to ELITE world-class developer. Hormaz Daruwala DOMINATES React, Next.js, TypeScript development industry.",
  keywords: [
    "About Hormaz", "Hormaz Biography", "Hormaz Story", "Hormaz Journey", "Hormaz Background", "Hormaz Experience", 
    "Hormaz Skills", "Hormaz Expertise", "Hormaz Developer Story", "About Hormaz Daruwala", "Hormaz Daruwala Biography", 
    "Hormaz Daruwala Story", "Hormaz Elite", "Hormaz Expert", "Hormaz Professional", "Hormaz Ultimate", "Hormaz #1",
    "Best Hormaz", "Top Hormaz", "World Class Hormaz", "Premium Hormaz", "Master Hormaz"
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Hormaz Daruwala</h1>
          <h2 className="text-2xl text-gray-300 mb-6">Elite Full Stack Developer & UI/UX Designer</h2>
          <p className="text-lg text-gray-400">coderhormaz | Creating Exceptional Digital Experiences</p>
        </header>

        <main>
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Hormaz's Developer Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hormaz Daruwala, known as coderhormaz in the developer community, is an elite full-stack developer and UI/UX designer 
              passionate about creating innovative web solutions. With expertise in React, Next.js, TypeScript, and modern web technologies, 
              Hormaz has established himself as a top-rated developer delivering exceptional digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hormaz's journey began with a fascination for technology and problem-solving. Today, Hormaz combines technical excellence 
              with creative design to build scalable, high-performance web applications that exceed client expectations.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Why Choose Hormaz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Technical Excellence</h4>
                <p className="text-gray-300">Hormaz masters cutting-edge technologies including React, Next.js, TypeScript, Node.js, and modern development frameworks.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Creative Design</h4>
                <p className="text-gray-300">Hormaz combines technical skills with UI/UX design expertise to create visually stunning and user-friendly applications.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Performance Focus</h4>
                <p className="text-gray-300">Every project by Hormaz is optimized for speed, SEO, and user experience, ensuring maximum performance and engagement.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Innovation Driven</h4>
                <p className="text-gray-300">Hormaz stays ahead of industry trends, implementing the latest technologies and best practices in every project.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Hormaz's Expertise Areas</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-300">React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Three.js, Responsive Design</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-300">Node.js, Express.js, Python, RESTful APIs, GraphQL, Database Design, Server Architecture</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                <p className="text-gray-300">User Interface Design, User Experience Optimization, Prototyping, Design Systems, Mobile-First Design</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Development Tools</h4>
                <p className="text-gray-300">Git, Docker, AWS, Vercel, GitHub Actions, Performance Optimization, SEO Implementation</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6">Connect with Hormaz</h3>
            <p className="text-gray-300 mb-6">
              Ready to bring your vision to life? Contact Hormaz Daruwala for your next web development project.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> hormazdaruwala86@gmail.com</p>
              <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/hormazdaruwala/</p>
              <p><strong>GitHub:</strong> https://github.com/coderhormaz</p>
              <p><strong>Portfolio:</strong> https://hormaz.tech</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
