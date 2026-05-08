<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useHead } from '@vueuse/head'
import MainCarousel from '@/components/Home/MainCarousel.vue'
import GameGenreList from '@/components/GameGenreList/GameGenreList.vue'
import witcherImg from '@/assets/img/main/witcher.webp'

const GamesCatalog = defineAsyncComponent(() => import('@/components/GamesCatalog/GamesCatalog.vue'))
const PopularCategory = defineAsyncComponent(() => import('@/components/PopularCategory/PopularCategory.vue'))
const PopularGames = defineAsyncComponent(() => import('@/components/PopularGames/PopularGames.vue'))
const ScrollToTop = defineAsyncComponent(() => import('@/components/UI/Controls/ScrollToTop.vue'))
const ProjectInfo = defineAsyncComponent(() => import('@/components/Home/ProjectInfo.vue'))
const VPopup = defineAsyncComponent(() => import('@/components/UI/Popup/VPopup.vue'))

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

const popupIsOpen = ref(false);
</script>

<template>
    <div aria-label="Home page">
        <!-- <button @click="popupIsOpen = !popupIsOpen" type="button">popup</button> -->
        <MainCarousel />
        <GameGenreList />
        <PopularGames />
        <PopularCategory />
        <GamesCatalog />
        <ProjectInfo />
        <ScrollToTop />
        <VPopup :is-open="popupIsOpen" @close="popupIsOpen = false" />
    </div>
</template>
