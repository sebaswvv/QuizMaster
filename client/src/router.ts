import { createRouter, createWebHistory } from 'vue-router'
// import { useLoginStore } from './stores/useLogin'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Regsister from './views/Register.vue'
import Create from './views/Create.vue'
import NotFound from './views/NotFound.vue'
import Play from './views/Play.vue'
import Account from './views/Account.vue'

// const loginStore = useLoginStore()

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

// Check if user is logged in before each route change
// router.beforeEach((to, from, next) => {
//     const isLoggedIn = loginStore.isLoggedIn;
    

//     if (to.meta.requiresAuth && !isLoggedIn) {
//       next('/login');
//     } else {
//       next();
//     }
// });

export default router


