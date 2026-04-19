<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'
import { useSwiper } from '@/composables/useSwiper'
import { mainContent } from '@/data/mainContent'
import CardFullscreen from '@/components/Cards/CardFullscreen.vue'

const swiperFullscreen = ref<HTMLElement | null>(null)

useSwiper(swiperFullscreen, {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    speed: 1000,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination.carousel-pagination'
    }
})
</script>

<template>
    <section aria-label="Main carousel" class="swiper mainCarousel" ref="swiperFullscreen">
        <div class="swiper-wrapper" role="group" aria-label="Main carousel slides">
            <CardFullscreen v-for="(game, index) in mainContent" :key="game.id" :data="game" :is-first-image="index === 0" class="swiper-slide" />
        </div>
        <div aria-label="Pagination carousel" class="swiper-pagination carousel-pagination"></div>
    </section>
</template>

<style lang="scss" scoped>
.mainCarousel {
    margin-bottom: 80px;

    @media (max-width: 1024px) {
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
}
</style>
