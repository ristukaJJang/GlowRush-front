import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Join from '../pages/Join.vue'
import Main from '../pages/Main.vue'
import Mypage from '../pages/mypage/Mypage.vue'
import MyAccount from '../pages/mypage/MyAccount.vue'
import Coupon from '../pages/mypage/Coupon.vue'
import Payment from '../pages/mypage/Payment.vue'
import Withdraw from '../pages/mypage/Withdraw.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/join', component: Join },
  { path: '/main', component: Main },
  {
    path: '/mypage',
    component: Mypage, // 마이페이지 전체 레이아웃
    children: [
      { path: 'account', component: MyAccount },
      { path: 'coupon', component: Coupon },
      { path: 'payment', component: Payment },
      { path: 'withdraw', component: Withdraw },
      { path: '', redirect: '/mypage/account' } // 기본 화면
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
