<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularGamesCarousel from '@/components/PopularGames/PopularGamesCarousel.vue'
import TheError from '@/components/UI/TheError.vue'
import VTitle from '@/components/UI/Typography/VTitle.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import VLink from '@/components/UI/Controls/VLink.vue'

const { isPending, data, isError, refetch } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames({ page_size: 15, page: 1 }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <section class="popularGames">
        <div class="popularGames__top">
            <VTitle :tag="'h2'" :is-bold="true" class="popularGames__title">Most Popular</VTitle>
            <VLink :to="{ name: 'Games' }" :text="'View all'" :size="'compact'" />
        </div>
        <div class="popularGames__content">
            <TheError v-if="isError" :retry-action="refetch" />
            <BaseLoader v-else-if="isPending" />
            <PopularGamesCarousel v-else :data="data!" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 80px;

    @media (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }

    &__content {
        min-height: 450px;
        position: relative;

        @media (max-width: 768px) {
            min-height: 300px;
        }
    }

    &__top {
        margin-bottom: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
