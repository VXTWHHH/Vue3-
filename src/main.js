import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import 'bootstrap' 
import isLogin from './permission'

createApp(App).use(router).provide('auth',isLogin).mount('#app')