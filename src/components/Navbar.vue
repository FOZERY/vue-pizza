<script setup>
import Button from './Button.vue'
</script>

<template>
    <nav class="sticky top-0 py-4 z-10">
        <div class="flex justify-between items-center">
            <ul class="flex gap-5 font-medium">
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Пиццы</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Роллы</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Суши</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Комбо</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Закуски</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Десерты</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Напитки</span>
                </li>
                <li class="cursor-pointer hover:text-red-700 transition duration-300">
                    <span>Акции</span>
                </li>
            </ul>
            <Button
                class="bg-red-500 text-white hover:bg-red-600 py-1.5 px-3 active:bg-red-700"
                buttonName="Корзина"
            />
        </div>
    </nav>
</template>
