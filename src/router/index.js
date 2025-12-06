import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CareerView from '../views/CareerView.vue'
import PeopleView from '../views/PeopleView.vue'
import ContactView from '../views/ContactView.vue'
import KitView from '../views/KitView.vue'
import GovView from '../views/GovView.vue'
import BusiView from '../views/BusiView.vue'
import PolicyView from '../views/PolicyView.vue'


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
            path: '/company/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/company/careers',
            name: 'career',
            component: CareerView,
        },
        {
            path: '/company/our-people',
            name: 'people',
            component: PeopleView,
        },
        {   path: '/company/press-kit',
            name: 'press-kit',
            component: KitView,
        },
        {   path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {   path: '/government',
            name: 'government',
            component: GovView,
        },
        {   path: '/business',
            name: 'business',
            component: BusiView,
        },
        {   path: '/policy',
            name: 'policy',
            component: PolicyView,
        }
    ],
})

export default router