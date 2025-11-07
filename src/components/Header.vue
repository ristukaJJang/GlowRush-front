<script setup>
import "../styles/header.css";
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoHome = () => {
  router.push('/home')
}

const gotoMypage = () => {
  router.push('/mypage')
}

// 로그아웃 함수
const logout = () => {
  // 로그아웃 시 처리할 동작들 (예: 토큰 삭제 등)
  // localStorage.removeItem('token')  <-- 이런 식으로 실제 로직을 나중에 넣을 수 있음

  // 로그인 페이지로 이동
  router.push('/login')
}
</script>

<template>
  <header class="header">
    <h1 class="logo">💫 GlowRush</h1>
    <nav class="nav">
      <a href="#" @click.prevent="gotoHome">홈</a>
      <a href="#" @click.prevent="gotoMypage">마이페이지</a>
      <a href="#" @click.prevent="logout">로그아웃</a>
    </nav>
  </header>
</template>