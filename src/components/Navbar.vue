<script setup>
import { onMounted } from 'vue';

import Button from './UI/Button.vue';
import NavLink from '@/components/NavLink.vue';

const handleScroll = (nav, navOffset) => {
    if (window.scrollY > navOffset) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
};

defineProps({
    openCart: Function,
});

onMounted(() => {
    const nav = document.querySelector('.nav');
    const navOffset = nav.offsetTop;
    window.addEventListener('scroll', () => {
        handleScroll(nav, navOffset);
    });
});
</script>

<template>
    <nav class="nav sticky top-0 py-4 z-10 overflow-x-auto flex-none">
        <div class="w-11/12 lg:w-10/12 xl:w-9/12 mx-5 sm:mx-auto flex justify-between items-center">
            <ul class="flex gap-3 sm:gap-5 font-base sm:font-medium">
                <NavLink :to="'/'">Пиццы</NavLink>
                <NavLink :to="'/'">Роллы</NavLink>
                <NavLink :to="'/'">Суши</NavLink>
                <NavLink :to="'/'">Комбо</NavLink>
                <NavLink :to="'/'">Закуски</NavLink>
                <NavLink :to="'/'">Десерты</NavLink>
                <NavLink :to="'/'">Напитки</NavLink>
                <NavLink :to="'/stocks'">Акции</NavLink>
            </ul>
            <Button
                @click="openCart"
                class="hidden md:block bg-red-500 text-white hover:bg-red-600 py-1.5 px-3 active:bg-red-700"
                >Корзина
            </Button>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f1f7ed;
}
</style>
