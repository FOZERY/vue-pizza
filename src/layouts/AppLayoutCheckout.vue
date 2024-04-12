<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { usePopup } from '@/composables/usePopup.js';
import { useHeaderDrawer } from '@/composables/useHeaderDrawer.js';
import HeaderDrawer from '@/components/HeaderDrawer.vue';
import Wrapper from '@/components/Utility/Wrapper.vue';

const { showPopup } = usePopup();
const { headerDrawerIsOpen, showHeaderDrawer } = useHeaderDrawer();
</script>

<template>
    <HeaderDrawer v-model:isShow="headerDrawerIsOpen" />

    <Header @show-popup="showPopup" @header-burger-click="showHeaderDrawer" />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <slot></slot>
        </main>
    </Wrapper>

    <Footer />
</template>

<style scoped></style>
