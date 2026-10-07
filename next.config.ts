import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  async headers() {
    return [
      {
        source: "/projetos/curriculo-caue-netto.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="curriculo-caue-netto.pdf"',
          },
        ],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
