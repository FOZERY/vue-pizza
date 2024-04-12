import { ref, watch } from 'vue';

export function useHeaderDrawer() {
    const headerDrawerIsOpen = ref(false);

    const showHeaderDrawer = () => {
        headerDrawerIsOpen.value = true;
    };

    watch(headerDrawerIsOpen, () => {
        headerDrawerIsOpen.value
            ? document.body.classList.add('noScroll')
            : document.body.classList.remove('noScroll');
    });

    return {
        showHeaderDrawer,
        headerDrawerIsOpen,
    };
}
