<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
    to?: RouteLocationRaw
    text?: string
    size?: 'compact' | 'large'
    asButton?: boolean
    disabled?: boolean
    isExternal?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'compact',
    asButton: false,
    disabled: false,
    isExternal: false,
    type: 'button'
})

const componentTag = computed(() => {
    if (props.asButton) return 'button'
    if (props.isExternal) return 'a'
    return 'router-link'
})

const dynamicProps = computed(() => {
    if (props.asButton) {
        return {
            type: props.type,
            disabled: props.disabled
        }
    }

    if (props.isExternal) {
        return {
            href: props.to,
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    }

    return {
        to: props.to || ''
    }
})
</script>

<template>
    <component :is="componentTag" v-bind="dynamicProps" class="base-link" :class="[
        `base-link--${size}`,
        { 'base-link--disabled': disabled }
    ]" :aria-disabled="disabled ? 'true' : undefined">
        <slot>{{ text }}</slot>
    </component>
</template>

<style lang="scss">
.base-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;
    font-family: inherit;

    text-transform: capitalize;
    text-decoration: none;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: var(--color-light);

    cursor: pointer;

    transition:
        background-color 0.3s ease-in-out,
        transform 0.1s ease-in-out,
        opacity 0.3s ease;
    flex-shrink: 0;

    background-color: var(--color-accent);

    @media (any-hover: hover) {
        &:hover:not(.base-link--disabled) {
            background-color: var(--color-accent-hover);
        }
    }

    &:active:not(.base-link--disabled) {
        transform: translateY(1px);
    }

    &--compact {
        padding: 9px 14px;
        font-size: 13px;
    }

    &--large {
        min-height: 40px;
        padding: 5px 20px;
        font-size: 16px;
    }

    &--disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }
}
</style>
