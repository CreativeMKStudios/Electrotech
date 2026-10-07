import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Set SITE_URL to the live domain before you publish.
// Canonical links, the sitemap, and Open Graph URLs all use this value.
const site = process.env.SITE_URL || "https://electrotech-uk.com";

export default defineConfig({
  site,
  trailingSlash: "never",
  compressHTML: true,
  prefetch: true,
  redirects: {
    "/about-us": "/about",
    "/aboutus": "/about",
    "/contact-us": "/contact",
    "/contactus": "/contact",
    "/quote": "/contact",
    "/get-a-quote": "/contact",
    "/home": "/",
    "/gallery": "/projects",
    "/testimonials": "/reviews",
  },
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.endsWith("/200"),
    }),
  ],
});
