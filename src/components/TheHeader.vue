<script setup>
import Logo from './UI/LogoMain.vue';
import Wrapper from '@/components/Utility/Wrapper.vue';
import { useRootStore } from '@/stores/rootStore.js';
import AppButton from '@/components/UI/AppButton.vue';
import { useUserStore } from '@/stores/userStore.js';

const userStore = useUserStore();
</script>

<template>
    <Wrapper>
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
                <AppButton
                    v-if="!userStore.isAuth"
                    @click="$emit('showUserSignIn', 'Authorization')"
                    class="hidden md:block bg-slate-200  text-slate-600 font-medium  hover:text-black hover:bg-slate-300 active:bg-slate-400"
                >Войти
                </AppButton>
                <router-link v-else to="profile">
                    <AppButton
                        class="group px-0 py-0 hidden md:flex flex-col justify-start items-center font-medium hover:text-red-500 active:text-red-700"
                    >
                        <svg class="w-6 translate-y-1 group-hover:fill-red-500 group-active:fill-red-700 group-hover:translate-y-0.5 transition duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M 15 3 C 11.686 3 9 5.686 9 9 L 9 10 C 9 13.314 11.686 16 15 16 C 18.314 16 21 13.314 21 10 L 21 9 C 21 5.686 18.314 3 15 3 z M 14.998047 19 C 10.992047 19 5.8520469 21.166844 4.3730469 23.089844 C 3.4590469 24.278844 4.329125 26 5.828125 26 L 24.169922 26 C 25.668922 26 26.539 24.278844 25.625 23.089844 C 24.146 21.167844 19.004047 19 14.998047 19 z"></path>
                        </svg>
                        <span>Профиль</span>
                    </AppButton>
                </router-link>

                <div class="header__nav-btn md:hidden">
                    <button @click="$emit('headerBurgerClick')" class="nav-icon-btn">
                        <div class="nav-icon" id="nav-icon"></div>
                    </button>
                </div>
            </div>
        </header>
    </Wrapper>
</template>

<style scoped></style>
