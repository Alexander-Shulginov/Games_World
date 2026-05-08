import { onUnmounted } from 'vue'

export const useScrollLock = () => {
    const cssClass = 'scroll-lock'

    const lockScroll = () => {
        document.body.classList.add(cssClass)
    }

    const unlockScroll = () => {
        document.body.classList.remove(cssClass)
    }

    const toggleScrollLock = () => {
        document.body.classList.toggle(cssClass)
    }

    onUnmounted(unlockScroll)

    return {
        lockScroll,
        unlockScroll,
        toggleScrollLock
    }
}
