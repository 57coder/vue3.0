import { createApp } from 'vue'
import App from './App.vue'
import utils from '@/utils/utils'

const app = createApp(App)
app.use(utils)
console.log(utils.install)

app.mount('#app')
