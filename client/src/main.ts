import { createApp } from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'
import './style.css'
import App from './App.vue'
import router from './router'
import io from 'socket.io-client';

axios.defaults.baseURL = 'http://localhost:3000';
const socket = io("http://145.81.198.188:3000");

const app = createApp(App)
app.provide('socket', socket)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'