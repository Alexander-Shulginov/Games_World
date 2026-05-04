<script setup lang="ts">
import VTitle from '@/components/UI/Typography/VTitle.vue'
import TheFooterNavList from '@/layouts/TheFooter/TheFooterNavList.vue'
import { FOOTER_CONFIG } from '@/config/footer.config'
</script>

<template>
    <nav class="footer__nav" aria-label="Footer navigation">
        <div v-for="link, index in FOOTER_CONFIG.links" :key="index">
            <VTitle :tag="'h4'" :is-bold="true" class="footer__subtitle">{{ link.title }}</VTitle>
            <TheFooterNavList :items="link" />
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.footer {
    &__nav {
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 480px) {
            flex-wrap: wrap;
            gap: 28px;
        }
    }

    &__subtitle {
        margin-bottom: 18px;
    }
}
</style>
