<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchPlatforms } from '@/services/platformsService'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const route = useRoute()
const router = useRouter()
const platformValue = ref<string[]>([])
const isExpand = ref(false)

const { data: platforms, isLoading } = useQuery({
    queryKey: ['getPlatforms'],
    queryFn: () => fetchPlatforms()
})

watch(
    () => platformValue.value,
    (n) => {
        updateUrlQuery(router, {
            parent_platforms: n.join(','),
            page: 1
        })
    }
)

watch(
    () => route.query.parent_platforms,
    (newValue) => {
        if (!newValue) {
            platformValue.value = []
        } else if (typeof newValue === 'string') {
            platformValue.value = newValue.split(',')
        }
    }
)

onMounted(() => {
    const platforms = route.query.parent_platforms
    if (typeof platforms === 'string') {
        platformValue.value = platforms.split(',')
    }
})
</script>

<template v-if="platforms">
    <p class="filters__name">
        Platforms <span v-show="platformValue.length > 0">({{ platformValue.length }})</span>
    </p>
    <ul class="filters__items" :class="{ 'filters__items--expanded': isExpand }">
        <li v-for="platform in platforms?.results" :key="platform.id">
            <BaseCheckbox
                :id="platform.slug"
                :text="platform.name"
                :value="platform.id"
                v-model="platformValue"
            />
        </li>
        <li v-if="isLoading" class="filters__loader">
            <BaseLoader />
        </li>
    </ul>
    <button @click="isExpand = !isExpand" class="filters__toggle" type="button">
        {{ isExpand ? 'Hide' : 'Show more' }}
    </button>
</template>
