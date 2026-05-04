<script setup lang="ts">
import BaseImg from '@/components/UI/BaseImg.vue'
import StarRating from '@/components/Common/StarRating.vue'
import type { IGame } from '@/types/interfaces/IGames'

defineProps<{
    game: IGame
}>()
</script>

<template>
    <router-link :to="{ name: 'Game', params: { id: game.id } }" class="cardRating">
        <BaseImg
            :src="game.image"
            :alt="game.name"
            :width="70"
            :height="90"
            class="cardRating__img"
        />
        <div class="cardRating__wrap">
            <p class="cardRating__name">{{ game.name }}</p>
            <div class="cardRating__rating" v-if="game.rating">
                <StarRating :rating="game.rating" />
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.cardRating {
    display: flex;
    gap: 12px;

    &__img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        flex-shrink: 0;
        border-radius: 4px;
    }

    &__wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__name {
        font-weight: 700;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
}
</style>
