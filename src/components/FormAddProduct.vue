<script setup>
import { reactive } from 'vue';

const formData = reactive({
    category: '',
    name: '',
    description: '',
    price: '',
    img: '',
});

const checkIsValid = () => {
    const regex = /^\+7\s\(?\d{3}\)?\s\d{3}-\d{2}-\d{2}$/;
    isValid.value = regex.test(inputNumber.value);
};
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Добавление продукта</h2>
        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col">
                <label for="category" class="text-slate-500 ">Категория</label>
                <select v-model="formData.category" name="category"
                        class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
                    <option value="">Пиццы</option>
                    <option value="">Суши</option>
                    <option value="">Роллы</option>
                    <option value="">Напитки</option>
                    <option value="">Комбо</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Название</label>
                <input @input="checkIsValid" name="name" type="text" v-model="formData.name"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Описание</label>
                <textarea name="description" v-model="formData.description"
                          class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300 min-h-20 max-h-40"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Цена</label>
                <input name="price" type="number" v-model="formData.price"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Изображение</label>
                <input name="img" type="file"
                       class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
            </div>
            <input
                disabled
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