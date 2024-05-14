<script setup>
import axios from 'axios';
import { reactive } from 'vue';

import { useCouriersStore } from '@/stores/couriersStore';

const API_URL = import.meta.env.VITE_APP_API_URL;

const couriersStore = useCouriersStore();

const props = defineProps({
    id: Number,
    name: String,
    surname: String,
    patronymic: String,
    phone: String,
});

const courierData = reactive({
    id: props.id,
    name: props.name,
    surname: props.surname,
    patronymic: props.patronymic,
    phone: props.phone,
});

const emit = defineEmits(['courierChanged']);

const updateCourier = async () => {
    await couriersStore.updateCourier(courierData);
    emit('courierChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Изменение курьера</h2>
        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Имя</label>
                <input name="name" type="text" v-model="courierData.name"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Фамилия</label>
                <input name="surname" type="text" v-model="courierData.surname"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Отчество</label>
                <input name="patronymic" type="text" v-model="courierData.patronymic"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Телефон</label>
                <input name="price" type="text" v-model="courierData.phone"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
                @click.prevent="updateCourier"
                id="submitRegBtn"
                type="submit"
                value="Изменить курьера"
                class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5"
            />
        </form>
    </div>
</template>

<style scoped>

</style>