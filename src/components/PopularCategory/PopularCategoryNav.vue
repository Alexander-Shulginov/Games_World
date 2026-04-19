<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { popularCategory } from '@/types/popularCategory'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    'update:modelValue': [slug: string]
}>()

const clickedItem = ref(
    popularCategory.findIndex(c => c.slug === props.modelValue)
)

const selectCategory = (slug: string, index: number) => {
    clickedItem.value = index
    emit('update:modelValue', slug)
}
</script>

<template>
    <div class="PopularCategory__nav">
        <BaseTitle :tag="'h2'" :is-bold="true" class="PopularCategory__nav-title">
            Popular By Category
        </BaseTitle>
        <ul class="PopularCategory__nav-list">
            <li class="PopularCategory__nav-item" v-for="(category, index) in popularCategory" :key="category.slug">
                <button
                    class="PopularCategory__nav-btn"
                    :class="{ 'PopularCategory__nav-btn--active': clickedItem === index }"
                    type="button"
                    @click="selectCategory(category.slug, index)"
                >
                    {{ category.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.PopularCategory__nav {
    background-color: var(--color-dark-second);
    padding: 16px;
    flex-shrink: 0;

    &-title {
        margin-bottom: 20px;

        @media (max-width: 768px) {
            text-align: center;
        }
    }

    &-list {
        display: grid;
        gap: 8px;

        @media (max-width: 768px) {
            gap: 16px;
            justify-items: center;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &-btn {
        cursor: pointer;
        font-family: var(--font-second);
        color: var(--color-light);
        font-size: 16px;
        background-color: transparent;

        @media (any-hover:hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }

    &-btn--active {
        color: var(--color-accent);
        font-weight: 700;
    }
}
</style>
