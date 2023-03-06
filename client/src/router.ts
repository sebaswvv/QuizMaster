import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Regsister from './views/Register.vue'
import Create from './views/Create.vue'
import NotFound from './views/NotFound.vue'
import Play from './views/Play.vue'
import Account from './views/Account.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/account', component: Account},
        { path: '/create', component: Create },
        { path: '/register', component: Regsister },
        { path: '/play', component: Play },
        { path: '/:notFound(.*)', component: NotFound },
    ],
})


export default router


