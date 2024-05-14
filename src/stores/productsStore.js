import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router/router.js';

const API_URL = import.meta.env.VITE_APP_API_URL;

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
                console.log(this.isLoading);
                this.items = [];
                const params = {};
                if (this.searchQuery) {
                    params.name = `${this.searchQuery}`;
                }

                if (this.filterQuery) {
                    params.type_id = `${this.filterQuery}`;
                }
                const { data } = await axios.get(`${API_URL}product/read.php`, { params });
                this.items = data;
            } catch (err) {
                console.log(err);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchItem(id) {
            try {
                const { data } = await axios.get(`${API_URL}product/readOne.php?id=${id}`);
                this.item = data;
            } catch (err) {
                console.log(err);
            }
        },
        async createItem(itemData, selectedFile) {
            try {
                this.isLoading = true;
                const fd = new FormData();
                for(let key in itemData) {
                    if(key === 'image') {
                        fd.append('image', selectedFile, selectedFile.name);
                    }
                    fd.append(key, itemData[key]);
                }
                const response = await axios.post(`${API_URL}product/create.php`, fd);
                this.isLoading = false;
            } catch(err) {
                alert(err);
            }
        },
        async updateItem(itemData, selectedFile) {
            try {
                console.log(itemData);
                this.isLoading = true;
                const fd = new FormData();
                for(let key in itemData) {
                    if(key === 'image' && selectedFile) {
                        fd.append('image', selectedFile, selectedFile.name);
                    } else {
                        fd.append(key, itemData[key]);
                    }
                }
                const response = await axios.post(`${API_URL}product/update.php`, fd);
                this.isLoading = false;
            } catch(err) {
                console.log(err);
            }
        },
        async deleteItem(itemId) {
            try {
                const fd = new FormData();
                fd.append('id', itemId);
                const response = await axios.post(`${API_URL}product/delete.php`, fd);
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
                if (item.inSlider) {
                    this.sliderItems.push({
                        ...item,
                    });
                }
            });
        },
    },
});
