<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGenres } from '@/services/genresService'
import VCheckbox from '@/components/UI/Controls/VCheckbox.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import { useUrlCheckboxFilter } from '@/composables/useUrlCheckboxFilter'

const { selectedValues: genresValue, isExpand } = useUrlCheckboxFilter('genres')

const { data: genres, isLoading } = useQuery({
    queryKey: ['getGenres'],
    queryFn: () => fetchGenres()
})
</script>

<template>
    <p class="filters__name">
        Genres
        <span v-show="genresValue.length > 0">({{ genresValue.length }})</span>
    </p>
    <ul class="filters__items" :class="{ 'filters__items--expanded': isExpand }">
        <li v-for="genre in genres" :key="genre.id">
            <VCheckbox :id="genre.slug" :text="genre.name" :value="genre.id" v-model="genresValue" />
        </li>
        <li v-if="isLoading" class="filters__loader">
            <BaseLoader />
        </li>
    </ul>
    <button @click="isExpand = !isExpand" class="filters__toggle" type="button">
        {{ isExpand ? 'Hide' : 'Show more' }}
    </button>
</template>
