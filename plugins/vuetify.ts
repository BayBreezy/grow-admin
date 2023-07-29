import { createVuetify, IconSet, ThemeDefinition, IconProps } from "vuetify";
import { VBtn } from "vuetify/components/VBtn";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { Icon } from "@iconify/vue";
import "vuetify/styles";

// Custom icons
const custom: IconSet = {
  // @ts-ignore
  component: (props: IconProps) => h(Icon, { icon: props.icon, ...props }),
};

// Customize light and dark themes
const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#6366f1",
    error: "#ef4444",
    "on-background": "#0f172a",
    "on-surface": "#0f172a",
    gray: "#64748b",
    "primary-btn": "#0f172a",
  },
  variables: {
    "border-color": "#e2e8f0",
    "border-opacity": 1,
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#6366f1",
    background: "#0B0E15",
    surface: "#0B0E15",
    "on-background": "#f8fafc",
    "on-surface": "#f8fafc",
    gray: "#94a3b8",
    "primary-btn": "#f1f5f9",
  },
  variables: {
    "border-color": "#1e293b",
    "border-opacity": 1,
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    aliases: {
      PrimaryBtn: VBtn,
    },
    defaults: {
      VTextField: {
        color: "primary",
        variant: "outlined",
        density: "compact",
      },
      PrimaryBtn: {
        color: "primary-btn",
        minHeight: "43px",
        flat: true,
        style: "border-radius: 6px; font-size: 14px;",
        class: "font-weight-semibold",
      },
    },
    display: {
      mobileBreakpoint: "lg",
      thresholds: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light,
        dark,
      },
    },
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
