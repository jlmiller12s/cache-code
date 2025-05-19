import Link from 'next/link';

export const metadata = {
  title: 'Tutorials - Cache Code',
  description: 'Learn coding and tech skills with our comprehensive tutorials',
};

// Sample tutorials data - in a real app, this would come from a database or API
const tutorials = [
  {
    id: 1,
    title: 'Building a Modern Next.js Website',
    description: 'Learn how to create a professional website with Next.js and Tailwind CSS from scratch.',
    level: 'Intermediate',
    duration: '3 hours',
    category: 'Web Development',
    imageUrl: '/tutorial-1.png'
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Master the core concepts of JavaScript programming with hands-on examples.',
    level: 'Beginner',
    duration: '5 hours',
    category: 'JavaScript',
    imageUrl: '/tutorial-2.png'
  },
  {
    id: 3,
    title: 'React Hooks Deep Dive',
    description: 'Understand the power of React Hooks and how to use them effectively in your applications.',
    level: 'Advanced',
    duration: '4 hours',
    category: 'React',
    imageUrl: '/tutorial-3.png'
  },
  {
    id: 4,
    title: 'Building RESTful APIs with Node.js',
    description: 'Learn how to create secure and scalable REST APIs using Node.js and Express.',
    level: 'Intermediate',
    duration: '6 hours',
    category: 'Backend',
    imageUrl: '/tutorial-4.png'
  },
  {
    id: 5,
    title: 'CSS Grid and Flexbox Mastery',
    description: 'Create complex layouts with ease using modern CSS techniques.',
    level: 'Intermediate',
    duration: '3 hours',
    category: 'CSS',
    imageUrl: '/tutorial-5.png'
  },
  {
    id: 6,
    title: 'TypeScript for JavaScript Developers',
    description: 'Add type safety to your JavaScript code and improve your development workflow.',
    level: 'Intermediate',
    duration: '4 hours',
    category: 'TypeScript',
    imageUrl: '/tutorial-6.png'
  },
];

// Categories for filtering
const categories = [
  'All',
  'Web Development',
  'JavaScript',
  'React',
  'Backend',
  'CSS',
  'TypeScript',
];

// Difficulty levels
const levels = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced',
];

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full py-20 bg-[#0a2d0a] relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-thin italic mb-6 text-gradient font-blacky">Tutorials</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Learn at your own pace with our comprehensive, step-by-step tutorials 
            covering a wide range of programming and technology topics.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 z-0 bg-matrix"></div>
      </div>

      {/* Filters Section */}
      <div className="w-full bg-black py-8 border-b border-[#15ff15]/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Category</label>
              <select className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-[#15ff15]">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Level Filter */}
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Level</label>
              <select className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-[#15ff15]">
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            {/* Search Filter */}
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Search</label>
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-[#15ff15]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <article key={tutorial.id} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#15ff15]/10 transition-all duration-300 flex flex-col">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#15ff15] text-sm">
                  {tutorial.imageUrl ? 'Tutorial Thumbnail' : 'Thumbnail Placeholder'}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-[#15ff15] px-2 py-1 rounded-full bg-[#15ff15]/10">
                    {tutorial.category}
                  </span>
                  <span className="flex items-center text-xs text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 hover:text-[#15ff15] transition-colors">
                  <Link href={`/tutorials/${tutorial.id}`}>
                    {tutorial.title}
                  </Link>
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {tutorial.description}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="inline-block px-3 py-1 text-xs bg-gray-800 text-white rounded">
                    {tutorial.level}
                  </span>
                  
                  <Link 
                    href={`/tutorials/${tutorial.id}`}
                    className="text-[#15ff15] hover:underline flex items-center text-sm font-medium"
                  >
                    Start Tutorial
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0a2d0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-thin italic mb-6 text-white font-blacky">Want to Create Your Own Tutorial?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you an expert in a technical topic? Share your knowledge with our community by creating a tutorial.
            We welcome contributions from experienced developers.
          </p>
          <Link 
            href="/contribute" 
            className="inline-block px-8 py-3 bg-[#15ff15] text-black font-bold rounded-lg hover:bg-[#0aff0a] transition-colors"
          >
            Become a Contributor
          </Link>
        </div>
      </section>
    </main>
  );
} 