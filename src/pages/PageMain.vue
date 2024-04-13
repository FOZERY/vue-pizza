<script setup>
import Menu from '@/components/Menu.vue';
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <Menu />
        </template>
        <template #fallback>
            <MenuSkeleton />
        </template>
    </Suspense>
</template>

<style scoped></style>
