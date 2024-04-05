<script setup>
import { ref, watch } from 'vue';

const isValid = ref(false);

const inputName = ref('');
const inputNumber = ref('');

const checkIsValid = () => {
    isValid.value = inputName.value !== '' && inputNumber.value !== '';
    console.log(isValid.value);
};

watch(isValid, () => {
    document.getElementById('submitRegBtn').disabled = !isValid.value;
});

defineProps({
    closePopup: Function,
});
</script>

<template>
    <div class="flex fixed z-40 justify-center opacity-100 top-0 right-0 w-full h-full">
        <div
            class="relative flex flex-col flex-1 bg-white p-7 rounded-lg mx-10 my-60 max-w-md h-80"
        >
            <div
                @click="closePopup"
                class="absolute -right-5 top-0 translate-x-0 -translate-y-1 cursor-pointer text-white hover:text-stone-400 transition duration-300 font-medium text-lg"
            >
                X
            </div>
            <h2 class="text-2xl font-medium mb-5">Вход на сайт</h2>
            <form class="flex flex-col flex-1" action="" method="post">
                <label class="text-slate-500 mb-2" for="">Введите имя</label>
                <input
                    v-model="inputName"
                    @input="checkIsValid"
                    class="border border-slate-300 focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
                    type="text"
                    placeholder="Имя"
                />
                <label class="text-slate-500 my-2" for="">Введите номер телефона</label>
                <input
                    v-model="inputNumber"
                    v-phone
                    @input="checkIsValid"
                    class="border border-slate-300 focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
                    type="tel"
                    placeholder="+7-999-999-99-99"
                />
                <input
                    disabled
                    id="submitRegBtn"
                    type="submit"
                    value="Отправить смс"
                    class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-auto"
                />
            </form>
        </div>
    </div>
</template>
