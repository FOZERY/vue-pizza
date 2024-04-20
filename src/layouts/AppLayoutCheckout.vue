<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import { usePopup } from '@/composables/usePopup.js';
import { useHeaderDrawer } from '@/composables/useHeaderDrawer.js';
import HeaderDrawer from '@/components/HeaderDrawer.vue';
import Wrapper from '@/components/Utility/Wrapper.vue';

const { showPopup } = usePopup();
const { headerDrawerIsOpen, showHeaderDrawer } = useHeaderDrawer();
</script>

<template>
    <HeaderDrawer v-model:isShow="headerDrawerIsOpen" />

    <TheHeader @show-popup="showPopup" @header-burger-click="showHeaderDrawer" />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <slot></slot>
        </main>
    </Wrapper>

    <TheFooter />
</template>

<style scoped></style>
