import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Required in the site too: makes ./app the source dir so site files can override layer files.
  future: { compatibilityVersion: 4 },

  // Shared components, tokens and tooling. The version is pinned in package.json
  // ("unbloched-design-system": "github:...#vX.Y.Z"); bump it there and npm install.
  extends: ["unbloched-design-system"],

  runtimeConfig: {
    public: {
      cloudinaryCloudName: "",
      companyName: "",
    },
  },

  app: {
    head: {
      title: "Your Website Title",
      titleTemplate: "%s | Your Brand Name",
      meta: [
        { name: "description", content: "Your website description" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Your Brand Name" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  compatibilityDate: "2025-03-11",
});
