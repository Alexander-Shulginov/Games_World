<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'
import MainCarousel from '@/components/Home/MainCarousel.vue'
import GameGenreList from '@/components/GameGenreList/GameGenreList.vue'
import witcherImg from '@/assets/img/main/witcher.webp'

const GamesCatalog = defineAsyncComponent(() => import('@/components/GamesCatalog/GamesCatalog.vue'))
const PopularCategory = defineAsyncComponent(() => import('@/components/PopularCategory/PopularCategory.vue'))
const PopularGames = defineAsyncComponent(() => import('@/components/PopularGames/PopularGames.vue'))
const BaseScrollToTop = defineAsyncComponent(() => import('@/components/UI/BaseScrollToTop.vue'))
const ProjectInfo = defineAsyncComponent(() => import('@/components/Home/ProjectInfo.vue'))

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: witcherImg
        },
        {
            rel: 'preconnect',
            href: 'https://api.rawg.io',
            crossorigin: ''
        }
    ],
})
</script>

<template>
    <div aria-label="Home page">
        <MainCarousel />
        <GameGenreList />
        <PopularGames />
        <PopularCategory />
        <GamesCatalog />
        <ProjectInfo />
        <BaseScrollToTop />
    </div>
</template>
