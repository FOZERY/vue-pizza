<script setup>
import router from '@/router/router.js';
import { useAdminStore } from '@/stores/adminStore.js';
import Wrapper from '@/components/Utility/Wrapper.vue';


const year = new Date().getFullYear();

const adminStore = useAdminStore();

const emit = defineEmits(['showAdminSignIn', 'AuthorizationAdmin']);
const showAdminAuthPopup = async () => {
    if (adminStore.isAuth) {
        await router.push('/admin');
    } else {
        emit('showAdminSignIn', 'AuthorizationAdmin');
    }
};
</script>

<template>
    <footer class="bg-stone-800 py-8 mt-auto">
        <Wrapper>
            <div class="mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
                <div class="flex flex-col gap-3">
                    <div class="flex items-center">
                        <div class="flex flex-col ml-1">
                            <h3 class="text-3xl font-semibold uppercase tracking-tighter text-white">
                                Roblox
                            </h3>
                            <span class="tracking-tight text-white">Пицца & Роллы</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <a href="#" target="_blank"
                        ><img class="w-8" src="/social-icons/vk.svg" alt=""
                        /></a>
                        <a href="#" target="_blank"
                        ><img class="w-8" src="/social-icons/tg.svg" alt=""
                        /></a>
                        <a href="#" target="_blank"
                        ><img class="w-8" src="/social-icons/inst.svg" alt=""
                        /></a>
                    </div>
                </div>
                <div class="flex flex-col gap-1 items-start">
                    <span class="text-white">Roblox Пицца</span>
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >О нас</a
                    >
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >Калорийность блюд</a
                    >
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >Состав блюд</a
                    >
                    <span @click="showAdminAuthPopup"
                          class="text-stone-600 hover:text-white transition duration-300 cursor-pointer"
                    >Админ-панель</span
                    >
                </div>
                <div class="flex flex-col gap-1 items-start">
                    <span class="text-white">Работа </span>
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >В пиццерии</a
                    >
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >It отдел</a
                    >
                </div>
                <div class="flex flex-col gap-1 items-start">
                    <span class="text-white">Контакты</span>
                    <a href="#" class="text-stone-600 hover:text-white transition duration-300"
                    >Почта</a
                    >
                </div>
                <div class="flex flex-wrap gap-1 items-start">
                    <a href="#">
                        <img class="w-28" src="/badges/AppStore.svg" alt="App Store" />
                    </a>
                    <a href="#">
                        <img class="w-32" src="/badges/GooglePlay.svg" alt="Google Play" />
                    </a>
                    <a href="#">
                        <img class="w-32" src="/badges/HuaweiApp.svg" alt="Huawei App Gallery" />
                    </a>
                </div>
                <div class="col-span-full border-t border-stone-700 py-5 text-zinc-400">
                    <span>Roblox Пицца </span>
                    <span>©&nbsp;{{ year }}</span>
                    <p class="text-sm mt-1">
                        Сайт студента НИУ "БелГУ" группы 12002202 Тагиева Дмитрия
                    </p>
                </div>
            </div>
        </Wrapper>
    </footer>
</template>

<style scoped></style>
