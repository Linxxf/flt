<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请你输入医院名称" v-model="hospitalName" 
        :fetch-suggestions="getHospitalNameList" :trigger-on-focus="false" @select="goDetail"/>
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
        <!-- <router-link to="/detail"></router-link> -->
    </div>
</template>

<script setup lang="ts">
    import { Search } from "@element-plus/icons-vue"
    //引入使用router
    import {useRouter} from 'vue-router'
    import {reqHospitalName} from '@/api/home/home.ts'
    import {ref} from 'vue'

    //搜索医院的关键字
    let hospitalName = ref('')
    //创建路由器对象
    let $router = useRouter()
    //组件绑定输入关键字展示模糊搜索方法
    const getHospitalNameList = async(keyword,cb) => {
        let result = await reqHospitalName(keyword)
        console.log(result);
        //设置组件cb传值规定格式
        let newresult = result.data.map((item)=>{
            return{
                value:item.hosname,
                hoscode:item.hoscode
            }    
        })
        cb(newresult)
    }
    //点击选中建议项事件
    const goDetail = (item) =>{
        //点击推荐项目,进入医院的详情页(将来需要携带query参数)
        $router.push({path:'/detail/register',query:{hoscode:item.hoscode}})
    }
</script>

<style scoped lang="scss">
    .search {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;

        /* ::v-deep(el-input__wrapper){
            width: 600xp;
            margin-right: 10px;
        } */
        ::v-deep(.el-input__wrapper) {
            width: 600px;
            margin-right: 10px;
        }
    }
</style>