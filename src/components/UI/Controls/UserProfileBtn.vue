<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { usePopup } from '@/store/popupStore';
import SiginPopup from '../Popup/SiginPopup.vue';
const { open } = usePopup();

const showSiginPopup = () => {
    open(SiginPopup)
}
</script>

<template>
    <button @click="showSiginPopup" class="user-signin" type="button" aria-label="Sign in">
        <SvgIcon class="user-signin__icon" name="common-user-signin" />
    </button>
</template>

<style lang="scss" scoped>
.user-signin {
    width: 26px;
    height: 26px;
    cursor: pointer;
    transition: opacity .3s ease-in-out;

    @media (any-hover:hover) {
        &:hover {
            opacity: 0.8;
        }
    }

    &__icon {
        color: var(--color-light);
        width: inherit;
        height: inherit;
    }
}
</style>