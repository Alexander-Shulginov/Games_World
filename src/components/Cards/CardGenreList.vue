<script setup lang="ts">
import { RouteName } from '@/router/router'
import VTitle from '@/components/UI/Typography/VTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'
import type { Genre } from '@/types/genres'

defineProps<{
    data: Genre
}>()
</script>

<template>
    <router-link :to="{ name: RouteName.Games, query: { genres: data.genreId } }" class="genreList__card"
        :aria-label="`Games in the ${data.genreName} genre`">
        <VTitle :tag="'h3'" :is-bold="true" :class="'genreList__title'">{{ data.genreName }}</VTitle>
        <BaseImg :src="data.genreImg" :alt="data.genreName" :width="440" :height="260" class="genreList__img" />
    </router-link>
</template>

<style lang="scss" scoped>
.genreList {
    &__card {
        display: block;
        position: relative;
        border-radius: 8px;
        overflow: hidden;

        &:focus-visible {
            .genreList__img {
                transform: scale(1.05);
            }
        }

        @media (any-hover: hover) {
            &:hover {

                .genreList__img,
                &::after {
                    transform: scale(1.05);
                }
            }
        }

        &::after {
            content: '';
            pointer-events: none;

            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%);
            width: 100%;
            transition: transform 0.8s ease-in-out;
        }

    }

    &__title {
        position: absolute;
        bottom: 16px;
        left: 16px;

        z-index: 2;

        font-size: 24px;
        transition: color 0.3s ease-in-out;

        @media (max-width: 768px) {
            bottom: 12px;
            left: 12px;
        }
    }

    &__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.8s ease-in-out;
    }
}
</style>
