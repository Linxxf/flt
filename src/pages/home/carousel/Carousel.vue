<template>
    <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img :src="item" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import {ref} from "vue"
import image1 from "../../../assets/images/轮播图1.jpg"
import image2 from "../../../assets/images/轮播图2.jpg"
import image3 from "../../../assets/images/轮播图3.jpg"
import image4 from "../../../assets/images/轮播图4.jpeg"
let imgList = [image1,image2,image3,image4]
</script>

<style scoped lang="scss">
    img {
        width: 700px;
        height: 350px;
    }
</style>