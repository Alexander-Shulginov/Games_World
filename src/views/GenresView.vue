<script setup lang="ts">
import AllGenresList from '@/components/AllGenresList.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import PromoGame from '@/components/PromoGame.vue'
</script>

<template>
    <section aria-label="All genres page">
        <BaseTitle :tag="'h1'" class="allGenres-title">All Genres</BaseTitle>
        <div class="allGenres">
            <AllGenresList class="allGenres__genre" />
        </div>
        <PromoGame />
    </section>
</template>

<style lang="scss" scoped>
.allGenres {
    position: relative;
    min-height: 800px;
    &-title {
        margin-bottom: 36px;
        @media (max-width: 768px) {
            margin-bottom: 26px;
        }
    }

    &__genre {
        padding-bottom: 80px;
    }
}
</style>
