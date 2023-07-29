<template>
  <VCard flat border rounded="lg" class="pa-6">
    <p class="font-weight-semibold">Recent Sales</p>
    <span class="text-medium-emphasis text-body-2">You made 265 sales this month.</span>

    <ul style="list-style-type: none" class="mt-5">
      <template v-for="(person, i) in data" :key="i">
        <li class="d-flex align-center justify-space-between mt-5">
          <div class="d-flex items-center">
            <VAvatar size="36" :image="person.picture.thumbnail"></VAvatar>
            <div class="ml-4 d-flex flex-column">
              <p class="font-weight-semibold text-body-2">
                {{ person.name.first }} {{ person.name.last }}
              </p>
              <span class="text-medium-emphasis text-caption">{{ person.email }}</span>
            </div>
          </div>
          <span class="font-weight-bold text-body-2">+{{ getRandomNumber() }}</span>
        </li>
      </template>
    </ul>
  </VCard>
</template>

<script setup lang="ts">
  const { data } = await useAsyncData(
    "recent-Sales",
    () => $fetch("https://randomuser.me/api/?results=5"),
    { transform: (data: any) => data.results }
  );

  const getRandomNumber = () => Math.floor(Math.random() * 100);
</script>
