import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRootStore = defineStore('rootStore', () => {
    const isMobile = ref(false);

    return {
        isMobile,
    };
});
