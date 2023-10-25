//create home component
<script setup>
import { ref, reactive, onBeforeMount, computed } from 'vue'
import axios from 'axios'
import { cart } from '../store/cart'
import {wishlist} from '../store/wishlist'

import WishListIcon from '../components/WishListIcon.vue'
import { authStore } from '../store/store'

const products = ref([])
function getSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}
onBeforeMount(() => {
    axios.get('http://localhost:8000/api/products')
        .then(res => {
            products.value = res.data
        })
    
    wishlist.fetchWishlist()
})
    // Define your pagination properties
    const currentPage = ref(1);
    const itemsPerPage = 12; // Set the number of products per page to 10

    // Compute the paginated list of products
    const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.value.slice(start, end);
    });

    // Calculate the total number of pages
    const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

    // Method to change the current page
    const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages.value) {
        currentPage.value = newPage;
    }
    };
</script>
<template>
    <div class="bg-white">
        <div class="mx-auto px-12 py-8 ">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
            <p>
                <!-- {{ cart }} -->
                {{ wishlist.items }}
           </p>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20">
                <div v-for="product in paginatedProducts" :key="product.id" class="group flex flex-col justify-end relative">
                    <div class="h-[500px]">
                        <img :src="product.image" class="h-full w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <router-link :to="{ name: 'product', params: { id: product.id } }">
                                    {{ product.title }}
                                </router-link>
                            </h3>

                        </div>
                        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <button @click="cart.addItem(product)" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
                            Add To Cart
                        </button>
                        <!-- <img @click="wishlist.toggleWishlist(product)" class="w-8 cursor-pointer" :src="wishlist.getIcon(product)" alt=""> -->
                            <!-- <WishListIcon :product="product" /> -->
                            <wish-list-icon :product="product" v-if="authStore.isAuthenticated" />

                    </div>
                </div>
            </div>
        </div>
    </div>

      <!-- Pagination controls -->
      <div class="flex items-center space-x-2 justify-center text-2xl">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>

      </div>
  
</template>

<style></style>