<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
 
  <section class="flex">
    <aside class="w-[450px] bg-slate-100">
      <router-view name="sidebar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <RouterView :key="$route.fullPath" />
    </main>
  </section>
   <Footer />
</template>

<style scoped>
  
</style>



