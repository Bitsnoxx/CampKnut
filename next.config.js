const { default: next } = require("next");
const withPlugins = require("next-compose-plugins");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Twitch / Contentful / Youtube
    domains: ["static-cdn.jtvnw.net", "images.ctfassets.net", "i.ytimg.com"],
    minimumCacheTTL: 600,
  },
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler: {
    removeConsole: isProd,
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
