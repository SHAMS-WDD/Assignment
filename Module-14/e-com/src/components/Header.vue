<script setup>
import { authStore } from '../store/store';
import { cart } from '../store/cart';
const auth = authStore
</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">
    <section class="flex justify-between w-full">
      <h1>Storefront Ecommerce (<span>{{ auth.user?.name }}</span>)</h1>
      <p><span v-if="!auth.isAuthenticated" class="me-10"><router-link to="/signup">Sign Up</router-link></span>
      <span v-if="!auth.isAuthenticated" class="me-28"><router-link to="/login">Login</router-link></span>
        <span class="text-[20px]">Cart</span>
        
        
        <router-link to="/cart"><i class="fa-solid fa-cart-shopping ms-1 me-14 relative  hover:text-green-500"><span class="bg-white text-black text-sm text-center rounded-full h-6 w-5 absolute bottom-3 left-7">{{ cart.totalCartItems }}</span></i></router-link>
        
        
        <button v-if="auth.isAuthenticated" @click="auth.logout()" class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
          <span>Logout</span>
        </button>
      </p>
    </section>
  </header>

</template>

<style scoped></style>