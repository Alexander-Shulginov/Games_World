<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import { useSwiper } from '@/composables/useSwiper'
import { Pagination } from 'swiper/modules'
import BaseImg from '@/components/UI/BaseImg.vue'
import { IGameById } from '@/types/interfaces/IGameById'
import { IListGamesScreens } from '@/types/interfaces/IGameScreens'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

defineProps<{
    data: IGameById | undefined
    screens: IListGamesScreens[] | undefined
}>()

const gallerySwiper = ref<HTMLElement | null>(null)
const fancyboxSelector = '[data-fancybox]'

const { initSwiper, destroySwiper } = useSwiper(gallerySwiper, {
    modules: [Pagination],
    loop: false,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1220: {
            slidesPerView: 5
        }
    },
    pagination: { el: '.swiper-pagination' }
})

onMounted(() => {
    nextTick(() => {
        Fancybox.bind(fancyboxSelector, {
            Hash: false,
            Carousel: {
                Toolbar: {
                    display: {
                        left: [],
                        middle: [],
                        right: ['close']
                    }
                }
            }
        })
        initSwiper()
    })
})

onUnmounted(() => {
    Fancybox.unbind(fancyboxSelector)
    Fancybox.close()
    destroySwiper()
})
</script>

<template>
    <div class="gameInfo__gallery">
        <div class="swiper" ref="gallerySwiper">
            <div class="swiper-wrapper">
                <a v-for="screen in screens" data-fancybox="gallery" :key="screen.id" :href="screen.img"
                    class="swiper-slide" tabindex="-1">
                    <BaseImg :src="screen.img" :alt="data?.name" :width="screen.width" :height="screen.height"
                        class="gameInfo__gallery-img" />
                </a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gameInfo {
    &__gallery {
        margin-bottom: 40px;
    }

    &__gallery-img {
        border-radius: 6px;
        object-fit: cover;
        aspect-ratio: 16 / 9;
    }

    .swiper {
        padding-bottom: 40px;
    }

    a:focus-visible {
        outline: none;
    }
}
</style>
