/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'milkywayfiasco.sfo2.cdn.digitaloceanspaces.com',
    ],
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});
module.exports = withBundleAnalyzer(nextConfig);
