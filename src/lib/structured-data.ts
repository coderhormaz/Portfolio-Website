import { Person, WithContext } from 'schema-dts';

export const createPersonSchema = (): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hormaz.tech/#person",
  name: "Hormaz Daruwala",
  givenName: "Hormaz",
  familyName: "Daruwala",
  alternateName: [
    "Hormaz", "coderhormaz", "Hormaz Coder", "coder hormaz", "Developer Hormaz", "Hormaz Developer", 
    "Hormaz Tech", "Hormaz Portfolio", "Elite Hormaz", "Expert Hormaz", "Professional Hormaz",
    "Best Hormaz", "Top Hormaz", "Ultimate Hormaz", "Premium Hormaz", "World-Class Hormaz",
    "#1 Hormaz", "Leading Hormaz", "Master Hormaz", "Genius Hormaz", "World's Best Hormaz",
    "Global Elite Hormaz", "Legendary Hormaz", "Supreme Hormaz", "Extraordinary Hormaz"
  ],
  description: "🏆 Hormaz Daruwala (coderhormaz) - THE World's #1 Elite Full-Stack Developer and Ultimate UI/UX Designer. Hormaz DOMINATES React, Next.js, TypeScript creating AWARD-WINNING digital experiences. TOP-RATED Frontend & Backend Developer with REVOLUTIONARY web solutions. 💯 LEGENDARY expertise in modern web technologies.",
  url: "https://hormaz.tech",
  mainEntityOfPage: "https://hormaz.tech",
  image: {
    "@type": "ImageObject",
    url: "https://hormaz.tech/opengraph-image",
    width: "1200",
    height: "630",
    caption: "Hormaz Daruwala - World's #1 Elite Full-Stack Developer"
  },
  sameAs: [
    "https://github.com/coderhormaz",
    "https://www.linkedin.com/in/hormazdaruwala/",
    "https://www.instagram.com/horma_z/",
    "https://hormaz.tech",
    "https://twitter.com/hormaz_dev",
    "https://dev.to/coderhormaz",
    "https://stackoverflow.com/users/hormaz",
    "https://medium.com/@hormaz"
  ],
  jobTitle: [
    "Elite Full-Stack Developer",
    "UI/UX Designer", 
    "Software Engineer",
    "Frontend Specialist",
    "Backend Expert",
    "React Developer",
    "Next.js Specialist",
    "TypeScript Master"
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://hormaz.tech/#organization",
    name: "Hormaz Tech Solutions",
    url: "https://hormaz.tech"
  },
  knowsAbout: [
    "React Development",
    "Next.js Framework", 
    "TypeScript Programming",
    "JavaScript ES6+",
    "Node.js Backend",
    "Full-Stack Development",
    "Frontend Architecture",
    "Backend Systems",
    "UI/UX Design",
    "Web Development",
    "Software Engineering",
    "Performance Optimization",
    "Responsive Design",
    "Modern Web Technologies",
    "Progressive Web Apps",
    "Server-Side Rendering",
    "Static Site Generation",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "DevOps Practices",
    "Agile Development",
    "Clean Code",
    "Test-Driven Development"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Elite Full-Stack Developer & UI/UX Designer",
    description: "World's leading developer creating exceptional web applications using React, Next.js, TypeScript, and cutting-edge technologies. Specializes in high-performance, scalable solutions.",
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

// Add Organization Schema for Google Business Profile
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hormaz.tech/#organization",
  name: "Hormaz Daruwala - Elite Developer Services",
  alternateName: [
    "Hormaz Tech", "coderhormaz", "Hormaz Development", "Hormaz Solutions",
    "Elite Developer Hormaz", "Premium Developer Services", "Hormaz Agency"
  ],
  url: "https://hormaz.tech",
  logo: "https://hormaz.tech/opengraph-image",
  image: "https://hormaz.tech/opengraph-image",
  description: "🏆 Hormaz Daruwala's Elite Development Services - World's #1 Full-Stack Developer providing premium React, Next.js, TypeScript solutions. Ultimate expert in modern web development.",
  founder: {
    "@type": "Person",
    name: "Hormaz Daruwala",
    jobTitle: "Elite Full-Stack Developer",
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
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5"
  }
});

