<script setup lang="ts">
import SvgIcon from '@/components/UI/SvgIcon.vue'
</script>

<template>
    <div class="no-results">
        <SvgIcon name="common-error-logo" class="no-results__logo" />
        <pre>
███╗   ██╗ ██████╗     ██████╗ ███████╗███████╗██╗   ██╗██╗  ████████╗███████╗
████╗  ██║██╔═══██╗    ██╔══██╗██╔════╝██╔════╝██║   ██║██║  ╚══██╔══╝██╔════╝
██╔██╗ ██║██║   ██║    ██████╔╝█████╗  ███████╗██║   ██║██║     ██║   ███████╗
██║╚██╗██║██║   ██║    ██╔══██╗██╔══╝  ╚════██║██║   ██║██║     ██║   ╚════██║
██║ ╚████║╚██████╔╝    ██║  ██║███████╗███████║╚██████╔╝███████╗██║   ███████║
╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝   ╚══════╝
    </pre
        >
    </div>
</template>

<style lang="scss" scoped>
.no-results {
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__logo {
        width: 53px;
        height: 64px;
    }

    pre {
        font-size: 8px;
        text-align: center;
        user-select: none;
    }
}
</style>
