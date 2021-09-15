import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../shared/pages/HomePage'

const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: () =>
            import ('../shared/pages/Login')
    },
    {
        path: '/register',
        component: () =>
            import ('../shared/pages/Register')
    },
    {
        path: '/FAQ',
        component: () =>
            import ('../shared/pages/FAQPage')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ('../shared/pages/notPageFound')
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router