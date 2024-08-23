import {NextFederationPlugin} from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    output: "export",
    images: {
      unoptimized: true
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/catch-all', // 重定向所有未匹配路径到一个页面
            },
        ];
    },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'wpc',
            remotes: {},
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              './index': './src/component/test.tsx'
            },
            extraOptions: {
                exposePages: true
            }
          }),
      );
    }
    return config;
  },
};

export default nextConfig;
