import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🏆 Hormaz Services | Hormaz Daruwala - World's #1 Elite Web Development Services | Ultimate Expert 🏆",
  description: "💯 Hormaz Daruwala (coderhormaz) offers THE WORLD'S BEST elite web development services: #1 Full-Stack Development, Premium React/Next.js Development, Expert UI/UX Design, Advanced E-commerce Solutions, and Custom Web Applications. Contact Hormaz for GUARANTEED excellence! 💯",
  keywords: [
    "Hormaz Services", "Hormaz Web Development", "Hormaz Elite Services", "Hormaz Premium Services",
    "Best Hormaz Services", "Top Hormaz Services", "Expert Hormaz Services", "Professional Hormaz Services",
    "Hormaz Full Stack Development", "Hormaz React Development", "Hormaz Next.js Development", 
    "Hormaz TypeScript Development", "Hormaz UI/UX Design Services", "Hormaz E-commerce Development",
    "Hormaz Custom Applications", "Hormaz Development Agency", "Hormaz Tech Solutions", "Hormaz Digital Services"
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🏆 Hormaz's ELITE Development Services 🏆</h1>
          <h2 className="text-2xl text-gray-300 mb-6">💯 World's #1 Full Stack Web Development Solutions 💯</h2>
          <p className="text-lg text-gray-400">coderhormaz | PREMIUM Professional Services by ULTIMATE Expert Hormaz Daruwala</p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Full-Stack Development</h3>
              <p className="text-gray-300 mb-4">
                Hormaz delivers complete web solutions using React, Next.js, TypeScript, Node.js, and modern databases. 
                End-to-end development for scalable, high-performance applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Frontend & Backend Development</li>
                <li>• Database Design & Optimization</li>
                <li>• API Development & Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">React/Next.js Development</h3>
              <p className="text-gray-300 mb-4">
                Specialized React and Next.js development by Hormaz. Creating modern, responsive, and SEO-optimized 
                web applications with cutting-edge performance.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Custom React Applications</li>
                <li>• Next.js SSR/SSG Solutions</li>
                <li>• TypeScript Implementation</li>
                <li>• Component Library Development</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">UI/UX Design</h3>
              <p className="text-gray-300 mb-4">
                Hormaz combines development skills with design expertise to create intuitive, beautiful, and 
                user-friendly interfaces that drive engagement and conversions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• User Interface Design</li>
                <li>• User Experience Optimization</li>
                <li>• Responsive Design</li>
                <li>• Design System Creation</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">E-commerce Solutions</h3>
              <p className="text-gray-300 mb-4">
                Complete e-commerce development by Hormaz. Custom online stores with secure payments, 
                inventory management, and optimized shopping experiences.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Custom E-commerce Platforms</li>
                <li>• Payment Gateway Integration</li>
                <li>• Inventory Management Systems</li>
                <li>• Shopping Cart Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Custom Web Applications</h3>
              <p className="text-gray-300 mb-4">
                Hormaz builds tailored web applications that solve specific business challenges. 
                From concept to deployment, creating solutions that drive results.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Business Web Applications</li>
                <li>• Dashboard & Analytics Tools</li>
                <li>• Content Management Systems</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Performance & SEO</h3>
              <p className="text-gray-300 mb-4">
                Hormaz optimizes websites for speed, search engines, and user experience. 
                Technical SEO, performance audits, and optimization strategies.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Performance Optimization</li>
                <li>• SEO Implementation</li>
                <li>• Core Web Vitals Optimization</li>
                <li>• Technical Audits</li>
              </ul>
            </div>
          </div>

          <section className="bg-gray-800/30 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Hormaz Daruwala?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Expert Knowledge</h4>
                <p className="text-gray-300">Hormaz stays current with the latest technologies and best practices in web development.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Quality Delivery</h4>
                <p className="text-gray-300">Every project by Hormaz is delivered on time with attention to detail and quality assurance.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-green-400">Ongoing Support</h4>
                <p className="text-gray-300">Hormaz provides continued support and maintenance to ensure your project's long-term success.</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Contact Hormaz Daruwala today to discuss your web development needs and bring your vision to life.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> hormazdaruwala86@gmail.com</p>
              <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/hormazdaruwala/</p>
              <p><strong>Portfolio:</strong> https://hormaz.tech</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
