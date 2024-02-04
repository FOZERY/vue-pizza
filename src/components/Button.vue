<script setup>
defineProps({
    buttonName: String,
});
</script>

<template>
    <button class="rounded-3xl px-3 py-1 transition duration-300">
        <slot></slot>
    </button>
</template>
