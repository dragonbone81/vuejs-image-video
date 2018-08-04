import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Auth from './components/Auth'
import Upload from './components/Upload'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: "/",
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
        {
            path: '/upload',
            name: 'upload',
            component: Upload,
        },
    ]
})
