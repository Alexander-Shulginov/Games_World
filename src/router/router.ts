import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const APP_NAME = import.meta.env.VITE_APP_NAME

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/genres',
        name: 'Genres',
        meta: { title: 'Genres' },
        component: () => import('@/views/GenresView.vue')
    },
    {
        path: '/game/:id',
        name: 'Game',
        props: true,
        // meta: { title: 'Game' },
        component: () => import('@/views/GameView.vue')
    },
    {
        path: '/games',
        name: 'Games',
        // @ts-ignore
        props: (route) => ({ page: Number(route.query.page) || 1 }),
        meta: { title: 'Games' },
        // @ts-ignore
        components: {
            default: () => import('@/views/GamesView.vue'),
            filters: () => import('@/layouts/TheFilters/TheFilters.vue')
        } as RouteRecordRaw
    },
    {
        path: '/article/:id',
        name: 'Article',
        props: true,
        component: () => import('@/views/ArticleView.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        meta: { title: 'Blog' },
        component: () => import('@/views/ArticleListView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/NotFoundView.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, form, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.afterEach((to) => {
    const pageTitle = to.meta.title ? `${APP_NAME} | ${to.meta.title}` : APP_NAME
    document.title = pageTitle
})
