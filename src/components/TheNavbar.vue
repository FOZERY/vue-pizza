<script setup>
import { onMounted } from 'vue';
import NavLink from '@/components/NavLink.vue';
import AppButton from '@/components/UI/AppButton.vue';
import { useProductsStore } from '@/stores/productsStore.js';
import Wrapper from '@/components/Utility/Wrapper.vue';

const handleScroll = (nav, navOffset) => {
    if (window.scrollY > navOffset) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
};

onMounted(() => {
    const nav = document.querySelector('.nav');
    const navOffset = nav.offsetTop;
    window.addEventListener('scroll', () => {
        handleScroll(nav, navOffset);
    });
});

const productsStore = useProductsStore();

await productsStore.fetchTypes();
</script>

<template>
    <nav id="nav" class="nav sticky -top-0.5 z-10 flex-none">
        <Wrapper class="flex justify-between items-center h-16">

            <ul class="flex py-3 items-center gap-3 sm:gap-5 font-base sm:font-medium overflow-x-auto overflow-y-none">
                <NavLink v-for="type in productsStore.types"
                         :to="{path:'/', hash: `#${type.type_name}`}"
                         :key="type.id">{{ type.type_name_ru }}
                </NavLink>

                <NavLink :to="'/stocks'">Акции</NavLink>
            </ul>

            <AppButton
                @click="$emit('openCart')"
                class="hidden md:block bg-red-500 text-white font-medium hover:bg-red-600 py-1.5 px-3 active:bg-red-700"
            >Корзина
            </AppButton>
        </Wrapper>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f1f7ed;
}
</style>
