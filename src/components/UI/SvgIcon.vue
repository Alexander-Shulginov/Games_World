<script setup lang="ts">
defineProps<{ name: string; size?: number }>()
</script>

<template>
    <svg :width="size ?? 24" :height="size ?? 24" aria-hidden="true">
        <use :href="`#icon-${name}`" />
    </svg>
</template>
