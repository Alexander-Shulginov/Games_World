import { markRaw, reactive, type Component } from 'vue'

interface PopupItem {
    id: string
    component: Component
    props?: Record<string, unknown>
}

export const popupStack = reactive<PopupItem[]>([])

export const usePopup = () => {
    const open = (component: Component, props?: Record<string, unknown>) => {
        const id = Math.random().toString(36).slice(2)
        popupStack.push({ id, component: markRaw(component), props })
        return id
    }

    const close = (id?: string) => {
        if (id) {
            const index = popupStack.findIndex((p) => p.id === id)
            if (index !== -1) popupStack.splice(index, 1)
        } else {
            popupStack.pop()
        }
    }

    return { popupStack, open, close }
}
