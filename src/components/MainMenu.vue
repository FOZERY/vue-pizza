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

    <div class="flex sm:justify-end items-center gap-5 mb-3">
        <div class="relative w-60">
            <img
                class="absolute w-4 h-4 translate-y-2 translate-x-2"
                src="/special-icons/magnifier.svg"
                alt=""
            />

            <input
                @click=""
                placeholder="Поиск..."
                class="rounded-lg py-1 pl-7 text-base shadow-sm outline-none"
                type="text"
            />
        </div>
    </div>

    <MainMenuSection
        v-for="(sectionObj, section) in productsStore.sections"
        :key="section"
        :section="section"
        :sectionTitle="sectionObj.sectionTitle"
        :items="sectionObj.items"
    ></MainMenuSection>
</template>
