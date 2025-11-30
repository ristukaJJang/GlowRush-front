<script setup>
import { ref } from 'vue'

const progress = ref(0) // 진행률 상태

const increaseProgress = () => {
  if(progress.value < 100) progress.value += 10
}

const decreaseProgress = () => {
  if(progress.value > 0) progress.value -= 10
}
</script>

<template>
    <div id="waiting">
        <h2 class="waiting-title">대기번호</h2>
        <div>새로고침시 대기가 길어질 수 있습니다.</div>
        <div class="waiting-number">10,000번</div>
        <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <!-- <button @click="increaseProgress">+10%</button>
        <button @click="decreaseProgress">-10%</button> -->
    </div>
</template>

<style>
#waiting {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;

    width: 40%;
    height: 350px;
}

#waiting .waiting-number {
    margin-top: 50px;
    font-size: 45px;
    font-weight: 600;
}

#waiting .progress-bar {
    width: 300px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f0f0f0;
    overflow: hidden;
    margin-bottom: 10px;

    margin-top: 25px;
}

#waiting .progress {
    height: 100%;
    background-color: #4caf50;
    width: 0%;
    transition: width 0.3s ease;
}
</style>