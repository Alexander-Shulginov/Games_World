<script setup lang="ts">
import AllGenresList from '@/components/AllGenreList/AllGenresList.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGenres } from '@/services/genresService'

const { data, isFetching, isError, error } = useQuery({
    queryKey: ['genres', 'list'],
    queryFn: fetchGenres
})
</script>

<template>
    <section aria-label="All genres page">
        <BaseTitle :tag="'h1'" class="allGenres-title">All Genres</BaseTitle>
        <div class="allGenres">
            <AllGenresList
                class="allGenres__genre"
                :data="data"
                :is-fetching="isFetching"
                :is-error="isError"
                :error-message="error instanceof Error ? error.message : undefined"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.allGenres {
    position: relative;
    min-height: 600px;

    &-title {
        margin-bottom: 36px;
        @media (max-width: 768px) {
            margin-bottom: 26px;
        }
    }

    &__genre {
        padding-bottom: 80px;
    }
}
</style>
