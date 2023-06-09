import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
/* ServiceWorker for PWA */
import './registerServiceWorker';

/* Import chart.js */
import { ChartComp } from 'chart.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faPlus, faEdit,  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPlus, faEdit, faFacebook, faGoogle )

let app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ChartComp', ChartComp)
app.use(store).use(router).mount('#app')
