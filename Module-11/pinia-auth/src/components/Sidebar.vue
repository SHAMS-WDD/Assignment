//create home component
<script setup>
import { RouterLink } from 'vue-router';
import { authStore } from '../store/piniaStore';
const auth = authStore();
</script>
<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/posts">All Posts</router-link>
          </li>
          <li>
            <router-link to="/science">Science</router-link>
          </li>
          <li>
            <router-link to="/education">Education</router-link>
          </li>
          <li>
            <router-link to="/itcorner">IT Corner</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>

          <!-- <li v-if="auth.user.role=='admin'">
            <router-link to="/admin">Admin</router-link>
          </li>

          <li v-if="auth.user.role=='editor' || auth.user.role=='admin'">
            <router-link to="/editor">Editor</router-link>
          </li>

          <li v-if="!auth.isAuthenticated">
            <router-link to="/login">Login</router-link>
          </li> -->
        </ul>
      </section>
</template>

<style></style>