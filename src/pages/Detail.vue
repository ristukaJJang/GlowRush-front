<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import WaitingCard from '../components/WaitingCard.vue'
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    id: String
})

const gotoCouponBox = ref(false);
const getCouponClickBoolean = ref(false);
const clickGetCoupon = () => {
    getCouponClickBoolean.value = true;
    gotoCouponBox.value = window.confirm('쿠폰을 받았습니다. 쿠폰함으로 이동하시겠습니까?');
    if(gotoCouponBox.value) router.push('/mypage/coupon/all');
}

// 쿠폰 배열
const mainCoupons = [
  { id: 1, openDate: "2025-11-27 18시", imgSrc: img1, name: "10% 할인 쿠폰", explain: "GlowRush 전 제품 적용", expire: "2026-01-10" },
  { id: 2, openDate: "2025-11-27 19시", imgSrc: img2, name: "배송비 무료 쿠폰", explain: "1회 제한", expire: "2026-02-01" },
  { id: 3, openDate: "2025-11-25 20시", imgSrc: img3, name: "5,000원 할인 쿠폰", explain: "3만원 이상 구매", expire: "2025-12-31" },
  { id: 4, openDate: "2025-11-24 18시", imgSrc: img4, name: "10% 할인 쿠폰", explain: "GlowRush 전 제품 적용", expire: "2026-01-10" },
  { id: 5, openDate: "2025-11-22 19시", imgSrc: img5, name: "배송비 무료 쿠폰", explain: "1회 제한", expire: "2026-02-01" },
  { id: 6, openDate: "2025-11-20 20시", imgSrc: img6, name: "5,000원 할인 쿠폰", explain: "3만원 이상 구매", expire: "2025-12-31" },
  { id: 7, openDate: "2025-11-24 18시", imgSrc: img7, name: "10% 할인 쿠폰", explain: "GlowRush 전 제품 적용", expire: "2025-11-25" },
  { id: 8, openDate: "2025-11-24 19시", imgSrc: img8, name: "배송비 무료 쿠폰", explain: "1회 제한", expire: "2025-11-25" },
  { id: 9, openDate: "2025-11-19 20시", imgSrc: img9, name: "5,000원 할인 쿠폰", explain: "3만원 이상 구매", expire: "2025-11-27" },
  { id: 10, openDate: "2025-11-25 12시", imgSrc: img10, name: "5,000원 할인 쿠폰", explain: "3만원 이상 구매", expire: "2025-11-27" }
]

// 현재 props.id에 해당하는 쿠폰 찾기
const currentCoupon = computed(() => {
  const idNum = Number(props.id) // 문자열 → 숫자 변환
  return mainCoupons.find(coupon => coupon.id === idNum) || mainCoupons[0]
})
</script>

<template>
    <Header/>
    <div id="detail">
        <img :src="currentCoupon.imgSrc" class="main-img" />
        <div class="explain">
            <div class="detail-name">{{ currentCoupon.name }}</div>
            <div>{{ currentCoupon.explain }}</div>
            <div class="detail-expire">{{ currentCoupon.expire }}</div>

            <div v-if="!getCouponClickBoolean" id="get-coupon" @click="clickGetCoupon">쿠폰 받기</div>
            <div v-else="getCouponClickBoolean" id="get-coupon-already">쿠폰 받기 완료</div>
        </div>
    </div>
    <Footer/>
</template>

<style>
#detail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 50px;
    padding: 20px;
    background-color: #f9f9f9;
}

#detail .main-img {
    width: 400px;
    height: 400px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    transition: transform 0.3s ease;
}

#detail .main-img:hover {
    transform: scale(1.05);
}

#detail .explain {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    max-width: 300px;
}

#detail .detail-name {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
}

#detail .explain div:not(.detail-name):not(.get-coupon) {
    font-size: 16px;
    color: #555;
}

#detail .detail-expire {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #ff4d4f;
}

#get-coupon {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    padding: 12px 25px;
    width: 220px;
    text-align: center;
    cursor: pointer;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

#get-coupon:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

#get-coupon-already {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    padding: 12px 25px;
    width: 220px;
    text-align: center;
    cursor: pointer;
    color: white;
    background: black;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

</style>