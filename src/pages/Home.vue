<script setup>
import axios from 'axios';

import { onMounted, provide, ref, reactive } from 'vue';

import Slider from '../components/Slider.vue';
import CardList from '../components/CardList.vue';
import MenuSection from '@/components/MenuSection.vue';

// const items = ref([]);

const sections = ref({});

const fetchItems = async () => {
    try {
        const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products_test`);
        [sections.value] = data;

        // data.forEach((item) => sections[item.section].push(item));

        console.log(sections.value);

        // [{}]
    } catch (err) {
        console.log(err);
    }
};

onMounted(() => {
    fetchItems();
});
</script>

<template>
    <section class="mb-5">
        <h2 class="text-2xl font-medium">Новинки</h2>

        <Slider />
    </section>
    <MenuSection
        v-for="(sectionObj, section) in sections"
        :key="section"
        :section="section"
        :sectionTitle="sectionObj.title"
        :items="sectionObj.items"
    ></MenuSection>
</template>
