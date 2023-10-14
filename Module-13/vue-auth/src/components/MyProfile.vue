<script setup>
import { ref, computed, watch } from 'vue';
import {profStore} from '../store/profileStore.js';
import { authStore } from '../store/store';
const auth=authStore;
const profile =profStore;

</script>

<template>

  <div>
    <div class="text-center mb-10">
        <img :src="auth.user.pic" height="50" width="50" alt="" class="block mx-auto rounded-[50%]">
        <h1 class="text-blue-900"><span>{{ auth.user?.name }}</span></h1>
        <!-- <input id="birthdateInput" type="date" v-model="profile.birthdate" /> -->
        <div v-if="profile.age !== null">
          <p>Age: {{ profile.age }} </p>
          <p>{{ profile.rightMessage }}</p>

          {{ profile.voteMessage }}
        </div>
      </div>
    </div>

  <div class="container w-[60%] mx-auto">
    <div class="flex flex-col space-y-3">
      <h1 class="text-center">Your Profile Page</h1>
      <span>Name:</span><input v-model="auth.user.name" placeholder="Name" />
      <span>Password:</span><input v-model="auth.user.password" placeholder="Password" />
      <span>Role:</span><input v-model="auth.user.role" placeholder="Role" />
      <span>DOB:</span><input id="birthdateInput" type="date" v-model="profile.user.DOB" />

    </div>
  <button @click="auth.editProfile()" class="bg-blue-600 p-3 w-full mt-3 text-white">Save Changes</button>
  </div>
  
</template>

<style scoped>
 
</style>
