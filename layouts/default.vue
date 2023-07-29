<template>
  <div>
    <VApp>
      <!-- Admin Nav Drawer -->
      <AdminNav />
      <VAppBar class="px-lg-10" flat border="b">
        <VBtn
          v-if="$vuetify.display.mdAndDown"
          size="small"
          flat
          border
          icon
          @click="drawer = !drawer"
        >
          <VIcon :icon="drawer ? 'heroicons:chevron-right' : 'heroicons:bars-2'" />
        </VBtn>
        <VSpacer />

        <VBtn icon>
          <v-menu class="elevation-0" activator="parent">
            <v-list border rounded="lg" width="180" nav>
              <VListItem>
                <VListItemTitle class="text-body-2 font-weight-semibold">johndoe</VListItemTitle>
                <VListItemSubtitle>johndoe@example.com</VListItemSubtitle>
              </VListItem>
              <hr class="mb-2 border" />
              <VListItem
                :value="item"
                density="compact"
                v-for="(item, index) in profileMenu"
                :key="index"
              >
                <VListItemTitle class="text-body-2">{{ item.title }}</VListItemTitle>
                <template #append>
                  <VListItemSubtitle v-if="item.shortcut" class="text-caption">{{
                    item.shortcut
                  }}</VListItemSubtitle>
                </template>
              </VListItem>
            </v-list>
          </v-menu>
          <VAvatar image="https://randomuser.me/api/portraits/med/men/75.jpg" size="38" />
        </VBtn>
      </VAppBar>
      <VMain>
        <slot />
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from "vuetify";
  const profileMenu = [
    { title: "Profile", shortcut: "⇧⌘P" },
    { title: "Billing", shortcut: "⇧⌘B" },
    { title: "Settings", shortcut: "⇧⌘S" },
    { title: "New Team" },
    { title: "Logout", shortcut: "⇧⌘Q" },
  ];

  // Global drawer state
  const drawer = useState<boolean | undefined | null>("drawer", () => undefined);
</script>
