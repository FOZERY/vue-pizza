<script setup>
import debounce from 'lodash.debounce';
import axios from 'axios';
import TitleSection from '@/components/UI/TitleSection.vue';
import AppTable from '@/components/AppTable.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { usePopup } from '@/composables/usePopup.js';
import {watch, onMounted,reactive} from 'vue';
import FormAddCourier from '@/components/FormAddCourier.vue';
import FormDeleteCourier from '@/components/FormDeleteCourier.vue';
import FormUpdateCourier from '@/components/FormUpdateCourier.vue';
import { useCouriersStore } from '@/stores/couriersStore';
import AppButton from '@/components/UI/AppButton.vue';

const { showPopup, popupIsOpen, popupComponent } = usePopup();

const API_URL = import.meta.env.VITE_APP_API_URL;

const couriersStore = useCouriersStore();

const popupComponents = {
    FormAddCourier,
    FormDeleteCourier,
    FormUpdateCourier
};

const formData = reactive({
    id: null,
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
});

const setFormData = (courierData) => {
    formData.id = courierData.id;
    formData.name = courierData.name;
    formData.surname = courierData.surname;
    formData.patronymic = courierData.patronymic;
    formData.phone = courierData.phone;
};

const showDeleteForm = (courierData) => {
    showPopup('FormDeleteCourier');
    setFormData(courierData);
}

const showChangeForm = (courierData) => {
    showPopup('FormUpdateCourier');
    setFormData(courierData);
}

const courierChanged = async () => {
    popupIsOpen.value = false;
    await couriersStore.fetchCouriers();
}

const changeSortBy = (sortBy) => {
    couriersStore.sortBy === sortBy ? couriersStore.sortBy = `-${sortBy}`: couriersStore.sortBy = sortBy;
}

watch(
    () => couriersStore.sortBy,
    debounce(async () => {
        await couriersStore.fetchCouriers();
    }, 100)
);

watch(
    () => couriersStore.searchBy,
    debounce(async () => {
        await couriersStore.fetchCouriers();
    }, 300)
);

onMounted(async () => {
    await couriersStore.fetchCouriers();
});
</script>

<template>
    <div>
        <AppPopup v-model="popupIsOpen">
            <component
                @closePopup="popupIsOpen = false"
                @courierChanged="courierChanged"
                :is="popupComponents[popupComponent]"
                v-bind="formData"
            />
        </AppPopup>
        
        <TitleSection>Курьеры</TitleSection>
        <div class="flex gap-5 items-center mb-5">
            <AppButton
                @click="showPopup('FormAddCourier')"
                class="border bg-white shadow-sm px-5 hover:border-slate-700 transition duration-300"
            >
                Добавить курьера
            </AppButton>
            <div class="relative ml-auto">
                <img
                    class="absolute w-4 h-4 translate-y-2 translate-x-2"
                    src="/special-icons/magnifier.svg"
                    alt=""
                />
                <!-- TODO: Вынести input в компонент            -->
                <input
                    v-model="couriersStore.searchBy"
                    placeholder="Поиск..."
                    class="rounded-lg py-1 pl-7 pr-3 w-60 text-base shadow-sm outline-none"
                    type="text"
                />
            </div>
        </div>
        
        <AppTable>
            <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3"><div class="flex items-center">
                                id
                                <a href="#" @click.prevent="changeSortBy('id')"
                                    ><svg
                                        class="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                                        /></svg
                                ></a>
                            </div></th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                Имя
                                <a href="#" @click.prevent="changeSortBy('name')"
                                    ><svg
                                        class="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                                        /></svg
                                ></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                Фамилия
                                <a href="#" @click.prevent="changeSortBy('surname')"
                                    ><svg
                                        class="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                                        /></svg
                                ></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                Отчество
                                <a href="#" @click.prevent="changeSortBy('patronymic')"
                                    ><svg
                                        class="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                                        /></svg
                                ></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                Телефон
                                <a href="#" @click.prevent="changeSortBy('phone')"
                                    ><svg
                                        class="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                                        /></svg
                                ></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Редактирование</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Удаление</span>
                        </th>
                    </tr>
            </thead>
            <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="courier in couriersStore.couriers" :key="courier.id">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ courier.id }}
                        </th>
                        <td class="px-6 py-4">{{ courier.name }}</td>
                        <td class="px-6 py-4">{{courier.surname}}</td>
                        <td class="px-6 py-4">{{ courier.patronymic }}</td>
                        <td class="px-6 py-4">{{ courier.phone }}</td>
                        <td class="px-6 py-4 text-right">
                            <a @click.prevent="showChangeForm(courier)"
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Редактировать</a
                            >
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a @click.prevent="showDeleteForm(courier)"
                                href="#"
                                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >Удалить</a
                            >
                        </td>
                    </tr>
                   
                </tbody>
        </AppTable>
   <!-- This is an example component -->
 
    </div>
</template>