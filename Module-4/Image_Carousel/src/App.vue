<template>
  <div class="image-slider">
    <div class="slider bg-gray-100 flex items-center justify-center">
      <img :src="currentImage" alt="Image">
    </div>
    <div class="controls">
      <button @click="prevImage">Previous</button>
      <button @click="nextImage">Next</button>
    </div>
  </div>
</template>

<script>
  import { ref, computed } from 'vue';

export default {

  setup() {
     const images = ref([
      'Images/Image-1.jpeg',
      'Images/Image-2.jpeg',
      'Images/Image-3.jpeg',
      'Images/Image-4.jpeg'
      // Add more images here
    ]);
    const currentIndex = ref(0);
    const currentImage = computed(() => images.value[currentIndex.value]);

    const prevImage = () => {
      currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    return {
      images,
      currentIndex,
      prevImage,
      nextImage,
      currentImage
    };
  },
};
</script>

<style>
/* Add your desired styling here */
.image-slider {
  width: 30vw;
  margin: 0 auto;
}
.slider {
  text-align: center;
  margin-bottom: 20px;
}
.slider img {
  width: 100%;
  height: auto;
}
.controls {
  display: flex;
  justify-content: space-between;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
