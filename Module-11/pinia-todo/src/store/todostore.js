// todoStore.js
import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const tasks=ref([])
  console.log(tasks.value.length);

  function addTask(taskName) {
    tasks.value.push({ name: taskName, status: 'Undone' });
  }
    function removeTask(index) {
    tasks.value.splice(index, 1);
    
  }
  
  function toggleTaskStatus(index) {
    if (tasks.value[index]) {
      tasks.value[index].status = tasks.value[index].status === 'Undone' ? 'Done' : 'Undone';
    }
  }
     
  return {tasks, addTask, removeTask, toggleTaskStatus};
});
