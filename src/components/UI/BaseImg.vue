<script setup lang="ts">
import { ref } from 'vue'

import errorPl from '@/assets/img/common/error-placeholder.png'

withDefaults(
    defineProps<{
        src: string
        width: number
        height: number
        alt?: string
        loading?: 'lazy' | 'eager'
    }>(),
    { loading: 'lazy' },
)

const isLoading = ref(true)
const hasError = ref(false)

const onLoad = () => {
    isLoading.value = false
}

const onError = () => {
    hasError.value = true
    isLoading.value = false
}
</script>

<template>
    <div class="image-wrapper">
        <div v-if="isLoading" class="spinner" />
        <img
            :src="hasError ? errorPl : src"
            :alt="alt"
            :width="width"
            :height="height"
            :loading="loading"
            @load="onLoad"
            @error="onError"
        />
    </div>
</template>

<style scoped>
.image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--color-light);
    border-left-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    object-fit: cover;
}

@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>
