<script setup>
import { onMounted } from 'vue';
import NavLink from '@/components/NavLink.vue';
import ButtonMain from '@/components/UI/ButtonMain.vue';

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
</script>

<template>
    <nav id="nav" class="nav sticky top-0 py-4 z-10 overflow-x-auto flex-none">
        <div class="w-11/12 lg:w-10/12 xl:w-9/12 mx-5 sm:mx-auto flex justify-between items-center">
            <ul class="flex gap-3 sm:gap-5 font-base sm:font-medium">
                <NavLink :to="{ path: '/', hash: '#pizzas' }">Пиццы</NavLink>
                <NavLink :to="{ path: '/', hash: '#rolls' }">Роллы</NavLink>
                <NavLink :to="{ path: '/', hash: '#sushi' }">Суши</NavLink>
                <NavLink :to="{ path: '/', hash: '#combos' }">Комбо</NavLink>
                <NavLink :to="{ path: '/', hash: '#snacks' }">Закуски</NavLink>
                <NavLink :to="{ path: '/', hash: '#deserts' }">Десерты</NavLink>
                <NavLink :to="{ path: '/', hash: '#drinks' }">Напитки</NavLink>
                <NavLink :to="'/stocks'">Акции</NavLink>
            </ul>
            <ButtonMain
                @click="$emit('openCart')"
                class="hidden md:block bg-red-500 text-white hover:bg-red-600 py-1.5 px-3 active:bg-red-700"
                >Корзина
            </ButtonMain>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f1f7ed;
}
</style>
