import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
	.use(store)
	.use(router)
	.use(VueAxios, axios)
	.mount('#app')