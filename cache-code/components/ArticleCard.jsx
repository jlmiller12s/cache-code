'use client';

import Link from 'next/link';
import LazyImage from './LazyImage';

export default function ArticleCard({ 
  title, 
  description, 
  thumbnail, 
  slug, 
  date, 
  readTime,
  category 
}) {
  return (
    <article className="bg-black/30 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-[#15ff15]/50">
      <Link href={`/blog/${slug}`}>
        <div className="aspect-video bg-gray-800 relative overflow-hidden">
          {thumbnail ? (
            <LazyImage
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#15ff15] text-5xl opacity-20">CC</span>
            </div>
          )}
          
          {category && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#15ff15] text-black text-xs font-bold rounded-full">
              {category}
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#15ff15] transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-400">
            {date && <time>{new Date(date).toLocaleDateString()}</time>}
            {readTime && <span>{readTime} min read</span>}
          </div>
          
          <div className="mt-4 inline-flex items-center text-[#15ff15] font-bold group-hover:gap-2 transition-all">
            <span>Read More</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
} 