import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'

export function useUrlCheckboxFilter(queryParam: string) {
    const route = useRoute()
    const router = useRouter()
    const selectedValues = ref<string[]>([])
    const isExpand = ref(false)

    watch(
        () => selectedValues.value,
        (n) => {
            updateUrlQuery(router, { [queryParam]: n.join(','), page: 1 })
        }
    )

    watch(
        () => route.query[queryParam],
        (newValue) => {
            if (!newValue) {
                selectedValues.value = []
            } else if (typeof newValue === 'string') {
                selectedValues.value = newValue.split(',')
            }
        }
    )

    onMounted(() => {
        const value = route.query[queryParam]
        if (typeof value === 'string') {
            selectedValues.value = value.split(',')
        }
    })

    return { selectedValues, isExpand }
}
