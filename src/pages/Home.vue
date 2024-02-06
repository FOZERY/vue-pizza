<script setup>
import axios from 'axios';

import { onMounted, provide, ref, reactive } from 'vue';

import Slider from '../components/Slider.vue';
import CardList from '../components/CardList.vue';
import MenuSection from '@/components/MenuSection.vue';

const items = ref([]);
const sliderItems = ref([]);

const sections = reactive({});

const fetchItems = async () => {
    try {
        const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products`);

        items.value = data;

        data.forEach((item) => {
            if (!sections[item.section.eng]) {
                sections[item.section.eng] = {
                    sectionTitle: item.section.ru,
                    items: [],
                };
            }
            sections[item.section.eng]['items'].push(item);
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchSliderItems = async () => {
    try {
        const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products_slider`);

        sliderItems.value = data;

        console.log(sliderItems.value);
    } catch (err) {
        console.log(err);
    }
};

await fetchSliderItems();
await fetchItems();
</script>

<template>
    <section class="mb-5">
        <h2 class="text-2xl font-medium">Новинки</h2>

        <Slider :sliderItems="sliderItems" />
    </section>
    <MenuSection
        v-for="(sectionObj, section) in sections"
        :key="section"
        :section="section"
        :sectionTitle="sectionObj.sectionTitle"
        :items="sectionObj.items"
    ></MenuSection>
</template>
