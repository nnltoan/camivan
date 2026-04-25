/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — for Cloudflare Pages / GitHub Pages
  output: 'export',
  // next/image optimizer requires a server; static export must use unoptimized
  images: {
    unoptimized: true,
  },
  // Generates /blog/abc/index.html instead of /blog/abc.html — friendly URLs
  trailingSlash: true,
};

module.exports = nextConfig;
