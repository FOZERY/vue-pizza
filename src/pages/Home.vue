<script setup>
import Slider from '../components/Slider.vue';
import MenuSection from '@/components/MenuSection.vue';

import { useProductsStore } from '@/stores/ProductsStore';
import SectionTitle from '@/components/UI/SectionTitle.vue';

const productsStore = useProductsStore();

await productsStore.fetchItems();
productsStore.addToSlide();
</script>

<template>
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
