<template>
  <main>
   <div class="container mx-auto flex flex-col space-y-3 w-[70%] bg-slate-50 p-3 shadow-md">
      <div class="text-3xl font-bold text-blue-900 mb-3">
        <h2>Login Form</h2>
      </div>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login" class="bg-blue-600 text-white py-2 rounded-md text-xl">Login</button>
    </div>
  </main>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { authStore } from '../store/piniaStore';

    const auth=authStore();
    const email = ref('');
    const password = ref('');
  
    const login = () => {
      try {
        auth.loginUser({ email: email.value, password: password.value });
        alert('Login successful!');
      } catch (error) {
        alert(error.message);
      }
    };
  </script>
  