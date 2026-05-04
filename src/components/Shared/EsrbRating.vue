<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue'

defineProps<{
    esrb?: {
        id: number
    }
}>()

const esrbRatingsIcons: Record<number, string> = {
    1: 'everyone',
    2: 'everyone10',
    3: 'teen',
    4: 'mature',
    5: 'adult',
    6: 'pending'
}
</script>

<template>
    <SvgIcon v-if="esrb && esrbRatingsIcons[esrb.id]" :name="`esrb-${esrbRatingsIcons[esrb.id]}`" class="esrb-icon" />
</template>

<style lang="scss" scoped>
.esrb-icon {
    width: 46px;
    height: 83px;

    @media (max-width: 768px) {
        width: 28px;
        height: 45px;
    }
}
</style>
