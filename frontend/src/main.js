import { createApp } from 'vue'
import { FrappeUI } from 'frappe-ui'
import './style.css'
import App from './App.vue'

let app = createApp(App)
app.use(FrappeUI)
app.mount('#app')
