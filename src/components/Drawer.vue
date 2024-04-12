<script setup>
defineEmits(['closeCart']);
</script>

<template>
    <div
        @click.self="$emit('closeCart')"
        class="outer fixed top-0 left-0 right-0 bottom-0 bg-black/70 h-lvh w-full w-hidden z-20"
    >
        <slot></slot>
    </div>
</template>
