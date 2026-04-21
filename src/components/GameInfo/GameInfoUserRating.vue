<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { IGameById } from '@/types/interfaces/IGameById';

defineProps<{
    userRating: IGameById['ratings']
}>()
</script>

<template>
    <div v-if="userRating" class="userRating">
        <div class="userRating__block">
            <div v-for="rating in userRating" :key="rating.id" class="userRating__item">
                <div class="userRating__circle" :style="`--percent: ${rating.percent}%`">
                    <SvgIcon class="userRating__icon" :size="20"
                        :name="`user-rating-${rating.title.toLowerCase()}`" />
                </div>
                <div class="userRating__wrap">
                    <div class="userRating__title">{{ rating.title }}</div>
                    <div class="userRating__percent">{{ rating.percent.toFixed() }}%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.userRating {
    --exception-color: #4caf50;
    --recommended-color: #ffc107;
    --meh-color: #2196f3;
    --skip-color: #f44336;

    overflow: hidden;
    background-color: var(--color-dark-second);
    padding: 20px;

    @media (max-width: 768px) {
        padding: 12px;
    }

    &__block {
        display: grid;
        font-weight: 700;
        grid-template-columns: repeat(4, 1fr);
        align-items: flex-start;
        gap: 8px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 28px;
        }

        @media (max-width: 475px) {
            grid-template-columns: 1fr;
            row-gap: 20px;
        }
    }

    &__title {
        text-align: left;
        text-transform: capitalize;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    &__percent {
        font-size: 15px;
        color: var(--color-light);
    }

    &__wrap {
        flex-direction: column;
        flex-shrink: 0;
        width: 150px;
        display: flex;
        gap: 6px;
        justify-content: space-between;

        @media (max-width: 768px) {
            width: 140px;
        }
    }

    &__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;

        @media (max-width: 475px) {
            justify-content: center;
        }
    }

    &__circle {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: conic-gradient(currentColor var(--percent, 0%), rgb(84, 84, 84) 0%);
            -webkit-mask: radial-gradient(closest-side, transparent 21px, #000 22px);
            mask: radial-gradient(closest-side, transparent 21px, #000 22px);
            z-index: -1;
        }
    }

    &__icon {
        color: #fff;
    }

    &__item:nth-child(1) {
        color: var(--exception-color);
    }

    &__item:nth-child(2) {
        color: var(--recommended-color);
    }

    &__item:nth-child(3) {
        color: var(--meh-color);
    }

    &__item:nth-child(4) {
        color: var(--skip-color);
    }

}
</style>
