import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import fontawesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// custom css under the bootstrap cz, override the bootstarp css
import './style.css';


const app = createApp(App)

app.use(router)

app.mount('#app')
