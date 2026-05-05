<script setup lang="ts">
import { RouteName } from '@/router/router'
import { nextTick, ref, watch } from 'vue'
import { Navigation } from 'swiper/modules'
import { useSwiper } from '@/composables/useSwiper'
import { IListGames } from '@/types/interfaces/IGames'
import CardGame from '@/components/Cards/CardGame.vue'

const props = defineProps<{
    data: IListGames
}>()

const swiperPopular = ref<HTMLElement | null>(null)

const { initSwiper } = useSwiper(swiperPopular, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 14,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 8 },
        460: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    },
    navigation: {
        nextEl: '.swiper-button-next.btn-games',
        prevEl: '.swiper-button-prev.btn-games'
    }
})

watch(
    () => props.data,
    () => {
        nextTick(() => initSwiper())
    }
)
</script>

<template>
    <div class="popularGames__carousel">
        <div class="swiper" ref="swiperPopular">
            <ul class="popularGames__list swiper-wrapper">
                <li v-for="game in data.results" :key="game.id" class="swiper-slide">
                    <CardGame :game="game" :to="{ name: RouteName.Game, params: { id: game.id } }" />
                </li>
            </ul>
        </div>
        <div class="swiper-button-next btn-games"></div>
        <div class="swiper-button-prev btn-games"></div>
    </div>
</template>

<style lang="scss" scoped>
.popularGames {
    &__carousel {
        position: relative;

        .swiper-button-prev,
        .swiper-button-next {
            margin-top: -56px;
        }
    }

    &__list {
        .swiper-slide {
            padding: 4px 4px 30px 4px;
        }
    }
}
</style>
