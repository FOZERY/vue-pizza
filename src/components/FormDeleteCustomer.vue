<script setup>
import { useCustomersStore } from '@/stores/customersStore';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

const customersStore = useCustomersStore();

const props = defineProps({
    id: Number,
});

const emit = defineEmits(['closePopup', 'customerChanged']);

const deleteCustomer = async () => {
    await customersStore.deleteCustomer(props.id);
    emit('customerChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Удаление клиента</h2>
        <h3>Вы уверены, что хотите удалить клиента?</h3>
        <div class="flex justify-center gap-3 mt-5">
        <button @click="deleteCustomer" class="border px-4 py-0.5 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300">Да</button>
        <button class="border px-4 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300" @click="emit('closePopup')">Нет</button>
        </div>
    </div>
    
</template>

<style scoped>

</style>