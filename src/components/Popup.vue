<template>
    <div class="flex fixed z-40 justify-center opacity-100 top-0 right-0 w-full h-full">
        <div
            class="relative flex flex-col bg-white p-3 rounded-lg mx-10 my-40 min-h-40 max-h-60 w-96"
        >
            <div
                class="absolute -right-5 top-0 translate-x-0 -translate-y-1 cursor-pointer text-white hover:text-stone-400 transition duration-300 font-medium text-lg"
            >
                X
            </div>
            <h2 class="">Вход на сайт</h2>
            <form class="flex flex-col" action="">
                <label for="">Введите номер телефона</label>
                <input type="tel" />
                <button class="color-red-500">Отправить смс</button>
            </form>
        </div>
    </div>
</template>
