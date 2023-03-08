import { createApp } from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'
import './style.css'
import App from './App.vue'
import router from './router'

// set base url for axios
axios.defaults.baseURL = 'http://localhost:3000'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'