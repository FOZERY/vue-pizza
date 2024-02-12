import axios from 'axios';

import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
    const items = ref([]);
    const sections = reactive({});
    const sliderItems = ref([]);

    const isLoading = ref(false);

    const fetchItems = async () => {
        isLoading.value = true;
        console.log(isLoading.value);
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
        } finally {
            isLoading.value = false;
        }
        console.log(isLoading.value);
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

    const addToCart = (item) => {
        let index = cartItems.value.findIndex((product) => product.id === item.id);
        if (index == -1) {
            cartItems.value.push({ ...item, quantity: 1 });
        } else {
            cartItems.value[index].quantity++;
        }
    };

    const removeFromCart = (item) => {
        cartItems.value.splice(cartItems.value.indexOf(item), 1);
    };

    const incrementQuantity = (item) => {
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

    return {
        items,
        sections,
        isLoading,
        sliderItems,
        cartItems,
        totalPrice,
        totalItems,
        fetchItems,
        addToSlide,
        addToCart,
        incrementQuantity,
        decrementQuantity,
    };
});
