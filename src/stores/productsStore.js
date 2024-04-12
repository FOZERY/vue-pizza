import axios from 'axios';

import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
    const items = ref([]);
    const sections = reactive({});
    const sliderItems = ref([]);
    const types = ref([]);
    const item = reactive({});

    const fetchItem = async (itemId) => {
        try {
            const { data } = await axios.get(
                `https://868534f3682258a9.mokky.dev/products/${itemId}`
            );
            item.value = data;
        } catch (e) {
            console.log(e);
        }
    };

    const fetchItems = async () => {
        try {
            if (items.value.length > 0) return;
            const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products`);
            items.value = data;
            await fetchTypes();

            sortBySections(items.value);

            addToSlide();
        } catch (err) {
            console.log(err);
        }
    };

    const fetchTypes = async () => {
        try {
            if (types.value.length > 0) return;
            const { data } = await axios.get('https://868534f3682258a9.mokky.dev/products_slider');

            types.value = data;

            data.forEach((type) => {
                if (!sections[type.type_name]) {
                    sections[type.type_name] = {
                        sectionTitle: type.type_name_ru,
                        items: [],
                    };
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    //TODO
    const sortBySections = (items) => {
        items.forEach((item) => {
            sections[item.type_name]['items'].push(item); // убрать условие?
        });
    };

    const addToSlide = () => {
        items.value.forEach((item) => {
            if (item.isInSlider) {
                sliderItems.value.push({
                    ...item,
                });
            }
        });
    };

    const getItemById = computed(() => items.value.find((item) => item.id === 3));

    return {
        items,
        item,
        types,
        sections,
        sliderItems,
        getItemById,
        fetchItems,
        fetchItem,
        fetchTypes,
        sortBySections,
        addToSlide,
    };
});
