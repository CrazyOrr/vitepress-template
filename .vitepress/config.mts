import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Template",
  description: "A GitHub template repository for VitePress websites.",
  srcDir: "./src",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    // ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content:
          "VitePress Template | A GitHub template repository for VitePress websites",
      },
    ],
    ["meta", { property: "og:site_name", content: "VitePress Template" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vitepress.dev/vitepress-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://vitepress.dev/" }], // Change to your website's url
  ],
  sitemap: {
    hostname: "https://vitepress.dev", // Change to your website's url
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.svg", width: 24, height: 24 },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
