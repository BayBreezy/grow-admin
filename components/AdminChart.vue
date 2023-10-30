<template>
  <VCard flat border rounded="lg" class="pa-6">
    <p class="font-weight-semibold mb-5">Overview</p>
    <BarChart :height="300" :chart-data="data" :options="options" />
  </VCard>
</template>

<script setup lang="ts">
  import { BarChart } from "vue-chart-3";
  import type { ChartData, ChartOptions } from "chart.js";
  import { useTheme } from "vuetify";
  const theme = useTheme();

  const options = computed<ChartOptions<"bar">>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { intersect: false },
    },
    font: {
      family: "Inter var",
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { color: theme.current.value.colors["gray"] },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: { color: theme.current.value.colors["gray"] },
      },
    },
  }));

  const salesData = ref([25, 20, 30, 22, 17, 29, 55, 40]);

  const data = computed<ChartData<"bar">>(() => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Sales",
        data: salesData.value,
        backgroundColor: theme.current.value.colors["primary"],
        barThickness: "flex",
        borderRadius: 4,
      },
    ],
  }));

  const shuffleData = () => {
    salesData.value = salesData.value.map(() => Math.floor(Math.random() * 100));
  };

  let intervalId: NodeJS.Timeout;

  onMounted(() => {
    intervalId = setInterval(shuffleData, 10000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });
</script>
