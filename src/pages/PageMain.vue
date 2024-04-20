<script setup>
import MainMenu from '@/components/MainMenu.vue';
import AppLoader from '@/components/UI/AppLoader.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <MainMenu />
        </template>
        <template #fallback>
            <AppLoader />
            <!--            <MenuSkeleton />-->
        </template>
    </Suspense>
</template>

<style scoped></style>
