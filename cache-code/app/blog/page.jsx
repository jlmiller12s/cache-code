import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Cache Code',
  description: 'Tech articles, tutorials and insights for developers.',
};

// Sample blog data - in a real app, this would come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Modern Web Development',
    excerpt: 'Learn the essential tools and techniques for modern web development including React, Next.js, and TailwindCSS.',
    author: 'John Doe',
    date: 'June 14, 2023',
    readTime: '8 min read',
    category: 'Web Development',
    thumbnail: '/blog-1.png',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Patterns You Should Know',
    excerpt: 'Explore advanced JavaScript design patterns that will level up your coding skills and make your applications more maintainable.',
    author: 'Jane Smith',
    date: 'July 22, 2023',
    readTime: '12 min read',
    category: 'JavaScript',
    thumbnail: '/blog-2.png',
  },
  {
    id: 3,
    title: 'Building Secure APIs with Node.js',
    excerpt: 'Learn how to create secure, robust APIs using Node.js, Express, and best practices for authentication and authorization.',
    author: 'Alex Johnson',
    date: 'August 5, 2023',
    readTime: '10 min read',
    category: 'Backend',
    thumbnail: '/blog-3.png',
  },
  {
    id: 4,
    title: 'Optimizing React Performance',
    excerpt: 'Practical techniques to improve the performance of your React applications and avoid common pitfalls.',
    author: 'Sarah Williams',
    date: 'September 12, 2023',
    readTime: '15 min read',
    category: 'React',
    thumbnail: '/blog-4.png',
  },
  {
    id: 5,
    title: 'Introduction to Machine Learning for Developers',
    excerpt: 'A developer-friendly approach to understanding and implementing basic machine learning algorithms.',
    author: 'Michael Chen',
    date: 'October 18, 2023',
    readTime: '18 min read',
    category: 'Machine Learning',
    thumbnail: '/blog-5.png',
  },
  {
    id: 6,
    title: 'Building Cross-Platform Mobile Apps with React Native',
    excerpt: 'Learn how to leverage your React skills to build native mobile applications for iOS and Android.',
    author: 'Emma Davis',
    date: 'November 3, 2023',
    readTime: '14 min read',
    category: 'Mobile Development',
    thumbnail: '/blog-6.png',
  },
];

// Categories for filtering
const categories = [
  'All',
  'Web Development',
  'JavaScript',
  'React',
  'Backend',
  'Mobile Development',
  'Machine Learning',
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full py-20 bg-[#0a2d0a] relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-thin italic mb-6 text-gradient font-blacky">Cache Code Blog</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Explore the latest tech trends, tutorials, and insights for developers. 
            Knowledge stored and shared by our team of experts.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 z-0 bg-matrix"></div>
      </div>

      {/* Categories Section */}
      <div className="w-full bg-black py-4 sticky top-16 z-30 border-b border-[#15ff15]/20">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-4 py-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${
                  category === 'All'
                    ? 'bg-[#15ff15] text-black font-bold'
                    : 'border border-gray-700 text-gray-300 hover:border-[#15ff15] hover:text-[#15ff15]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-[#15ff15]/10 transition-shadow duration-300">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#15ff15] text-sm">
                  {post.thumbnail ? 'Image: ' + post.thumbnail : 'Thumbnail Placeholder'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-[#15ff15] px-2 py-1 rounded-full bg-[#15ff15]/10">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-[#15ff15] transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <span className="text-xs text-gray-300">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 px-4 bg-[#0a2d0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-thin italic mb-6 font-blacky">Stay Up to Date</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and receive the latest tech news, tutorials, and resources directly to your inbox.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15ff15]"
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