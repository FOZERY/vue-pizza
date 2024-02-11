<script setup>
import { onMounted } from 'vue';

import Button from './Button.vue';

const handleScroll = (nav, navOffset) => {
    if (window.scrollY > navOffset) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
};

const emit = defineEmits(['openDrawer']);

onMounted(() => {
    const nav = document.querySelector('.nav');
    const navOffset = nav.offsetTop;
    window.addEventListener('scroll', () => {
        handleScroll(nav, navOffset);
    });
});
</script>

<template>
    <nav class="nav sticky top-0 py-4 z-10 overflow-x-auto">
        <div class="w-11/12 lg:w-10/12 xl:w-9/12 mx-5 sm:mx-auto flex justify-between items-center">
            <ul class="flex gap-3 sm:gap-5 font-base sm:font-medium">
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#pizzas"
                        >Пиццы</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#rolls"
                        >Роллы</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#sushi"
                        >Суши</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#combo"
                        >Комбо</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#snacks"
                        >Закуски</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#deserts"
                        >Десерты</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <a
                        class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        href="#drinks"
                        >Напитки</a
                    >
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0"
                        >Акции</span
                    >
                </li>
            </ul>
            <Button
                @click="emit('openDrawer')"
                class="hidden md:block bg-red-500 text-white hover:bg-red-600 py-1.5 px-3 active:bg-red-700"
                >Корзина</Button
            >
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f1f7ed;
}
</style>
