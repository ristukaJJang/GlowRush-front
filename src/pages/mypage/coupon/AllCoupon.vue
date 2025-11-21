<script setup>
import { ref, computed } from 'vue'
import CouponCard from '../../../components/CouponCard.vue';

const coupons = [
  { title: "10% 할인 쿠폰", description: "GlowRush 전 제품 적용", expire: "2026-01-10", status: "available" },
  { title: "배송비 무료 쿠폰", description: "1회 제한", expire: "2026-02-01", status: "available" },
  { title: "5,000원 할인 쿠폰", description: "3만원 이상 구매", expire: "2025-12-31", status: "used" },
]

/* ---- 페이지네이션 ---- */

// 페이지 번호
const currentPage = ref(1)

// 6개씩 보여줌
const perPage = 6

// 총 페이지 수
const totalPages = computed(() => Math.ceil(coupons.length / perPage))

// 페이지네이션 블록 (5개씩 묶음)
const pageBlock = 5

// 현재 블록의 시작 페이지
const startPage = computed(() => {
  return Math.floor((currentPage.value - 1) / pageBlock) * pageBlock + 1
})

// 현재 블록의 끝 페이지
const endPage = computed(() => {
  return Math.min(startPage.value + pageBlock - 1, totalPages.value)
})

// 실제 화면에 표시될 페이지 목록
const pageList = computed(() => {
  const arr = []
  for (let i = startPage.value; i <= endPage.value; i++) arr.push(i)
  return arr
})

// 이전 블록
const prevBlock = () => {
  if (startPage.value === 1) return
  currentPage.value = startPage.value - 1
}

// 다음 블록
const nextBlock = () => {
  if (endPage.value >= totalPages.value) return
  currentPage.value = endPage.value + 1
}

// 현재 페이지의 쿠폰
const paginatedCoupons = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return coupons.slice(start, start + perPage)
})

// 페이지 이동
const goPage = (page) => {
  currentPage.value = page
}
</script>


<template>
  <div class="coupon-list">
    <CouponCard
      v-for="(item, i) in paginatedCoupons"
      :key="i"
      :title="item.title"
      :description="item.description"
      :expire="item.expire"
      :status="item.status"
    />
  </div>

  <!-- 페이지네이션 -->
  <div class="pagination">

    <!-- 이전 블록 -->
    <button
      v-if="startPage > 1"
      @click="prevBlock"
      class="arrow"
    >
      ‹
    </button>

    <!-- 페이지 번호 -->
    <button
      v-for="page in pageList"
      :key="page"
      @click="goPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>

    <!-- 다음 블록 -->
    <button
      v-if="endPage < totalPages"
      @click="nextBlock"
      class="arrow"
    >
      ›
    </button>
  </div>
</template>


<style>
.coupon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 20px 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 5px;
}

.pagination button {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}

.pagination button.active {
  background: #000;
  color: #fff;
}

.pagination .arrow {
  font-size: 20px;
  font-weight: bold;
  padding: 4px 12px;
}

</style>
