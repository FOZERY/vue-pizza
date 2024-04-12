import { ref, watch } from 'vue';

export function usePopup() {
    const popupIsOpen = ref(false);

    const showPopup = () => {
        popupIsOpen.value = true;
    };

    watch(popupIsOpen, () => {
        popupIsOpen.value
            ? document.body.classList.add('noScroll')
            : document.body.classList.remove('noScroll');
    });

    return { showPopup, popupIsOpen };
}
