import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Counter from '../components/Counter.vue'
import Employees from '../components/Employees.vue'
// import UserList from '../components/UserList.vue'
import VuexCounter from '../components/VuexCounter.vue'
import VuexEmployees from '../components/VuexEmployees.vue'
import VuexUserList from '../components/VuexUserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/counter',
    //   name: 'Counter',
    //   component: Counter
    // },
    {
      path: '/counter',
      name: 'Counter',
      component: VuexCounter
    },
    // {
    //   path: '/employees',
    //   name: 'Employees',
    //   component: Employees
    // },
    {
      path: '/employees',
      name: 'VuexEmployees',
      component: VuexEmployees
    },
    // {
    //   path: '/userlist',
    //   name: 'UserList',
    //   component: UserList
    // },
    {
      path: '/userlist',
      name: 'VuexUserList',
      component: VuexUserList
    },
  ]
})

export default router
