<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue'
import { useTemplateRef, watch } from 'vue';

const popupRef = useTemplateRef('dialogRef');
const emit = defineEmits(['close']);

const props = withDefaults(
    defineProps<{
        isOpen: boolean
    }>(),
    {
        isOpen: false
    }
)

const closeHandler = () => {
    emit('close');
    document.body.removeAttribute('style');
}

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        popupRef.value?.showModal();
        document.body.style.overflow = 'hidden';
    } else {
        popupRef.value?.close();
        document.body.removeAttribute('style');
    }
})
</script>

<template>
    <Teleport to="body">
        <dialog ref="dialogRef" :open="props.isOpen" @cancel="closeHandler" class="popup">
            <div class="popup__top">
                <button @click="closeHandler" class="popup__close" type="button">
                    <SvgIcon name="common-close" />
                </button>
            </div>
            <div class="popup__content">
                <slot />
            </div>
        </dialog>
    </Teleport>
</template>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 350px;
    height: 550px;
    opacity: 0;
    background-color: var(--color-dark-second);
    border: none;
    border-radius: 12px;
    transform: scale(0.9);
    transition:
        opacity 0.3s ease-out,
        transform 0.3s ease-out,
        display 0.3s allow-discrete;

    &[open] {
        opacity: 1;
        transform: scale(1);
    }

    @starting-style {
        &[open] {
            opacity: 0;
            transform: scale(0.9);
        }
    }

    &::backdrop {
        background-color: rgba(0, 0, 0, 0);
        transition:
            display 0.5s allow-discrete,
            overlay 0.5s allow-discrete,
            background-color 0.5s;
    }

    &[open]::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }

    @starting-style {
        &[open]::backdrop {
            background-color: rgba(0, 0, 0, 0);
        }
    }

    &__top {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    &__close {
        padding: 4px;
        fill: var(--color-light);
        cursor: pointer;
        transition: fill 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (any-hover: hover) {
            &:hover {
                fill: var(--color-accent);
            }
        }
    }
}
</style>
