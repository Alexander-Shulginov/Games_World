<script setup lang="ts">
import CardGenre from '@/components/Cards/CardGenre.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import type { IGenres } from '@/types/interfaces/IGenres'
import TheError from '../UI/TheError.vue';

defineProps<{
    data: IGenres[]
    isPending: boolean
    isError: boolean
    retry: () => void
}>()
</script>

<template>
    <div class="allGenres__wrapper">
        <TheError v-if="isError" :retry-action="retry"/>
        <BaseLoader v-else-if="isPending" />
        <ul v-else class="genresList" aria-label="Genres">
            <li v-for="genre in data" :key="genre.id">
                <CardGenre :data="genre" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.genresList {
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
</style>
