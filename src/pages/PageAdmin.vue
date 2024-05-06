<script setup>

import LogoAdmin from '@/components/UI/LogoAdmin.vue';
import TitleSection from '@/components/UI/TitleSection.vue';
import AppButton from '@/components/UI/AppButton.vue';
import { useProductsStore } from '@/stores/productsStore.js';
import ProductListSkeleton from '@/components/Skeletons/ProductListSkeleton.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { usePopup } from '@/composables/usePopup.js';
import { reactive, ref, watch, provide } from 'vue';
import ProductList from '@/components/ProductList.vue';
import ProductListItemAdmin from '@/components/ProductListItemAdmin.vue';
import debounce from 'lodash.debounce';
import FormAddProduct from '@/components/FormAddProduct.vue';
import FormDeleteProduct from '@/components/FormDeleteProduct.vue';
import FormChangeProduct from '@/components/FormChangeProduct.vue';

const productsStore = useProductsStore();

productsStore.filterQuery = 'pizzas';
productsStore.searchQuery = '';
productsStore.fetchItems();

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

watch(() => productsStore.filterQuery, debounce(async () => {
    await productsStore.fetchItems();
}, 100));

watch(() => productsStore.searchQuery, debounce(async () => {
    await productsStore.fetchItems();
}, 500));


const formData = reactive({
    id: null,
    type_name: '',
    name: '',
    price: null,
    description: '',
    imageUrl: '',
});

const getFormData = (productData) => {
    formData.id = productData.id;
    formData.type_name = productData.type_name;
    formData.name = productData.name;
    formData.price = productData.price;
    formData.description = productData.description;
    formData.imageUrl = productData.imageUrl;
};

provide('showPopup', showPopup);
provide('setFormParams', getFormData);
</script>

<template>
    <div>
    <AppPopup v-model="popupIsOpen">
        <component :is="popupComponents[popupComponent]"
                   v-bind="formData"
        />
    </AppPopup>


    <div class="flex h-screen overflow-hidden">
        <aside class="static overflow-y-hidden top-0 flex min-h-svh w-80 flex-col bg-stone-800 py-8">
            <div class="flex items-center justify-center">
                <LogoAdmin />
            </div>
            <div class="flex flex-col flex-1">
                <nav class="flex flex-col mt-5 px-7">
                    <a class="flex items-center">
                        <img class="h-5" src="/admin-icons/icons8-пицца-салями.svg" />
                        <span class="ml-3 text-white text-lg">Продукты</span>
                    </a>
                </nav>

                <router-link class="mt-auto mx-5 flex justify-center items-center" to="main">
                    <AppButton class="bg-white w-full py-2 hover:bg-stone-400">Выход</AppButton>
                </router-link>

            </div>
        </aside>
        <div class="relative flex-1 overflow-y-auto overflow-x-hidden">
            <main>
                <div class="mx-auto max-w-screen-2xl p-10">
                    <TitleSection>Продукты</TitleSection>
                    <div class="flex gap-5 items-center">
                        <select v-model="productsStore.filterQuery"
                                class="rounded-3xl bg-white border shadow-sm py-1 px-3 outline-none hover:border-slate-700 focus:border-slate-700 transition duration-300">
                            <option selected value="pizzas">Пиццы</option>
                            <option value="sushi">Суши</option>
                            <option value="rolls">Роллы</option>
                            <option value="drinks">Напитки</option>
                            <option value="combos">Комбо</option>
                        </select>

                        <AppButton @click="showPopup('FormAddProduct')"
                                   class="border bg-white shadow-sm px-5 hover:border-slate-700 transition duration-300">
                            Добавить
                            продукт
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
                    <ProductListSkeleton class='mt-10' v-if="productsStore.isLoading" />
                    <ProductList v-else :items="productsStore.items" :component="ProductListItemAdmin"
                                 class="mt-7" />

                </div>
            </main>
        </div>
    </div>
    </div>
</template>

<style scoped>

</style>