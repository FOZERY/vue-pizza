<script setup>
import CardList from './CardList.vue';
import SectionTitle from '@/components/UI/SectionTitle.vue';

defineProps({
    items: Array,
    section: String,
    sectionTitle: String,
});
</script>

<template>
    <section :id="section" class="mb-7 scroll-mt-16 sm:scroll-mt-20">
        <SectionTitle>{{ sectionTitle }}</SectionTitle>

        <CardList :items="items" />
    </section>
</template>
