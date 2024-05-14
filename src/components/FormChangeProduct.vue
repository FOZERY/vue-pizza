<script setup>
import { useProductsStore } from '@/stores/productsStore';
import { reactive } from 'vue';

const productsStore = useProductsStore();

const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    type_id: Number,
});

const productData = reactive({
    id: props.id,
    name: props.name,
    description: props.description,
    price: props.price,
    image: props.image,
    type_id: props.type_id,
});

let selectedFile;
const onFileSelect = (event) => {
    selectedFile = event.target.files[0];
}

const emit = defineEmits(['closePopup', 'productChanged']);
const updateProduct = async () => {
    await productsStore.updateItem(productData, selectedFile);
    emit('productChanged');
}
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Изменение продукта</h2>
        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col">
                <label for="category" class="text-slate-500 ">Категория</label>
                <select v-model="productData.type_id" name="category"
                        class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
                <option disabled value="">Выбрать категорию...</option>
                <option value="1">Пиццы</option>
                <option value="2">Комбо</option>
                <option value="3">Закуски</option>
                <option value="4">Десерты</option>
                <option value="5">Напитки</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Название</label>
                <input name="name" type="text" v-model="productData.name"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Описание</label>
                <textarea name="description" v-model="productData.description"
                          class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300 min-h-20 max-h-40"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Цена</label>
                <input name="price" type="number" v-model="productData.price"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Изображение</label>
                <input name="img" type="file"
                @change="onFileSelect"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
            @click.prevent="updateProduct"
                id="submitRegBtn"
                type="submit"
                value="Изменить продукт"
                class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5"
            />
        </form>
    </div>
</template>

<style scoped>

</style>