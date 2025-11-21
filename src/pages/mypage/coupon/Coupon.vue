<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const go = (path) => {
  router.push(`/mypage/coupon/${path}`)
}
</script>

<template>
  <div id="coupon">
  <div class="coupon-tab">
    <div class="menu" :class="{ active: route.path === '/mypage/coupon/all' }" @click="go('all')">받은 쿠폰</div>
    <div>|</div>
    <div class="menu" :class="{ active: route.path === '/mypage/coupon/available' }" @click="go('available')">사용 가능 쿠폰</div>
    <div>|</div>
    <div class="menu" :class="{ active: route.path === '/mypage/coupon/used' }" @click="go('used')">사용 완료 쿠폰</div>
  </div>

  <router-view />
</div>

</template>

<style>
#coupon .coupon-tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 6px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

/* #coupon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#coupon .coupon-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 6px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  gap: 20px;
}
*/

#coupon .menu.active {
  font-weight: 800;
  color: black;
} 
</style>
