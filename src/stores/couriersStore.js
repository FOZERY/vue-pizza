import axios from 'axios';
import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useCouriersStore = defineStore('couriersStore', {
    state: () => ({
        couriers: [],
        sortBy: '',
        searchBy: '',
        isLoading: false
    }),

    getters: {
       
    },

    actions: {
        async fetchCouriers() {
            try {
                this.isLoading = true;
                this.couriers = [];
                const params = {};
                if(this.sortBy) {
                    params.sortBy = this.sortBy;
                } else {
                    this.sortBy = 'id';
                }

                if(this.searchBy) {
                    params.searchBy = this.searchBy
                }

                const { data } = await axios.get(`${API_URL}/courier/read.php`, {params});
                this.couriers = data; 
                this.isLoading = false;
            } catch(err) {
                console.log(err);
            }
        },
        async addCourier() {

        },
        async updateCourier(courierData) {
            try {
                this.isLoading = true;
                const fd = new FormData();
                for(let key in courierData) {
                    fd.append(key, courierData[key]);
                }
                const response = await axios.post(`${API_URL}courier/update.php`, fd);
                this.isLoading = false;
            } catch(err) {
                alert(err);
            }
        },
        async deleteCourier(courierId) {
             try {
               this.isLoading = true;
               const fd = new FormData();
               fd.append('id', courierId);
               await axios.post(`${API_URL}courier/delete.php`, fd);

            } catch(err) {
                alert(err);
            }
        }
    }
});
