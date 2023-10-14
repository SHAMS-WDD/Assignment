import {ref,reactive,computed,watch} from 'vue';

import router from '../router/router.js'
const profStore = reactive({
    birthdate: null,
    age:null,
    user: JSON.parse(localStorage.getItem('user')),
    
     calculateAge:() => {
        
      if (profStore.user.DOB) {
        const today = new Date();
        const birthDate = new Date(profStore.user.DOB);
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
         
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
           
        }
         profStore.birthdate=profStore.user.DOB;     
        return age; 
      
      }
      return null;
    },
    
   rightMessage: computed(() => {
      if (profStore.age !== null) {
        return profStore.age >= 18 ? 'You have right to vote.' : '';
      }
      return '';
    }),
    voteMessage:''
   
})

const age = computed(() => profStore.calculateAge());
profStore.age = age;

watch(profStore.age, (newAge) => {
  // Update the message when age changes
  profStore.voteMessage = newAge >= 18 ? 'You are eligible for voting.' : 'You are not eligible for voting.';
});

export {profStore}
