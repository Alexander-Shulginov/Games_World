import { onMounted, onUnmounted, reactive } from 'vue'

export const overlayState = reactive({
    overlayIsOpen: false
})

export const useOverlay = () => {
    const showOverlay = () => {
        document.body.setAttribute('data-overlay', 'true')
        overlayState.overlayIsOpen = true
    }

    const hideOverlay = () => {
        document.body.removeAttribute('data-overlay')
        overlayState.overlayIsOpen = false
    }

    const toggleOverlay = () => {
        if (document.body.hasAttribute('data-overlay')) {
            hideOverlay()
        } else {
            showOverlay()
        }
    }

    const mediaQuery = window.matchMedia('(max-width: 1024px)')

    const handleMediaChange = () => {
        hideOverlay()
    }

    onMounted(() => {
        mediaQuery.addEventListener('change', handleMediaChange)
    })
    onUnmounted(() => {
        mediaQuery.removeEventListener('change', handleMediaChange)
    })

    return { showOverlay, hideOverlay, toggleOverlay }
}
