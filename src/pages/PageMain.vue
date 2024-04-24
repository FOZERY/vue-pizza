<script setup>
import MainMenu from '@/components/MainMenu.vue';
import AppLoader from '@/components/UI/AppLoader.vue';
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <MainMenu />
        </template>
        <template #fallback>
<!--            <AppLoader />-->
                 <MenuSkeleton />
        </template>
    </Suspense>
</template>

<style scoped></style>
