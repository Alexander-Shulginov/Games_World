import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import { router } from './router/router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './assets/styles/style.css'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')