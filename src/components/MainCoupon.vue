<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  openDate: String,      // 오픈 일시
  imgSrc: String,       // 이미지 링크
  name: String,         // 쿠폰 이름
  explain: String,      // 쿠폰 설명
  expire: String        // 쿠폰 유효기간
})

const remainTime = ref('')

// 남은 시간 계산 함수
const updateCountdown = () => {
  const now = new Date()

  // 오늘 날짜 가져오기
  const target = new Date()
  // 추후엔 opendate 맞춰서 하기
  target.setHours(16, 0, 0, 0)  // 오늘 16:00:00

  let diff = target - now  // 밀리초(ms) 차이

  // 이미 시간이 지났다면 "00:00:00"
  if (diff <= 0) {
    remainTime.value = "00:00:00"
    return
  }

  // 밀리초 → 시/분/초 변환
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff %= (1000 * 60 * 60)

  const minutes = Math.floor(diff / (1000 * 60))
  diff %= (1000 * 60)

  const seconds = Math.floor(diff / 1000)

  // 두 자리로 맞추기
  const pad = (n) => (n < 10 ? "0" + n : n)

  remainTime.value = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

let timer = null

onMounted(() => {
  updateCountdown() // 초기 실행
  timer = setInterval(updateCountdown, 1000) // 1초마다 업데이트
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>


<template>
    <div id="main-coupon">
        <div class="remaining">{{ remainTime }}</div>
        <div class="info">
          <div>{{ imgSrc }}</div>
          <div>{{ name }}</div>
          <div>{{  explain }}</div>
          <div>{{ expire }}</div>
        </div>
    </div>
</template>

<style>
#main-coupon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    gap: 8px;
    width: 33%;
}

#main-coupon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
}

#main-coupon .remaining {
    display: flex;
    border: 2px solid black;
    border-radius: 7px;
    width: 90%;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

#main-coupon .info {
    border: 2px solid black;
    border-radius: 7px;
    width: 90%;
    height: 300px;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
}
</style>