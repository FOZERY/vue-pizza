import axios from 'axios';

import { defineStore } from 'pinia';
import { ref, reactive, computed, watch } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
    const items = ref([]);
    const sections = reactive({});
    const sliderItems = ref([]);
    const types = ref([]);

    const fetchItems = async () => {
        try {
            if (items.value.length > 0) return;
            const { data } = await axios.get(`https://868534f3682258a9.mokky.dev/products`);

            items.value = data;

            await fetchTypes();

            sortBySections(items.value);

            console.log(sections);

            console.log(data);
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
            if (item.type_name in sections) sections[item.type_name]['items'].push(item); // убрать условие?
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

    // cart
    const cartItems = ref([]);

    const localCart = localStorage.getItem('cartItems');
    cartItems.value = localCart ? JSON.parse(localCart) : [];

    const addToCart = (item) => {
        let index = cartItems.value.findIndex((product) => product.id === item.id);
        if (index === -1) {
            cartItems.value.push({ ...item, quantity: 1 });
        } else {
            cartItems.value[index].quantity++;
        }
    };

    const removeFromCart = (item) => {
        cartItems.value.splice(cartItems.value.indexOf(item), 1);
    };

    const incrementQuantity = (item) => {
        if (item.quantity > 49) {
            return;
        }
        item.quantity++;
    };

    const decrementQuantity = (item) => {
        item.quantity--;
        if (item.quantity === 0) {
            removeFromCart(item);
        }
    };

    const totalPrice = computed(() =>
        cartItems.value.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0)
    );

    const totalItems = computed(() =>
        cartItems.value.reduce((accumulator, item) => {
            return accumulator + item.quantity;
        }, 0)
    );

    watch(
        cartItems,
        () => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
        },
        { deep: true }
    );

    return {
        items,
        types,
        sections,
        sliderItems,
        cartItems,
        totalPrice,
        totalItems,
        fetchItems,
        fetchTypes,
        sortBySections,
        addToSlide,
        addToCart,
        incrementQuantity,
        decrementQuantity,
    };
});
