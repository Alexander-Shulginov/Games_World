<script setup lang="ts">
import { ref, computed } from 'vue'

import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import { useRoute } from 'vue-router'

import SearchField from '@/components/UI/Controls/SearchField.vue'
import GamesExplorerTopCardsLayout from '@/components/GamesExplorer/GamesExplorerCardsLayout.vue'
import GamesExplorerResults from '@/components/GamesExplorer/GamesExplorerResults.vue'
import GamesExplorerContent from '@/components/GamesExplorer/GamesExplorerContent.vue'
import GamesExplorerNavigation from '@/components/GamesExplorer/GamesExplorerNavigation.vue'

const route = useRoute()
const selectedRadio = ref('')

const {
    data: games,
    isFetching
} = useQuery({
    queryKey: computed(() => ['getGames', route.query]),
    queryFn: () => fetchGames({ page_size: 20, page: 1, ...route.query }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <section aria-label="Games page">
    <div class="gamesExplorer">
        <SearchField class="gamesExplorer__search" />

        <div class="gamesExplorer__top">
            <GamesExplorerResults :results="games?.count" />
            <GamesExplorerTopCardsLayout v-model="selectedRadio" />
        </div>

        <div class="gamesExplorer__content">
            <GamesExplorerContent :is-fetching="isFetching" :games="games" :layout="selectedRadio" />
        </div>

        <GamesExplorerNavigation :games="games" :is-fetching="isFetching" />
    </div>
    </section>
</template>

<style lang="scss">
.gamesExplorer {
    @media (max-width: 1024px) {
        padding-top: 50px;
    }

    &__search {
        margin-bottom: 28px;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 28px;
        gap: 12px;
    }

    &__content {
        margin-bottom: 48px;
        position: relative;
        min-height: 300px;
    }
}
</style>
