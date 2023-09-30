<template>
  <section class="flex h-screen">
    <main class="w-full p-5">
      <div class="mx-auto text-center">
        <h1 class="text-3xl bold">Dashboard</h1>
        <p>Welcome, {{ currentUser.email }}</p>
      </div>
    </main>
  </section>
   
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
  