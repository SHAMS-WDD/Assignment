<script setup>
import axios from 'axios';
import { ref, onBeforeMount } from 'vue';
import { useRouter,useRoute } from 'vue-router';

const route = useRoute();
const productId = ref();
const products = ref([]);
const product = ref({});

onBeforeMount(async () => {
  try {
    productId.value = route.params.id;
    const response = await axios.get('/src/data/data.json');
    
    products.value = response.data.products;
    product.value = products.value.find((p) => p.id === parseInt(productId.value));
    console.log(product);
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
});

</script>

<template>
    <div class="text-right">
         <router-link to="/"><button class="mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
          Back to Home</button>
        </router-link>
    </div>
 <div class="container mx-auto h-screen">
    <div class="flex flex-col mx-auto mt-10 w-1/2 p-4 rounded-lg shadow-lg items-center">
      <h1 class="text-2xl font-bold mb-4">Product Details</h1>
      <img :src="product.image" :alt="product.title" class="w-full" />
      <h1 class="font-bold">{{ product.title }}</h1>
      <p>{{ product.price }}</p>
      <p class="text-justify mt-4">{{ product.description }}</p>
    </div>
  </div>
</template>


