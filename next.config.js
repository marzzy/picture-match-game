/** @type {import('next').NextConfig} */
const nextConfig = {
  "baseUrl": ".",
  "paths": {
    "@/components/*": ["app/components/*"]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
