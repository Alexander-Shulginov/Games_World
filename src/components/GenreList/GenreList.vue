<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'
import { useSwiper } from '@/composables/useSwiper'
import { genreList } from '@/types/genres'
import GenreListCard from '@/components/GenreList/GenreListCard.vue'

const swiperGenre = ref<HTMLElement | null>(null)

useSwiper(swiperGenre, {
    modules: [Pagination],
    loop: true,
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
    pagination: { el: '.swiper-pagination.genreList-pagination' }
})
</script>

<template>
    <section class="genreList" aria-label="Genre list">
        <div class="swiper genreList__swiper" ref="swiperGenre">
            <div class="swiper-wrapper">
                <GenreListCard v-for="genre in genreList" :key="genre.genreId" :data="genre" class="swiper-slide" />
            </div>
        </div>
        <div class="swiper-pagination genreList-pagination"></div>
    </section>
</template>

<style lang="scss" scoped>
.genreList {
    position: relative;
    margin-bottom: 56px;

    @media (max-width: 768px) {
        margin-bottom: 35px;
    }

    &__swiper {
        padding: 4px 3px 40px 3px;
    }
}
</style>