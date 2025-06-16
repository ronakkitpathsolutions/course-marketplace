/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any HTTPS-hosted image
      },
      {
        protocol: "http",
        hostname: "**", // Allows any HTTP-hosted image
      },
    ],
  },
  eslint: {
    /** Only run ESLint on these directories with `next lint` and `next build`. */
    dirs: ["src"],
    /** Do not run ESLint during production builds (`next build`). */
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
