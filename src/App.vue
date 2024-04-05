<script setup>
import { watch, ref, provide, onMounted } from 'vue';

import Wrapper from './components/Utility/Wrapper.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
import Drawer from './components/Drawer.vue';
import Cart from './components/Cart.vue';
import CartButton from './components/UI/CartButton.vue';
import Popup from '@/components/Popup.vue';

import Home from './pages/Home.vue';
import HomeSkeleton from './pages/HomeSkeleton.vue';

import { useProductsStore } from './stores/ProductsStore';
import Authorization from '@/components/Authorization.vue';

const productsStore = useProductsStore();

const isMobile = ref(false);

const resizeWindowEvent = () => {
    window.innerWidth >= 768 ? (isMobile.value = false) : (isMobile.value = true);
};

const popupIsOpen = ref(false);

const openPopup = () => {
    drawerIsOpen.value = true;
    popupIsOpen.value = true;
};
const closePopup = () => {
    drawerIsOpen.value = false;
    popupIsOpen.value = false;
};

const cartIsOpen = ref(false);

// drawer
const drawerIsOpen = ref(false);

const openCart = () => {
    drawerIsOpen.value = true;
    cartIsOpen.value = true;
};
const closeCart = () => {
    drawerIsOpen.value = false;
    cartIsOpen.value = false;
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

// form validate

provide('cart', { closeCart });
provide('isMobile', isMobile);

watch(headerDrawerIsOpen, () => {
    headerDrawerIsOpen.value
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'auto');
});

watch(drawerIsOpen, () => {
    drawerIsOpen.value
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'auto');
});

onMounted(() => {
    window.addEventListener('resize', resizeWindowEvent);
    resizeWindowEvent();
});
</script>

<template>
    <Transition>
        <CartButton @click="openCart" v-if="isMobile && productsStore.cartItems.length > 0" />
    </Transition>

    <Transition>
        <Popup v-if="!isMobile && popupIsOpen" :close-popup="closePopup">
            <Authorization />
        </Popup>
    </Transition>

    <Drawer v-if="cartIsOpen" :close-drawer="closeCart">
        <Cart />
    </Drawer>

    <HeaderDrawer v-if="headerDrawerIsOpen" :header-burger-click="headerBurgerClick" />

    <Wrapper>
        <Header :open-popup="openPopup" :header-burger-click="headerBurgerClick" />
    </Wrapper>

    <Navbar :open-cart="openCart" />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <Suspense>
                <template #default>
                    <Home />
                </template>
                <template #fallback>
                    <HomeSkeleton />
                </template>
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
