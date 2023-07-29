<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from "vuetify";

  const theme = useTheme();

  onMounted(() => {
    // Wait for the next tick & update theme
    nextTick(() => {
      // Get the theme from loacal storage
      const growTheme = localStorage.getItem("grow-theme");
      // If the theme is dark, set the theme to dark
      theme.global.name.value = growTheme === "dark" ? "dark" : "light";
    });
  });
</script>
