<template>
  <VCard flat border rounded="lg" class="pa-6">
    <p class="font-weight-semibold">Notifications</p>
    <span class="text-medium-emphasis text-body-2">Manage your notification settings here.</span>

    <VItemGroup mandatory class="mt-5">
      <VItem v-for="(n, i) in settings" :key="i" v-slot="{ toggle, isSelected }">
        <VListItem @click="toggle" class="mt-4 px-1 rounded">
          <template #prepend>
            <VIcon
              :class="[isSelected && 'text-primary']"
              class="mr-5 mb-5"
              v-if="n.icon"
              :icon="n.icon"
            />
          </template>
          <VListItemTitle
            :class="[isSelected && 'text-primary']"
            v-text="n.title"
            class="font-weight-semibold text-body-2"
          />
          <VListItemSubtitle class="text-body-2 mt-1" v-text="n.subtitle" />
        </VListItem>
      </VItem>
    </VItemGroup>
  </VCard>
</template>

<script setup lang="ts">
  const settings = [
    {
      icon: "solar:bell-line-duotone",
      title: "Everything",
      subtitle: "Email digest, mentions & all activity.",
    },
    {
      icon: "solar:mention-circle-line-duotone",
      title: "Mentions",
      subtitle: "Only mentions.",
    },
    {
      icon: "solar:bell-off-line-duotone",
      title: "Nothing",
      subtitle: "No notifications.",
    },
    {
      icon: "solar:shield-warning-line-duotone",
      title: "Urgent",
      subtitle: "Only urgent notifications.",
    },
  ];
</script>
