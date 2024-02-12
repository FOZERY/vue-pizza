<script setup>
defineProps({
    closeDrawer: Function,
});
</script>

<template>
    <div
        @click="closeDrawer"
        class="fixed top-0 left-0 bg-black h-full w-full w-hidden z-20 opacity-70"
    ></div>
    <slot></slot>
</template>
