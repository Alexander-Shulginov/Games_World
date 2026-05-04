<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import {
    fetchGameById,
    fetchGameDLC,
    fetchGameSeries,
    fetchScreenShootsById
} from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'
import GameInfoDetails from '@/components/GameInfo/GameInfoDetails.vue'
import GameInfoGallery from '@/components/GameInfo/GameInfoGallery.vue'
import GameInfoSeries from '@/components/GameInfo/GameInfoSeries.vue'
import GameInfoTags from '@/components/GameInfo/GameInfoTags.vue'
import MetacriticRating from '@/components/Shared/MetacriticRating.vue'
import EsrbRating from '@/components/Shared/EsrbRating.vue'
import GameInfoUserRating from '@/components/GameInfo/GameInfoUserRating.vue'
import GameInfoDescription from '@/components/GameInfo/GameInfoDescription.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import TheError from '@/components/UI/TheError.vue'

const route = useRoute()
const gameId = computed(() => Number(route.params.id))

const { data: game, isLoading, isError } = useQuery({
    queryKey: ['getGameById', gameId],
    queryFn: () => fetchGameById(gameId.value)
})

const { data: screens } = useQuery({
    queryKey: ['getScreenShots', gameId],
    queryFn: () => fetchScreenShootsById(gameId.value)
})

const { data: series } = useQuery({
    queryKey: ['getGameSeries', gameId],
    queryFn: () => fetchGameSeries(gameId.value)
})

const { data: dlc } = useQuery({
    queryKey: ['getGameDLC', gameId],
    queryFn: () => fetchGameDLC(gameId.value)
})

useHead({
    title: computed(() => isLoading.value ? 'Loading...' : game.value?.name || 'Game')
})
</script>

<template>
    <section aria-label="Game page">
        <TheError v-if="isError"/>
        <BaseLoader v-else-if="isLoading" />
        <div class="gameInfo" v-else-if="game">
            <div class="gameInfo__wrap">
                <div class="gameInfo__picture">
                    <BaseImg :width="535" :height="346" :src="game.img" :alt="game.name" class="gameInfo__img" />
                    <EsrbRating :esrb="game.esrb" class="gameInfo__esrb" />
                </div>
                <div class="gameInfo__right">
                    <div class="gameInfo__top">
                        <BaseTitle :tag="'h1'" class="gameInfo__name">{{ game.name }}</BaseTitle>

                        <MetacriticRating v-if="game.metacritic > 0" :value="game.metacritic" />
                    </div>
                    <GameInfoDetails :info="game" />
                </div>
            </div>

            <GameInfoUserRating :userRating="game.ratings" class="gameInfo__user-rating" />

            <GameInfoGallery :data="game" :screens="screens ?? []" />

            <GameInfoDescription>
                {{ game.descr }}
            </GameInfoDescription>

            <GameInfoTags :tags="game.tags" class="gameInfo__tags" />

            <GameInfoSeries :data="series" :title="'Game series'" />

            <GameInfoSeries :data="dlc" :title="'DLC'" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gameInfo {
    &__wrap {
        display: flex;
        gap: 24px;
        margin-bottom: 36px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;
    }

    &__favorites {
        width: 56px;
        height: 56px;
        border-radius: 6px;
    }

    &__picture {
        position: relative;
    }

    &__user-rating {
        margin-bottom: 36px;
    }

    &__tags {
        margin-bottom: 40px;
    }

    &__esrb {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    &__img {
        max-height: 500px;
        object-fit: cover;
        border-radius: 10px;
    }

    &__right {
        width: 100%;
    }
}
</style>
