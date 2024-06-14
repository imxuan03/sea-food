import './assets/admin/main.css'
import 'boxicons/css/boxicons.min.css'  // Import Boxicons CSS

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'uikit/dist/css/uikit.min.css'   
import 'uikit/dist/js/uikit.min.js'


createApp(App).use(router).mount('#app')

