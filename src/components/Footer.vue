<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 GrowRush. All rights reserved.</p>
      <p>Made by <strong>정호정</strong> | Full Stack Developer</p>
      <p>개발 기간: 2025.10 - 2026.03</p>
      <div class="links">
        <a href="https://github.com/ristukaJJang" target="_blank">GitHub</a> |
        <a href="mailto:hojung.dev@gmail.com">Contact</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #111;
  color: #ccc;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  margin-top: 30px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.links a {
  color: #ccc;
  text-decoration: none;
  margin: 0 5px;
}

.links a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
