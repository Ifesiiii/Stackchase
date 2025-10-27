import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import BlogView from '../views/BlogView.vue'
import FeaturedView from '../views/FeaturedView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },

    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/company',
            name: 'company',
            component: CompanyView,
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView,
        },
        {
            path: '/blog/featured',
            name: 'featured',
            component: FeaturedView,
            // component: () =>
            //     import ('../views/FeaturedView.vue')
        },

    ],
})

export default router