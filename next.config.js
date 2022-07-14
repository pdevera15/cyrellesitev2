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
    GITHUB_ID: "ac64028fd9ea25d1e592",
    GITHUB_SECRET: "953c73ea1e3dfe6e3cb22081f6501ff004e1e7b5",
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
