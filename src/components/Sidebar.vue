<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const go = (path) => {
  router.push(`/mypage/${path}`)
}
</script>

<template>
  <div id="sidebar">
    <div class="menu" :class="{ active: route.path === '/mypage/account' }" @click="go('account')">개인정보 수정</div>
    <div class="menu" :class="{ active: route.path === '/mypage/coupon' }" @click="go('coupon')">쿠폰 관리</div>
    <!--<div class="menu" :class="{ active: route.path === '/mypage/payment' }" @click="go('payment')">결제 내역</div>-->
    <div class="menu" :class="{ active: route.path === '/mypage/withdraw' }" @click="go('withdraw')">회원 탈퇴</div>
  </div>
</template>

<style>
#sidebar {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: center;

    background-color: #f8f8f8;
    padding: 25px;
    gap: 15px;

    border-radius: 10px;
}

#sidebar .menu {
  width: 200px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;

}

#sidebar .menu:hover {
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
}

/* 현재 활성화된 메뉴 스타일 */
#sidebar .menu.active {
  background-color: #000;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
}
</style>