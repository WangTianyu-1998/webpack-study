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
    <router-view />
</template>

<style></style>