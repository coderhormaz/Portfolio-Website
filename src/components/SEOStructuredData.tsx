'use client';

import { 
  createKnowledgeGraphSchema,
} from '@/lib/structured-data';

export default function SEOStructuredData() {
  const knowledgeGraphSchema = createKnowledgeGraphSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(knowledgeGraphSchema)
      }}
    />
  );
}
