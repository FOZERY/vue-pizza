<script setup>
import { watch, ref, onMounted } from 'vue';

import Wrapper from './components/Utility/Wrapper.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
import Cart from './components/Cart.vue';
import CartButton from './components/UI/CartButton.vue';
import Popup from '@/components/UI/Popup.vue';
import Authorization from '@/components/Authorization.vue';

import { usePopup } from '@/composables/usePopup.js';
import { useCart } from '@/composables/useCart.js';
import { useHeaderDrawer } from '@/composables/useHeaderDrawer.js';

import { useRootStore } from '@/stores/rootStore.js';
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();
const rootStore = useRootStore();

const { showPopup, popupIsOpen } = usePopup();
const { showCart, cartIsOpen } = useCart();
const { showHeaderDrawer, headerDrawerIsOpen } = useHeaderDrawer();

const resizeWindowEvent = () => {
    window.innerWidth >= 768 ? (rootStore.isMobile = false) : (rootStore.isMobile = true);
};

onMounted(() => {
    window.addEventListener('resize', resizeWindowEvent);
    resizeWindowEvent();
});

watch(
    cartStore.cartItems,
    () => {
        localStorage.setItem('cartItems', JSON.stringify(cartStore.cartItems));
    },
    { deep: true }
);
</script>

<template>
    <Transition name="cart-btn">
        <CartButton @click="showCart" v-if="rootStore.isMobile && cartStore.cartItems.length > 0" />
    </Transition>

    <Popup v-if="!rootStore.isMobile" v-model:show="popupIsOpen">
        <Authorization />
    </Popup>

    <Cart v-model:isOpen="cartIsOpen" />

    <HeaderDrawer v-model:isShow="headerDrawerIsOpen" />

    <Header @show-popup="showPopup" @header-burger-click="showHeaderDrawer" />

    <Navbar @open-cart="showCart" />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <router-view></router-view>
        </main>
    </Wrapper>

    <Footer />
</template>

<style>
@keyframes bgAnimate {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;
    }
}

.skeleton {
    background-image: linear-gradient(
        90deg,
        rgba(226, 232, 240, 1) 7%,
        rgba(240, 240, 240, 1) 21%,
        rgba(226, 232, 240, 1) 45%,
        rgba(226, 232, 240, 1) 73%
    );
    background-size: 200% 100%;
    animation: bgAnimate 2s linear infinite;
}
</style>
