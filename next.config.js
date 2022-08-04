const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["placekitten.com"],
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withPlugins(
  [[withMDX, { pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] }]],
  {
    ...nextConfig,
  }
);
