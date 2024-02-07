<script setup>
import Logo from './Logo.vue';
import Wrapper from './Wrapper.vue';

const emit = defineEmits(['headerBurgerClick']);
</script>

<template>
    <div class="fixed top-0 left-0 bg-stone-800 w-full h-full z-20">
        <div class="flex h-full flex-col gap-5">
            <div>
                <Wrapper>
                    <div class="flex justify-between py-4 items-center">
                        <div class="flex items-center">
                            <div class="flex flex-col ml-1">
                                <h1
                                    class="text-2xl md:text-3xl font-semibold uppercase tracking-tigher leading-5 text-white"
                                >
                                    Roblox
                                </h1>
                                <span
                                    class="text-sm md:text-base tracking-tighter md:tracking-tight text-white"
                                    >Пицца & Роллы</span
                                >
                            </div>
                        </div>
                        <div class="header__nav-btn md:hidden">
                            <button @click="emit('headerBurgerClick')" class="nav-icon-btn">
                                <div class="nav-icon nav-icon--active" id="nav-icon"></div>
                            </button>
                        </div>
                    </div>
                </Wrapper>
                <div class="border-b border-stone-700"></div>

                <Wrapper>
                    <div class="flex justify-between items-center py-4">
                        <a class="flex gap-1 cursor-pointer py-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                class="fill-stone-600"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                                />
                            </svg>
                            <div class="flex flex-col">
                                <span class="text-white leading-4">Москва</span>
                                <span class="text-stone-600 text-xs">Изменить</span>
                            </div>
                        </a>
                        <div>
                            <span class="px-5 text-white">35 мин</span>
                        </div>
                    </div>
                </Wrapper>
                <div class="border-b border-stone-700"></div>

                <Wrapper>
                    <div class="flex flex-col py-4 gap-4 text-white">
                        <a href="#">Войти</a>
                        <a href="#">Контакты</a>
                        <a href="#">Работа</a>
                        <a href="#">О нас</a>
                    </div>
                </Wrapper>
                <div class="border-b border-stone-700"></div>
            </div>
            <div class="text-white">
                <Wrapper>
                    <a href="tel:8-904-080-64-56" class="flex gap-1 cursor-pointer py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="fill-stone-600"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                            />
                        </svg>
                        <div class="flex flex-col">
                            <span class="text-white leading-4">8 904 080-64-56</span>
                            <span class="text-stone-600 text-xs">Звонок бесплатный</span>
                        </div>
                    </a>
                </Wrapper>
            </div>
        </div>
    </div>
</template>

<style>
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
}

.nav-icon.nav-icon--active::before {
    transform: rotate(45deg);
}

.nav-icon.nav-icon--active::after {
    transform: rotate(-45deg);
}
</style>
