import axios from 'axios';
import { defineStore } from 'pinia';
import { $adminHost, $authHost } from '@/http/index.js';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useCustomersStore = defineStore('customersStore', {
    state: () => ({
        customers: [],
        sortBy: '',
        searchBy: '',
        isLoading: false,
    }),

    getters: {},

    actions: {
        async fetchCustomers() {
            try {
                this.isLoading = true;
                this.customers = [];
                const params = {};
                if (this.sortBy) {
                    params.sortBy = this.sortBy;
                } else {
                    this.sortBy = 'id';
                }

                if (this.searchBy) {
                    params.searchBy = this.searchBy;
                }

                const { data } = await axios.get(`${API_URL}/customer/read.php`, { params });
                this.customers = data;
                this.isLoading = false;
            } catch (err) {
                console.log(err);
            }
        },

        async addCustomer() {

        },
        async updateCustomer(customerData) {
            try {
                this.isLoading = true;
                const response = await $authHost.patch(`${API_URL}/customer/update.php`, customerData);
                this.isLoading = false;
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
        async updateCustomerAsAdmin(customerData) {
            try {
                this.isLoading = true;
                const response = await $adminHost.patch(`${API_URL}/customer/update.php`, customerData);
                this.isLoading = false;
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
        async deleteCustomer(customerId) {
            try {
                this.isLoading = true;
                const fd = new FormData();
                fd.append('id', customerId);
                await axios.post(`${API_URL}/customer/delete.php`, fd);

            } catch (err) {
                alert(err);
            }
        },
    },
});
