<template>
  <div class="container">
    <!-- 顶部组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <HospitalBottom />
    <!-- 登录组件 -->
    <Login />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss ">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      min-height: 700px;
      width: 1200px;
      margin: 0 auto;
      margin-top: 70px;
      padding-bottom: 20px;
      margin-bottom: 50px;
    }
  }
</style>