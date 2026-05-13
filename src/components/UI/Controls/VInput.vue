<script setup lang="ts">
interface InputProps {
    type?: string
    placeholder?: string
    isRequired?: boolean
    isDisabled?: boolean
    name?: string
}

withDefaults(defineProps<InputProps>(), {
    type: 'text'
})

const model = defineModel<string>()
</script>

<template>
    <input 
        v-model="model"
        :type="type" 
        :placeholder="placeholder" 
        :disabled="isDisabled" 
        :required="isRequired" 
        class="input-base"
        :name="name"
    >
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