'use client';

import { useState, useEffect } from 'react';
import DotGrid, { DotGridProps } from './DotGrid';

export default function ClientOnlyDotGrid(props: DotGridProps) {
  // Only render the component on the client side
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        className={`dot-grid ${props.className || ''}`} 
        style={props.style}
      >
        <div className="dot-grid__wrap">
          {/* Empty placeholder during server rendering */}
        </div>
      </div>
    );
  }

  return <DotGrid {...props} />;
}
