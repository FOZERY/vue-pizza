<script setup>
import { onMounted } from 'vue';
import Button from './Button.vue';
import Logo from './Logo.vue';

const props = defineProps({
    headerDrawerOpen: Boolean,
});

const emit = defineEmits(['closeHeaderDrawer', 'openHeaderDrawer']);

let navIcon;
onMounted(() => {
    navIcon = document.querySelector('.nav-icon');
});

const onNavBtnClick = () => {
    props.headerDrawerOpen ? emit('closeHeaderDrawer') : emit('openHeaderDrawer');
    navIcon.classList.toggle('nav-icon--active');
};
</script>

<template>
    <header class="flex justify-between items-center py-3 md:py-6">
        <div class="flex header__left gap-11">
            <Logo />
            <div class="hidden header__info md:flex flex-col justify-between">
                <div class="header__info-top flex gap-5 font-medium">
                    <span>Доставка</span>
                    <span
                        class="cursor-pointer text-red-500 hover:text-red-700 transition duration-300"
                    >
                        Москва
                    </span>
                </div>
                <div class="header__info-bottom flex gap-4 text-sm">
                    <a
                        class="flex items-center gap-2 hover:text-red-700 transition duration-300"
                        href="https://eda.yandex.ru"
                    >
                        <img class="w-4 h-4" src="/yandexfood.png" alt="Yandex Food Logo" />
                        <span>Яндекс еда</span>
                    </a>

                    <div class="flex gap-1">
                        <span>Время доставки от</span>
                        <span>31 мин</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__right">
            <Button
                class="hidden md:block bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200 active:bg-slate-300"
                >Войти</Button
            >

            <div class="header__nav-btn md:hidden">
                <button @click="onNavBtnClick" class="nav-icon-btn">
                    <div class="nav-icon z-30" id="nav-icon"></div>
                </button>
            </div>
        </div>
    </header>
</template>

<style scoped>
.nav-icon-btn {
    --time: 0.1s;
    --width: 20px;
    --height: 30px;
    --line-height: 2px;
    --line-margin: 1px;
    --color: #000;
    --color-active: #fff;

    height: var(--height);
    width: var(--width);
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-icon {
    position: relative;
    width: var(--width);
    height: var(--line-height);
    background-color: var(--color);
}

.nav-icon::before,
.nav-icon::after {
    content: '';
    display: block;

    position: absolute;
    left: 0;

    width: var(--width);
    height: var(--line-height);

    background-color: var(--color);
    transition:
        transform var(--time) ease-in,
        top var(--time) linear var(--time);
}

.nav-icon::before {
    top: calc(var(--line-margin) * -6);
}

.nav-icon::after {
    top: calc(var(--line-margin) * 6);
}

.nav-icon.nav-icon--active {
    background-color: transparent;
}

.nav-icon.nav-icon--active::before,
.nav-icon.nav-icon--active::after {
    background-color: var(--color-active);
    top: 0;
    transition:
        top var(--time) linear,
        transform var(--time) ease-in var(--time),
        background-color var(--time) ease-in;
}

.nav-icon.nav-icon--active::before {
    transform: rotate(45deg);
}

.nav-icon.nav-icon--active::after {
    transform: rotate(-45deg);
}
</style>
