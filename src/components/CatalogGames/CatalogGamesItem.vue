<script setup lang="ts">
import CatalogGamesList from '@/components/CatalogGames/CatalogGamesList.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { IListGames } from '@/types/interfaces/IGames'

defineProps<{
    games: IListGames | undefined
    title: string
    loading: boolean
}>()
</script>

<template>
    <div class="catalogGames__item">
        <BaseTitle :tag="'h2'" class="catalogGames__title">{{ title }}</BaseTitle>
        <CatalogGamesList :games="games?.results" :loading="loading" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    &__title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    &__item {
        height: 100%;
        overflow: hidden;
    }
}
</style>
