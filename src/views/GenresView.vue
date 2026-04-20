<script setup lang="ts">
import AllGenresList from '@/components/AllGenreList/AllGenresList.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGenres } from '@/services/genresService'

const { data, isPending, isError, refetch } = useQuery({
    queryKey: ['genres', 'list'],
    queryFn: fetchGenres
})
</script>

<template>
    <section class="allGenres" aria-label="All genres page">
        <BaseTitle :tag="'h1'" class="allGenres__title">Explore All Genres</BaseTitle>
        <p class="allGenres__text">Dive into a universe of games across every genre. <br/> Find your next adventure today!</p>
        <AllGenresList
            :data="data ?? []"
            :is-pending="isPending"
            :is-error="isError"
            :retry="refetch"
        />
    </section>
</template>

<style lang="scss" scoped>
.allGenres {
    &__title {
        margin-bottom: 12px;
    }

    &__text {
        opacity: 0.8;
        margin-bottom: 36px;

        @media (max-width: 768px) {
            margin-bottom: 26px;
        }
    }
}
</style>
