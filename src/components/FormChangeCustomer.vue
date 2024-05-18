<script setup>
import axios from 'axios';
import { reactive } from 'vue';

import { useCustomersStore } from '@/stores/customersStore';

const API_URL = import.meta.env.VITE_APP_API_URL;

const customersStore = useCustomersStore();

const props = defineProps({
    id: Number,
    name: String,
    surname: String,
    email: String,
    phone: String,
});

const customerData = reactive({
    id: props.id,
    name: props.name,
    surname: props.surname,
    email: props.email,
    phone: props.phone,
});

const emit = defineEmits(['customerChanged']);

const updateCustomer = async () => {
    await customersStore.updateCustomer(customerData);
    emit('customerChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Изменение клиента</h2>
        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Имя</label>
                <input name="name" type="text" v-model="customerData.name"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Фамилия</label>
                <textarea name="description" v-model="customerData.surname"
                          class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300 min-h-20 max-h-40"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Номер</label>
                <input name="price" type="tel" v-model="customerData.phone"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 " >Email</label>
                <input name="img" type="text" v-model="customerData.email"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
                @click.prevent="updateCustomer"
                id="submitRegBtn"
                type="submit"
                value="Изменить клиента"
                class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5"
            />
        </form>
    </div>
</template>

<style scoped>

</style>