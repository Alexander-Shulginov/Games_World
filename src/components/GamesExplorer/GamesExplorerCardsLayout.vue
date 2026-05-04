<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue'
import { onMounted, watch } from 'vue'
import { localStorageManager } from '@/utils/localStorageManager'

const { setToLocalStorage, getLocalStorageItem } = localStorageManager()

const radioValue = defineModel({ default: 'layout-column' })

onMounted(() => {
    const saved = getLocalStorageItem('layout')
    if (saved) radioValue.value = saved
})

watch(
    () => radioValue.value,
    (newValue) => {
        setToLocalStorage('layout', newValue)
    }
)
</script>

<template>
    <div class="cardsLayouts" role="radiogroup" aria-label="Game cards layout">
        <div class="cardsLayouts__wrap">
            <label class="cardsLayouts__label" for="layout-row">
                <input type="radio" name="cards-layout" id="layout-row" value="layout-row" v-model="radioValue"
                    class="cardsLayouts__radio" aria-label="List view" />
                <SvgIcon name="cards-layouts-lines" :size="24" class="cardsLayouts__icon" aria-hidden="true" />
            </label>
        </div>
        <div class="cardsLayouts__wrap">
            <label class="cardsLayouts__label" for="layout-column">
                <input type="radio" name="cards-layout" id="layout-column" value="layout-column"
                    v-model="radioValue" class="cardsLayouts__radio" aria-label="Grid view" />
                <SvgIcon name="cards-layouts-dots3x3" :size="22" class="cardsLayouts__icon" aria-hidden="true" />
            </label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardsLayouts {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: auto;

    &__wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (any-hover: hover) {
            &:hover {
                .cardsLayouts__icon {
                    fill: var(--color-light);
                }
            }
        }
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__radio {
        appearance: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-color: transparent;
    }

    &__radio:checked~.cardsLayouts__icon {
        fill: var(--color-accent);
    }

    &__icon {
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: var(--color-light-second);
    }
}
</style>
