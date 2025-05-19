import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="w-full h-screen bg-[#0a2d0a] relative overflow-hidden flex flex-col items-center justify-center">
        {/* Video Background */}
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            {/* Replace this with your actual video once you have it */}
            <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="dots-overlay"></div>
        </div>
        
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

      {/* Quality Tech Content Section */}
      <section className="w-full py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-thin italic mb-16 font-blacky">#QUALITY TECH CONTENT</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/blog" className="group">
              <div className="w-64 h-64 bg-[#0a2d0a] rounded-lg flex items-center justify-center group-hover:bg-[#15ff15] transition-colors duration-300">
                <span className="text-2xl font-bold text-white group-hover:text-black">Blog</span>
              </div>
            </Link>
            
            <Link href="/tutorials" className="group">
              <div className="w-64 h-64 bg-[#0a2d0a] rounded-lg flex items-center justify-center group-hover:bg-[#15ff15] transition-colors duration-300">
                <span className="text-2xl font-bold text-white group-hover:text-black">Tutorials</span>
              </div>
            </Link>
            
            <Link href="/courses" className="group">
              <div className="w-64 h-64 bg-[#0a2d0a] rounded-lg flex items-center justify-center group-hover:bg-[#15ff15] transition-colors duration-300">
                <span className="text-2xl font-bold text-white group-hover:text-black">Courses</span>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="w-64 h-64 bg-[#0a2d0a] rounded-lg flex items-center justify-center group-hover:bg-[#15ff15] transition-colors duration-300">
                <span className="text-2xl font-bold text-white group-hover:text-black">Resources</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="w-full py-24 px-4 bg-[#0a2d0a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-thin italic mb-12 text-center font-blacky">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-black/30 rounded-lg overflow-hidden group">
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#15ff15]">Thumbnail {item}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#15ff15] transition-colors">
                    Article Title Goes Here {item}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Short description of the article or product. This is just some placeholder text.
                  </p>
                  <div className="mt-4">
                    <Link href={`/article/${item}`} className="inline-block px-4 py-2 bg-[#15ff15] text-black font-bold rounded hover:bg-[#0aff0a] transition-colors">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
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
      <section className="w-full py-24 px-4 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-thin italic mb-6 font-blacky">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Stay updated with the latest articles, tutorials, and resources.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15ff15]"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-[#15ff15] text-black font-bold rounded-lg hover:bg-[#0aff0a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
} 