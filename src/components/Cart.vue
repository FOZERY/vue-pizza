<script setup>
import CartItemList from './CartItemList.vue';
</script>

<template>
    <div class="cart flex flex-col fixed h-full top-0 right-0 w-full z-40 opacity-100 p-6">
        <div class="cart__header flex items-center gap-2 pb-4 mb-4 border-b border-stone-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="hidden sm:block hover:-translate-x-1 hover:fill-red-500 transition duration-300 cursor-pointer"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="block sm:hidden hover:-translate-x-1 hover:fill-red-500 transition duration-300 cursor-pointer"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
            </svg>
            <h2 class="text-2xl font-medium">Корзина</h2>
        </div>
        <CartItemList></CartItemList>
    </div>
</template>

<style scoped>
.cart {
    background-color: #f1f7ed;
}
</style>
