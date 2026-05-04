<script setup lang="ts">
import VLogo from '@/components/UI/Brand/VLogo.vue'
import VText from '@/components/UI/Typography/VText.vue'
import { FOOTER_CONFIG } from '@/config/footer.config'
</script>

<template>
    <VLogo />
    <VText :color="'second'">
        {{ FOOTER_CONFIG.slogan.text }}
    </VText>
</template>
