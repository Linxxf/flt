<template>
    <div class="detail">
        <div class="menu">
            <el-menu active-text-color="#B18600" :default-active="$route.path" class="el-menu-vertical-demo">
                <div class="top">
                    <svg t="1691401227204" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10477" width="20" height="20"><path d="M946.5 505L534.6 93.4c-12.5-12.5-32.7-12.5-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-0.1-90.5z" p-id="10478" fill="#7f7f7f" data-spm-anchor-id="a313x.search_index.0.i30.510d3a816LGRG2" class="selected"></path></svg>
                    <span>医院信息</span>
                </div>
                <el-menu-item :index="routerlink[0]" @click="changePage(routerlink[0])">
                    <svg t="1691399441499" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3312" width="22" height="22">
                        <path
                            d="M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z"
                            fill="#FCBD3F" p-id="3313"></path>
                    </svg>
                    <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item :index="routerlink[1]"  @click="changePage(routerlink[1])">
                    <svg t="1691399478427" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4372" width="22" height="22">
                        <path
                            d="M747.7 288.2c0-17.6-14.4-32.1-32.1-32.1H306.4c-17.6 0-32.1 14.4-32.1 32.1 0 17.6 14.4 32.1 32.1 32.1h409.2c17.7 0 32.1-14.5 32.1-32.1zM306.4 448c-17.6 0-32.1 14.4-32.1 32.1 0 17.6 14.4 32.1 32.1 32.1h191.1c17.7 0 32.2-14.4 32.1-32.1 0-17.6-14.4-32.1-32.1-32.1H306.4zM766.6 776.8c-2.1-2.1-4.4-3.9-6.9-5.2 18.1-25.8 28.7-57.1 28.7-90.9 0-88.2-72.4-159.6-161.7-159.6S465 592.5 465 680.7s72.4 159.6 161.7 159.6c32.7 0 63.2-9.6 88.7-26.1 1.5 2.9 3.4 5.6 5.8 8l83.3 83.3c12.5 12.5 32.9 12.5 45.4 0s12.5-32.9 0-45.4l-83.3-83.3z m-139.9 0.6c-54.1 0-98-43.3-98-96.7s43.9-96.7 98-96.7 98 43.3 98 96.7c0 53.4-43.8 96.7-98 96.7z"
                            fill="#FCBD3F" p-id="4373"></path>
                        <path
                            d="M577.6 895.4H221.2c-35.2 0-64-28.8-64-64V192.8c0-35.2 28.8-64 64-64h547.3c35.2 0 64 28.8 64 64v318.4h0.3v0.1c0 17.7 14.4 32.1 32.2 32.1s32.2-14.4 32.2-32.1c0-1.2-0.1-2.3-0.2-3.5v-316c0-70.4-27.6-128-98-128H225c-70.4 0-128 57.6-128 128v639.8c0 70.4 57.6 128 128 128h352.2c17.8 0 32.2-14.4 32.2-32.1 0-17.6-14.2-31.9-31.8-32.1z"
                            fill="#FCBD3F" p-id="4374"></path>
                        <path d="M832.7 639.3a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z" fill="#FCBD3F"
                            p-id="4375"></path>
                    </svg>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item :index="routerlink[2]"  @click="changePage(routerlink[2])">
                    <svg t="1691399509442" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5508" width="22" height="22">
                        <path
                            d="M718.3 384.9c-16.6-16.6-43.5-16.6-60.1 0L464.1 579l-98.3-98.3c-16.6-16.6-43.6-16.6-60.1 0-16.6 16.6-16.6 43.5 0 60.1l117.9 117.9c22.4 22.4 58.7 22.4 81 0L718.3 445c16.6-16.6 16.6-43.6 0-60.1z"
                            fill="#FCBD3F" p-id="5509"></path>
                        <path
                            d="M512 216.5c39.9 0 78.6 7.8 115 23.2 35.2 14.9 66.8 36.2 94 63.4 27.2 27.2 48.5 58.8 63.4 94 15.4 36.3 23.2 75 23.2 115s-7.8 78.6-23.2 115c-14.9 35.2-36.2 66.8-63.4 94-27.2 27.2-58.8 48.5-94 63.4-36.3 15.4-75 23.2-115 23.2s-78.6-7.8-115-23.2c-35.2-14.9-66.8-36.2-94-63.4-27.2-27.2-48.5-58.8-63.4-94-15.4-36.3-23.2-75-23.2-115s7.8-78.6 23.2-115c14.9-35.2 36.2-66.8 63.4-94 27.2-27.2 58.8-48.5 94-63.4 36.4-15.4 75.1-23.2 115-23.2m0-126C279.2 90.5 90.5 279.2 90.5 512S279.2 933.5 512 933.5 933.5 744.8 933.5 512 744.8 90.5 512 90.5z"
                            fill="#FCBD3F" p-id="5510"></path>
                    </svg>
                    <span>预约须知</span>
                </el-menu-item>
                <el-menu-item :index="routerlink[3]"  @click="changePage(routerlink[3])">
                    <svg t="1691399556367" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6837" width="22" height="22">
                        <path
                            d="M736 768h-448a32 32 0 0 1 0-64h448a32 32 0 0 1 0 64z m-44.8-415.552l-147.669333-147.669333a61.994667 61.994667 0 0 1-62.848 0l-147.669334 147.669333a32.554667 32.554667 0 0 1-46.037333-46.037333l161.578667-161.578667a63.68 63.68 0 0 1 127.104 0l161.578666 161.578667a32.554667 32.554667 0 0 1-46.037333 46.037333zM565.333333 512a32 32 0 0 1 0 64h-277.333333a32 32 0 0 1 0-64h277.333333z"
                            fill="#FCBD3F" p-id="6838"></path>
                        <path
                            d="M853.333333 981.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V384a85.333333 85.333333 0 0 1 85.333334-85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333333z m21.333334-576a42.666667 42.666667 0 0 0-42.666667-42.666666H192a42.666667 42.666667 0 0 0-42.666667 42.666666v469.333334a42.666667 42.666667 0 0 0 42.666667 42.666666h640a42.666667 42.666667 0 0 0 42.666667-42.666666V405.333333z"
                            fill="#FCBD3F" p-id="6839"></path>
                    </svg>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item :index="routerlink[4]"  @click="changePage(routerlink[4])">
                    <svg t="1691399599433" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="9006" width="22" height="22">
                        <path
                            d="M376.5 70c41.4 0 81.5 8.1 119.3 24.1 36.5 15.4 69.3 37.5 97.4 65.7 28.2 28.2 50.3 61 65.7 97.4 16 37.7 24.1 77.9 24.1 119.3s-8.1 81.5-24.1 119.3c-15.4 36.5-37.5 69.3-65.7 97.4-28.2 28.2-61 50.3-97.4 65.7-37.7 16-77.9 24.1-119.3 24.1s-81.5-8.1-119.3-24.1c-36.5-15.4-69.3-37.5-97.4-65.7s-50.3-61-65.7-97.4C78.1 458 70 417.9 70 376.5s8.1-81.5 24.1-119.3c15.4-36.5 37.5-69.3 65.7-97.4 28.2-28.2 61-50.3 97.4-65.7C295 78.1 335.1 70 376.5 70m0-70C168.6 0 0 168.6 0 376.5S168.6 753 376.5 753 753 584.4 753 376.5 584.4 0 376.5 0z"
                            p-id="9007" fill="#FCBD3F"></path>
                        <path
                            d="M274.5 136.1c8.8-8.8 18-17 27.5-24.6-37.3 13.6-72.2 35.3-102.1 65.2-109.7 109.7-109.7 287.7 0 397.4 33.2 33.2 72.6 56.3 114.4 69.4-13.9-10.1-27.2-21.5-39.8-34.1-130.7-130.7-130.7-342.6 0-473.3zM998.3 998.3c-34.2 34.2-90.2 34.2-124.5 0L622.2 746.6c-34.2-34.2-34.2-90.2 0-124.5 34.2-34.2 90.2-34.2 124.5 0l251.7 251.7c34.2 34.3 34.2 90.3-0.1 124.5z"
                            p-id="9008" fill="#FCBD3F"></path>
                    </svg>
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
//引入仓库
import useDetailStore from '@/store/moudules/hospitalDetail.ts'
//引入路由组件
import {useRouter,useRoute} from 'vue-router'
//获取路由器
let $router = useRouter() 
//获取当前路由
let $route =  useRoute()
//获取仓库对象
let detailStore = useDetailStore()
//存储Detail子路由数组
let routerlink = ref(['/detail/register','/detail/hospitalDetail','/detail/notice','/detail/stop','/detail/query'])
//切换子路由函数
const changePage = (path) => {
    // console.log(routerlink);
    $router.push({path:`${path}`,query:{hoscode:$route.query.hoscode}})
}
//组件挂载完毕:通知pinia仓库发送请求获取医院详情的数据,存储在仓库中
onMounted(()=>{
    detailStore.getHosInfo($route.query.hoscode)
})
</script>
<script lang="ts">
    export default {
        name:'Detail'
    }
    </script>
<style scoped lang="scss">
    .detail {
        width: 1200px;
        margin-top: 70px;
        /* background-color:rgb(237, 237, 233); */
        display: flex;

        .menu {
            flex-grow: 1;
            .top{
                margin: 10px 20px;
                display: flex;
                /* justify-content: flex-end; */
                align-items: center;
                color: #7f7f7f;
                span{
                    width: 70px;
                    margin-left: 10px;
                }
            }
            ::v-deep(.el-menu-item){
                display: flex;
                /* justify-content: flex-end; */
                align-items: center;
                span{
                    margin-left:10px
                }
            }
        }

        .content {
            flex-grow:9999;
        }
    }
</style>