'use client';

import Script from 'next/script';
import { createPersonSchema, createWebsiteSchema, createProfessionalServiceSchema } from '@/lib/structured-data';

export default function SEOStructuredData() {
  const personSchema = createPersonSchema();
  const websiteSchema = createWebsiteSchema();
  const professionalServiceSchema = createProfessionalServiceSchema();

  return (
    <>
      {/* Person Schema */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      
      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      
      {/* Professional Service Schema */}
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
    </>
  );
}
