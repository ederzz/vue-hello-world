import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('./views/Movies.vue'),
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
