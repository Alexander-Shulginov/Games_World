import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const RouteName = {
    Home: 'Home',
    Genres: 'Genres',
    Game: 'Game',
    Games: 'Games',
    NotFound: '404'
} as const;


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: RouteName.Home,
        component: HomeView
    },
    {
        path: '/genres',
        name: RouteName.Genres,
        meta: { title: 'Genres' },
        component: () => import('@/views/GenresView.vue')
    },
    {
        path: '/game/:id',
        name: RouteName.Game,
        props: true,
        component: () => import('@/views/GameView.vue')
    },
    {
        path: '/games',
        name: RouteName.Games,
        props: {
            default: (route) => ({ page: Number(route.query.page) || 1 }),
            filters: false
        },
        meta: { title: 'Games' },
        components: {
            default: () => import('@/views/GamesView.vue'),
            filters: () => import('@/layouts/TheFilters/TheFilters.vue')
        }
    },
    // {
    //     path: '/article/:id',
    //     name: 'Article',
    //     props: true,
    //     component: () => import('@/views/ArticleView.vue')
    // },
    // {
    //     path: '/blog',
    //     name: 'Blog',
    //     meta: { title: 'Blog' },
    //     component: () => import('@/views/ArticleListView.vue')
    // },
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
    scrollBehavior(_to, _from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

