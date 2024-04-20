<script setup>
import ProductList from '@/components/ProductList.vue';
import TitleSection from '@/components/UI/TitleSection.vue';

defineProps({
    items: Array,
    section: String,
    sectionTitle: String,
});
</script>

<template>
    <section :id="section" class="mb-7 scroll-mt-16 sm:scroll-mt-20">
        <TitleSection>{{ sectionTitle }}</TitleSection>

        <ProductList :items="items" />
    </section>
</template>
