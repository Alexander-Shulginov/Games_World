<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'
import MainCarousel from '@/components/Home/MainCarousel.vue'
import GenreList from '@/components/GenreList/GenreList.vue'
import witcherImg from '@/assets/img/main/witcher.webp'

const CatalogGames = defineAsyncComponent(() => import('@/components/CatalogGames/CatalogGames.vue'))
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
        <!-- <MainCarousel /> -->
        <!-- <GenreList /> -->
        <!-- <PopularGames /> -->
        <!-- <PopularCategory /> -->
        <CatalogGames />
        <ProjectInfo />
        <BaseScrollToTop />
    </div>
</template>
