<script setup lang="ts">
defineProps<{
    for: string;
}>()
</script>

<template>
    <label class="base-label" :for="for">
        <slot></slot>
    </label>
</template>

<style lang="scss" scoped>
.base-label {
    display: block;
    font-size: 14px;
    color: var(--color-light);
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
}

</style>