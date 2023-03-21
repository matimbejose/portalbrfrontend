import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
    faLocationDot,
    faEnvelope,
    faPhone,
    faCheck,
    faUsers,
    faHouse

} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faLocationDot,faEnvelope,faPhone,faCheck,faUsers,faHouse)


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
