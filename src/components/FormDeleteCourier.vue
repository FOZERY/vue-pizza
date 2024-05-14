<script setup>
import { useCouriersStore } from '@/stores/couriersStore';

const couriersStore = useCouriersStore();

const props = defineProps({
    id: Number,
});

const emit = defineEmits(['closePopup', 'courierChanged']);

const deleteCourier = async () => {
    await couriersStore.deleteCourier(props.id);
    emit('courierChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Удаление курьера</h2>
        <h3>Вы уверены, что хотите удалить курьера?</h3>
        <div class="flex justify-center gap-3 mt-5">
        <button @click="deleteCourier" class="border px-4 py-0.5 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300">Да</button>
        <button class="border px-4 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300" @click="emit('closePopup')">Нет</button>
        </div>
    </div>
    
</template>

<style scoped>

</style>