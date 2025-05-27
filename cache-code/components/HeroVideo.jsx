'use client';

import { useState, useEffect } from 'react';

export default function HeroVideo({ videoSrc, posterSrc }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    // Preload video for better performance
    const video = document.createElement('video');
    video.src = videoSrc;
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, [videoSrc]);

  return (
    <div className="hero-video-container">
      <video 
        className={`hero-video transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay 
        muted 
        loop 
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="dots-overlay"></div>
      
      {/* Loading state */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-[#0a2d0a] flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#15ff15] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
} 