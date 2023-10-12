<template>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="false"
      layout="total, sizes, prev, pager, next, jumper"
      :total="hospitalNum"
    />
</template>

<script setup lang="ts">
//分页器需要的数据
import {ref,onMounted} from 'vue'
//引入组合式API函数
import {reqHospital} from '@/api/home/home.ts'
//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);

//医院总个数
let hospitalNum = ref(0)

//挂载完毕发一次请求
onMounted(()=>{
    getHospitalInfo()
})

//获取已有的医院数据
const getHospitalInfo = async () => {
    let result = await reqHospital(pageNo.value,pageSize.value)
    console.log('这里是分页选择器',result);
    // console.log(result.data.data.content);
    if(result.code == 200){
        hospitalNum.value = result.data.totalElements
    }
}
</script>

<style scoped lang="scss">
    ::v-deep(.el-pager){
        li:first-child{
            color: rgb(177, 134, 0);
        }
        li:hover{
            color: rgb(177, 134, 0);
        }
    }
</style>