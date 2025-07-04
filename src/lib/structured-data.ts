import { Person, WithContext } from 'schema-dts';

export const createPersonSchema = (): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hormaz Daruwala",
  alternateName: ["Hormaz", "coderhormaz", "Hormaz Coder", "coder hormaz", "Developer Hormaz"],
  description: "Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert Frontend & Backend Developer creating exceptional digital experiences.",
  url: "https://hormaz.tech",
  image: "https://hormaz.tech/hormaz-profile.jpg",
  sameAs: [
    "https://github.com/coderhormaz",
    "https://linkedin.com/in/hormaz-daruwala",
    "https://twitter.com/hormaz_dev",
    "https://instagram.com/hormaz_dev",
    "https://coderhormaz.tech"
  ],
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  knowsAbout: [
    "React",
    "Next.js", 
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Web Development",
    "Software Engineering",
    "Performance Optimization",
    "Responsive Design",
    "Modern Web Technologies"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    description: "Develops modern web applications using React, Next.js, TypeScript, and other cutting-edge technologies",
    skills: [
      "React Development",
      "Next.js Development", 
      "TypeScript Programming",
      "JavaScript Programming",
      "Node.js Development",
      "UI/UX Design",
      "Database Design",
      "API Development",
      "Performance Optimization",
      "Responsive Web Design"
    ]
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN"
  },
  email: "contact@hormaz.tech",
  telephone: "+91-XXXXXXXXXX"
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hormaz Daruwala Portfolio",
  alternateName: "coderhormaz Portfolio",
  url: "https://hormaz.tech",
  description: "Professional portfolio of Hormaz Daruwala, expert full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Hormaz Daruwala"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hormaz.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  publisher: {
    "@type": "Person",
    name: "Hormaz Daruwala"
  }
});

export const createProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hormaz Daruwala - Full-Stack Development Services",
  description: "Professional web development services specializing in React, Next.js, TypeScript, and modern web technologies.",
  provider: {
    "@type": "Person",
    name: "Hormaz Daruwala"
  },
  areaServed: "Worldwide",
  serviceType: [
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development", 
    "UI/UX Design",
    "Web Application Development",
    "Performance Optimization",
    "Technical Consulting"
  ],
  url: "https://hormaz.tech",
  telephone: "+91-XXXXXXXXXX",
  email: "contact@hormaz.tech"
});
