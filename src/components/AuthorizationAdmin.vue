<script setup>
import { ref } from 'vue';
import router from '@/router/router.js';
import { useAdminStore } from '@/stores/adminStore.js';

const login = ref('');
const password = ref('');

const adminStore = useAdminStore();

const emit = defineEmits(['closePopup']);
const loginAdmin = async () => {
    try {
        adminStore.admin = await adminStore.login(login.value, password.value);
        adminStore.isAuth = true;
        emit('closePopup');
        await router.push('/admin');
    } catch (e) {
        alert(e.response.data.message);
    }
};

</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Вход в админ-панель</h2>

        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Логин</label>
                <input v-model="login" name="login" type="text" placeholder="Ваш логин..."
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Пароль</label>
                <input v-model="password" name="password" type="password" placeholder="Ваш пароль..."
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
                @click.prevent="loginAdmin"
                id="submitRegBtn"
                type="submit"
                value="Войти"
                class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-3"
            />
        </form>
    </div>
</template>

<style scoped></style>
