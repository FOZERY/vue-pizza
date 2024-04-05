<script setup>
defineProps({
    closeDrawer: Function,
});
</script>

<template>
    <div
        class="outer fixed top-0 left-0 bg-black h-full w-full w-hidden opacity-70 z-20"
        @click="closeDrawer"
    ></div>
    <slot></slot>
</template>
