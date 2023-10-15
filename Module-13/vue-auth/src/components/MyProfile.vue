<script setup>
import { ref, computed, watch } from 'vue';
import {profStore} from '../store/profileStore.js';
import { authStore } from '../store/store';
const auth=authStore;
const profile =profStore;

const userName = ref(profile.user.name);
const userPassword = ref(profile.user.password);
const userRole = ref(profile.user.role);
const userDOB = ref(profile.user.DOB);

const saveChanges = () => {
  profile.user.name = userName.value;
  profile.user.password = userPassword.value;
  profile.user.role = userRole.value;
  profile.user.DOB = userDOB.value;

  profile.editProfile(); // Save changes
};

</script>

<template>

  <div>
    <div class="text-center mb-10 relative">
        <img :src="profile.user.pic" height="70" width="70" alt="" class="block mx-auto rounded-[50%]">
        <h1 class="font-semibold text-xl text-green-900"><span>{{ profile.user?.name }}</span></h1>
        <!-- <input id="birthdateInput" type="date" v-model="profile.birthdate" /> -->
        <div v-if="profile.age !== null">
          <p>Age: {{ profile.age }} </p>
          <span class="w-24 text-sm absolute right-56 top-4 text-green-900">{{ profile.voteMessage }}</span>
          <span class="w-24 text-sm absolute left-56 top-4 text-yellow-600">{{ profile.rightMessage }}</span>
        </div>
    </div>
  </div>

  <div class="container w-[60%] mx-auto">
    <div class="flex flex-col space-y-3">
        <h1 class="text-center text-blue-900 font-semibold text-xl">Your Profile Page</h1>
        <span>Name:</span><input v-model="userName" placeholder="Name" />
        <span>Password:</span><input v-model="userPassword" placeholder="Password" />
        <span>Role:</span><input v-model="userRole" placeholder="Role" />
        <span>DOB:</span><input id="birthdateInput" type="date" v-model="userDOB" />
    </div>
      <button @click="saveChanges" class="bg-blue-600 p-3 w-full mt-3 text-white hover:bg-blue-700 rounded-sm">Save Changes</button>
  </div>
  
</template>

<style scoped>
 
</style>
