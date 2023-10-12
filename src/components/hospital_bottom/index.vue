<template>
    <div class="bottom">
        <div class="content">
            <div class="left">京ICP备 13018369 电话挂号010-5253825</div>
            <div class="right">
                <a href="javascript:;">联系我们</a >
                <a href="javascript:;">合作伙伴</a >
                <a href="javascript:;">用户协议</a >
                <a href="javascript:;">隐私协议</a >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
    name:'HospitalBottom'
}
</script>

<style scoped lang="scss">
    .bottom{
        position: fixed;
        z-index:1000;
        bottom:0px;
        width: 100%;
        height: 50px;
        background-color:rgb(13,98,53);
        display: flex;
        justify-content: center;
        .content{
            width: 1200px;
            height: 100%;
            background-color:rgb(13,98,53);
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            .right{
                a{
                    margin: 0 5px;
                    color: white;
                    text-decoration-line: none;
                }
            }
        }
    }
</style>