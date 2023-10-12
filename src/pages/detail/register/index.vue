<template>
    <div class="register">
        <!-- 顶部医院名字和等级 -->
        <div class="top">
            <div class="title">{{hosDetailStore.HosDetailInfo.hospital?.hosname}}</div>
            <div class="level">
                <svg t="1691504730186" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="11973" width="20" height="20">
                    <path
                        d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z"
                        fill="#B18600" p-id="11974"></path>
                    <path
                        d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z"
                        fill="#B18600" p-id="11975"></path>
                    <path
                        d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z"
                        fill="#B18600" p-id="11976"></path>
                    <path
                        d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z"
                        fill="#B18600" p-id="11977"></path>
                </svg>
                <span>{{hosDetailStore.HosDetailInfo.hospital?.param.hostypeString}}</span>
            </div>
        </div>
        <!-- 展示内容的区域 -->
        <div class="content">
            <div class="left">
                <img :src="`data:image/jpeg;base64,`+hosDetailStore.HosDetailInfo.hospital?.logoData" alt="">
            </div>
            <div class="right">
                <div class="rule">挂号规则
                    <ul>
                        <li class="time">
                            预约周期:{{hosDetailStore.HosDetailInfo.bookingRule?.cycle}}天 放号时间:{{hosDetailStore.HosDetailInfo.bookingRule?.releaseTime}} 停挂时间:{{hosDetailStore.HosDetailInfo.bookingRule?.stopTime}}
                        </li>
                        <li class="address">
                            具体位置:{{hosDetailStore.HosDetailInfo.hospital?.param.fullAddress}}
                        </li>
                        <li class="path">
                            具体路线:{{hosDetailStore.HosDetailInfo.hospital?.route}}
                        </li>
                        <li class="quit-time">
                            退号时间:{{hosDetailStore.HosDetailInfo.bookingRule?.quitTime}}
                        </li>
                    </ul>
                </div>
                <div class="make-rule">医院预约规则
                    <ul>
                        <li v-for="(item) in hosDetailStore.HosDetailInfo.bookingRule?.rule">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 放置每一个科室的数据 -->
        <div class="department">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in departmentArr" :key="item?.depcode" :class="{active:index == currentIndex}" @click="changeActive(index)">{{item?.depname}}</li>
                </ul>
            </div>
            <div class="right">
                <!-- 大科室 + 小科室 -->
                <div class="show-department" v-for="item in departmentArr" :key="item?.depcode">
                    <h1 class="cur">{{item?.depname}}</h1>
                    <!-- 大科室里面的小科室 -->
                    <ul>
                        <li @click="login(smallitem)" v-for="smallitem in item.children" :key="smallitem?.depcode">{{smallitem?.depname}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {onMounted,ref} from 'vue'
    //引入路由
    import {useRoute,useRouter} from 'vue-router'
    //引入组合式API
    import {reqHosDepartment} from '@/api/detail/detail.ts'
    //引入医院详情仓库的数据
    import useDetailStore from '@/store/moudules/hospitalDetail.ts'
    let hosDetailStore = useDetailStore()
    //引入用户详情仓库数据
    import useUserStore from '@/store/moudules/user.ts'
    let userStore = useUserStore()
    //获取路由
    let $route = useRoute()
    let $router = useRouter()
    //定义数组存储医院科室数据
    let departmentArr = ref([])
    //控制科室高亮的响应式数据
    let currentIndex = ref<number>(0)
    //左侧大科室点击事件(高亮+对应小科室内容区转跳到顶部)
    const changeActive = (index)=>{
        currentIndex.value = index
        let allH1 = document.querySelectorAll(".cur")
        allH1[index].scrollIntoView({
            behavior:'smooth', //过渡动画效果
            // block:'start' //滚动到的位置 默认是起始位置
        })
    }
    onMounted(()=>{
        getHosDepartment()
    })
    //定义获取医院科室数据
    const getHosDepartment = async () => {
        let result = await reqHosDepartment($route.query.hoscode)
        if(result.code == 200){
            departmentArr.value = result.data
        }
        // console.log(departmentArr);
    }
    //定义点击科室弹出对话框函数
    //item为点击的科室的数据
    const login = (item) => {  
        if(userStore.userInfo.name == undefined){
            userStore.visiable = true
        }
        $router.push({path:'/detail/register_step1',query:{hoscode:$route.query.hoscode,depcode:item.depcode}})
    }

    // console.log(hosDetailStore);
</script>

<style scoped lang="scss">
    .register {
        .top {
            margin-top: 30px;
            display: flex;

            .title {
                color: rgb(177, 134, 0);
                font-size: 30px;
                margin-left: 20px;
            }

            .level {
                color: #7f7f7f;
                margin-left: 30px;
                height: 40px;
                display: flex;
                align-items: center;

                span {
                    margin-left: 6px;
                }
            }
        }
        .content {
            margin-top: 20px;
            display: flex;
            /* width: 80px; */
            .left {
                margin-left: 20px;   
                img {
                    border-radius: 50%;
                    border:2px solid rgb(177, 134, 0);
                    width: 80px;
                    height: 80px;
                }
            }
            .right{
                margin-left: 40px;
                .rule{
                    li{
                    color: #7f7f7f;
                    margin-top: 10px;
                    }
                    li:nth-child(3){
                        line-height: 20px;
                    }
                }
                .make-rule{
                    margin-top: 20px;
                    li{
                        color: #7f7f7f;
                        margin-top: 10px;
                    }
                }  
            }
        }
        .department{
            width: 100%;
            height:500px;
            margin-left: 20px;
            display: flex;
            margin-top: 20px;
            .left{
                width: 80px;
                background-color: aquamarine;
                ul{
                    width: 100%;
                    height: 100%;
                    background-color: rgb(248,248,248);
                    display: flex;
                    flex-direction: column;
                    /* align-items: center; */
                    li{
                        flex: 1;
                        color: #7f7f7f;
                        font-size: 14px;
                        text-align: center;
                        line-height: 40px;
                        cursor: pointer;
                    }
                    .active{
                        border-left: 2px solid red;
                        color:red;
                        background-color:white;
                    }
                }
            }
            .right{
                flex:1;
                margin-left:20px;
                height: 100%;
                overflow: auto;
                &::-webkit-scrollbar{
                    display: none;
                }
                .show-department{
                    margin-left: 20px;
                    h1{
                        background-color: rgb(248,248,248);
                        color: rgb(78,78,78);
                        font-weight: 900;
                        border-left: 5px solid rgb(177, 134, 0);
                        padding-left: 10px;
                        margin: 10px 0;
                    }
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        margin: 20px 0;
                        margin-bottom: 40px;
                        li{
                            color: #7f7f7f;
                            width: 33%;
                            line-height: 30px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>