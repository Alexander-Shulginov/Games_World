<script setup lang="ts">
import BaseLogo from '@/components/UI/BaseLogo.vue'
import BaseText from '@/components/UI/BaseText.vue'
import { FOOTER_CONFIG } from '@/config/footer.config';
</script>

<template>
    <BaseLogo />
    <BaseText :color="'second'">
        {{ FOOTER_CONFIG.slogan.text }}
    </BaseText>
</template>
