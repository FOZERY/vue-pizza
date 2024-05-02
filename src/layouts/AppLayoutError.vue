<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import { usePopup } from '@/composables/usePopup.js';
import { useHeaderDrawer } from '@/composables/useHeaderDrawer.js';
import HeaderDrawer from '@/components/HeaderDrawer.vue';
import Wrapper from '@/components/Utility/Wrapper.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { useRootStore } from '@/stores/rootStore.js';
import Authorization from '@/components/Authorization.vue';
import AuthorizationAdmin from '@/components/AuthorizationAdmin.vue';

const rootStore = useRootStore();

const { showPopup, popupIsOpen, popupComponent } = usePopup();
const { headerDrawerIsOpen, showHeaderDrawer } = useHeaderDrawer();

const popupComponents = {
    Authorization,
    AuthorizationAdmin,
};

</script>

<template>

    <!--    повторяющийся код-->
    <AppPopup v-if="!rootStore.isMobile" v-model:show="popupIsOpen">
        <component @closePopup="() => popupIsOpen = false" :is="popupComponents[popupComponent]" />
    </AppPopup>

    <HeaderDrawer v-model:isShow="headerDrawerIsOpen" />

    <TheHeader @show-popup="showPopup" @header-burger-click="showHeaderDrawer" />

    <Wrapper class="flex-1 h-full flex justify-center items-center">
        <main class="pt-3 pb-3 sm:pb-7">
            <slot></slot>
        </main>
    </Wrapper>

    <TheFooter @showAdminSignIn="showPopup" />
</template>

<style scoped></style>
