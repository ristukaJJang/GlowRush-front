<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const birth = ref('')

const examplePassword = 'gloria010425'
const passwordCheck = ref('')
const password = ref('')
const isVerified = ref(false)

const gender = ref('')

const checkPassword = () => {
    if(password.value !== examplePassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }else {
        isVerified.value = true;
    }
}

const goToClick = () => {
    checkPassword();
}

const clickSaveBtn = () => {
  alert('변경되었습니다.');
  router.push('/main');
}
</script>

<template>
    <div id="update">
        <div v-if="!isVerified" class="verify-box">
            <div>
                <h2 class="title">비밀번호 재확인</h2>
                <div>개인정보 보호를 위해 비밀번호를 다시 확인합니다.</div>
                <input placeholder="비밀번호" class="input-pw" v-model="password" type="password" 
                    name="password" @keyup.enter="goToClick"/>
                <div class="ok-btn" @click="checkPassword">확인</div>
            </div>
        </div>
        

    <!-- 개인정보 수정 화면 -->
    <div v-else class="edit-box">
      <h2 class="title">개인정보 수정</h2>
      <form @submit.prevent="saveInfo">
        <div class="label-box">
          <label class="label">이름</label>
          <input type="text" placeholder="홍길동" class="input" v-model="name"/>
        </div>
        <div class="label-box">
          <label class="label">비밀번호</label>
          <input type="password" placeholder="영문, 숫자 혼합 12자 이상" class="input" v-model="password"/>
        </div>
        <div class="label-box">
          <label class="label">비밀번호 확인</label>
          <input type="password" placeholder="영문, 숫자 혼합 12자 이상" class="input" v-model="password"/>
        </div>
        <div class="label-box">
          <label class="label">생년월일</label>
          <input type="text" placeholder="YYYYMMDD" maxlength="8" class="input" v-model="birth"/>
        </div>
        <div class="label-box">
          <h3 class="gender-title">성별 선택</h3>
          <label class="label-s"><input type="radio" value="male" v-model="gender" />남성</label>
          <label class="label-s"><input type="radio" value="female" v-model="gender" />여성</label>
        </div>
        <button type="submit" class="save-btn" @click="clickSaveBtn">저장</button>
      </form>
    </div>
    </div>
    
</template>

<style>
#update {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#update .input-pw {
    margin-top: 50px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    height: 25px;
    border: 1px solid lightgray;
    justify-self: center;
    display: flex;
}

#update .ok-btn {
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;

    margin-top: 50px;
    padding: 10px;

    width: 300px;
    height: 25px;

    align-items: center;
    justify-self: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
}

#update .title {
  display: flex;
  align-items: center;
  justify-self: center;

  margin-bottom: 50px;
}

#update .label-box {
  gap: 15px;
  margin-bottom: 15px;
  display: flex;
}

#update .label{
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-self: center;
  align-items: center;
}

#update .input {
  padding: 10px;
  width: 250px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid lightgray;
}

#update .gender-title {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-self: center;
  align-items: center;
  margin-right: 80px;
}

#update .label-s {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-self: center;
  align-items: center;
}

#update .save-btn {
  display: flex;
  border-radius: 10px;
  border: 1px solid black;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  width: 400px;
  align-items: center;
  justify-self: center;
  justify-content: center;
  margin-top: 50px;
}
</style>