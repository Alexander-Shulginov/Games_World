<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import TheHeader from '@/layouts/TheHeader/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter/TheFooter.vue'
import { overlayState } from '@/store/overlayStore'
import { APP_CONFIG } from '@/config/app.config'

const route = useRoute()

useHead({
    title: computed(() => route.meta.title ? `${APP_CONFIG.global.appName} | ${route.meta.title}` : APP_CONFIG.global.appName)
})

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
    <div class="wrapper">
        <TheHeader />
        <main :class="classes">
            <router-view name="filters"></router-view>
            <router-view v-slot="{ Component }">
                <component :is="Component"></component>
            </router-view>
        </main>
        <TheFooter />
    </div>
</template>
