<script setup lang="ts">
import GamesCatalogList from '@/components/GamesCatalog/GamesCatalogList.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { fetchGames } from '@/services/gamesService'
import { getCurrentYearRange } from '@/utils/formatDate';
import { useQuery } from '@tanstack/vue-query'

const { data: releasedGames, isPending: releasedGamesLoading, isError: releasedGamesError } = useQuery({
    queryKey: ['released'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            ordering: '-rating',
            platforms: '4',
            dates: getCurrentYearRange()
        })
})

const { data: oldGames, isPending: oldGamesLoading, isError: oldGamesError } = useQuery({
    queryKey: ['old'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            ordering: '-added',
            dates: '1980-01-01,2000-12-31'
        })
})

const { data: playstationGames, isPending: playStationLoading, isError: playStationError } = useQuery({
    queryKey: ['playstation'],
    queryFn: () =>
        fetchGames({
            page_size: 5,
            platforms: '187',
            ordering: '-rating',
            platforms_count: 1
        })
})

const { data: xboxGames, isPending: xboxGamesLoading, isError: xboxGamesError } = useQuery({
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
    <section class="gamesCatalog" aria-label="Catalog of games">
        <div class="gamesCatalog__column">
            <BaseTitle :tag="'h2'" class="gamesCatalog__title">New Releases</BaseTitle>
            <GamesCatalogList :games="releasedGames?.results ?? []" :is-loading="releasedGamesLoading"
                :is-error="releasedGamesError" />
        </div>

        <div class="gamesCatalog__column">
            <BaseTitle :tag="'h2'" class="gamesCatalog__title">PlayStation</BaseTitle>
            <GamesCatalogList :games="playstationGames?.results ?? []" :is-loading="playStationLoading"
                :is-error="playStationError" />
        </div>

        <div class="gamesCatalog__column">
            <BaseTitle :tag="'h2'" class="gamesCatalog__title">Xbox</BaseTitle>
            <GamesCatalogList :games="xboxGames?.results ?? []" :is-loading="xboxGamesLoading" :is-error="xboxGamesError" />
        </div>

        <div class="gamesCatalog__column">
            <BaseTitle :tag="'h2'" class="gamesCatalog__title">Old school</BaseTitle>
            <GamesCatalogList :games="oldGames?.results ?? []" :is-loading="oldGamesLoading" :is-error="oldGamesError" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gamesCatalog {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 86px;
    overflow: hidden;

    &__title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    &__column {
        overflow: hidden;
        position: relative;
        min-height: 516px;

        @media (max-width: 768px) {
            min-height: 506px;
        }
    }

    .error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
