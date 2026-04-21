import { reactive } from 'vue'

const isDesktop = () => {
    return window.innerWidth >= 1024
}

export const filtersState = reactive({
    isOpen: isDesktop()
})

export const toggleFilters = () => {
    filtersState.isOpen = !filtersState.isOpen
}

const mediaQuery = window.matchMedia('(max-width: 1024px)')

const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) filtersState.isOpen = false
}

mediaQuery.addEventListener('change', handleMediaChange)
handleMediaChange(mediaQuery)
