/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
  experimental: { esmExternals: true }
});


module.exports = nextConfig
