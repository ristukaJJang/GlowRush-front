<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const password = ref('')
const examplePassword = 'gloria010425'
const isReal = ref(false)

const check = () => {
    if(password.value === examplePassword) {
        isReal.value = window.confirm('정말로 탈퇴하시겠습니까?');
        if(isReal.value) {
            alert('탈퇴되었습니다.');
            router.push('/');
            return;
        }
    }else {
        alert('잘못된 비밀번호입니다.');
    }
    
}

const gotoCheck = () => {
    check();
}
</script>

<template>
    <div id="withdraw">
        <h2>비밀번호 재확인</h2>
        <div>개인정보 보호를 위해 비밀번호를 다시 확인합니다.</div>
        <input placeholder="비밀번호" class="input-pw" name="password" type="password" 
        v-model="password" @keyup.enter="gotoCheck"/>
        <div class="ok-btn" @click="check">확인</div>
    </div>
</template>

<style>
#withdraw {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#withdraw .input-pw {
    margin-top: 50px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    height: 25px;
    border: 1px solid lightgray;
}

#withdraw .ok-btn {
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

/* #withdraw .ok-btn:hover {
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
} */
</style>