<script setup>
import { reactive } from 'vue';

const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    type_name: String,
});

const formData = reactive({
    id: props.id,
    name: props.name,
    description: props.description,
    price: props.price,
    imageUrl: props.imageUrl,
    type_name: props.type_name,
});

</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Изменение продукта</h2>
        <form class="flex flex-col flex-1 w-96 gap-3">
            <div class="flex flex-col">
                <label for="category" class="text-slate-500 ">Категория</label>
                <select v-model="formData.type_name" name="category"
                        class="border bg-white border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300">
                    <option selected value="pizzas">Пиццы</option>
                    <option value="sushi">Суши</option>
                    <option value="rolls">Роллы</option>
                    <option value="drinks">Напитки</option>
                    <option value="combos">Комбо</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label for="name" class="text-slate-500 ">Название</label>
                <input name="name" type="text" v-model="formData.name"
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