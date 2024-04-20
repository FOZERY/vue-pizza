<script setup>
import MainSlider from '@/components/MainSlider.vue';
import MainMenuSection from '@/components/MainMenuSection.vue';
import TitleSection from '@/components/UI/TitleSection.vue';

import { useProductsStore } from '@/stores/productsStore.js';

const productsStore = useProductsStore();

await productsStore.fetchItems();
</script>

<template>
    <teleport to="body">
        <router-view />
    </teleport>

    <section class="mb-5">
        <TitleSection>Новинки</TitleSection>

        <MainSlider :sliderItems="productsStore.sliderItems" />
    </section>

    <MenuSection
        v-for="(sectionObj, section) in productsStore.sections"
        :key="section"
        :section="section"
        :sectionTitle="sectionObj.sectionTitle"
        :items="sectionObj.items"
    ></MainMenuSection>
</template>
