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
    faHouse,
    faMapLocationDot,
    faCircleExclamation,
    faMoneyBill,
    faExclamation,
    faCalendarDays,
    faNewspaper,
    faVideo,
    faFileCirclePlus,
    faCalendarDay,
    faCalendarCheck,
    faMapLocation,
    faVolumeOff,
    faMobileScreenButton,
    faSpinner,
    faSquareCheck
} from '@fortawesome/free-solid-svg-icons'


import {
    faMessage,
} from '@fortawesome/free-regular-svg-icons'



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


/* add icons to the library */
library.add(faUserSecret, faLocationDot, faEnvelope, faPhone, faCheck, faUsers, faHouse, faMapLocationDot, faCircleExclamation, faMoneyBill, faMessage, faExclamation, faCalendarDays, faNewspaper, faVideo, faFileCirclePlus, faCalendarDay, faCalendarCheck, faMapLocation, faPhone, faVolumeOff, faMobileScreenButton, faSpinner,faSquareCheck)


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