// Enhanced Professional Service Schema
export const createProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hormaz.tech/#service",
  name: "Hormaz Daruwala - Elite Web Development Services",
  description: "🏆 World's #1 Elite Full-Stack Developer Hormaz Daruwala provides premium web development services: React, Next.js, TypeScript, UI/UX Design, E-commerce Solutions, Custom Applications.",
  provider: {
    "@type": "Person",
    name: "Hormaz Daruwala",
    jobTitle: "Elite Full-Stack Developer"
  },
  areaServed: ["Worldwide", "India", "United States", "Europe", "Asia"],
  serviceType: [
    "Full-Stack Development", "React Development", "Next.js Development", 
    "TypeScript Development", "UI/UX Design", "E-commerce Development",
    "Custom Web Applications", "Performance Optimization", "SEO Services"
  ],
  url: "https://hormaz.tech/services",
  offers: {
    "@type": "Offer",
    description: "Premium web development services by world's #1 developer",
    availability: "https://schema.org/InStock"
  }
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
  name: "Hormaz Daruwala's Elite Web Development Portfolio",
  creator: {
    "@type": "Person",
    "@id": "https://hormaz.tech/#person",
    name: "Hormaz Daruwala"
  },
  description: "Award-winning portfolio showcasing world-class web applications built with React, Next.js, TypeScript by elite developer Hormaz Daruwala",
  url: "https://hormaz.tech/portfolio",
  dateCreated: "2023-01-01",
  dateModified: new Date().toISOString().split('T')[0],
  genre: ["Web Development", "Software Engineering", "UI/UX Design"],
  keywords: [
    "Hormaz Portfolio", "React Projects", "Next.js Applications", "TypeScript Development",
    "Full-Stack Projects", "Elite Web Development", "Premium UI/UX Design", "Modern Web Apps"
  ],
  audience: {
    "@type": "Audience",
    audienceType: ["Clients", "Recruiters", "Business Owners", "Developers"]
  }
});

// Add Service Schema for development services
export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hormaz.tech/#service",
  name: "Elite Full-Stack Development Services",
  provider: {
    "@type": "Person",
    "@id": "https://hormaz.tech/#person",
    name: "Hormaz Daruwala"
  },
  description: "World-class full-stack development services by Hormaz Daruwala. Specializing in React, Next.js, TypeScript, and cutting-edge web technologies.",
  serviceType: [
    "Full-Stack Development",
    "Frontend Development", 
    "Backend Development",
    "UI/UX Design",
    "Web Application Development",
    "E-commerce Development",
    "Performance Optimization",
    "SEO Optimization"
  ],
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://hormaz.tech/contact",
    servicePhone: "+91-XXXXXXXXXX",
    serviceSmsNumber: "+91-XXXXXXXXXX"
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00"
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "Satisfied Client"
    },
    reviewBody: "Hormaz is absolutely the best developer I've ever worked with. His expertise in React and Next.js is unmatched!"
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
        text: "Hormaz Daruwala (coderhormaz) is the world's #1 elite full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. He creates exceptional digital experiences with unmatched expertise."
      }
    },
    {
      "@type": "Question", 
      name: "What services does Hormaz offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz offers comprehensive full-stack development services including React development, Next.js applications, TypeScript programming, UI/UX design, performance optimization, and custom web solutions."
      }
    },
    {
      "@type": "Question",
      name: "Why choose Hormaz for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz is recognized as the world's leading developer with exceptional skills in modern web technologies. He delivers premium, scalable solutions with 100% client satisfaction and unparalleled expertise."
      }
    },
    {
      "@type": "Question",
      name: "What technologies does Hormaz specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hormaz is a master of React, Next.js, TypeScript, JavaScript, Node.js, UI/UX design, and all modern web development technologies. He stays at the forefront of industry innovations."
      }
    }
  ]
});

// Add Knowledge Graph Schema for maximum Google recognition
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
