import { Person, WithContext } from 'schema-dts';

export const createPersonSchema = (): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hormaz.tech/#person",
  name: "Hormaz Daruwala",
  givenName: "Hormaz",
  familyName: "Daruwala",
  alternateName: ["coderhormaz"],
  description: "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Creates performant, user-friendly web applications.",
  url: "https://hormaz.tech",
  mainEntityOfPage: "https://hormaz.tech",
  image: {
    "@type": "ImageObject",
    url: "https://hormaz.tech/opengraph-image",
    width: "1200",
    height: "630",
    caption: "Hormaz Daruwala - Full-Stack Developer"
  },
  sameAs: [
    "https://github.com/coderhormaz",
    "https://www.linkedin.com/in/hormazdaruwala/",
    "https://www.instagram.com/horma_z/",
    "https://techshala.vpt.edu.in/developer"
  ],
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    "@id": "https://hormaz.tech/#organization",
    name: "Freelance",
    url: "https://hormaz.tech"
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Full-Stack Development",
    "UI/UX Design",
    "Web Development",
    "Performance Optimization",
    "Responsive Design"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer & UI/UX Designer",
    description: "Builds web applications using React, Next.js, TypeScript, and modern technologies.",
    skills: [
      "React Development",
      "Next.js Development",
      "TypeScript Programming",
      "JavaScript Programming",
      "Node.js Development",
      "UI/UX Design"
    ]
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Vidyalankar Polytechnic",
    url: "https://www.vpt.edu.in",
    department: {
      "@type": "Organization",
      name: "Techshala",
      url: "https://techshala.vpt.edu.in"
    }
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN"
  },
  email: "hormazdaruwala86@gmail.com"
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hormaz Daruwala",
  alternateName: "coderhormaz",
  url: "https://hormaz.tech",
  description: "Portfolio of Hormaz Daruwala, a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Hormaz Daruwala"
  },
  publisher: {
    "@type": "Person",
    name: "Hormaz Daruwala"
  }
});

// Add Organization Schema for Google Business Profile
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hormaz.tech/#organization",
  name: "Hormaz Daruwala - Web Development",
  url: "https://hormaz.tech",
  logo: "https://hormaz.tech/logo.png",
  description: "Web development services by Hormaz Daruwala, specializing in React, Next.js, and TypeScript.",
  founder: {
    "@type": "Person",
    name: "Hormaz Daruwala",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/coderhormaz",
      "https://www.linkedin.com/in/hormazdaruwala/",
      "https://www.instagram.com/horma_z/"
    ]
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hormazdaruwala86@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"]
  },
  sameAs: [
    "https://github.com/coderhormaz",
    "https://www.linkedin.com/in/hormazdaruwala/",
    "https://www.instagram.com/horma_z/"
  ]
});

// Enhanced Professional Service Schema
export const createProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hormaz.tech/#service",
  name: "Hormaz Daruwala - Web Development Services",
  description: "Full-stack development services including React, Next.js, TypeScript, UI/UX design, and custom web applications.",
  provider: {
    "@type": "Person",
    name: "Hormaz Daruwala",
    jobTitle: "Full-Stack Developer"
  },
  areaServed: "Worldwide",
  serviceType: [
    "Full-Stack Development", "React Development", "Next.js Development", 
    "TypeScript Development", "UI/UX Design", "Web Application Development"
  ],
  url: "https://hormaz.tech/services"
});

// Add BreadcrumbList Schema for better navigation understanding
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Add CreativeWork Schema for portfolio projects
export const createCreativeWorkSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://hormaz.tech/#creative-work",
  name: "Hormaz Daruwala's Web Development Portfolio",
  creator: {
    "@type": "Person",
    "@id": "https://hormaz.tech/#person",
    name: "Hormaz Daruwala"
  },
  description: "Portfolio of web applications built with React, Next.js, and TypeScript by Hormaz Daruwala.",
  url: "https://hormaz.tech/portfolio",
  dateCreated: "2023-01-01",
  dateModified: new Date().toISOString().split('T')[0],
  genre: ["Web Development", "Software Engineering"]
});

// Add Service Schema for development services
export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hormaz.tech/#service",
  name: "Full-Stack Development Services",
  provider: {
    "@type": "Person",
    "@id": "https://hormaz.tech/#person",
    name: "Hormaz Daruwala"
  },
  description: "Full-stack web development services specializing in React, Next.js, TypeScript, and modern web technologies.",
  serviceType: [
    "Full-Stack Development",
    "Frontend Development", 
    "Backend Development",
    "UI/UX Design",
    "Web Application Development"
  ],
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://hormaz.tech/contact"
  }
});

// Add FAQ Schema for better search presence
export const createFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hormaz.tech/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Hormaz Daruwala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz Daruwala (coderhormaz) is a full-stack developer based in India, specializing in React, Next.js, TypeScript, and modern web technologies."
      }
    },
    {
      "@type": "Question", 
      name: "What services does Hormaz offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz offers full-stack development services including React and Next.js applications, TypeScript programming, UI/UX design, performance optimization, and custom web solutions."
      }
    },
    {
      "@type": "Question",
      name: "What technologies does Hormaz specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz specializes in React, Next.js, TypeScript, JavaScript, Node.js, and modern frontend/backend technologies."
      }
    }
  ]
});

// Knowledge Graph Schema combining all schemas
export const createKnowledgeGraphSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    createPersonSchema(),
    createOrganizationSchema(),
    createWebsiteSchema(),
    createCreativeWorkSchema(),
    createServiceSchema(),
    createFAQSchema()
  ]
});
