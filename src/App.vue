<script setup>
import { watch, ref } from 'vue';

import Wrapper from './components/Wrapper.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
import Drawer from './components/Drawer.vue';
import Cart from './components/Cart.vue';

import Home from './pages/Home.vue';
import HomeSkeleton from './pages/HomeSkeleton.vue';

const headerDrawerOpen = ref(false);

const openHeaderDrawer = () => {
    headerDrawerOpen.value = true;
};

const closeHeaderDrawer = () => {
    headerDrawerOpen.value = false;
};

const headerBurgerClick = () => {
    headerDrawerOpen.value ? closeHeaderDrawer() : openHeaderDrawer();
};

watch(headerDrawerOpen, () => {
    headerDrawerOpen.value
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
});
</script>

<template>
    <Drawer><Cart /></Drawer>

    <HeaderDrawer v-if="headerDrawerOpen" @headerBurgerClick="headerBurgerClick" />

    <Wrapper>
        <Header @headerBurgerClick="headerBurgerClick" />
    </Wrapper>

    <Navbar />

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
