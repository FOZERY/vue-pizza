import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router/router.js';

export const useProductsStore = defineStore('productsStoreTest', {
    state: () => ({
        items: [],
        sections: {},
        sliderItems: [],
        types: [],
        item: {},
        isLoading: false,
        isItemLoading: false,
    }),

    getters: {
        getAllItems() {
            return this.items;
        },
        getItemById() {
            return (id) => this.items.find((item) => item.id === id);
        },
    },

    actions: {
        async fetchItems() {
            this.isLoading = true;
            try {
                console.log(this.items.length);
                if (this.items.length > 0) return;
                const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products`);
                this.items = data;
                await this.fetchTypes();

                this.sortBySections(this.items);

                this.addToSlide();
                // this.isLoading = false;
            } catch (err) {
                console.log(err);
                const errorCode = err.response.data.statusCode;
                router.push({
                    path: `/error/${errorCode}`,
                });
            }
        },
        async fetchTypes() {
            try {
                if (this.types.length > 0) return;
                const { data } = await axios.get(
                    'https://868534f3682258a9.mokky.dev/products_slider'
                );

                this.types = data;

                data.forEach((type) => {
                    if (!this.sections[type.type_name]) {
                        this.sections[type.type_name] = {
                            sectionTitle: type.type_name_ru,
                            items: [],
                        };
                    }
                });
            } catch (e) {
                console.log(e);
            }
        },
        sortBySections(items) {
            items.forEach((item) => {
                this.sections[item.type_name]['items'].push(item); // убрать условие?
            });
        },
        addToSlide() {
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
