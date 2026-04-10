<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue'
import { APP_CONFIG } from '@/config/app.config';
</script>

<template>
    <a
        :href="APP_CONFIG.global.appGitHub"
        target="_blank"
        rel="noopener noreferrer"
        class="git-link"
        aria-label="Projects on Github"
    >
        <IconGitHub />
    </a>
</template>

<style lang="scss" scoped>
.git-link {
    width: 22px;
    height: 22px;
    transition: opacity 0.2s ease-in-out;
    @media (any-hover: hover) {
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
