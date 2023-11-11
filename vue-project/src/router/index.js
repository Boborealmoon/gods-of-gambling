import { createRouter, createWebHistory } from 'vue-router'

//IMPORT COMPONENTS HERE
import Home from '../components/Home.vue';
import Baccarat from "../components/baccarat/Baccarat.vue"
import Navbar from "../components/navbar/Navbar.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home', component: Home},
    {path: '/baccarat', name: 'baccarat',component: Baccarat},
    {path: '/navbar', component: Navbar}
    ]
})

export default router
