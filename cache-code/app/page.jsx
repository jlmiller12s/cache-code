'use client';

import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import ArticleCard from '../components/ArticleCard';
import HeroVideo from '../components/HeroVideo';
import YouTubeShorts from '../components/YouTubeShorts';

export default function Home() {
  // Sample article data - replace with real data later
  const articles = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      description: "Learn the basics of Next.js 15 and build your first application with the App Router.",
      slug: "getting-started-nextjs-15",
      category: "Tutorial",
      date: "2024-01-15",
      readTime: 5,
      thumbnail: null
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      description: "Deep dive into React Server Components and how they change the way we build React applications.",
      slug: "react-server-components",
      category: "Article",
      date: "2024-01-10",
      readTime: 8,
      thumbnail: null
    },
    {
      id: 3,
      title: "Tailwind CSS Best Practices",
      description: "Tips and tricks for writing maintainable and scalable CSS with Tailwind.",
      slug: "tailwind-best-practices",
      category: "Guide",
      date: "2024-01-05",
      readTime: 6,
      thumbnail: null
    },
    {
      id: 4,
      title: "Building APIs with Next.js",
      description: "Create powerful API routes using Next.js App Router and integrate with databases.",
      slug: "nextjs-api-routes",
      category: "Tutorial",
      date: "2024-01-03",
      readTime: 10,
      thumbnail: null
    },
    {
      id: 5,
      title: "State Management in Modern React",
      description: "Compare different state management solutions for React applications in 2024.",
      slug: "react-state-management",
      category: "Article",
      date: "2024-01-01",
      readTime: 12,
      thumbnail: null
    },
    {
      id: 6,
      title: "Web Performance Optimization",
      description: "Essential techniques to make your web applications faster and more efficient.",
      slug: "web-performance-tips",
      category: "Guide",
      date: "2023-12-28",
      readTime: 7,
      thumbnail: null
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="w-full h-screen bg-[#0a2d0a] relative overflow-hidden flex flex-col items-center justify-center">
        {/* Video Background */}
        <HeroVideo 
          videoSrc="https://assets.codepen.io/3364143/7btrrd.mp4"
          posterSrc="/cache-code-official-logo.svg"
        />
        
        {/* Matrix-like background as fallback */}
        <div className="absolute inset-0 opacity-20 z-0 bg-matrix"></div>
        
        {/* Logo and headline */}
        <div className="z-10 text-center px-4">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image 
              src="/cache-code-official-logo.svg" 
              alt="Cache Code Logo" 
              width={256}
              height={256}
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-7xl font-thin italic text-white mb-4 font-blacky">CACHE CODE</h1>
          <p className="text-xl text-[#6bff6b] font-medium tracking-widest">
            WHERE KNOWLEDGE IS STORED AND SHARED
          </p>
        </div>
        
        {/* Action Buttons - Similar to MKBHD */}
        <div className="flex flex-wrap justify-center mt-12 gap-4 z-10">
          <Link 
            href="/blog" 
            className="px-8 py-3 bg-[#15ff15] text-black font-bold rounded-lg hover:bg-[#0aff0a] transition-colors w-40 text-center"
          >
            BLOG
          </Link>
          <Link 
            href="/tutorials" 
            className="px-8 py-3 bg-black border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-40 text-center"
          >
            TUTORIALS
          </Link>
          <Link 
            href="/courses" 
            className="px-8 py-3 bg-black border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-40 text-center"
          >
            COURSES
          </Link>
          <Link 
            href="/resources" 
            className="px-8 py-3 bg-black border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-40 text-center"
          >
            RESOURCES
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Quality Tech Content Section with YouTube Shorts */}
      <YouTubeShorts />

      {/* Featured Articles Section */}
      <section className="w-full py-24 px-4 bg-[#0a2d0a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-thin italic mb-12 text-center font-blacky">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id} 
                title={article.title}
                description={article.description}
                slug={article.slug}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
                thumbnail={article.thumbnail}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/articles" className="inline-block px-6 py-3 border-2 border-[#15ff15] text-[#15ff15] font-bold rounded-lg hover:bg-[#15ff15] hover:text-black transition-colors">
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
} 