/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE: process.env.NOTION_DATABASE,
  },
  images: {
    domains: [
      "notion.so",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
