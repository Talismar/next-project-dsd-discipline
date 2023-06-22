/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'source.unsplash.com',
      },
      {
        hostname: 'm.media-amazon.com',
      },
    ],
  },
}

module.exports = nextConfig
