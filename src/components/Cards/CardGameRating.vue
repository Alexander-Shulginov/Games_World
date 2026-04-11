<script setup lang="ts">
import { formatNumber } from '@/utils/formatNumber'
import SvgIcon from '@/components/UI/SvgIcon.vue'

defineProps<{
    rating: number
}>()
</script>

<template>
    <div v-if="rating > 0" class="cardBase__rating">
        <span class="cardBase__value">
            {{ formatNumber(rating) }}
        </span>
        <SvgIcon name="common-star" :size="16" />
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
    }
}
</style>
