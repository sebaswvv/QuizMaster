import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

// create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'