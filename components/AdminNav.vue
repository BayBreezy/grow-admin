<template>
  <VNavigationDrawer v-model="drawer" expand-on-hover :rail="rail" class="nav" width="270">
    <div
      v-if="$vuetify.display.lgAndUp"
      style="position: absolute; top: 5px; right: -20px; z-index: 9999"
    >
      <VBtn @click="rail = !rail" size="small" flat border icon>
        <VIcon :icon="rail ? 'heroicons:chevron-right' : 'heroicons:bars-2'" />
        <VTooltip activator="parent">
          {{ rail ? "Expand" : "Collapse" }}
        </VTooltip>
      </VBtn>
    </div>
    <!-- Logo & Logged in user -->
    <div class="pt-10 pb-7 bg-background" style="position: sticky; top: 0; z-index: 99">
      <VImg
        src="/icon.svg"
        contain
        class="mx-auto"
        :height="rail ? 50 : 70"
        :width="rail ? 40 : undefined"
      />
      <VScaleTransition leave-absolute>
        <div v-if="!rail">
          <p class="text-center mt-5 font-weight-semibold">John Doe</p>
          <p class="text-center text-body-2 text-medium-emphasis mt-1">
            <a href="mailto:johndoe@tester.com">johndoe@tester.com</a>
          </p>
        </div>
      </VScaleTransition>
    </div>
    <!-- Nav Items -->
    <VList nav>
      <template v-for="(m, i) in menu" :key="i">
        <VListItem v-if="!m.items" link density="comfortable" :to="m.to">
          <template #prepend>
            <VIcon size="22" :icon="m.icon" class="mr-4" />
          </template>
          <VListItemTitle v-text="m.title" class="text-body-2 font-weight-regular" />
        </VListItem>

        <VListGroup :value="m.title" v-if="m.items">
          <template #activator="{ props }">
            <VListItem v-bind="props" density="comfortable">
              <template #prepend>
                <VIcon size="22" :icon="m.icon" class="mr-4" />
              </template>
              <VListItemTitle v-text="m.title" class="text-body-2 font-weight-regular" />
            </VListItem>
          </template>

          <div class="border-s ml-5">
            <template v-for="(child, k) in m.items" :key="`child-${k}`">
              <VListItem
                class="rounded-0"
                style="padding-inline-start: 26px !important"
                link
                color="primary"
                density="compact"
              >
                <VListItemTitle v-text="child.title" class="text-body-2 font-weight-regular" />
              </VListItem>
            </template>
          </div>
        </VListGroup>
      </template>
      <VListItem @click="() => toggleTheme()" color="primary" density="comfortable">
        <template #prepend>
          <VIcon
            key="dark"
            v-if="theme.current.value.dark"
            size="22"
            icon="solar:sun-2-line-duotone"
            class="mr-4"
          />
          <VIcon key="light" v-else size="22" icon="solar:cloudy-moon-line-duotone" class="mr-4" />
        </template>
        <VListItemTitle v-text="`Change theme`" class="text-body-2 font-weight-regular" />
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script setup lang="ts">
  import { useTheme } from "vuetify";

  const rail = ref(false);
  const drawer = useState<boolean | undefined | null>("drawer", () => null);

  const theme = useTheme();
  const menu = [
    { title: "Dashboard", icon: "solar:home-angle-2-line-duotone", to: "/admin/dashboard" },
    {
      title: "Products",
      icon: "solar:box-line-duotone",
      items: [
        { title: "All Products" },
        { title: "Collections" },
        { title: "Inventory" },
        { title: "Purchase Orders" },
        { title: "Transfers" },
        { title: "Gift Cards" },
      ],
    },
    {
      title: "Orders",
      icon: "solar:cart-check-line-duotone",
      items: [
        { title: "All Orders" },
        { title: "Drafts" },
        { title: "Shipping Labels" },
        { title: "Abandoned Checkouts" },
      ],
    },
    {
      title: "Customers",
      icon: "solar:users-group-two-rounded-line-duotone",
      items: [
        { title: "All Customers" },
        { title: "Groups" },
        { title: "Saved Searches" },
        { title: "Marketing" },
      ],
    },
    { title: "Content", icon: "solar:posts-carousel-horizontal-line-duotone" },
    { title: "Discounts", icon: "solar:sale-line-duotone" },
    { title: "Online Store", icon: "solar:cart-2-line-duotone" },
    { title: "Settings", icon: "solar:settings-line-duotone" },
  ];

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
    // set theme to local storage
    localStorage.setItem("grow-theme", theme.global.current.value.dark ? "dark" : "light");
  };
</script>

<style lang="scss" scoped>
  :deep(.v-navigation-drawer__content) {
    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: v-bind("theme.current.value.dark ? '#1d2636' : '#e5e5e5'");
      border-radius: 99999px;
    }
  }
</style>
