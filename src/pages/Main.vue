<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MainCoupon from '../components/MainCoupon.vue'
import '../styles/Main.css'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import img1 from '../assets/main1.jpg'
import img2 from '../assets/main2.jpg'
import img3 from '../assets/main3.jpg'
import img4 from '../assets/main4.jpg'
import img5 from '../assets/main5.jpg'
import img6 from '../assets/main6.jpg'
import img7 from '../assets/main7.jpg'
import img8 from '../assets/main8.jpg'
import img9 from '../assets/main9.jpg'
import img10 from '../assets/main10.jpg'

const mainCoupons = [
  {  
    id: 1,
    openDate: "2025-11-25 18시", 
    imgSrc: img1, 
    name: "10% 할인 쿠폰", 
    explain: "GlowRush 전 제품 적용", 
    expire: "2026-01-10"
  },
  { 
    id: 2,
    openDate: "2025-11-25 19시", 
    imgSrc: img2, 
    name: "배송비 무료 쿠폰", 
    explain: "1회 제한", 
    expire: "2026-02-01"
  },
  { 
    id: 3,
    openDate: "2025-11-25 20시", 
    imgSrc: img3, 
    name: "5,000원 할인 쿠폰", 
    explain: "3만원 이상 구매", 
    expire: "2025-12-31"
  },
  {  
    id: 4,
    openDate: "2025-11-24 18시", 
    imgSrc: img4, 
    name: "10% 할인 쿠폰", 
    explain: "GlowRush 전 제품 적용", 
    expire: "2026-01-10"
  },
  { 
    id: 5,
    openDate: "2025-11-22 19시", 
    imgSrc: img5, 
    name: "배송비 무료 쿠폰", 
    explain: "1회 제한", 
    expire: "2026-02-01"
  },
  { 
    id: 6,
    openDate: "2025-11-20 20시", 
    imgSrc: img6, 
    name: "5,000원 할인 쿠폰", 
    explain: "3만원 이상 구매", 
    expire: "2025-12-31"
  },
  {  
    id: 7,
    openDate: "2025-11-24 18시", 
    imgSrc: img7, 
    name: "10% 할인 쿠폰", 
    explain: "GlowRush 전 제품 적용", 
    expire: "2025-11-25"
  },
  { 
    id: 8,
    openDate: "2025-11-24 19시", 
    imgSrc: img8, 
    name: "배송비 무료 쿠폰", 
    explain: "1회 제한", 
    expire: "2025-11-25"
  },
  { 
    id: 9,
    openDate: "2025-11-19 20시", 
    imgSrc: img9, 
    name: "5,000원 할인 쿠폰", 
    explain: "3만원 이상 구매", 
    expire: "2025-11-25"
  },
  { 
    id: 10,
    openDate: "2025-11-25 12시", 
    imgSrc: img10, 
    name: "5,000원 할인 쿠폰", 
    explain: "3만원 이상 구매", 
    expire: "2025-11-25"
  }
]

const now = ref(new Date())
const itemsPerPage = 3

// ✅ 쿠폰 리스트 분류
const openCoupons = computed(() =>
  mainCoupons.filter(c => new Date(c.openDate.replace('시','') + ':00') > now.value)
)

// 오픈 완료 쿠폰 (오늘 마감 제외)
const completedCoupons = computed(() =>
  mainCoupons.filter(c => 
    new Date(c.openDate.replace('시','') + ':00') <= now.value &&
    !todayCoupons.value.includes(c)
  )
)

// 오늘 마감 쿠폰
const todayCoupons = computed(() => {
  const today = now.value
  return mainCoupons.filter(c => {
    const expire = new Date(c.expire + ' 23:59:59')
    return expire.getFullYear() === today.getFullYear() &&
           expire.getMonth() === today.getMonth() &&
           expire.getDate() === today.getDate()
  })
})

// ✅ 페이지네이션 상태
const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)

