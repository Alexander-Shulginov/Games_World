<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue'
</script>

<template>
    <a href="/" class="logo" aria-label="Main logo">
        <img src="@/assets/img/logo/logo.png" width="60" height="60" alt="Main logo" />
        <SvgIcon name="common-logo" class="logo__text" />
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-right: 2px;

    &__text {
        width: 140px;
        height: 20px;

        @media (max-width: 768px) {
            width: 120px;
            height: 15px;
        }
    }

    img {
        width: 42px;
        height: 42px;
        object-fit: contain;

        @media (max-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }
}
</style>
