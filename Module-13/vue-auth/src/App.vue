<script setup>
import {ref} from 'vue';
import { authStore } from './store/store.js';
import {profStore} from './store/profileStore.js';
const auth = authStore
const profile=profStore

</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">
    <section class="flex justify-between w-full">
      <div class="flex items-center">
        <h1>An Informative Blog</h1>
      
      
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
      <div class="text-center relative mt-2">
        <img :src="auth.user.pic" height="50" width="50" alt="" class="block mx-auto rounded-[50%]">
        <span class="w-32 text-sm text-yellow-300 absolute right-0 top-4">{{ profile.voteMessage }}</span>
        <h1 class="text-green-400 font-semibold"><span>{{ profile.user?.name }}</span></h1>
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