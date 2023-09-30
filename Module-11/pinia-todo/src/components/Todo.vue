<!-- <template>
  <main>
    <div class="container mx-auto">
      <h1>Todo App</h1>
     <div>{{ todoStore.satus }}</div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="flex space-x-3 items-center border">
        <input type="checkbox" v-model="task.status" @change="toggleTaskStatus(task, index)" />
        <span>{{ task.name }}</span><span>status: {{ getStatusText(task.status)}}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
  </main>
  
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todostore';

const todoStore = useTodoStore();
const newTask = ref('');
const tasks = todoStore.tasks;


const addTask = () => {
  if (newTask.value.trim() !== '') {
    todoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  todoStore.removeTask(index);
};

const toggleTaskStatus = (task, index) => {
  
 
  todoStore.toggleTaskStatus(index);

};
const getStatusText = (status) => {
  return status ? 'Done' : 'Undone';
};
</script> -->

<template>
  <main class="container mx-auto w-[50%]">
    <div class="container mx-auto p-2 bg-slate-50 shadow-md mt-5">
      <div class="text-center text-3xl font-bold text-blue-800">
        <h1>Todo App</h1>
        <hr />
      </div>  
      
      <div class="flex justify-between items-center w-full mt-10 mb-2">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" class="w-[82%] border border-slate-300 rounded-sm" />
        <button @click="addTask" class="bg-blue-600 text-white py-2 px-3 rounded-sm">Add Task</button>
      </div>
      
      <table class="table-auto w-full border border-slate-400">
        <thead>
          <tr class="text-blue-900">
            <th class="border border-slate-300">Select</th>
            <th class="border border-slate-300">Task</th>
            <th class="border border-slate-300">Status</th>
            <th class="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="text-center">
            <td class="border border-slate-300"><input type="checkbox" :checked="task.status === 'Done'" @change="toggleTaskStatus(index)" /></td>
            <td class="border border-slate-300"><span :style="{ 'text-decoration': task.status === 'Done' ? 'line-through' : '' }">{{ task.name }}</span></td>
            <td class="border border-slate-300"><span :style="{ color: task.status === 'Done' ? 'green' : 'red' }">{{ task.status }}</span></td>
            <td class="border border-slate-300"><button @click="removeTask(index)" class="bg-red-600 text-white p-1 rounded-md">Delete</button></td>
          </tr>
        </tbody>
      </table>

      <!-- <ul>
        <li v-for="(task, index) in tasks" :key="index" class="flex space-x-3 items-center justify-between border">
          <input type="checkbox" :checked="task.status === 'Done'" @change="toggleTaskStatus(index)" />
          <span>{{ task.name }}</span><span :style="{ color: task.status === 'Done' ? 'green' : 'red' }">status: {{ task.status }}</span>
          <button @click="removeTask(index)" class="bg-red-600 text-white p-1 rounded-md">Delete</button>
        </li>
      </ul> -->
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todostore';

const todoStore = useTodoStore();
const newTask = ref('');
const tasks = todoStore.tasks;

const addTask = () => {
  if (newTask.value.trim() !== '') {
    todoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  todoStore.removeTask(index);
};

const toggleTaskStatus = (index) => {
  todoStore.toggleTaskStatus(index);
};

</script>
