<script setup lang="ts">
interface InputProps {
    type: 'text' | 'email' | 'password'
    placeholder: string
    isRequired?: boolean
    isDisabled?: boolean
}

defineProps<InputProps>()
</script>

<template>
    <input :type="type" :placeholder="placeholder" :disabled="isDisabled" :required="isRequired" class="input-base">
</template>

<style lang="scss" scoped>
.input-base {
    width: 100%;
    height: 42px;
    background-color: var(--color-light);
    padding: 0 6px;
    border-radius: 4px;
    font-size: 16px;

    &::placeholder {
        font-size: 14px;
    }
}
</style>