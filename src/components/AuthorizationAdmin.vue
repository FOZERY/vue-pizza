<script setup>
import { ref, watch } from 'vue';
import router from '@/router/router.js';

const isValid = ref(false);

const inputNumber = ref('');

const checkIsValid = () => {
    const regex = /^\+7\s\(?\d{3}\)?\s\d{3}-\d{2}-\d{2}$/;
    isValid.value = regex.test(inputNumber.value);
};

watch(isValid, () => {
    document.getElementById('submitRegBtn').disabled = !isValid.value;
});

defineEmits(['closePopup']);
</script>

<template>
    <h2 class="text-2xl font-medium mb-5">Вход в админ-панель</h2>

    <form class="flex flex-col flex-1 w-96 gap-3" @submit.prevent="router.push({name: 'admin'})">
        <div class="flex flex-col gap-1">
            <label for="name" class="text-slate-500 ">Логин</label>
            <input @input="checkIsValid" name="login" type="text" placeholder="Ваш логин..."
                   class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
        </div>
        <div class="flex flex-col gap-1">
            <label for="name" class="text-slate-500 ">Пароль</label>
            <input @input="checkIsValid" name="password" type="password" placeholder="Ваш пароль..."
                   class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
        </div>
        <input
            @click="$emit('closePopup')"
            id="submitRegBtn"
            type="submit"
            value="Войти"
            class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-3"
        />
    </form>
</template>

<style scoped></style>
