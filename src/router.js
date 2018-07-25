import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Auth from './components/Auth'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Home,
        },
        {
            path: '/auth/callback',
            name: 'callback',
            component: Auth,
        },
    ]
})