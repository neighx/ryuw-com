import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images uploaded through the CMS are served from Sanity's CDN
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
};

export default nextConfig;
