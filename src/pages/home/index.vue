<template>
    <div class="home">
        <!-- 首页轮播图 -->
        <Carousel />
        <!-- 搜索框 -->
        <SearchInput />
        <!-- 医院展示结构 -->
        <Hospital :hospitalInfo="hospitalData" @sendLevelAndAreaValue="getHospitalLevelValueAndAreaValue" />
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            :background="false" layout="total, sizes, prev, pager, next, jumper" :total="hospitalNum"
            @current-change="changePage" @size-change="changeSize" />
    </div>
</template>

<script setup lang="ts">
    //引入组合式API函数
    import { onMounted, ref } from 'vue'
    import { reqHospital } from '@/api/home/home.ts'

    //组件
    import Carousel from "./carousel/Carousel.vue"
    import SearchInput from "./search/Search.vue"
    import Hospital from "./hospital/Hospital.vue"

    //ts数据类型
    // import {HospitalResponseData} from "@/api/home/type.ts"

    //分页器页码
    let pageNo = ref < number > (1);
    //一页展示几条数据
    let pageSize = ref < number > (10);
    //存储医院已有的数据
    let hospitalData = ref([])
    //医院总个数
    let hospitalNum = ref(0)
    //存储医院地区value
    let hospitalArea = ref('')
    //存储医院等级value
    let hospitalLevel = ref('')

    //挂载完毕发一次请求
    onMounted(() => {
        getHospitalInfo()
    })

    //获取已有的医院数据
    const getHospitalInfo = async () => {
        let result = await reqHospital(pageNo.value, pageSize.value, hospitalLevel.value, hospitalArea.value)
        // console.log('这里是首页', result);
        // console.log(result.data.data.content);
        if (result.code == 200) {
            hospitalNum.value = result.data.totalElements
            hospitalData.value = result.data.content
        }
    }
    //分页器页码发生变化回调
    const changePage = async () => {
        let result = await reqHospital(pageNo.value, pageSize.value)
        // console.log('这里是首页', result);
        // console.log(result.data.data.content);
        if (result.code == 200) {
            hospitalNum.value = result.data.totalElements
            hospitalData.value = result.data.content
        }
    }
    //分页器尺寸变化的回调
    const changeSize = async () => {
        let result = await reqHospital(pageNo.value, pageSize.value)
        // console.log('这里是首页', result);
        // console.log(result.data.data.content);
        if (result.code == 200) {
            hospitalNum.value = result.data.totalElements
            hospitalData.value = result.data.content
        }
    }
    //获取医院组件选择医院地区和等级的value值
    const getHospitalLevelValueAndAreaValue = (levelValue, areaValue) => {
        hospitalLevel.value = levelValue
        hospitalArea.value = areaValue
        getHospitalInfo()
    }
</script>
<script lang="ts">
    export default {
        name:'Home'
    }
    </script>
<style scoped lang="scss">
    .home {
        
        ::v-deep(.el-pager) {
            li:first-child {
                color: rgb(177, 134, 0);
            }

            li:hover {
                color: rgb(177, 134, 0);
            }
        }

    }



    /* background-color: rgb(233,120,0); */
</style>