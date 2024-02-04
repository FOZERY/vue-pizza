<script setup>
import { ref } from 'vue';

const props = defineProps({
    items: Array,
    section: String,
});

console.log(props.section);
const sectionTitle = ref('');

import CardList from './CardList.vue';
</script>

<template>
    <section :id="section" class="mb-7 scroll-mt-16 sm:scroll-mt-20">
        <h2 class="text-2xl font-medium mb-5">{{ sectionTitle }}</h2>

        <CardList :items="items" />
    </section>
</template>
