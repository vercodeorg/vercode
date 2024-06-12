/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
  images: {
    domains: ["vercode.s3.sa-east-1.amazonaws.com"],
  },
  experimental: { esmExternals: true },
});

module.exports = nextConfig;
