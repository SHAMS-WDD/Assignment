<template>
  <div class="mt-32 text-red-400 font-bold"><h1>Pie chart</h1></div>
  <div class=" mx-auto w-[400px] h-[400px] mt-10 bg-gray-400">
    <canvas id="chart"></canvas>
  </div>

  <div class="mt-20">
    <input type="text" v-model="newItem">
    <button @click="updateChart()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

const newItem = ref(16);
let chart = null;

// Sample data for the pie chart
const dataset = [
  300, 50, 100
]

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(43, 105, 86)',
      'rgb(21, 21, 186)',
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};

onMounted(() => {
  // Create the pie chart when the component is mounted
  const ctx = document.getElementById('chart')
  chart = new Chart(ctx, config)
  });

  function updateChart() {
  dataset.push(newItem.value)
  chart.data.datasets[0].data = dataset
  chart.update()
}

onBeforeUnmount(() => {
  // Clean up when the component is about to be unmounted
  if (chart) {
    chart.destroy();
  }
});
</script>

<style>
/* Add any desired styling for your chart container here */
</style>




