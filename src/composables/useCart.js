import { ref, watch } from 'vue';

export function useCart() {
    const cartIsOpen = ref(false);

    const showCart = () => {
        cartIsOpen.value = true;
    };

    watch(cartIsOpen, () => {
        cartIsOpen.value
            ? document.body.classList.add('noScroll')
            : document.body.classList.remove('noScroll');
    });

    return { cartIsOpen, showCart };
}
