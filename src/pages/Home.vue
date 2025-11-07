<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import '../styles/Home.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div id="home">
        <Header />
        <div>main 화면</div>
        <Footer/>
    </div>
    
</template>