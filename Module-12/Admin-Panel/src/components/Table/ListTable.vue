<script setup>
    //import {useRoute} from 'vue-router';
    import { ref } from 'vue';
    //import {useToast} from 'vue-toast-notification';
    import axios from 'axios';
    //const route=useRoute();
    import { useRouter } from 'vue-router';

    const tableData=ref([]);
    const router=useRouter();

    List();
    async function List(){
        let url="/src/data/data.json"
        let res=await axios.get(url)
        tableData.value=res.data.products;
    }
   function showDetails(id){
    router.push({name:'product', params:{id:id}});
    }
</script>

<template>
   <div class="container mx-auto mt-5">
    <div class="text-3xl tetxt-center text-blue-900 font-bold mb-5">
        <h1>Product Table</h1>
    </div>
   
    <table class="min-w-full">
      <thead>
        <tr>
          <th class="border px-4 py-2">Id</th>
          <th class="border px-4 py-2">Title</th>
          <th class="border px-4 py-2">Unit Price</th> <!-- Add Actions column -->
          <th class="border px-4 py-2">Number of Items</th> <!-- Add Actions column -->
          <th class="border px-4 py-2 w-44">Actions</th> <!-- Add Actions column -->
          
        </tr>
      </thead>
      <tbody>
        <!-- Replace this with your data using a v-for loop -->
        <tr v-for="item in tableData">
          <td class="border px-4 py-2">{{item.id}}</td>
          <td class="border px-4 py-2">{{item.title}}</td>
          <td class="border px-4 py-2">{{item.price}}</td>
          <td class="border px-4 py-2">{{item.qty}}</td>
          <td class="border py-2 text-center">
          <button @click="showDetails(item.id)" class="bg-blue-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
            Details
          </button>
          </td>
        </tr>
        
      </tbody>
    </table>
   
  </div>
</template>

<style scoped>

</style>