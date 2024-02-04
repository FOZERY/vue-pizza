<script setup>
import { ref } from 'vue';

import Wrapper from './components/Wrapper.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
import Home from './pages/Home.vue';

const headerDrawerOpen = ref(false);

const openHeaderDrawer = () => {
    headerDrawerOpen.value = true;
};

const closeHeaderDrawer = () => {
    headerDrawerOpen.value = false;
};
</script>

<template>
    <HeaderDrawer v-if="headerDrawerOpen" />

    <Wrapper>
        <Header
            @closeHeaderDrawer="closeHeaderDrawer"
            @openHeaderDrawer="openHeaderDrawer"
            :headerDrawerOpen="headerDrawerOpen"
        />
    </Wrapper>

    <Navbar />

    <Wrapper>
        <main class="pt-3 pb-3 sm:pb-7">
            <Home />
        </main>
    </Wrapper>

    <Footer />
</template>

<style scoped></style>
