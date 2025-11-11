<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Sidebar from '../../components/Sidebar.vue'
</script>

<template>
    <div id="mypage">
        <Header/>
        <div class="mypage">
            <Sidebar />
            <div class="mypage-content">
                <router-view /> <!-- 오른쪽 내용 부분 -->
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
#mypage .mypage {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;
    gap: 30px;
}

#mypage .mypage-content {
    flex: 1;
    padding: 40px;
    background-color: #f8f8f8;
    border-radius: 10px;
    height: 500px
}
</style>