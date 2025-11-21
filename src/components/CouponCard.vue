<script setup>
defineProps({
  title: String,      // 쿠폰 이름
  description: String, // 간단 설명
  expire: String,     // 유효기간
  status: String      // available / used 등
})
</script>

<template>
  <div class="coupon-card" :class="status">
    <div class="left">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="expire">유효기간: {{ expire }}</span>
    </div>

    <div class="right">
      <span v-if="status === 'used'" class="used-mark">사용완료</span>
      <span v-else class="use-btn">사용하기</span>
    </div>
  </div>
</template>

<style scoped>
.coupon-card {
  width: 90%;
  max-width: 550px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: 0.2s ease;
  margin: 20px auto;
}

.coupon-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
}

/* 왼쪽 텍스트 영역 */
.left h3 {
  font-size: 20px;
  margin: 0;
  font-weight: 700;
}

.left p {
  color: #666;
  margin: 4px 0 10px;
}

.expire {
  font-size: 13px;
  color: #999;
}

/* 오른쪽 버튼 영역 */
.use-btn {
  background: black;
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

.use-btn:hover {
  background: #444;
}

.used-mark {
  background: #e5e5e5;
  color: #999;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 10px;
}

/* 사용 완료된 쿠폰 카드 스타일 */
.coupon-card.used {
  opacity: 0.7;
}
</style>