// 각 리스트의 총 페이지
const totalPages1 = computed(() => Math.ceil(openCoupons.value.length / itemsPerPage))
const totalPages2 = computed(() => Math.ceil(completedCoupons.value.length / itemsPerPage))
const totalPages3 = computed(() => Math.ceil(todayCoupons.value.length / itemsPerPage))

// 각 리스트의 현재 페이지 데이터
const pagedOpenCoupons = computed(() => {
  const start = (currentPage1.value - 1) * itemsPerPage
  return openCoupons.value.slice(start, start + itemsPerPage)
})

const pagedCompletedCoupons = computed(() => {
  const start = (currentPage2.value - 1) * itemsPerPage
  return completedCoupons.value.slice(start, start + itemsPerPage)
})

const pagedTodayCoupons = computed(() => {
  const start = (currentPage3.value - 1) * itemsPerPage
  return todayCoupons.value.slice(start, start + itemsPerPage)
})

// 페이지 이동 함수
const prevPage = (n) => {
  if (n === 1 && currentPage1.value > 1) currentPage1.value--
  if (n === 2 && currentPage2.value > 1) currentPage2.value--
  if (n === 3 && currentPage3.value > 1) currentPage3.value--
}
const nextPage = (n) => {
  if (n === 1 && currentPage1.value < totalPages1.value) currentPage1.value++
  if (n === 2 && currentPage2.value < totalPages2.value) currentPage2.value++
  if (n === 3 && currentPage3.value < totalPages3.value) currentPage3.value++
}

// 타이머 관련
const formattedDate = ref('')

// 두 자리 숫자로 만드는 함수 (01, 02 …)
const pad = (num) => (num < 10 ? '0' + num : num)

// 타이머 업데이트
const updateTime = () => {
    now.value = new Date()

    const year = pad(now.value.getFullYear());
    const month = pad(now.value.getMonth() + 1);
    const day = pad(now.value.getDate());

    const hours = pad(now.value.getHours())
    const minutes = pad(now.value.getMinutes())
    const seconds = pad(now.value.getSeconds())

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
          <h3>⏳ 오픈까지</h3>
          <div class="event-props">
            <button @click="prevPage(1)" :disabled="currentPage1 === 1" class="page-btn">◀</button>
            <MainCoupon
              v-for="(item, i) in pagedOpenCoupons"
              :key="i"
              :open-date="item.openDate"
              :img-src="item.imgSrc"
              :name="item.name"
              :explain="item.explain"
              :expire="item.expire"
            />
            <button @click="nextPage(1)" :disabled="currentPage1 === totalPages1" class="page-btn">▶</button>
          </div>
        </div>

        <div class="event-list open-completed">
          <h3>🔥 오픈 완료</h3>
          <div class="event-props">
            <button @click="prevPage(2)" :disabled="currentPage2 === 1" class="page-btn2">◀</button>
            <MainCoupon
              v-for="(item, i) in pagedCompletedCoupons"
              :key="i"
              :open-date="item.openDate"
              :img-src="item.imgSrc"
              :name="item.name"
              :explain="item.explain"
              :expire="item.expire"
              :hide-countdown="true"
            />
            <button @click="nextPage(2)" :disabled="currentPage2 === totalPages2" class="page-btn2">▶</button>
          </div>
        </div>

        <div class="event-list">
          <h3>⚠ 오늘 마감</h3>
          <div class="event-props">
            <button @click="prevPage(3)" :disabled="currentPage3 === 1" class="page-btn">◀</button>
            <MainCoupon
              v-for="(item, i) in pagedTodayCoupons"
              :key="i"
              :open-date="item.openDate"
              :img-src="item.imgSrc"
              :name="item.name"
              :explain="item.explain"
              :expire="item.expire"
              :hide-countdown="true"
            />
            <button @click="nextPage(3)" :disabled="currentPage3 === totalPages3" class="page-btn">▶</button>
          </div>
        </div>

    </div>
    <Footer />
  </div>
</template>
