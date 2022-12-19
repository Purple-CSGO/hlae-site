import { createApp } from 'vue'
import App from './App.vue'

// CSS
// import "@/assets/css/font.css"

// Auto Generated Router
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

// TailwindCSS
import "tailwindcss/tailwind.css"

// Prime Icons
import 'primeicons/primeicons.css';

// Create App
createApp(App)
  .use(router)
  .mount('#app')
