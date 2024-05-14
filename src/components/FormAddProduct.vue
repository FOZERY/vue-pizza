<script setup>
import { useProductsStore } from '@/stores/productsStore';
import axios from 'axios';
import { reactive } from 'vue';

const productsStore = useProductsStore();

const productData = reactive({
    type_id: '',
    name: '',
    description: '',
    price: '',
    image: '',
});


let selectedFile;
const onFileSelect = (event) => {
    selectedFile = event.target.files[0];
}

const emit = defineEmits(['closePopup', 'productChanged']);
const createProduct = async () => {
    await productsStore.createItem(productData, selectedFile);
    emit('productChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Добавление продукта</h2>
        <form class="flex flex-col flex-1 w-96 gap-3" method="POST">
            <div class="flex flex-col">
                <label for="type_id" class="text-slate-500 ">Категория</label>
                <select v-model="productData.type_id" name="type_id"
                        class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
                <option disabled selected value="">Выбрать категорию...</option>
                <option value="1">Пиццы</option>
                <option value="2">Комбо</option>
                <option value="3">Закуски</option>
                <option value="4">Десерты</option>
                <option value="5">Напитки</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Название</label>
                <input  name="name" type="text" v-model="productData.name"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="description" class="text-slate-500 ">Описание</label>
                <textarea name="description" v-model="productData.description"
                          class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300 min-h-20 max-h-40"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="price" class="text-slate-500 ">Цена</label>
                <input name="price" type="number" v-model="productData.price"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="image" class="text-slate-500 ">Изображение</label>
                <input name="image" type="file" 
                        @change="onFileSelect"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
                @click.prevent="createProduct"
                id="submitRegBtn"
                type="submit"
                value="Добавить продукт"
                class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5"
            />
        </form>
    </div>
</template>

<style scoped>

</style>