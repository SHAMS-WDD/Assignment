<script setup>
import { authStore } from './store/store';
import Header from './components/Header.vue';
const auth = authStore
</script>

<template>
  <Header />
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>