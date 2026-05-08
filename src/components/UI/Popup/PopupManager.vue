<script setup lang="ts">
import { popupStack, usePopup } from '@/store/popupStore'
import BasePopup from './BasePopup.vue'

const { close } = usePopup()
</script>

<template>
    <BasePopup v-for="item in popupStack"
        :key="item.id"
        :is-open="true"
        @close="close(item.id)"
    >
        <component :is="item.component" v-bind="item.props" />
    </BasePopup>
</template>
