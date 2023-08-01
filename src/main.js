import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/reset.css"
import VueTelInput from 'vue-tel-input'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import VueKonva from 'vue-konva'
library.add(faUserSecret)

createApp(App).use(store).use(router).use(VueTelInput).use(VueKonva).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
