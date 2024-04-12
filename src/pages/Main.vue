<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MenuSkeleton from '@/components/Skeletons/MenuSkeleton.vue';
import Menu from '@/components/Menu.vue';
import Popup from '@/components/UI/Popup.vue';

const route = useRoute();

const showModal = ref(false);

onMounted(() => {
    showModal.value = route.meta.showModal;
});
watch(route, () => {
    showModal.value = route.meta.showModal;
});
watch(showModal, () => {
    showModal.value
        ? document.body.classList.add('noScroll')
        : document.body.classList.remove('noScroll');
});
</script>

<template>
    <Popup :with-routing="true" v-model:show="showModal">
        <Suspense>
            <template #default>
                <router-view />
            </template>
            <template #fallback>
                <div class="opacity-0"></div>
            </template>
        </Suspense>
    </Popup>

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
