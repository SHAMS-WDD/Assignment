<template>
    <header class="w-full flex items-center h-12 border relative bg-slate-100">
      <router-link to="/home" class="m-4 p-2">Home</router-link>
      <router-link to="/about" class="m-4 p-2">About</router-link>
      <router-link to="/contact" class="m-4 p-2">Contact</router-link>
      <button @click="logout" class="bg-slate-500 text-white rounded-md px-5 py-2 absolute right-4">Logout</button>
    </header>
</template>
    
    <script setup>
      import { authStore } from '../store/piniaStore';
      const auth = authStore();
      const currentUser = auth.currentUser;
    
      const logout = () => {
        auth.logoutUser();
        alert('Logout successful!');
      };
    </script>