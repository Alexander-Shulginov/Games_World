import { ref, watch } from "vue";

export const useOverlay = () => {
    const overlayIsOpen = ref(false);

    const showOverlay = () => {
        overlayIsOpen.value = true;
    }

    const hideOverlay = () => {
        overlayIsOpen.value = false;
    }

    const toggleOverlay = () => {
        overlayIsOpen.value = !overlayIsOpen.value;
    }

    watch(overlayIsOpen, (val: boolean) => {
        document.body.toggleAttribute('data-overlay', val)
    })

    return { overlayIsOpen, showOverlay, hideOverlay, toggleOverlay }
}