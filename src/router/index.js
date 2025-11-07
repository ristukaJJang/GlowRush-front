import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Join from '../pages/Join.vue'
import Home from '../pages/Home.vue'
import Mypage from '../pages/Mypage.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/home', component: Home },
  { path: '/mypage', component: Mypage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
