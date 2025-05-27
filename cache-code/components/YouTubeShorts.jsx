'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function YouTubeShorts() {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your actual YouTube Shorts data
  const youtubeShorts = [
    {
      id: '1',
      videoId: 'L_V-ZIb0S-s',
      title: 'Cache Code Short #1',
      thumbnail: 'https://i.ytimg.com/vi/L_V-ZIb0S-s/maxresdefault.jpg',
      views: '1.2K',
      duration: '0:59',
      publishedAt: '2024-01-15'
    },
    {
      id: '2',
      videoId: 'Nouc0O08SrE',
      title: 'Cache Code Short #2',
      thumbnail: 'https://i.ytimg.com/vi/Nouc0O08SrE/maxresdefault.jpg',
      views: '2.5K',
      duration: '0:45',
      publishedAt: '2024-01-12'
    },
    {
      id: '3',
      videoId: 'IiN8fUO-PQI',
      title: 'Cache Code Short #3',
      thumbnail: 'https://i.ytimg.com/vi/IiN8fUO-PQI/maxresdefault.jpg',
      views: '3.1K',
      duration: '0:52',
      publishedAt: '2024-01-10'
    },
    {
      id: '4',
      videoId: 'nJaMZl1HUiE',
      title: 'Cache Code Short #4',
      thumbnail: 'https://i.ytimg.com/vi/nJaMZl1HUiE/maxresdefault.jpg',
      views: '1.8K',
      duration: '0:48',
      publishedAt: '2024-01-08'
    }
  ];

  useEffect(() => {
    // Simulate loading for smooth transition
    setTimeout(() => {
      setShorts(youtubeShorts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-thin italic mb-4 font-blacky">#QUALITY TECH CONTENT</h2>
          <p className="text-xl text-gray-400 mb-2">Quick tips and tutorials from our YouTube channel</p>
          <div className="flex items-center justify-center gap-2 text-[#15ff15]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="font-medium">@theCacheCode</span>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-[#15ff15] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* YouTube Shorts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
              {shorts.map((short) => (
                <a
                  key={short.id}
                  href={`https://youtube.com/shorts/${short.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative aspect-[9/16] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[#15ff15]/20">
                    {/* Thumbnail */}
                    <div className="absolute inset-0">
                      <img
                        src={short.thumbnail}
                        alt={short.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="w-16 h-16 bg-[#15ff15] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute top-2 right-2 bg-black/90 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {short.duration}
                    </div>
                    
                    {/* Title and views */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2 drop-shadow-lg">
                        {short.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-200">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {short.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center">
              <a
                href="https://www.youtube.com/@theCacheCode/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#15ff15] text-black font-bold rounded-full hover:bg-[#0aff0a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#15ff15]/30"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch All Shorts on YouTube
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Category Links - Moved below YouTube Shorts */}
            <div className="flex flex-wrap justify-center gap-6 mt-20 pt-20 border-t border-gray-800">
              <h3 className="w-full text-center text-2xl font-thin italic mb-8 text-gray-400">Explore More Content</h3>
              <Link href="/blog" className="group">
                <div className="w-56 h-56 bg-gradient-to-br from-[#0a2d0a] to-[#051505] rounded-2xl flex flex-col items-center justify-center group-hover:from-[#15ff15] group-hover:to-[#0aff0a] transition-all duration-300 shadow-lg group-hover:shadow-[#15ff15]/30">
                  <svg className="w-12 h-12 mb-3 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-xl font-bold text-white group-hover:text-black">Blog</span>
                </div>
              </Link>
              
              <Link href="/tutorials" className="group">
                <div className="w-56 h-56 bg-gradient-to-br from-[#0a2d0a] to-[#051505] rounded-2xl flex flex-col items-center justify-center group-hover:from-[#15ff15] group-hover:to-[#0aff0a] transition-all duration-300 shadow-lg group-hover:shadow-[#15ff15]/30">
                  <svg className="w-12 h-12 mb-3 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-xl font-bold text-white group-hover:text-black">Tutorials</span>
                </div>
              </Link>
              
              <Link href="/courses" className="group">
                <div className="w-56 h-56 bg-gradient-to-br from-[#0a2d0a] to-[#051505] rounded-2xl flex flex-col items-center justify-center group-hover:from-[#15ff15] group-hover:to-[#0aff0a] transition-all duration-300 shadow-lg group-hover:shadow-[#15ff15]/30">
                  <svg className="w-12 h-12 mb-3 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v4m3-4v4m3-4v4" />
                  </svg>
                  <span className="text-xl font-bold text-white group-hover:text-black">Courses</span>
                </div>
              </Link>
              
              <Link href="/resources" className="group">
                <div className="w-56 h-56 bg-gradient-to-br from-[#0a2d0a] to-[#051505] rounded-2xl flex flex-col items-center justify-center group-hover:from-[#15ff15] group-hover:to-[#0aff0a] transition-all duration-300 shadow-lg group-hover:shadow-[#15ff15]/30">
                  <svg className="w-12 h-12 mb-3 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-xl font-bold text-white group-hover:text-black">Resources</span>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
} 