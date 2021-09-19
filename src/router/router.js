import { createRouter, createWebHashHistory } from 'vue-router'

import HomeRouter from '../modules/home/router'
import LoginRouter from  '../modules/auth/router'
import FAQPage from  '../modules/faq/router'


const routes = [

    {
        path: '/',
        ...HomeRouter
        
    },
    {
        path: '/login',
        ...LoginRouter
    },
    {
        path: '/FAQ',
        ...FAQPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName:"register"*/ '../shared/pages/notPageFound'),

    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router