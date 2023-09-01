<script setup>
import ChildComponent from './ChildComponent.vue'
import { ref } from 'vue'

const parentMessage = 'Hello! from ParentComponent'
const receivedMessage = ref('')

const handleMessageEmitted = (emittedMessage) => {
  receivedMessage.value = emittedMessage
}
</script>

<template>
  <div class="mx-auto text-center h-80 w-[90%] p-5 bg-gray-100">
    <h1 class="mb-5 text-xl text-green-600 font-semibold">Parent Component</h1>
    <ChildComponent :message="parentMessage" @messageEmitted="handleMessageEmitted" />
    <p class="mt-3 text-blue-600"><span class="text-green-700">Received message from ChildComponent: </span> {{ receivedMessage }}</p>
  </div>
</template>