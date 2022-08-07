const { default: next } = require("next");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["static-cdn.jtvnw.net", "images.ctfassets.net"],
  },
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler: {
    /* removeConsole: true, */
  },
};

/* module.exports = nextConfig; */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  },
});

module.exports = withMDX(nextConfig);
