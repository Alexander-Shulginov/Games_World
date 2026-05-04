<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IListGames } from '@/types/interfaces/IGames'
import { removeUrlQuery, updateUrlQuery } from '@/utils/updateUrlQuery'
import SvgIcon from '@/components/UI/SvgIcon.vue'

const PAGE_SIZE = 20;

const props = defineProps<{
    isFetching: boolean
    games: IListGames | undefined
}>()

const route = useRoute()
const router = useRouter()

const page = computed(() => Number(route.query.page) || 1)

const increasePage = () => {
    if (props.games?.next) {
        updateUrlQuery(router, {
            page: page.value + 1
        })
    }
}

const decreasePage = () => {
    if (!props.games?.prev) return
    if (page.value === 2) {
        removeUrlQuery(router, 'page')
    } else {
        updateUrlQuery(router, { page: page.value - 1 })
    }
}
</script>

<template>
    <div v-if="games && games?.count > PAGE_SIZE && !isFetching" class="gamesNav">
        <button
            :disabled="games.prev === null"
            @click="decreasePage"
            class="gamesNav__btn"
            aria-label="previous page"
            type="button"
        >
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow gamesNav__arrow--left" />
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow gamesNav__arrow--left" />
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow gamesNav__arrow--left" />
        </button>
        <button
            :disabled="games.next === null"
            @click="increasePage"
            aria-label="next page"
            class="gamesNav__btn"
            type="button"
        >
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow" />
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow" />
            <SvgIcon name="common-pixel-arrow" :size="22" class="gamesNav__arrow" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.gamesNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    &__btn {
        display: flex;
        color: var(--color-light);
        flex-grow: 2;
        font-size: 16px;
        background-color: var(--color-dark-second);
        padding: 14px;
        border-radius: 6px;
        cursor: pointer;

        transition: background-color 0.3s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                background-color: #323232;
            }
        }
    }

    &__btn:nth-child(1) {
        justify-content: flex-start;
    }

    &__btn:nth-child(2) {
        justify-content: flex-end;
    }

    &__btn:disabled {
        cursor: not-allowed;
        opacity: 0.8;
        @media (any-hover:hover) {
            &:hover {
                background-color: var(--color-dark-second);
            }
        }
    }

    &__arrow--left {
        transform: rotate(180deg);
    }
}
</style>
