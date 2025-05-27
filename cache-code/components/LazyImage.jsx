'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LazyImage({ src, alt, className, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
} 