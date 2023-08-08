<script setup>
    import { ref } from 'vue';
    import { users } from './data/data';

    const showLoginForm = ref(true);
    const showRegisterForm=ref(false);
    const showWelcome=ref(false);
    const isLogout=ref(false);

    const username = ref('');
    const password = ref('');

    const newUsername = ref('');
    const newPassword = ref('');

    const login = () => {
      const user = users.value.find((user) => user.username === username.value && user.password === password.value);
      if (user) {
        alert('Login successful!');
        showLoginForm.value=false;
        showRegisterForm.value=false;
        showWelcome.value=true;
        isLogout.value=true;
      } else {
        alert('Invalid credentials');
      }
    };

    const logout=()=>{
      isLogout.value=false;
      showLoginForm.value=true;
      showWelcome.value=false;
      clear();
    }

    const toggleForm = () => {
      showLoginForm.value = !showLoginForm.value;
      showRegisterForm.value=!showRegisterForm.value;
      clear();
    };

    const userExists = () => {
      return users.value.some((user) => user.username === newUsername.value);
    };

      const register = () => {
      if (userExists()) {
        alert('Username already exists. Please choose a different username.');
      } else {
        const newUser = {
          id: users.value.length + 1, // Use .value to access the ref's value
          username: newUsername.value,
          password: newPassword.value,
        };
        users.value.push(newUser); // Use .value to access the ref's value
        alert('Registration successful!');
        clear();
      }
    };

    const clear=()=>{
      username.value='';
      password.value='';
    }

</script>

<template>
    <div v-if="isLogout" class="absolute top-1 right-7 hover:text-blue-600">
        <button @click="logout" class="px-3 py-1 text-xl outline-none">Logout</button>
    </div>
  <div class="container mx-auto h-96 w-96 flex items-center justify-center" :class="showWelcome?'w-full':'w-96'">
    <div v-if="showLoginForm">
      <form @submit.prevent="login" class="w-full p-6 space-y-6 bg-white rounded shadow-md">
        <h2 class="text-2xl text-blue-800 mb-0 font-semibold">Login</h2>
        <div>
            <label for="username" class="block text-sm text-left font-medium text-gray-700">Username</label>
            <input type="text" v-model="username" id="username" name="username" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <label for="password" class="block text-sm text-left font-medium text-gray-700">Password</label>
            <input type="password" v-model="password" id="password" name="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none">Login</button>
        </div>
        <p class="text-right">Don't have an account? <a class="text-blue-600" href="#" @click.prevent="toggleForm">Register</a></p>
      </form>
    </div>
    
    <div v-if="showRegisterForm">
      <form @submit.prevent="register" class="w-full p-6 space-y-6 bg-white rounded shadow-md">
        <h2 class="text-2xl mb-0 text-blue-800 font-semibold">Register</h2>
        <div>
            <label for="username" class="block text-sm text-left font-medium text-gray-700">Username</label>
            <input type="text" v-model="username" id="username" name="username" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <label for="password" class="block text-sm text-left font-medium text-gray-700">Password</label>
            <input type="password" v-model="password" id="password" name="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none">Register</button>
        </div>
        <p class="text-right">Already have an account? <a class="text-blue-600" href="#" @click.prevent="toggleForm">Login</a></p>
      </form>
    </div>
    <div v-if="showWelcome" class="flex flex-col w-full items-center">
        <img class="w-60" src="../public/images/welcome2.png" alt="">
        <h1 class="text-4xl">Welcome Mr. {{ username }} to our page!</h1>
    </div>
  </div>
</template>

