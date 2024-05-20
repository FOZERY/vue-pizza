<script setup>

import AppButton from '@/components/UI/AppButton.vue';
import router from '@/router/router.js';
import TitleSection from '@/components/UI/TitleSection.vue';
import { useUserStore } from '@/stores/userStore.js';
import { reactive, ref, watch } from 'vue';
import { useCustomersStore } from '@/stores/customersStore.js';

const userStore = useUserStore();
const customersStore = useCustomersStore();

let userData = reactive({ ...userStore.user });

const logoutUser = () => {
    localStorage.removeItem('jwt');
    userStore.user = null;
    userStore.isAuth = null;
    router.push('/');
};

const formatPhoneNumber = (phoneNumber) => {
    // Удаляем все символы кроме цифр
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Добавляем код страны
    phoneNumber = '+' + phoneNumber;

    return phoneNumber;
};

const updateUser = async (user) => {
    try {
        user.phone = formatPhoneNumber(user.phone);
        await customersStore.updateCustomer(user);
        await userStore.fetchUser(userStore.user['id']);
        alert('Пользователь обновлён');
    } catch (e) {
        alert(e);
    }
};

const isUpdateBtnDisabled = ref(true);

watch(userData, () => {

    isUpdateBtnDisabled.value = false;
}, { deep: true });
</script>

<template>
    <div class="w-1/5">
        <TitleSection>Профиль</TitleSection>
        <div class="flex flex-col ">
            <form class="flex flex-col gap-2 items-start min-w-64 w-72 max-w-72">
                <div class="flex flex-col w-full">
                    <label class="text-slate-500 mb-1" for="username">Имя</label>
                    <input v-model="userData.name"

                           class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                           type="text"
                           name="username"
                    />
                </div>
                <div class="flex flex-col w-full">
                    <label class="text-slate-500 mb-1" for="phone">Номер телефона</label>
                    <input
                        v-model="userData.phone"
                        v-mask="'+7 (###) ###-##-##'"
                        class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                        type="tel"
                        name="phone"
                    />
                </div>
                <div class="flex flex-col w-full">
                    <label class="text-slate-500 mb-1" for="email">Email</label>
                    <input
                        v-model="userData.email"
                        class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                        type="email"
                        name="email"
                    />
                </div>
                <AppButton
                    @click.prevent="updateUser(userData)"
                    :disabled="isUpdateBtnDisabled"
                    class="mt-5 bg-red-600 py-2 text-white hover:bg-red-700 transition duration-300 w-full">
                    Обновить
                </AppButton>
            </form>
        </div>
        <AppButton
            class="mt-10 hidden md:block bg-slate-200 text-slate-600 py-1.5 px-3.5 text-base hover:text-black hover:bg-slate-300 active:bg-slate-400"
            @click="logoutUser">Выйти
        </AppButton>
    </div>
</template>

<style scoped>

</style>