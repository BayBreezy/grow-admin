<template>
  <VContainer class="px-lg-15">
    <h1 class="text-h5 font-weight-semibold">Dashboard</h1>
    <AdminStats />
    <VRow>
      <VCol cols="12" lg="6">
        <AdminChart />
      </VCol>
      <VCol cols="12" lg="6">
        <AdminSales />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12" lg="6">
        <AdminSettings />
      </VCol>
      <VCol cols="12" lg="6">
        <AdminNotifications />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Dashboard",
    description: "Track team progress here. You are alomost at your goal.",
  });
</script>
