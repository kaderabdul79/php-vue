import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// setup vuex
import store from './store'
// import fontawesome
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// custom css under the bootstrap cz, override the bootstarp css
import './style.css';

// const app = createApp(App)
createApp(App).use(store).use(router).mount('#app')
// app.use(router)
// app.use(store)
// app.mount('#app')
