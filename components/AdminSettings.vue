<template>
  <VCard flat border rounded="lg" class="pa-6">
    <p class="font-weight-semibold">Settings</p>
    <span class="text-medium-emphasis text-body-2">Manage your cookie settings here.</span>

    <VList lines="two">
      <VListItem class="px-0" v-for="(s, i) in settings" :key="i">
        <label :for="s.title" class="cursor-pointer">
          <VListItemTitle class="font-weight-semibold text-body-2" v-text="s.title" />
        </label>
        <VListItemSubtitle class="text-body-2 mt-1" v-text="s.subtitle" />
        <template #append>
          <VSwitch inset color="primary" hide-details :id="s.title" class="px-2" />
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>

<script setup lang="ts">
  const settings = [
    {
      title: "Strictly Necessary",
      subtitle: "These cookies are essential in order to use the website and use its features.",
    },
    {
      title: "Functional",
      subtitle:
        "These cookies are used to provide a more personalized experience and to track your whereabouts around our website in compliance with the European General Data Protection Regulation.",
    },
    {
      title: "Performance",
      subtitle:
        "These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media.",
    },
    {
      title: "More Information",
      subtitle:
        "If you have any questions about our use of cookies or other technologies, please email us",
    },
  ];
</script>
