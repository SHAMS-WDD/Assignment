<script setup>
import {ref} from 'vue';
import { authStore } from './store/store.js';
const auth = authStore

</script>

<template>
 
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">
    <section class="flex justify-between w-full">
      <div class="flex items-center">
        <h1>A Wonderful Blog</h1>
      
      
    </div>
      
      <p>
        <button v-if="auth.isAuthenticated" @click="auth.logout()" class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
          <span>Logout</span>
        </button>
      </p>
    </section>
  </header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <div class="text-center">
        <img :src="auth.user.pic" height="50" width="50" alt="" class="block mx-auto rounded-[50%]">
        <h1 class="text-white"><span>{{ auth.user?.name }}</span></h1>
        <p class="text-blue-200 text-sm hover:text-red-200"><router-link to="/profile">Edit My Profile</router-link></p>

      </div>
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>