<script setup>
const props = defineProps({
    to: [String, Object],
});
</script>

<template>
    <li class="cursor-pointer hover:text-red-700 transition duration-300">
        <router-link class="bg-slate-200 px-2 py-1 rounded-xl sm:bg-transparent sm:p-0" :to="to">
            <slot></slot>
        </router-link>
    </li>
</template>

<style scoped></style>
