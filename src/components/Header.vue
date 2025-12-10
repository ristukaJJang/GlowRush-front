<script setup>
import { useRouter } from 'vue-router'
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000"; // 백엔드 주소

const router = useRouter()

const gotoHome = () => {
  router.push('/main')
}

const gotoMypage = () => {
  router.push('/mypage')
}

// 로그아웃 함수
const logout = async () => {
  try {
    await axios.post('http://localhost:3000/api/users/logout', {}, {
      withCredentials: true,
    });
    router.push('/');
  } catch (error) {
    console.error(error);
    alert("로그아웃 실패");
  }
};

</script>

<template>
  <header class="header">
    <h1 class="logo" @click="gotoHome">💫 GlowRush</h1>
    <nav class="nav">
      <a href="#" @click.prevent="gotoHome">홈</a>
      
      <a href="#" @click.prevent="gotoMypage">마이페이지</a>
      <a href="#" @click.prevent="logout">로그아웃</a>
    </nav>
  </header>
</template>

<style>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #fff;

}
.logo {
  font-weight: bold;
  font-size: 2rem;
  color: #000000;
  cursor: pointer;
}
.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
}
.nav a:hover {
  color: #ff6699;
}
</style>