import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Chat from '@/components/Chat'
import Profile from '@/components/Profile'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Toasted from 'vue-toasted';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Router)
Vue.use(Toasted)
export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }, {
        path: '/profile',
        name: 'profile',
        component: Profile
    }, {
        path: '/chat',
        name: 'chat',
        component: Chat
    }]
})