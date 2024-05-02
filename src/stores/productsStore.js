import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router/router.js';

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        items: [],
        item: {},
        sections: {},
        sliderItems: [],
        types: [],
        searchQuery: '',
        filterQuery: '',
        isLoading: false,
        isItemLoading: false,
    }),

    getters: {
        getItemById() {
            return (id) => this.items.find((item) => item.id === id);
        },
    },

    actions: {
        async fetchItems() {
            try {
                this.isLoading = true;
                this.items = [];
                const params = {};
                if (this.searchQuery) {
                    params.name = `*${this.searchQuery}*`;
                }

                if (this.filterQuery) {
                    params.type_name = `${this.filterQuery}`;
                }

                const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products`, { params });
                this.items = data;
                this.isLoading = false;
            } catch (err) {
                console.log(err);
                const errorCode = err.response.data.statusCode;
                await router.push({
                    path: `/error/${errorCode}`,
                });
                this.isLoaing = false;
            }
        },
        async fetchItem(id) {
            try {
                const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products/${id}`);
                this.item = data;
            } catch (err) {
                console.log(err);
            }
        },
        async fetchTypes() {
            try {
                if (this.types.length > 0) return;
                const { data } = await axios.get(
                    'https://868534f3682258a9.mokky.dev/products_slider',
                );
                this.types = data;

            } catch (e) {
                console.log(e);
            }
        },
        sortBySections() {
            this.sections = {};
            this.items.forEach((item) => {
                if (!this.sections[item.type_name]) {
                    this.sections[item.type_name] = {
                        sectionTitle: item.type_name_ru,
                        items: [],
                    };
                }
                this.sections[item.type_name]['items'].push(item);
            });
        },
        addToSlide() {
            this.sliderItems = [];
            this.items.forEach((item) => {
                if (item.isInSlider) {
                    this.sliderItems.push({
                        ...item,
                    });
                }
            });
        },
    },
});
