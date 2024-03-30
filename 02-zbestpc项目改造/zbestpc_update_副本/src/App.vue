<script setup>
import { ref } from 'vue'
const message = ref('工程化 - Vue')
const count = ref(0)
const handleClick = () => {
    count.value++
    console.log(count.value);
}

</script>

<template>
    <div id="app">{{ message }}</div>
    <div>{{ count }}</div>
    <button @click="handleClick">add!!</button>
</template>

<style></style>