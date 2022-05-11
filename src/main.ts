import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes/router'
import '@/assets/base.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
