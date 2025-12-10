<script setup>
import "../styles/Login.css";
import login from '../assets/blackcushion.jpg';
import star from '../assets/star.png';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'


const router = useRouter()

const id = ref('')
const password = ref('')

const goToLogin = async () => {
  const body = {
    user_id: id.value,
    password: password.value
  };

  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    const data = res.data;

    // 로그인 성공
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push('/main');   // 원하는 곳으로 리다이렉트
    }

  } catch (error) {
    // axios 오류 종류별로 처리
    if (error.response) {
      // 백엔드가 보낸 메시지 출력
      alert(error.response.data.message);
    } else {
      alert("서버 연결 오류");
    }
  }
};

const goToSignup = () => {
  router.push('/join');
};
</script>

<template>
  <div id="login">
    <img :src="login" alt="login img" class="login-img"></img>

    <div class="login-input">
      <div class="growrush">
        <img :src="star" alt="login img" class="gr-img"></img>
        <div class="gr-text">GrowRush</div>
      </div>
      
      <div class="title">로그인</div>
      <input class="input-id" placeholder="아이디" type="text" v-model="id"/>
      <input class="input-pw" placeholder="비밀번호" name="password" type="password" 
        v-model="password" @keyup.enter="goToLogin"/>

      <div class="login-btn" @click="goToLogin">로그인</div>
      <div class="login-btn-k">카카오 로그인</div>
      <div class="login-btn-n">네이버 로그인</div>

      <hr>

      <div class="join">
        <div class="join-text">계정이 없다면?</div>
        <div class="join-btn" @click="goToSignup">회원가입</div>
      </div>
      
      
    </div>
  </div>  
</template>
