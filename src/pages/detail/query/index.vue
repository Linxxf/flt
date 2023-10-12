<template>
    <div class="stop">
        <h1>{{hosDetailStore.HosDetailInfo.hospital?.hosname}}查询/取消信息</h1>
        <el-empty description="暂无信息"></el-empty>
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/moudules/hospitalDetail.ts'
let hosDetailStore = useDetailStore()
</script>

<style scoped lang="scss">
    .stop{
        margin-left: 20px;
        h1{
            font-size: 24px;
            text-align: center;
        }
    }
</style>