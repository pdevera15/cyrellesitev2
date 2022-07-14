/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  env: {
    SERVER:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "http://cyrellesitev2.vercel.app",
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
