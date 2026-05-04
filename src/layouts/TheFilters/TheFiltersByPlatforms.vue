<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchPlatforms } from '@/services/platformsService'
import VCheckbox from '@/components/UI/Controls/VCheckbox.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import { useUrlCheckboxFilter } from '@/composables/useUrlCheckboxFilter'

const { selectedValues: platformValue, isExpand } = useUrlCheckboxFilter('parent_platforms')

const { data: platforms, isLoading } = useQuery({
    queryKey: ['getPlatforms'],
    queryFn: () => fetchPlatforms()
})
</script>

<template v-if="platforms">
    <p class="filters__name">
        Platforms <span v-show="platformValue.length > 0">({{ platformValue.length }})</span>
    </p>
    <ul class="filters__items" :class="{ 'filters__items--expanded': isExpand }">
        <li v-for="platform in platforms?.results" :key="platform.id">
            <VCheckbox :id="platform.slug" :text="platform.name" :value="platform.id" v-model="platformValue" />
        </li>
        <li v-if="isLoading" class="filters__loader">
            <BaseLoader />
        </li>
    </ul>
    <button @click="isExpand = !isExpand" class="filters__toggle" type="button">
        {{ isExpand ? 'Hide' : 'Show more' }}
    </button>
</template>
