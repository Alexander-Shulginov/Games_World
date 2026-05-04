<script setup lang="ts">
import CardRating from '@/components/Cards/CardRating.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'
import TheError from '@/components/UI/TheError.vue'
import type { IGame } from '@/types/interfaces/IGames'

interface Props {
    games: IGame[]
    isLoading: boolean
    isError: boolean
}

withDefaults(defineProps<Props>(), {
    games: () => [],
})
</script>

<template>
    <TheError v-if="isError" />
    <BaseLoader v-else-if="isLoading" />
    <ul v-else class="gamesCatalog__list" aria-label="Games list">
        <li class="gamesCatalog__item" v-for="game in games" :key="game.id">
            <CardRating :game="game" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.gamesCatalog {
    position: relative;

    &__list {
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 16px;
        background-color: var(--color-dark-second);
    }

    &__item {
        transition: color .2s ease-in-out;
        position: relative;

        @media (any-hover:hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }

}
</style>
