const nextConfig = {
  experimental: {
    appDir: true, // ✅ This is needed for App Router to work
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
