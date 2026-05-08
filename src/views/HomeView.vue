<script setup lang="ts">
import { useHead } from '@vueuse/head'
import MainCarousel from '@/components/Home/MainCarousel.vue'
import GameGenreList from '@/components/GameGenreList/GameGenreList.vue'
import witcherImg from '@/assets/img/main/witcher.webp'

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
        <!-- <PopularGames />
        <PopularCategory />
        <GamesCatalog />
        <ProjectInfo />
        <ScrollToTop /> -->
    </div>
</template>
