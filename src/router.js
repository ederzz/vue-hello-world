import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
            meta: {
                title: '豆瓣'
            }
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('./views/Movies.vue'),
            meta: {
                title: '电影'
            }
        },
        {
            path: '/novel',
            name: 'novel',
            component: () => import('./views/novel/List.vue'),
            meta: {
                title: '网络小说'
            },
        },
        {
            path: '/novel/chapters',
            name: 'novel-chapters',
            component: () => import('./views/novel/Chapters.vue'),
            meta: {
                title: '网络小说'
            },
        },
        {
            path: '/novel/content',
            name: 'novel-content',
            component: () => import('./views/novel/Content.vue'),
            meta: {
                title: '网络小说'
            },
        },
        {
            path: '/tv',
            name: 'Tv',
            component: () => import('./views/TvShows.vue'),
        },
        {
            path: '/group',
            name: 'Group',
            component: () => import('./views/Group.vue'),
        },
        {
            path: '/book',
            name: 'Book',
            component: () => import('./views/Books.vue'),
        },
        {
            path: '/music',
            name: 'Music',
            component: () => import('./views/Music.vue'),
        },
        {
            path: '/life',
            name: 'Life',
            component: () => import('./views/Product.vue'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router