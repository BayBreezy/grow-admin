<template>
  <VRow class="mt-5">
    <template v-for="(s, i) in stats">
      <VCol cols="12" sm="6" lg="3">
        <VCard class="pa-6" flat border rounded="lg">
          <div class="d-flex justify-space-between align-center">
            <span class="text-body-2 font-weight-semibold">{{ s.title }}</span>
            <VIcon size="20" class="text-medium-emphasis" :icon="s.icon" />
          </div>
          <p class="font-weight-bold text-h5 mt-2">{{ s.value }}</p>
          <small class="text-caption text-medium-emphasis">{{ s.percentage }}</small>
        </VCard>
      </VCol>
    </template>
  </VRow>
</template>

<script setup lang="ts">
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      percentage: "+20.1% from last month",
      icon: "solar:dollar-line-duotone",
    },
    {
      title: "Subscriptions",
      value: "+2350",
      percentage: "+180.1% from last month",
      icon: "solar:users-group-rounded-line-duotone",
    },
    {
      title: "Sales",
      value: "+12,234",
      percentage: "+19% from last month",
      icon: "solar:card-2-line-duotone",
    },
    {
      title: "Active Now",
      value: "+574",
      percentage: "+21 from last hour",
      icon: "solar:transfer-vertical-line-duotone",
    },
  ];
</script>
