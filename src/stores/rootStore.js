import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRootStore = defineStore('rootStore', () => {
    const isMobile = ref(false);
    const isAuth = ref(false);

    return {
        isMobile,
        isAuth,
    };
});
