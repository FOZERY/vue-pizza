<script setup>
import { inject } from 'vue';

const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    type_id: Number,
});

const showPopup = inject('showPopup');
const setFormData = inject('setFormData');

const showChangeForm = () => {
    showPopup('FormChangeProduct');
    setFormData(props);
};

const showDeleteForm = () => {
    showPopup('FormDeleteProduct');
    setFormData(props);
};
</script>
<template>
    <div
        class="relative group flex pb-3 sm:p-0 gap-2 sm:flex-col border-b last:border-0 sm:border-0 cursor-pointer"
        @click="showChangeForm"
    >
        <img src="/admin-icons/deleteIcon.svg" alt="X" @click.stop="showDeleteForm"
             class="absolute top-0 right-0 h-6 hover:scale-110 transition duration-300" />
        <img
            class="w-32 h-32 sm:w-60 sm:h-60 sm:mx-auto"
            :src="image"
            loading="lazy"
            :alt="name"
        />
        <div class="flex flex-col gap-3 justify-between flex-1">
            <div>
                <h3 class="text-lg sm:text-xl font-medium mb-1">{{ name }}</h3>
                <p class="text-xs sm:text-sm text-slate-500">
                    {{ description }}
                </p>
            </div>
            <div class="flex justify-between items-center">
                <span class="hidden sm:inline font-medium">за {{ price }} ₽</span>

            </div>
        </div>
    </div>
</template>
