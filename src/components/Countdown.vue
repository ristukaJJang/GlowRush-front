<template>
  <div class="countdown">
    <h2>쿠폰 오픈까지</h2>
    <div class="timer">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      targetTime: new Date().getTime() + 1000 * 60 * 60 * 2, // 2시간 뒤
      now: new Date().getTime(),
    };
  },
  computed: {
    remaining() {
      return Math.max(0, this.targetTime - this.now);
    },
    hours() {
      return String(Math.floor(this.remaining / (1000 * 60 * 60))).padStart(2, "0");
    },
    minutes() {
      return String(Math.floor((this.remaining / (1000 * 60)) % 60)).padStart(2, "0");
    },
    seconds() {
      return String(Math.floor((this.remaining / 1000) % 60)).padStart(2, "0");
    },
  },
  mounted() {
    setInterval(() => {
      this.now = new Date().getTime();
    }, 1000);
  },
};
</script>

<style scoped>
.countdown {
  text-align: center;
  margin-top: 40px;
}
.timer {
  font-size: 2rem;
  color: #ff6699;
  margin-top: 10px;
}
</style>
