<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MainCoupon from '../components/MainCoupon.vue'
import '../styles/Main.css'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mainCoupons = [
  { openDate: "2025-11-21 18시", imgSrc: "url1", name: "10% 할인 쿠폰", explain: "GlowRush 전 제품 적용", expire: "2026-01-10"},
  { openDate: "2025-11-21 19시", imgSrc: "url2", name: "배송비 무료 쿠폰", explain: "1회 제한", expire: "2026-02-01"},
  { openDate: "2025-11-21 20시", imgSrc: "url3", name: "5,000원 할인 쿠폰", explain: "3만원 이상 구매", expire: "2025-12-31"},
]

const formattedDate = ref('')

// 두 자리 숫자로 만드는 함수 (01, 02 …)
const pad = (num) => (num < 10 ? '0' + num : num)

// 타이머 업데이트
const updateTime = () => {
    const now = new Date()

    const year = pad(now.getFullYear());
    const month = pad(now.getMonth());
    const day = pad(now.getDay());

    const hours = pad(now.getHours())
    const minutes = pad(now.getMinutes())
    const seconds = pad(now.getSeconds())

    formattedDate.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

let timer = null

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div id="main">
    <Header />
    <div>
        <h2 class="title">🎉 역대급 혜택을 놓치지 마세요 🎉</h2>
        <div class="timer">{{ formattedDate }}</div>
        <div class="event-list">
            <MainCoupon
              v-for="(item, i) in mainCoupons"
              :key="i"
              :open-date="item.openDate"
              :img-src="item.imgSrc"
              :name="item.name"
              :explain="item.explain"
              :expire="item.expire"
            />
            
        </div>
    </div>
    <Footer />
  </div>
</template>
