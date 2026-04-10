<script setup lang="ts">
import { HEADER_CONFIG } from '@/config/header.config';
</script>
<template>
    <nav class="nav" aria-label="Main navigation">
        <ul class="nav__items">
            <li v-for="link, index in HEADER_CONFIG" :key="index">
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

    &__items {
        display: flex;
        gap: 18px;

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
