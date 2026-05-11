<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Navigation } from 'swiper/modules'
import { IListGames } from '@/types/interfaces/IGames'
import { useSwiper } from '@/composables/useSwiper'
import CardPopular from '@/components/Cards/CardPopular.vue'

const props = defineProps<{
    data: IListGames
}>()

const swiperCategory = ref<HTMLElement | null>(null)

const { initSwiper, swiperInstance, destroySwiper } = useSwiper(swiperCategory, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 14,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        460: { slidesPerView: 2, spaceBetween: 18 },
        860: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    },
    navigation: {
        nextEl: '.swiper-button-next.btn-popular',
        prevEl: '.swiper-button-prev.btn-popular'
    }
})

watch([() => props.data, swiperCategory], async ([data, el]) => {
    if (data && el) {
        await nextTick()
        if (swiperInstance) destroySwiper()
        initSwiper()
    }
})
</script>

<template>
    <div class="popularCategory__carousel">
        <div class="swiper popularCategory__carousel-swiper" ref="swiperCategory">
            <div class="swiper-wrapper" role="group" aria-label="Popular category slides">
                <CardPopular class="swiper-slide" v-for="game in data.results" :key="game.id" :data="game" />
            </div>
        </div>
        <div class="swiper-button-next btn-popular" aria-label="Next slide"></div>
        <div class="swiper-button-prev btn-popular" aria-label="Previous slide"></div>
    </div>
</template>

<style lang="scss" scoped>
.popularCategory__carousel {
    width: 100%;
    height: 100%;
    flex-grow: 2;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
        min-height: 160px;
    }

    &-swiper {
        padding: 4px;
    }
}
</style>
