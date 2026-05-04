import { ref, watch } from "vue";

const overlayIsOpen = ref(false);

watch(overlayIsOpen, (val: boolean) => {
    document.body.toggleAttribute('data-overlay', val)
})

export const useOverlay = () => {
    const showOverlay = () => {
        overlayIsOpen.value = true;
    }

    const hideOverlay = () => {
        overlayIsOpen.value = false;
    }

    const toggleOverlay = () => {
        overlayIsOpen.value = !overlayIsOpen.value;
    }

    return { overlayIsOpen, showOverlay, hideOverlay, toggleOverlay }
}