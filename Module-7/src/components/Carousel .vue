<template>
    <div class="mb-16 text-green-700 font-bold"><h1>Carousel</h1></div>
    <div class="my-10">
       <input type="text" v-model="newItem">
       <button @click="addNewitem()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Button
       </button>
     </div>
     
     <div class="mx-auto items" id="carousel">
        <div class="item" v-for="(slide, index) in slides" :key="index">
           <span class="index-number">{{ index + 1 }}</span>
           <img :src="slide" class="w-full" alt="Carousel Slide" />
        </div>
        
       </div>
   </template>
   
  <script setup>
     import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
   
   const slides = ref([
     '../public/images/slide-1.jpg',
     '../public/images/slide-2.jpg',
     '../public/images/slide-3.jpg',
     '../public/images/slide-4.jpg',
     '../public/images/slide-5.jpg',
   ])
     let carousel = null
     const newItem = ref('https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80')
   
   function addNewitem() {
     slides.value.push(newItem.value)
     carousel.destroy()
     nextTick(function () {
       carousel = new Flickity('#carousel',{})
     })
   }
     
     onMounted(() => {
       carousel = new Flickity('#carousel',{})
     })
     
     onBeforeUnmount(() => {
       if (carousel) {
         carousel.destroy();
       }
     })
  </script>
   
   <style scoped>
   .items {
     width: 600px;
     height: 400px;
     position: relative;
   }
   
   .item {
     width: 600px;
     height: 400px;
     background-color: #ccc;
     background-size: cover;
   }
   
   .index-number {
     position: absolute;
     top: 10px; 
     left: 50%;
     transform: translateX(-50%);
     background-color: rgba(0, 0, 0, 0.7);
     color: white;
     padding: 5px 10px;
     border-radius: 5px;
     font-size: 14px;
   }
   </style>