<script setup>
import { ref, computed, watch } from 'vue';

const birthdate = ref(null);
const smpdate=ref()
const calculateAge = () => {

  if (birthdate.value) {
    const today = new Date();
    const birthDate = new Date(birthdate.value);
    smpdate.value=birthDate.getDate()
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null;
};

const age = computed(calculateAge);

const voteMessage = computed(() => {
  if (age.value !== null) {
    return age.value >= 18 ? 'You are eligible for voting.' : 'You are not eligible for voting.';
  }
  return '';
});

watch(age, (newAge) => {
  // Update the message when age changes
  voteMessage.value = newAge >= 18 ? 'You are eligible for voting.' : 'You are not eligible for voting.';
});
</script>


<template>

  <div>
    <label for="birthdateInput">Enter your birthdate:</label>
    <input id="birthdateInput" type="date" v-model="birthdate" />

    <div v-if="age !== null">
      <p>Your age is: {{ age }} years old.</p>
      <p>{{ voteMessage }}</p>
    </div>
  </div>
  {{smpdate}}
</template>





