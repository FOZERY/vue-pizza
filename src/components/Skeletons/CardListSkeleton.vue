<script setup>
import CardSkeleton from './CardSkeleton.vue';
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CardSkeleton v-for="n in 12" :key="n" />
    </div>
</template>
