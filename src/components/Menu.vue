<script setup>
import Slider from './Slider.vue';
import MenuSection from '@/components/MenuSection.vue';
import SectionTitle from '@/components/UI/SectionTitle.vue';

import { useProductsStore } from '@/stores/productsStore.js';

const productsStore = useProductsStore();

await productsStore.fetchItems();
</script>

<template>
    <teleport to="body">
        <router-view />
    </teleport>

    <section class="mb-5">
        <SectionTitle>Новинки</SectionTitle>

        <Slider :sliderItems="productsStore.sliderItems" />
    </section>

    <MenuSection
        v-for="(sectionObj, section) in productsStore.sections"
        :key="section"
        :section="section"
        :sectionTitle="sectionObj.sectionTitle"
        :items="sectionObj.items"
    ></MenuSection>
</template>
