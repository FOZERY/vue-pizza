<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { onMounted, watch } from 'vue';
import { useRootStore } from '@/stores/rootStore.js';
import { useCartStore } from '@/stores/cartStore.js';

const rootStore = useRootStore();
const cartStore = useCartStore();

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
    <AppLayout>
        <router-view />
    </AppLayout>
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
