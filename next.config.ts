import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Only include experimental options that are supported in your Next.js version
    // Remove appDir and fontLoaders if unsupported
    // appDir: true, 
    // fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
};

export default nextConfig;
