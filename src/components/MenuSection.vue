<script setup>
import { onMounted, ref } from 'vue';
import CardList from './CardList.vue';

const props = defineProps({
    items: Array,
    section: String,
});

const sectionTitle = ref('');

const setSectionTitle = () => {
    switch (props.section) {
        case 'pizzas': {
            sectionTitle.value = 'Пиццы';
            break;
        }
        case 'rolls': {
            sectionTitle.value = 'Роллы';
            break;
        }
        case 'sushi': {
            sectionTitle.value = 'Суши';
            break;
        }
        case 'combos': {
            sectionTitle.value = 'Комбо';
            break;
        }
        case 'snacks': {
            sectionTitle.value = 'Закуски';
            break;
        }
        case 'deserts': {
            sectionTitle.value = 'Десерты';
            break;
        }
        case 'drinks': {
            sectionTitle.value = 'Напитки';
            break;
        }
    }
};

onMounted(() => {
    setSectionTitle();
});
</script>

<template>
    <section :id="section" class="mb-7 scroll-mt-16 sm:scroll-mt-20">
        <h2 class="text-2xl font-medium mb-5">{{ sectionTitle }}</h2>

        <CardList :items="items" />
    </section>
</template>
