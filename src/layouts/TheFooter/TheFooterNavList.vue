<script setup lang="ts">
import { FooterLinks } from '@/config/footer.config';

defineProps<{
    items: FooterLinks
}>()
</script>

<template>
    <ul class="footer__list">
        <li v-for="link, index in items.links" :key="index">
            <router-link :to="link.url" class="footer__link" :title="link.text" :aria-label="link.text">{{ link.text }}</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.footer {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__link {
        color: var(--color-light-second);
        @media (max-width: 480px) {
            font-size: 13px;
        }

        @media (any-hover:hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }
}
</style>
