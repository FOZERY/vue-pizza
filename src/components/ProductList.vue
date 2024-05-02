<script setup>
const props = defineProps({
    items: Array,
    component: Object,
});

console.log(props.items);
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-c ols-3 xl:grid-cols-4 gap-6">
        <component :is="component"
                   v-for="item in items"
                   :key="item.id"
                   v-bind="item"
        />
    </div>
</template>
