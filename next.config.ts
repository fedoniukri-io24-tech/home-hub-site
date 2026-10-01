import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/uk",
        destination: "/sv",
        permanent: true,
      },
      {
        source: "/uk/:path*",
        destination: "/sv/:path*",
        permanent: true,
      },
      {
        source: "/catalog",
        destination: "/sv/catalog",
        permanent: false,
      },
      {
        source: "/catalog/:slug",
        destination: "/sv/catalog/:slug",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/sv/about",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/sv/contact",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/sv/services",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/sv/projects",
        permanent: false,
      },
      {
        source: "/offers",
        destination: "/sv/offers",
        permanent: false,
      },
      {
        source: "/partnerships",
        destination: "/sv/partnerships",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
