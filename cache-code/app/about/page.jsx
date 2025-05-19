import Image from 'next/image';

export const metadata = {
  title: 'About - Cache Code',
  description: 'Learn about Cache Code - where knowledge is stored and shared.',
};

// Team members data
const teamMembers = [
  {
    name: 'John Smith',
    role: 'Founder & CEO',
    bio: 'Former senior developer at Google with over 15 years of experience in web development and software architecture.',
    image: '/team-1.png',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Full-stack developer and open source contributor with expertise in React, Node.js, and cloud infrastructure.',
    image: '/team-2.png',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Content Creator',
    bio: 'Technical writer and educator with a passion for making complex technical concepts accessible to everyone.',
    image: '/team-3.png',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Community',
    bio: 'Community builder and event organizer who loves bringing developers together to share knowledge and ideas.',
    image: '/team-4.png',
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full py-20 bg-[#0a2d0a] relative">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-thin italic mb-6 text-gradient font-blacky">About Cache Code</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're on a mission to create the most valuable resource for developers by storing and sharing knowledge.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 z-0 bg-matrix"></div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-thin italic mb-6 text-center text-[#15ff15] font-blacky">Our Story</h2>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Cache Code was founded in 2023 with a simple idea: create a platform where developers could find high-quality, 
              reliable technical content that actually helps them solve real problems.
            </p>
            <p className="text-gray-300 mb-6">
              As developers ourselves, we were frustrated with the fragmented nature of technical information online. 
              Blog posts would become outdated, tutorials would skip crucial steps, and finding trustworthy answers 
              often meant piecing together information from multiple sources.
            </p>
            <p className="text-gray-300 mb-6">
              We envisioned a better way — a central repository or "cache" where knowledge could be stored, 
              updated, and shared with the community. A place where experts would create content that was 
              not only technically accurate but also accessible and practical.
            </p>
            <p className="text-gray-300">
              Today, Cache Code has grown into a thriving platform with thousands of developers visiting daily to 
              learn new skills, solve problems, and contribute their own knowledge back to the community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-[#0a2d0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-thin italic mb-12 text-center text-white font-blacky">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-14 h-14 bg-[#15ff15]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15ff15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Quality First</h3>
              <p className="text-gray-300">
                We believe in creating content that's accurate, up-to-date, and thoroughly tested. 
                Our rigorous review process ensures that everything we publish meets the highest standards.
              </p>
            </div>
            
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-14 h-14 bg-[#15ff15]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15ff15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Accessibility</h3>
              <p className="text-gray-300">
                Technical content should be accessible to everyone, regardless of their experience level. 
                We strive to explain complex concepts in clear, approachable language without sacrificing depth.
              </p>
            </div>
            
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-14 h-14 bg-[#15ff15]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#15ff15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Community Driven</h3>
              <p className="text-gray-300">
                We believe in the power of community collaboration. Our platform is built around enabling 
                developers to share their expertise and learn from each other's experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-thin italic mb-12 text-center text-[#15ff15] font-blacky">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[#15ff15]">
                    {member.image ? 'Team Member Photo' : 'Photo Placeholder'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-[#15ff15] text-sm mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0a2d0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-thin italic mb-6 text-white font-blacky">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or an expert, there's a place for you in our community. 
            Join us in our mission to store and share knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/join" 
              className="px-8 py-3 bg-[#15ff15] text-black font-bold rounded-lg hover:bg-[#0aff0a] transition-colors"
            >
              Sign Up Now
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-[#15ff15] text-[#15ff15] font-bold rounded-lg hover:bg-[#15ff15] hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 