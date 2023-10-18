import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/viva-dark/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
  apiKey: "AIzaSyCSZ02sP3iYgIT-OEr375CrqKKkrBdEAc8",
  authDomain: "diploma-d854b.firebaseapp.com",
  projectId: "diploma-d854b",
  storageBucket: "diploma-d854b.appspot.com",
  messagingSenderId: "573812565293",
  appId: "1:573812565293:web:bc2baef031d55fb7f3dfa4"
};

initializeApp(firebaseConfig)
const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.mount('#app')
