<script setup>
import { ref, watch } from 'vue';

const isValid = ref(false);

const inputNumber = ref('');

const checkIsValid = () => {
    const regex = /^\+7\s\(?\d{3}\)?\s\d{3}-\d{2}-\d{2}$/;
    isValid.value = regex.test(inputNumber.value);
};

watch(isValid, () => {
    document.getElementById('submitRegBtn').disabled = !isValid.value;
});
</script>

<template>
    <h2 class="text-2xl font-medium mb-5">Вход на сайт</h2>

    <form class="flex flex-col flex-1 w-96" action="" method="post">
        <label class="text-slate-500 mb-2" for="">Введите номер телефона</label>
        <input
            v-model="inputNumber"
            v-mask="'+7 (###) ###-##-##'"
            @input="checkIsValid"
            class="border border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
            type="tel"
            placeholder="+7 (999) 999-99-99"
        />
        <input
            disabled
            id="submitRegBtn"
            type="submit"
            value="Отправить смс"
            class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-7"
        />
    </form>
</template>

<style scoped></style>