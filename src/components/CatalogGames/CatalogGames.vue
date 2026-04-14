<script setup lang="ts">
import CatalogGamesList from '@/components/CatalogGames/CatalogGamesList.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { fetchGames } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'

const date = new Date();

const { data: releasedGames, isPending: releasedGamesPending } = useQuery({
    queryKey: ['released'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            ordering: '-rating',
            platforms: '4',
            dates: `${date.getFullYear()}-0${date.getMonth() + 1}-01,${date.getFullYear()}-12-31`
        })
})

const { data: oldGames, isPending: oldGamesPending } = useQuery({
    queryKey: ['old'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            ordering: '-added',
            dates: '1980-01-01,2000-12-31'
        })
})

const { data: playstationGames, isPending: playStationPending } = useQuery({
    queryKey: ['playstation'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            platforms: '187',
            ordering: '-rating',
            platforms_count: 1
        })
})

const { data: xboxGames, isPending: xboxGamesPending } = useQuery({
    queryKey: ['xbox'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            platforms: '1',
            ordering: '-rating',
            platforms_count: 1
        })
})
</script>

<template>
    <div class="catalogGames">
        <div class="catalogGames__item">
            <BaseTitle :tag="'h2'" class="catalogGames__title">New Releases</BaseTitle>
            <CatalogGamesList :games="releasedGames?.results" :loading="releasedGamesPending" />
        </div>

        <div class="catalogGames__item">
            <BaseTitle :tag="'h2'" class="catalogGames__title">PlayStation</BaseTitle>
            <CatalogGamesList :games="playstationGames?.results" :loading="playStationPending" />
        </div>

        <div class="catalogGames__item">
            <BaseTitle :tag="'h2'" class="catalogGames__title">Xbox</BaseTitle>
            <CatalogGamesList :games="xboxGames?.results" :loading="xboxGamesPending" />
        </div>

        <div class="catalogGames__item">
            <BaseTitle :tag="'h2'" class="catalogGames__title">Old school</BaseTitle>
            <CatalogGamesList :games="oldGames?.results" :loading="oldGamesPending" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 86px;
    overflow: hidden;

    &__title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    &__item {
        height: 100%;
        overflow: hidden;
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 66px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-bottom: 40px;
    }
}
</style>
