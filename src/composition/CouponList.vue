<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  coupons: {
    type: Array,
    required: true,
  }
})

const currentPage = ref(1)
const perPage = 6 // 한 화면 6개

const totalPages = computed(() =>
  Math.ceil(props.coupons.length / perPage)
)

const paginatedCoupons = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return props.coupons.slice(start, start + perPage)
})

const goPage = (page) => {
  currentPage.value = page
}
</script>

<template>
  <div class="coupon-list">
    <div
      class="coupon-card"
      v-for="coupon in paginatedCoupons"
      :key="coupon.id"
    >
      {{ coupon.name }}
    </div>
  </div>

  <!-- 페이지네이션 -->
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
  </div>
</template>
