<template>
    <div class="flex flex-col border-b last:border-0">
        <div class="flex sm:p-0 gap-2 sm:border-0">
            <img class="w-20 h-20 sm:w-24 sm:h-24" src="/products/pizzas/pepperoni.png" />
            <div class="flex flex-col gap-3 justify-between flex-1">
                <div>
                    <h3 class="text-lg font-medium mb-1">Карбонара</h3>
                    <p class="text-xs sm:text-sm text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-between py-3">
            <span>2 876 ₽</span>
            <div
                class="flex bg-slate-200 rounded-3xl items-center justify-between text-stone-500 px-2 gap-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="cursor-pointer hover:fill-red-500 transition duration-300"
                    viewBox="0 0 16 16"
                >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
                <span class="text-sm">4</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="cursor-pointer hover:fill-red-500 transition duration-300"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>
