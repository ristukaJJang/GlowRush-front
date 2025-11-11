<script setup>
import { ref } from 'vue'

const examplePassword = 'gloria010425'
const password = ref('')

const checkPassword = () => {
    if(password.value !== examplePassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }else {
        alert('개인정보 수정 페이지가 뜰겁니다.')
    }
}

const goToClick = () => {
    checkPassword();
}
</script>

<template>
    <div id="update">
        <h2>비밀번호 재확인</h2>
        <div>개인정보 보호를 위해 비밀번호를 다시 확인합니다.</div>
        <input placeholder="비밀번호" class="input-pw" v-model="password" type="password" 
        name="password" @keyup.enter="goToClick"/>
        <div class="ok-btn" @click="checkPassword">확인</div>
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
    justify-content: center;
    display: flex;
    cursor: pointer;
}

#update .ok-btn:hover {
    background-color: lightgray;
    color: black;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;

    margin-top: 50px;
    padding: 10px;

    width: 300px;
    height: 25px;

    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
}
</style>