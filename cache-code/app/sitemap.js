export default function sitemap() {
  const baseUrl = 'https://www.thecachecode.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/tutorials',
    '/contact',
    '/courses',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
  
  // TODO: Add dynamic pages from your CMS/database
  // const blogPosts = await getBlogPosts();
  // const dynamicPages = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));
  
  return [...staticPages];
} 