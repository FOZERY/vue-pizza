<script setup>
import ButtonMain from '@/components/UI/ButtonMain.vue';
import Logo from './UI/Logo.vue';
import Wrapper from '@/components/Utility/Wrapper.vue';
import { useRootStore } from '@/stores/rootStore.js';

const rootStore = useRootStore();
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
                <ButtonMain
                    v-if="!rootStore.isAuth"
                    @click="$emit('showPopup')"
                    class="hidden md:block bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200 active:bg-slate-300"
                    >Войти
                </ButtonMain>
                <div class="hidden md:block" v-else>Профиль</div>

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
