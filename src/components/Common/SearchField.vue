<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import SvgIcon from '@/components/UI/SvgIcon.vue'

const route = useRoute()
const router = useRouter()

const searchQuery = ref<string>((route.query.search as string) || '')
let timeout: ReturnType<typeof setTimeout> | undefined

const clearInput = () => {
    searchQuery.value = ''
}

watch(
    () => searchQuery.value,
    (newValue) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateUrlQuery(router, { search: newValue, page: 1 })
        }, 500)
    }
)

watch(
    () => route.query.search as string | undefined,
    (newValue) => {
        const normalized = newValue || ''
        if (searchQuery.value !== normalized) {
            searchQuery.value = normalized
        }
    }
)

onUnmounted(() => clearTimeout(timeout))
</script>

<template>
    <div class="searchField">
        <input
            class="searchField__input"
            v-model="searchQuery"
            type="text"
            placeholder="Search games"
        />
        <span v-show="searchQuery" @click="clearInput" class="searchField__clear">
            <SvgIcon name="common-close" :size="24" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.searchField {
    position: relative;

    &__input {
        background-color: var(--color-dark-second);
        padding: 16px 60px 16px 24px;
        border-radius: 26px;
        width: 100%;

        color: var(--color-light);
        font-size: 16px;
    }

    &__clear {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (any-hover: hover) {
            &:hover {
                svg {
                    fill: var(--color-accent);
                }
            }
        }
    }
}
</style>
