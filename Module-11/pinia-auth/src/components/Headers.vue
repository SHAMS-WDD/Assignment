<template>
    <header class="w-full h-12 border relative bg-slate-100">
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