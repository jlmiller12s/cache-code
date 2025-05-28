/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['i.ytimg.com'], // Allow YouTube thumbnails
  },
  trailingSlash: true,
};

module.exports = nextConfig; 