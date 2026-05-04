<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { ERROR_CONFIG, ErrorIcons } from '@/config/errors.config';

interface Props {
    title?: string;
    text?: string;
    icon?: ErrorIcons;
    retryAction?: () => void;
}

withDefaults(defineProps<Props>(), {
    title: ERROR_CONFIG.title,
    text: ERROR_CONFIG.text,
    icon: ERROR_CONFIG.icon
});
</script>

<template>
    <div class="error" :aria-label="title" role="status">
        <SvgIcon :name="icon" :size="100" class="error__icon" />
        <p class="error__msg">{{ title }}</p>
        <button v-if="retryAction" @click="retryAction" class="error__btn base-link base-link--compact" aria-label="Retry"
            type="button" role="button">{{ text }}</button>
    </div>
</template>

<style lang="scss" scoped>
.error {
    color: var(--color-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
</style>
