<script setup>
const props = defineProps(['message'])
const emit = defineEmits(['messageEmitted'])
const customMessage = 'Custom message from ChildComponent'
</script>

<template>
  <div class="p-5 mx-auto bg-white shadow-md">
    <h2 class="text-lg text-blue-800 font-semibold">Child Component</h2>
    <p class="mt-2 text-blue-700">Message from ParentComponent: <span class="text-green-700">{{ message }}</span></p>
    <button class="mt-4 px-4 py-2 border-none bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none"  @click="$emit('messageEmitted', customMessage)">Emit Message</button>
  </div>
</template>