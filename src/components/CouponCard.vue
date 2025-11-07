<template>
  <div class="card">
    <img :src="image" alt="상품 이미지" />
    <h3>{{ name }}</h3>
    <p>{{ desc }}</p>
    <button :disabled="isSoldOut" @click="claimCoupon">
      {{ isSoldOut ? "마감됨" : "쿠폰 받기 🎟️" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CouponCard",
  props: ["image", "name", "desc"],
  data() {
    return { isSoldOut: false };
  },
  methods: {
    claimCoupon() {
      this.isSoldOut = true;
      alert(`${this.name} 쿠폰이 발급되었습니다!`);
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  width: 220px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.card img {
  width: 100%;
  border-radius: 8px;
}
.card button {
  margin-top: 10px;
  background: #ff6699;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}
.card button:disabled {
  background: #aaa;
  cursor: not-allowed;
}
</style>
