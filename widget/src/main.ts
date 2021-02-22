import { createApp } from 'vue'
import Playground from '@/views/Playground/index.vue'
import App from './App.vue'

import { setup } from '@/utils/bootstrap'

import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'

setup({
  onProduction: () => {
    const app = createApp(App)
    app.mount('#app')
  },
  onDevelopment: () => {
    const app = createApp(Playground)
    app.mount('#app')
  }
})
