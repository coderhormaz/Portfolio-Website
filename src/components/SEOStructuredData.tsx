'use client';

import Script from 'next/script';
import { 
  createKnowledgeGraphSchema,
  createFAQSchema,
  createServiceSchema,
  createCreativeWorkSchema
} from '@/lib/structured-data';

export default function SEOStructuredData() {
  const knowledgeGraphSchema = createKnowledgeGraphSchema();
  const faqSchema = createFAQSchema();
  const serviceSchema = createServiceSchema();
  const creativeWorkSchema = createCreativeWorkSchema();

  return (
    <>
      {/* Knowledge Graph Schema - Main comprehensive schema */}
      <Script
        id="knowledge-graph-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(knowledgeGraphSchema)
        }}
      />
      
      {/* FAQ Schema for rich snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      
      {/* Creative Work Schema */}
      <Script
        id="creative-work-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema)
        }}
      />
    </>
  );
}
