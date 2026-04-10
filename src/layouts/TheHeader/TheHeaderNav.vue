<script setup lang="ts">
import { HEADER_CONFIG } from '@/config/header.config';
</script>
<template>
    <nav class="nav" aria-label="Main navigation">
        <ul class="nav__items">
            <li v-for="link in HEADER_CONFIG" :key="link.name">
                <RouterLink :to="{ name: link.to, query: link.query }" :title="link.name" :aria-label="link.name" class="nav__item">{{
                    link.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;

    margin-left: auto;

    @media (max-width: 568px) {}

    &__items {
        display: flex;
        gap: 18px;

        @media (max-width: 568px) {}
    }

    &__item {
        @media (any-hover: hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }

    .router-link-active {
        border-bottom: 2px solid var(--color-accent);
    }
}
</style>
