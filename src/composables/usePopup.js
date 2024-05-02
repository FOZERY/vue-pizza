import { ref, watch } from 'vue';

export function usePopup() {
    const popupIsOpen = ref(false);
    const popupComponent = ref('');

    const showPopup = (componentName) => {
        popupComponent.value = componentName;
        popupIsOpen.value = true;
    };

    watch(popupIsOpen, () => {
        console.log(popupIsOpen.value);
        popupIsOpen.value
            ? document.body.classList.add('noScroll')
            : document.body.classList.remove('noScroll');
    });

    return { showPopup, popupIsOpen, popupComponent };
}
