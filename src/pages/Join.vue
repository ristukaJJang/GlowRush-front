<script setup>
import "../styles/join.css";
import join from '../assets/blackcushion.jpg';
import star from '../assets/star.png';

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const name = ref('')

const id = ref('');
const idError = ref('');
const exampleId = 'qwer1234'
const isClicked = ref(false) // 아이디 중복 확인 버튼 클릭 여부
const isIdValidate = ref(false) // 아이디 사용 가능 여부

const password = ref('')
const passwordError = ref('')
const passwordCheck = ref('')
const passwordCheckError = ref('')
const isPwRgxValidate = ref(false) // 비밀번호 형식 일치 여부
const isPwValidate = ref(false) // 비밀번호 일치 여부
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12,}$/;

const birth = ref('')
const birthError = ref('')

const gender = ref('')

const validateId = () => {
  isClicked.value = true;
  if(id.value === '') idError.value = '아이디를 입력해주세요.';
  else if (exampleId === id.value) idError.value = '이미 존재하는 아이디입니다.';
  else {
    idError.value = '';
    isIdValidate.value = true;
  }
};

const validatePassword = () => {
  if(!passwordRegex.test(password.value)) passwordError.value = '형식에 맞지 않습니다.';
  else {
    passwordError.value = '';
    isPwRgxValidate.value = true;
  }
  }

const validatePwCheck = () => {
  if(password.value === passwordCheck.value) {
    passwordCheckError.value = '';
    isPwValidate.value = true;
  }
  else passwordCheckError.value = '비밀번호가 일치하지 않습니다.';
}

const validateBirth = () => {
  if(birth.value.length === 8) birthError.value = '';
  else birthError.value = '생년월일 8자리 입력해주세요.'
}

const goToLogin = () => {
  if (!name.value) return alert('이름을 입력해주세요.');
  if (!isIdValidate.value) return alert('아이디 중복 확인을 해주세요.');
  if (!isPwRgxValidate.value) return alert('비밀번호 형식이 올바르지 않습니다.');
  if (!isPwValidate.value) return alert('비밀번호가 일치하지 않습니다.');
  if (!birth.value || birth.value.length !== 8) return alert('생년월일을 8자리로 입력해주세요.');
  if (!gender.value) return alert('성별을 선택해주세요.');

  alert('회원가입이 완료되었습니다.');

  router.push('/');
}
</script>

<template>
  <div id="join">
    <img :src="join" alt="join img" class="join-img"></img>

    <div class="join-input">
      <div class="growrush">
        <img :src="star" alt="join img" class="gr-img"></img>
        <div class="gr-text">GrowRush</div>
      </div>
      
      <div class="title">회원가입</div>

      <input class="input-name" placeholder="이름" type="text" v-model="name"/>

      <div class="dupli-check">
        <input class="input-id" placeholder="아이디" type="text" v-model="id" @keyup.enter="validateId"/>
        <div class="check-btn" @click="validateId">중복 확인</div>
      </div>
      <p v-if="idError && isClicked" class="message-f">{{ idError }}</p>
      <p v-else-if="!idError && isClicked" class="message-t">사용 가능한 아이디입니다.</p>
      
      <input class="input-pw" placeholder="비밀번호(영문, 숫자 포함 12자 이상)" name="password" type="password"
      v-model="password" @input="validatePassword"/>
      <div v-if="password" class="message-f">{{ passwordError }}</div>

      <input class="input-pwcheck" placeholder="비밀번호 확인" name="password" type="password" 
        v-model="passwordCheck" @input="validatePwCheck"/>
      <div v-if="passwordCheck" class="message-f">{{ passwordCheckError }}</div>

      <input class="input-birth" placeholder="생년월일(YYYYMMDD)" maxlength="8" type="text" 
        v-model="birth" @input="validateBirth" oninput="this.value = this.value.replace(/[^0-9]/g, '')"/>
      <div v-if="birth" class="message-f">{{ birthError }}</div>
      
      <div class="gender-form">
        <h3 class="gender-title">성별 선택</h3>
          <label><input type="radio" value="male" v-model="gender" />남성</label>
          <label><input type="radio" value="female" v-model="gender" />여성</label>
      </div>

      <div class="join-btn" @click="goToLogin">회원가입</div>
      <div class="join-btn-k">카카오 회원가입</div>
      <div class="join-btn-n">네이버 회원가입</div>
    </div>
  </div>  
</template>