<script setup lang="ts">
import { reactive } from 'vue';
import VInput from '../Controls/VInput.vue';
import VTitle from '../Typography/VTitle.vue';
import VLink from '../Controls/VLink.vue';
import VCheckbox from '../Controls/VCheckbox.vue';
import VLabel from '../Controls/VLabel.vue';

const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
})

const submitForm = () => {
    if (form.password !== form.confirmPassword) {
        alert("Passwords do not match!")
        return
    }
    if (!form.agreeToTerms) {
        alert("You must agree to the terms and conditions.")
        return
    }

    // TODO: Emit event or call API
    fetch("http://localhost:3001/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
}
</script>

<template>
    <div class="signin">
        <VTitle :tag="'h2'" :is-bold="true" class="signin__title">
            Registration
        </VTitle>
        <form @submit.prevent="submitForm" novalidate class="signin__wrap">
            <div class="sigin__item">
                <VLabel for="user-name">Name:</VLabel>
                <VInput v-model="form.name" id="user-name" type="text" placeholder="Enter name" name="user-name" autocomplete="given-name" inputmode="text" is-required />
            </div>

            <div class="sigin__item">
                <VLabel for="user-email">Email:</VLabel>
                <VInput v-model="form.email" id="user-email" type="email" placeholder="Enter email" autocomplete="email" inputmode="email" name="user-email" is-required />
            </div>

            <div class="sigin__item">
                <VLabel for="user-password">Password:</VLabel>
                <VInput v-model="form.password" id="user-password" type="password" placeholder="Enter password" autocomplete="new-password" name="user-password" is-required />
            </div>

            <div class="sigin__item">
                <VLabel for="user-confirm-password">Confirm password:</VLabel>
                <VInput v-model="form.confirmPassword" id="user-confirm-password" type="password" placeholder="Confirm password" autocomplete="new-password" name="user-confirm-password" is-required />
            </div>

            <VCheckbox
                id="terms"
                v-model="form.agreeToTerms"
                text="I agree to the Terms and Conditions"
                class="signin__checkbox"
            />

            <VLink asButton size="large" type="submit">Sign Up</VLink>

            <div class="signin__footer">
                <span class="signin__text">Already have an account?</span>
                <button type="button" class="signin__login-link">Sign In</button>
            </div>
        </form>

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
        gap: 20px;
    }

    &__checkbox {
        margin-top: -8px;
        margin-bottom: 8px;
    }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 8px;
    }

    &__text {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
    }

    &__login-link {
        font-size: 14px;
        color: var(--color-accent);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: opacity 0.3s ease;

        @media (any-hover: hover) {
            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>