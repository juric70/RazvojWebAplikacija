import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import {store} from '../store'
// import axios from './axios';

createApp(App).use(router).use(store).use(VueCookies).use(router).mount('#app')
