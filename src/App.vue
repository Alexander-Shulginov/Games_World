<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '@/layouts/TheHeader/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter/TheFooter.vue'
import { overlayState } from '@/store/overlayStore'

const route = useRoute()

const hasFilters = computed(() => route.matched.some((m) => m.components?.filters))

const classes = computed(() => ({
    container: true,
    'filters-wrapper': hasFilters.value
}))

const isInert = computed(() => {
    return overlayState.overlayIsOpen === true
})
</script>

<template>
    <div class="wrapper" :inert="isInert">
        <TheHeader />
        <main :class="classes">
            <router-view name="filters"></router-view>
            <router-view v-slot="{ Component, route }">
                <component :is="Component" :key="route.path"></component>
            </router-view>
        </main>
        <TheFooter />
    </div>
</template>
