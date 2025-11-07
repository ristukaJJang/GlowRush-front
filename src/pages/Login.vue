<script setup>
import "../styles/Login.css";
import login from '../assets/blackcushion.jpg';
import star from '../assets/star.png';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const exampleId = 'qwer1234'
const id = ref('')


const examplePw = 'gloria010425'
const password = ref('')

const goToLogin = () => {
  if (id.value === exampleId && password.value === examplePw) {
    router.push('/home');
  } else {
    alert('아이디/비밀번호가 틀렸거나 존재하지 않는 정보입니다.');
  }
}

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
