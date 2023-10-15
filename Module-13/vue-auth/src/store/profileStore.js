import { reactive, computed, watch } from 'vue';
import router from '../router/router.js';

const calculateAge = (user) => {
  if (user.DOB) {
    const today = new Date();
    const birthDate = new Date(user.DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null;
};

const profStore = reactive({
  birthdate: null,
  user: JSON.parse(localStorage.getItem('user')),
  age: computed(() => calculateAge(profStore.user)), // Use a computed property for age
  
  editProfile(){
    console.log(profStore.user)
    localStorage.setItem('user',JSON.stringify(profStore.user))
},
  rightMessage: computed(() => {
    if (profStore.age !== null) {
      return profStore.age >= 18 ? 'You have the right to vote.' : '';
    }
    return '';
  }),

  voteMessage: '',
});

watch(() => profStore.age, (newAge) => {
  // Update the message when age changes
  profStore.voteMessage = newAge >= 18 ? 'You are eligible for voting.' : 'You are not eligible for voting.';
}, { immediate: true });

export { profStore };
