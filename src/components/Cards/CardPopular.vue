<script setup lang="ts">
import { RouteName } from '@/router/router'
import type { IGame } from '@/types/interfaces/IGames'
import BaseImg from '@/components/UI/BaseImg.vue'

defineProps<{
    data: IGame
}>()
</script>

<template>
    <router-link
        :to="{ name: RouteName.Game, params: { id: data.id } }"
        class="cardPopular"
    >
        <div class="cardPopular__img-wrap">
            <BaseImg
                :src="data.image"
                :alt="data.name"
                :width="215"
                :height="230"
                class="cardPopular__img"
            />
        </div>
        <p class="cardPopular__name">{{ data.name || 'No name' }}</p>
    </router-link>
</template>

<style lang="scss" scoped>
.cardPopular {
    display: flex;
    flex-direction: column;
    width: 100%;

    &:focus-visible {
        .cardPopular__img {
            transform: scale(1.05);
        }
    }

    @media (any-hover: hover) {
        &:hover {
            .cardPopular__img {
                transform: scale(1.05);
            }
        }
    }

    &__img-wrap {
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 12px;
        height: 100%;
    }

    &__img {
        object-fit: cover;

        transition: transform 0.6s ease-in-out;

        @media (max-width: 768px) {
            aspect-ratio: 16 / 9;
        }
    }

    &__name {
        font-weight: 700;
        font-size: 18px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
}
</style>
