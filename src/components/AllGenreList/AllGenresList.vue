<script setup lang="ts">
import CardGenre from '@/components/Cards/CardGenre.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import type { IGenres } from '@/types/interfaces/IGenres'

defineProps<{
    isFetching: boolean
    data: IGenres[] | undefined
    isError: boolean
    errorMessage?: string
}>()
</script>

<template>
    <div class="allGenres__wrapper">
        <BaseLoader v-if="isFetching" />
        <ul v-else-if="data?.length" class="genresList">
            <li v-for="genre in data" :key="genre.id">
                <CardGenre :data="genre" />
            </li>
        </ul>
        <div v-else-if="isError" class="error">
            {{ errorMessage ?? 'Failed to load genres' }}
        </div>
        <div v-else class="empty">No genres found</div>
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
