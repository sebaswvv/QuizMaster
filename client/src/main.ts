import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Create from './views/Create.vue'
import router from './router'

// create router
// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: Home },
//         { path: '/login', component: Login },
//         { path: '/create', component: Create },
//     ],
// })

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'