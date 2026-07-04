/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@lotus/ui"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
