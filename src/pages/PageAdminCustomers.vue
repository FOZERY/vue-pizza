<script setup>
import debounce from 'lodash.debounce';
import axios from 'axios';
import TitleSection from '@/components/UI/TitleSection.vue';
import AppTable from '@/components/AppTable.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { usePopup } from '@/composables/usePopup.js';
import {watch, onMounted,reactive} from 'vue';
import FormDeleteCustomer from '@/components/FormDeleteCustomer.vue';
import FormChangeCustomer from '@/components/FormChangeCustomer.vue';
import { useCustomersStore } from '@/stores/customersStore';

const { showPopup, popupIsOpen, popupComponent } = usePopup();

const API_URL = import.meta.env.VITE_APP_API_URL;

const customersStore = useCustomersStore();


const popupComponents = {
    FormDeleteCustomer,
    FormChangeCustomer,
};

const formData = reactive({
    id: null,
    name: '',
    surname: '',
    phone: '',
    email: '',
});

const setFormData = (customerData) => {
    formData.id = customerData.id;
    formData.name = customerData.name;
    formData.surname = customerData.surname;
    formData.phone = customerData.phone;
    formData.email = customerData.email;
};

const showDeleteForm = (customerData) => {
    showPopup('FormDeleteCustomer');
    setFormData(customerData);
}

const showChangeForm = (customerData) => {
    showPopup('FormChangeCustomer');
    setFormData(customerData);
}

const customerChanged = async () => {
    popupIsOpen.value = false;
    await customersStore.fetchCustomers();
}

const changeSortBy = (sortBy) => {
    customersStore.sortBy === sortBy ? customersStore.sortBy = `-${sortBy}`: customersStore.sortBy = sortBy;
}

watch(
    () => customersStore.sortBy,
    debounce(async () => {
        await customersStore.fetchCustomers();
    }, 100)
);

watch(
    () => customersStore.searchBy,
    debounce(async () => {
        await customersStore.fetchCustomers();
    }, 300)
);

onMounted(async () => {
    await customersStore.fetchCustomers();
});
</script>

<template>
    <div>
        <AppPopup v-model="popupIsOpen">
            <component
                @closePopup="popupIsOpen = false"
                @customerChanged="customerChanged"
                :is="popupComponents[popupComponent]"
                v-bind="formData"
            />
        </AppPopup>

        
        <TitleSection>Клиенты</TitleSection>
        <div class="flex gap-5 items-center mb-5">
        <div class="relative ml-auto">
                <img
                    class="absolute w-4 h-4 translate-y-2 translate-x-2"
                    src="/special-icons/magnifier.svg"
                    alt=""
                />
                <!-- TODO: Вынести input в компонент            -->
                <input
                    v-model="customersStore.searchBy"
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
                                email
                                <a href="#" @click.prevent="changeSortBy('email')"
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
                            <div class="flex items-center">
                                Адрес
                                <a href="#" @click.prevent="changeSortBy('address')"
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="customer in customersStore.customers" :key="customer.id">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ customer.id }}
                        </th>
                        <td class="px-6 py-4">{{ customer.name || 'Не задано' }}</td>
                        <td class="px-6 py-4">{{customer.surname || 'Не задано'}}</td>
                        <td class="px-6 py-4">{{ customer.email  || 'Не задано'}}</td>
                        <td class="px-6 py-4">{{ customer.phone || 'Не задано'}}</td>
                        <td class="px-6 py-4">{{ customer.address || 'Не задано'}}</td>
                        <td class="px-6 py-4 text-right">
                            <a @click.prevent="showChangeForm(customer)"
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Редактировать</a
                            >
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a @click.prevent="showDeleteForm(customer)"
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