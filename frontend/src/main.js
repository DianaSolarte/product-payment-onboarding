import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import './style.css'
import './assets/css/tailwind.css'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
