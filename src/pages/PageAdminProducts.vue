<script setup>
import LogoAdmin from '@/components/UI/LogoAdmin.vue';
import TitleSection from '@/components/UI/TitleSection.vue';
import AppButton from '@/components/UI/AppButton.vue';
import { useProductsStore } from '@/stores/productsStore.js';
import ProductListSkeleton from '@/components/Skeletons/ProductListSkeleton.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { usePopup } from '@/composables/usePopup.js';
import { reactive, ref, watch, provide, onMounted } from 'vue';
import ProductList from '@/components/ProductList.vue';
import ProductListItemAdmin from '@/components/ProductListItemAdmin.vue';
import debounce from 'lodash.debounce';
import FormAddProduct from '@/components/FormAddProduct.vue';
import FormDeleteProduct from '@/components/FormDeleteProduct.vue';
import FormChangeProduct from '@/components/FormChangeProduct.vue';

const productsStore = useProductsStore();

productsStore.filterQuery = '1';
productsStore.searchQuery = '';

const { showPopup, popupIsOpen, popupComponent } = usePopup();

const isValid = ref(false);

const popupComponents = {
    FormAddProduct,
    FormDeleteProduct,
    FormChangeProduct,
};

watch(isValid, () => {
    document.getElementById('submitRegBtn').disabled = !isValid.value;
});

watch(
    () => productsStore.filterQuery,
    debounce(async () => {
        await productsStore.fetchItems();
    }, 100)
);

watch(
    () => productsStore.searchQuery,
    debounce(async () => {
        await productsStore.fetchItems();
    }, 500)
);

const formData = reactive({
    id: null,
    type_id: null,
    name: '',
    price: null,
    description: '',
    image: '',
});

const setFormData = (productData) => {
    formData.id = productData.id;
    formData.type_id = productData.type_id;
    formData.name = productData.name;
    formData.price = productData.price;
    formData.description = productData.description;
    formData.image = productData.image;
};

const productChanged = async () => {
    popupIsOpen.value = false;
    await productsStore.fetchItems();
}

onMounted(async () => {
    await productsStore.fetchItems();
})

provide('showPopup', showPopup);
provide('setFormData', setFormData);
</script>

<template>
    <div>
        <AppPopup v-model="popupIsOpen">
            <component
                @closePopup="popupIsOpen = false"
                @productChanged="productChanged"
                :is="popupComponents[popupComponent]"
                v-bind="formData"
            />
        </AppPopup>

        <TitleSection>Продукты</TitleSection>
        <div class="flex gap-5 items-center">
            <select
                v-model="productsStore.filterQuery"
                class="rounded-3xl bg-white border shadow-sm py-1 px-3 outline-none hover:border-slate-700 focus:border-slate-700 transition duration-300"
            >
                <option selected value="1">Пиццы</option>
                <option value="2">Комбо</option>
                <option value="3">Закуски</option>
                <option value="4">Десерты</option>
                <option value="5">Напитки</option>
            </select>

            <AppButton
                @click="showPopup('FormAddProduct')"
                class="border bg-white shadow-sm px-5 hover:border-slate-700 transition duration-300"
            >
                Добавить продукт
            </AppButton>
            <div class="relative ml-auto">
                <img
                    class="absolute w-4 h-4 translate-y-2 translate-x-2"
                    src="/special-icons/magnifier.svg"
                    alt=""
                />
                <!-- TODO: Вынести input в компонент            -->
                <input
                    v-model="productsStore.searchQuery"
                    placeholder="Поиск..."
                    class="rounded-lg py-1 pl-7 pr-3 w-60 text-base shadow-sm outline-none"
                    type="text"
                />
            </div>
        </div>
        <ProductListSkeleton class="mt-10" v-if="productsStore.isLoading" />
        <ProductList
            v-else
            :items="productsStore.items"
            :component="ProductListItemAdmin"
            class="mt-7"
        />
    </div>
</template>

<style scoped>
</style>