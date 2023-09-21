  <script setup>
    import axios from 'axios';
    import { ref, onBeforeMount } from 'vue';
    import { useRouter } from 'vue-router';
    
    const route = useRouter();
    const products = ref([]);
    
    onBeforeMount(async () => {
      try {
        const response = await axios.get('/src/data/data.json');
        products.value = response.data.products;
       
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });
  </script>

<template>
  <div class="container mx-auto h-screen text-center">
      <h1 class="mt-7 text-3xl font-medium mb-7">Product List</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="product in products" :key="product.id" class="flex flex-col justify-end items-center bg-white p-4 rounded-lg shadow-lg">
              <img :src="product.image" :alt="product.title" class="object-cover mb-4" />
            
                <h3 class="text-lg font-semibold">{{ product.title }}</h3>
              <p class="text-gray-700">{{ product.price }}</p>
              <router-link :to="'/product/' + product.id" class="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              View Details
              </router-link>
          </div>
      </div>
  </div>
</template>

