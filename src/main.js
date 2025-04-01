//import './assets/main.css'
import axios from 'axios'
import 'bulma/css/bulma.css'



axios.defaults.baseURL = 'http://127.0.0.1:8000/'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)
app.use(store)
app.mount('#app')
