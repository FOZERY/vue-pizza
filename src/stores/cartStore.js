import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { $host } from '@/http/index.js';

export const useCartStore = defineStore('cartStore', () => {
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

    // getters
    const totalPrice = computed(() =>
        cartItems.value.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0),
    );

    const totalItems = computed(() =>
        cartItems.value.reduce((accumulator, item) => {
            return accumulator + item.quantity;
        }, 0),
    );

    const createOrder = async (customer_id, order_type_id, order_items) => {
        try {
            const response = await $host.post('/orders/create.php', {
                customer_id: customer_id,
                order_type_id: order_type_id,
                order_items: order_items,
            });
            return response;
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    return {
        cartItems,
        totalPrice,
        totalItems,
        createOrder,
        addToCart,
        incrementQuantity,
        decrementQuantity,
    };
});
