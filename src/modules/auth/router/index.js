
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName:"authentincation"*/ '../layouts/Authentication.vue'),
    children :[
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName:"login"*/ '../views/Login.vue'),

        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName:"register"*/ '../views/Register.vue'),

        }
    ]
    
}