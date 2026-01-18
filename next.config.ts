import type { NextConfig } from "next";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    authInterrupts: true,
    turbo: {
      rules: {
        '*.prisma': {
          loaders: ['@prisma/nextjs-monorepo-workaround-plugin'],
        },
      },
    },
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    
    // Exclude Node.js modules from client-side bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;