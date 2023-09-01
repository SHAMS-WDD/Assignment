<script setup>
import { ref} from 'vue';
import axios from 'axios';

const blogPosts = ref([]);
const menuItems=ref([]);

const fetchBlogPosts = async () => {
  try {
    let url='https://basic-blog.teamrabbil.com/api/post-list/2';
    const response = await axios.get(url);
    blogPosts.value = response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
};

fetchBlogPosts();

const fetchMenuItems = async () => {
  try {
    let url='https://basic-blog.teamrabbil.com/api/post-categories';
    const response = await axios.get(url);
    menuItems.value = response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
};
fetchMenuItems();

  const itemActive=ref('');
  const activate=(name)=>{
    itemActive.value=name;
  }
</script>

<template>
  <h1 class="mb-5 text-4xl font-bold text-green-800 text-center bg-slate-100 p-10">SIMPLE BLOG</h1>
  <div class="mx-10">
    <header>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.id" @click="activate(item.name)" :class="{active:itemActive==item.name}">{{ item.name }}</li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container mx-auto">
    <div v-for="post in blogPosts" :key="post.id">
      <div class="blog-post">
        <div class="img">
          <img :src="post.img" alt="Blog Post Image" />
        </div>
        <div class="my-5 font-bold">
            <h1>{{ post.title }}</h1>
        </div>
        <p>{{ post.short }}</p>
      </div>
    </div>
  </div>

  <footer class="p-10 text-center bg-slate-100">
    Copyright © 2023 Creative Blog | Powered by Shams-it Blog
  </footer>
</template>

<style scoped>
  ul{list-style: none;display: flex; justify-content: flex-end;}
  ul li{padding: 10px; transition: 0.3s; color:white;}
  ul li:hover{color:rgb(2, 99, 18); cursor: pointer;background-color: rgb(255, 102, 0);}
  nav{background-color: rgb(77, 130, 245);}
  .active{background-color: rgb(255, 102, 0); color:green;}
  .img{position: relative;}
  .bgtitle{width: 150px; text-align: center; position: absolute; padding: 0; top: 290px; left: 20px; background-color:aliceblue; opacity: 0.3; border-radius: 5px;}
  .blog-post {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
  }
  h2{color:green; margin: 0; padding: 0;}
  h1{text-decoration: underline;}
</style>
