<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  id: Number,
  openDate: String,
  imgSrc: String,
  name: String,
  explain: String,
  expire: String,
  hideCountdown: Boolean // 오늘 마감용
})

const remainTime = ref('')

// "2025-11-21 18시" 같은 문자열을 Date 객체로 변환
const parseDate = (str) => {
  const [datePart, hourPart] = str.split(" ")
  const hour = parseInt(hourPart.replace("시", ""))

  const d = new Date(datePart)
  d.setHours(hour, 0, 0, 0)
  return d
}

const updateCountdown = () => {
  const now = new Date()
  const target = parseDate(props.openDate)

  let diff = target - now

  if (diff <= 0) {
    remainTime.value = "오픈 완료"
    return
  }

  const hours = Math.floor(diff / 3600000)
  diff %= 3600000

  const minutes = Math.floor(diff / 60000)
  diff %= 60000

  const seconds = Math.floor(diff / 1000)

  const pad = (n) => (n < 10 ? "0" + n : n)

  remainTime.value = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

let timer = null

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>



<template>
    <div id="main-coupon">
        <div v-if="!hideCountdown && remainTime !== '오픈 완료'" class="remaining">{{ remainTime }}</div>
        <div class="info">
          <img :src="imgSrc" class="main-img" />
          <div>{{ name }}</div>
          <div class="main-explain">{{ explain }}</div>
          <div class="main-expire">{{ expire }}</div>
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
    height: 350px;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

#main .main-img {
    width: 200px;
    height: 200px;
    margin-bottom: 35px;
    background-size: cover;
}

#main .main-explain {
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
}

#main .main-expire {
  font-size: 12px;
  margin-top: 10px;
  font-weight: 500;
  color: gray;
}
</style>