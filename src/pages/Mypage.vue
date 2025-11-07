<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import '../styles/Mypage.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div id="mypage">
        <Header/>
        <div>mypage</div>
        <Footer/>
    </div>
</template>