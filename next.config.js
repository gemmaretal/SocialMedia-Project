/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
  },
};
module.exports = {
  reactStrictMode: true,
  nextConfig,
};
