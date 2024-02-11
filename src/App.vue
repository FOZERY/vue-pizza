<script setup>
import { watch, ref, provide, onMounted } from 'vue';

import Wrapper from './components/Wrapper.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
import Drawer from './components/Drawer.vue';
import Cart from './components/Cart.vue';
import CartButton from './components/CartButton.vue';

import Home from './pages/Home.vue';
import HomeSkeleton from './pages/HomeSkeleton.vue';

const cart = ref([]);
const addToCart = (item) => {
    cart.value.push(item);
    item.isAdded = true;
    console.log(cart.value);
};

const isMobile = ref(false);

const resizeWindowEvent = () => {
    window.innerWidth >= 640 ? (isMobile.value = false) : (isMobile.value = true);
};

// drawer
const drawerIsOpen = ref(false);

const openDrawer = () => {
    drawerIsOpen.value = true;
};
const closeDrawer = () => {
    drawerIsOpen.value = false;
};

// header drawer
const headerDrawerIsOpen = ref(false);

const openHeaderDrawer = () => {
    headerDrawerIsOpen.value = true;
};

const closeHeaderDrawer = () => {
    headerDrawerIsOpen.value = false;
};

const headerBurgerClick = () => {
    headerDrawerIsOpen.value ? closeHeaderDrawer() : openHeaderDrawer();
};

provide('cart', { closeDrawer, addToCart });
provide('isMobile', isMobile);

watch(headerDrawerIsOpen, () => {
    headerDrawerIsOpen.value
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
});

watch(drawerIsOpen, () => {
    drawerIsOpen.value
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
});

onMounted(() => {
    window.addEventListener('resize', resizeWindowEvent);
    resizeWindowEvent();
});
</script>

<template>
    <CartButton v-if="isMobile && cart.length > 0" />

    <Drawer v-if="drawerIsOpen" @close-drawer="closeDrawer"><Cart /></Drawer>

    <HeaderDrawer v-if="headerDrawerIsOpen" @header-burger-click="headerBurgerClick" />

    <Wrapper>
        <Header @header-burger-click="headerBurgerClick" />
    </Wrapper>

    <Navbar @open-drawer="openDrawer" />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <Suspense>
                <template #default><Home /> </template>
                <template #fallback> <HomeSkeleton /> </template>
            </Suspense>
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
