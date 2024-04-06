<script setup>
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton.vue';
import Menu from '@/components/Menu.vue';
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
