<script setup>
import Wrapper from '@/components/Utility/Wrapper.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheCart from '@/components/TheCart.vue';
import HeaderDrawer from '@/components/HeaderDrawer.vue';
import CartButton from '@/components/UI/CartButton.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import Authorization from '@/components/Authorization.vue';
import AuthorizationAdmin from '@/components/AuthorizationAdmin.vue';

import { usePopup } from '@/composables/usePopup.js';
import { useCart } from '@/composables/useCart.js';
import { useHeaderDrawer } from '@/composables/useHeaderDrawer.js';

import { useRootStore } from '@/stores/rootStore.js';
import { useCartStore } from '@/stores/cartStore.js';
import { ref } from 'vue';

const cartStore = useCartStore();
const rootStore = useRootStore();

const { showPopup, popupIsOpen, popupComponent } = usePopup();
const { showCart, cartIsOpen } = useCart();
const { showHeaderDrawer, headerDrawerIsOpen } = useHeaderDrawer();

const popupComponents = {
    Authorization,
    AuthorizationAdmin,
};

document.querySelector('html').style.scrollbarGutter = 'stable';
</script>

<template>
    <Transition name="cart-btn">
        <CartButton @click="showCart" v-if="rootStore.isMobile && cartStore.cartItems.length > 0" />
    </Transition>

    <AppPopup v-if="!rootStore.isMobile" v-model="popupIsOpen">
        <component @closePopup="() => popupIsOpen = false" :is="popupComponents[popupComponent]" />
    </AppPopup>

    <TheCart v-model="cartIsOpen" />

    <HeaderDrawer v-model="headerDrawerIsOpen" />

    <TheHeader @showUserSignIn="showPopup" @header-burger-click="showHeaderDrawer" />

    <Suspense>
        <template #default>
            <TheNavbar @open-cart="showCart" />
        </template>
        <template #fallback>

        </template>
    </Suspense>
    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <slot />
        </main>
    </Wrapper>

    <TheFooter @showAdminSignIn="showPopup" />
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
