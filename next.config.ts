import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mohali-carpet-shop",
        destination: "/carpet-shop-mohali",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
