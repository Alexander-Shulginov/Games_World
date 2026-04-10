<script setup lang="ts">
import BaseText from '@/components/base/BaseText.vue'
import { APP_CONFIG } from '@/config/app.config';
import { getCurrentYear } from '@/utils/getCurrentYear';
</script>

<template>
    <div class="footer__policy">
        <BaseText :size="'small'" :color="'second'">Released under the MIT License.</BaseText>

        <BaseText :size="'small'" :color="'second'">
            Copyright ©
            {{ getCurrentYear() }}
            <a
                :href="APP_CONFIG.global.authorGithub"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="'Developer profile of ' + APP_CONFIG.global.authorName + ' on GitHub'"
            >
                {{ APP_CONFIG.global.authorName }}
            </a>
        </BaseText>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    &__policy {
        max-width: 1440px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
        opacity: 0.9;

        a {
            text-decoration: underline;
        }
    }
}
</style>
