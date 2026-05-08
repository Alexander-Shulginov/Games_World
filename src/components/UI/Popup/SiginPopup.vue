<script setup lang="ts">
import VInput from '../Controls/VInput.vue';
import VTitle from '../Typography/VTitle.vue';


</script>

<template>
    <div class="signin">
        <VTitle :tag="'h2'" :is-bold="true" class="signin__title">
            Registration
        </VTitle>
        <div class="signin__wrap">
            <VInput :type="'text'" :placeholder="'Enter name'" />
            <VInput :type="'email'" :placeholder="'Enter email'" />
            <VInput :type="'password'" :placeholder="'Enter password'" />
            <button class="base-link" type="submit">Send</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.signin {
    &__title {
        margin-bottom: 20px;
        color: var(--color-light);
    }

    &__wrap {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
}
</style>