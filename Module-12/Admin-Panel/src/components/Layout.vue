<script setup>
import { RouterView } from 'vue-router';
import Footer from '../components/Footer.vue';
import { authStore } from '../store/piniaStore';
import Headers from '../components/Headers.vue';

const auth=authStore();
</script>

<template>
  <Headers />
  <section class="flex h-screen">
    <aside class="w-[450px] bg-black">
      <div class="text-white font-bold text-2xl m-3"><h1>Dashboard</h1></div>
      <router-view name="leftsidebar"></router-view>
    </aside>
    <main class="w-full p-5">
      <div class="mx-auto text-center">
        <RouterView />
      </div>
    </main>
  </section>
  <Footer />
</template>

<style scoped>

</style>
