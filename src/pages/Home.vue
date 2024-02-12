<script setup>
import Slider from '../components/Slider.vue';
import MenuSection from '@/components/MenuSection.vue';

import { useProductsStore } from '@/stores/ProductsStore';

const productsStore = useProductsStore();

await productsStore.fetchItems();
productsStore.addToSlide();
</script>

<template>
    <section class="mb-5">
        <h2 class="text-2xl font-medium">Новинки</h2>

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
