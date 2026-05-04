<script setup lang="ts">
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGenres } from '@/services/genresService'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import TheError from '@/components/UI/TheError.vue';
import CardGenre from '@/components/Cards/CardGenre.vue'

const { data, isPending, isError, refetch } = useQuery({
    queryKey: ['genres', 'list'],
    queryFn: fetchGenres
})
</script>

<template>
    <section class="allGenres" aria-label="All genres page">
        <BaseTitle :tag="'h1'" class="allGenres__title">Explore All Genres</BaseTitle>
        <p class="allGenres__text">Dive into a universe of games across every genre. <br/> Find your next adventure today!</p>

        <div class="allGenres__wrapper">
            <TheError v-if="isError" :retry-action="refetch"/>
            <BaseLoader v-else-if="isPending" />
            <ul v-else class="allGenres__list" aria-label="Genres">
                <li v-for="genre in data" :key="genre.id">
                    <CardGenre :data="genre" />
                </li>
            </ul>
        </div>
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

    &__wrapper {
        position: relative;
        min-height: 600px;
        padding-bottom: 80px;

        @media (max-width: 1024px) {
            padding-bottom: 60px;
        }

        @media (max-width: 768px) {
            padding-bottom: 40px;
        }

    }

    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
    }
}
</style>
