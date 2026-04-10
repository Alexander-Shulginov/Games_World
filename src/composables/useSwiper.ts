import { onMounted, onUnmounted, nextTick, Ref, shallowRef } from 'vue'
import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types'

export function useSwiper(swiperContainer: Ref<HTMLElement | null>, options: SwiperOptions = {}) {
    const swiperInstance = shallowRef<Swiper | null>(null)

    const initSwiper = () => {
        if (!swiperContainer.value || swiperInstance.value) return
        swiperInstance.value = new Swiper(swiperContainer.value, options)
    }

    const updateSwiper = () => {
        if (swiperInstance.value) {
            swiperInstance.value.update()
        }
    }

    const destroySwiper = () => {
        if (swiperInstance.value) {
            swiperInstance.value.destroy(true, true)
            swiperInstance.value = null
        }
    }

    onMounted(() => {
        nextTick(initSwiper)
    })

    onUnmounted(() => {
        destroySwiper()
    })

    return { swiperInstance, initSwiper, updateSwiper, destroySwiper }
}
