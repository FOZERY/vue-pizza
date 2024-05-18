<script setup>

import AppButton from '@/components/UI/AppButton.vue';
import router from '@/router/router.js';
import { onMounted } from 'vue';

const logout = () => {
    localStorage.removeItem('jwt');
    router.go(0);
}

onMounted(async() => {
    try {
        await
    } catch(e) {
        console.log(e);
    }
})
</script>

<template>
    <div>Profile</div>
    <AppButton @click="logout">Logout</AppButton>
</template>

<style scoped>

</style>