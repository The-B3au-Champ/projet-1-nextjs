/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@vercel/postgres', '@vercel/edge-config'],
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals.push('@vercel/edge-config')
      }
      return config
    },
  }
  
  module.exports = nextConfig