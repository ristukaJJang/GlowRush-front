<script setup>
defineProps({
  method: String,      // 결제방법
  date: String,        // 결제 날짜
  amount: String,     // 결제 금액
  status: String      // 결제 상태
})
</script>

<template>
  <div class="payment-card" :class="status">
    <div class="left">
      <h3>{{ method }}</h3>
      <p>결제 금액: {{ amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}원</p>
      <span class="expire">결제일시: {{ date }}</span>
    </div>
  </div>
</template>

<style scoped>
.payment-card {
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
  cursor: pointer;
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
/* 
.payment-card.done {
  opacity: 0.9;
} */

.payment-card.cancle {
  opacity: 0.5;
}

</style>
