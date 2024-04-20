<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const errorCode = route.params.errorCode;

const errorMessageMap = {
    404: 'Страница не найдена 404',
    500: 'Ошибка сервера 500',
};
</script>

<template>
    <div class="flex gap-5 flex-col justify-center items-center">
        <div class="font-medium text-lg">{{    errorMessageMap[errorCode] }}</div>

        <img class="w-56 h-56" src="/error/icons8-pizza-240.png" alt="" />
        <h2 class="font-medium text-xl">Упс... Похоже произошла ошибка</h2>
    </div>
</template>

<style scoped></style>
