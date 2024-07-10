import vuetify from "vite-plugin-vuetify";

const title = "Grow Admin";
const description = "UI for a product/customer/order management app. I am really not sure lol.";
const color = "#6366f1";
const lang = "en";
const image = "/cover.png";
const url = "https://grow-admin.behonbaker.com/";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  build: { transpile: ["vuetify"] },
  css: ["~/assets/main.css"],
  experimental: { typedPages: true },

  modules: [
    "@vee-validate/nuxt",
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook(
        "vite:extendConfig",
        (config) =>
          config?.plugins?.push(vuetify({ styles: { configFile: "assets/vars.scss" } })) as any
      );
    },
  ],

  veeValidate: {
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  app: {
    head: {
      title,
      titleTemplate: `%s | ${title}`,
      link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  pwa: {
    icon: {
      fileName: "icon.svg",
      source: "public/icon.svg",
    },
    meta: {
      author: "Behon Baker",
      theme_color: color,
      lang,
      description,
      favicon: true,
      name: title,
    },

    manifest: {
      name: title,
      short_name: title,
      description,
      theme_color: color,
      lang,
    },
  },

  compatibilityDate: "2024-07-09",
});