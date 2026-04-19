<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import { popularCategory } from '@/types/popularCategory'
import PopularCategoryNav from '@/components/PopularCategory/PopularCategoryNav.vue'
import PopularCategoryCarousel from '@/components/PopularCategory/PopularCategoryCarousel.vue'
import TheError from '@/components/UI/TheError.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const genre = ref(popularCategory[0].slug)

const { data, isPending, isError, refetch } = useQuery({
    queryKey: computed(() => ['getGamesByCategory', genre.value]),
    queryFn: () => fetchGames({ page_size: 8, page: 1, genres: genre.value }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <section class="popularCategory" aria-label="Popular categories">
        <PopularCategoryNav v-model="genre" />
        <div class="popularCategory__wrapper">
            <TheError v-if="isError" :retry-action="refetch" />
            <BaseLoader v-else-if="isPending" />
            <PopularCategoryCarousel v-else :data="data!" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 86px;
    gap: 18px;

    &__wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        flex-grow: 2;

        @media (max-width: 768px) {
            min-height: 160px;
        }
    }

    .error {
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
        flex-direction: column;
    }
}
</style>
