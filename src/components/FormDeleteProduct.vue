<script setup>
const props = defineProps({
    id: Number,
});

import {useProductsStore} from '@/stores/productsStore';

const productsStore = useProductsStore();

const emit = defineEmits(['closePopup', 'productChanged']);
const deleteProduct = async () => {
    await productsStore.deleteItem(props.id);
    emit('productChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Удаление продукта</h2>
        <h3>Вы уверены, что хотите удалить продукт?</h3>
        <div class="flex justify-center gap-3 mt-5">
        <button @click="deleteProduct" class="border px-4 py-0.5 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300">Да</button>
        <button class="border px-4 rounded-lg shadow-sm font-medium text-lg hover:bg-stone-100 transition duration-300" @click="emit('closePopup')">Нет</button>
        </div>
    </div>
</template>

<style scoped>

</style>