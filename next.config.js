/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './')],
  },
  // 配置代理或者跨域代理
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://xxx/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
