<script setup>
defineProps({
    messages: Array,
});
</script>

<template>
    <div class="notification absolute bg-black ml-auto top-10 left-0 h-12 w-12 z-30">
        <div class="notification-content" v-for="message in messages" :key="message.id"></div>
    </div>
</template>

<style scoped></style>
