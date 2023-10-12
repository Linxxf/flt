<template>
<div>
   <div class="setp-wapper">
        <div class="top">
            <div class="top-name">
                <div class="hosname">{{registerDate.baseMap?.hosname}}</div>
                <div class="line">|</div>
                <div>{{registerDate.baseMap?.bigname}}</div>
            </div>
            <div class="hosdepartment">{{registerDate.baseMap?.depname}}</div>
        </div>
        <!-- 展示日期 -->
        <div class="content">
            <h1 class="time">{{registerDate.baseMap?.workDateString}}</h1>
            <div class="date-wapper">
                <div class="item" :class="{active:active == index}" @click="changeActive(index,item.status,item.workDate)" v-for="(item,index) in registerDate?.bookingScheduleList" >
                    <div class="top">
                        <span>{{item.workDate}}</span><span>{{item.dayOfWeek}}</span>
                    </div>
                    <div class="bottom">
                        <div v-if="item.status == -1">停止挂号</div>
                        <div v-if="item.status == 0">
                            {{item.availableNumber==-1?'约满了':'有号'}}
                        </div>
                        <div v-if="item.status == 1">即将放号</div>
                    </div>
                </div>
            </div>
            <div class="example-pagination-block">
                <el-pagination v-model:page-size="limit" v-model:current-page="pageNo" layout="prev, pager, next" :total="registerDate.total" @current-change="changePage" />
                <!-- registerDate.bookingScheduleList?.total -->
            </div>
        </div>
        <!-- 展示相应医生 -->
        <div class="bottom-wapper">
            <div  class="register-doctor" v-show="showStatus == 0 || showStatus == -1">
                <div class="morning">
                    <div class="m-tip">上午号源</div>
                    <div class="m-content">
                        <!-- 医生信息 -->
                        <div  class="doctor-info" v-for="item in registerData" :key="item.id" v-show="item.workTime == 0">
                            <div class="left">
                                <div class="info-top">
                                    <span>{{item.title}}</span>
                                    <span>{{item.docname}}</span>
                                </div>
                                <div class="info-bottom">
                                    <span>{{item.skill}}</span>
                                </div>
                            </div>
                            <div class="right" v-show="showStatus == 0">
                                <div class="money">¥{{item.amount}}</div>
                                <el-button class="button" @click="toRegisterStep2(item.id)">剩余{{item.availableNumber}}</el-button>
                            </div>  
                            <div class="right" v-show="showStatus == -1">
                                <div class="money">¥{{item.amount}}</div>
                                <el-button class="button" @click="toRegisterStep2(item.id)" style="background-color: #7f7f7f;" :disabled="true">剩余{{item.availableNumber}}</el-button>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="afternoon">
                    <div class="a-tip">下午号源</div>
                    <div class="a-content">
                        <div class="doctor-info" v-for="item in registerData" :key="item.id" v-show="item.workTime == 1">
                            <div class="left">
                                <div class="info-top">
                                    <span>{{item.title}}</span>
                                    <span>{{item.docname}}</span>
                                </div>
                                <div class="info-bottom">
                                    <span>{{item.skill}}</span>
                                </div>
                            </div>
                            <div class="right" v-show="showStatus == 0">
                                <div class="money">¥ {{item.amount}}</div>
                                <el-button class="button" @click="toRegisterStep2(item.id)">剩余{{item.availableNumber}}</el-button>
                            </div>
                            <div class="right" v-show="showStatus == -1">
                                <div class="money">¥ {{item.amount}}</div>
                                <el-button class="button" @click="toRegisterStep2(item.id)" style="background-color: #7f7f7f;" :disabled="true">剩余{{item.availableNumber}}</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="will" v-show="showStatus == 1">
                <span>2023年6月3日08:30</span>
                <span>放号</span>
            </div>
        </div>
   </div>
</div>
</template>

<script setup lang="ts">
    import {ref,onMounted,reactive} from 'vue'
    import {useRoute,useRouter} from 'vue-router'
    //导入科室预约(时间)信息模块  ||  科室预约排班数据
    import {reqHosRegisterDate , reqHosRegisterData} from '@/api/detail/detail.ts'
    let $route = useRoute()
    let $router = useRouter()

    let pageNo = ref(1)
    let limit = ref(6)
    // 预约时间数据
    let registerDate = ref({})
    //预约排班数据
    let registerData = ref({})
    //点击预约时间高亮
    let active = ref(0)
    //-1 0 代表停止挂号,有号   1即将放号
    let showStatus = ref(-1)
    //存储第一天预约的数据
    let firstDayTime = ref({})

    onMounted(()=>{
        getRegisterDate()         
    })

    //获取预约日期数据
    const getRegisterDate = async () => {
        let result = await reqHosRegisterDate(pageNo.value,limit.value,$route.query.hoscode,$route.query.depcode)
        // console.log( $route.query.hoscode, $route.query.depcode);
        // console.log(result);
        if(result.code == 200){
            registerDate.value = result.data
            firstDayTime.value = result.data.bookingScheduleList[0].workDate
            getRegisterData()
        }
    }
    //获取排班数据
    const getRegisterData = async () => {
        let hoscode = $route.query.hoscode
        let depcode = $route.query.depcode
        let workDate = firstDayTime.value
        let result = await reqHosRegisterData(hoscode,depcode,workDate)
        if(result.code == 200){
            registerData.value = result.data
        }
    }
    //点击改变高亮 + 获取排班数据
    const changeActive =(index,status,workDate) => {
        active.value = index
        showStatus.value = status
        firstDayTime.value = workDate
        getRegisterData()
    }
    //点击改变页面
    const changePage = async () => {
        getRegisterDate()
    }
    //点击进行路由跳转
    const toRegisterStep2 = (doctorId) => {
        console.log(111);
        $router.push({path:'/detail/register_step2',query:{doctorId:doctorId,hoscode:$route.query.hoscode}})
    }
</script>

<style scoped lang="scss">
.setp-wapper{
    margin-left: 20px;
    margin-top: 30px;
    .top{
        .top-name{
            display: flex;
            color: #666666;
            margin-bottom: 20px;
            .line{
                margin: 0 10px;
                color: rgba(102, 102, 102,.2);
            }
        }
        .hosdepartment{
            color: #333;
            font-size: 18px;
            font-weight: 700;
        }
        
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        .time{
            margin-top: 40px;
        }
        .date-wapper{
            width: 100%;
            display: flex;
            margin-top: 20px;
            margin-bottom: 30px;
            .item{
                flex-grow: 1;
                border: 2px solid rgb(177, 134, 0);
                border-radius:5%;
                margin: 0 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                .top{
                    margin: 0;
                    background-color: rgba(177, 134, 0,.5);
                    flex-grow: 1;
                    width: 100%;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    display: flex;
                    justify-content:space-around;
                    span{
                        color: rgb(177, 134, 0);
                    }
                }
                .bottom{
                    width:100%;
                    height:60px;
                    text-align: center;
                    line-height: 60px;
                    div{
                        color: #333;
                        /* font-weight: 500; */
                    }
                }
            }  
            .active{
                .top{
                    background-color: rgb(177, 134, 0);
                    span{
                        color: white;
                        /* font-weight: 700; */
                    }   
                }
                .bottom{
                    font-weight: 700;
                }
            }    
        }
    }
    .bottom-wapper{
        .register-doctor{
        margin-top: 40px;
            .morning{
                .m-tip{
                    border-left:4px solid rgb(177, 134, 0);
                    padding-left: 5px;
                    color: #7f7f7f;
                }
                .m-content{
                    .doctor-info{
                        display: flex;
                        justify-content: space-between;
                        margin: 50px 0;
                        .left{
                            .info-top{
                                span{
                                font-weight:700;
                            &:nth-child(1){
                                border-right: 2px solid rgba(102, 102, 102,.2);
                                padding-right:10px;
                                margin-right:10px;
                            }
                            }
                            } 
                            .info-bottom{
                                margin-top:30px;
                                span{
                                    color:#7f7f7f;
                                    font-weight: 700;
                                }
                            }          
                        }
                        .right{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .money{
                                font-weight: 700;
                                color: rgb(177, 134, 0);
                                margin-right: 30px;
                            }
                            .button{
                                width: 140px;
                                height:44px;
                                background-color: rgb(177, 134, 0);
                                font-weight: 700;
                                color: white;
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
            .afternoon{
                .a-tip{
                    border-left:4px solid rgb(177, 134, 0);
                    padding-left: 5px;
                    color: #7f7f7f;
                }
                .a-content{
                    .doctor-info{
                        display: flex;
                        justify-content: space-between;
                        margin: 50px 0;
                        .left{
                            .info-top{
                                span{
                                font-weight:700;
                            &:nth-child(1){
                                border-right: 2px solid rgba(102, 102, 102,.2);
                                padding-right:10px;
                                margin-right:10px;
                            }
                            }
                            } 
                            .info-bottom{
                                margin-top:30px;
                                span{
                                    color:#7f7f7f;
                                    font-weight: 700;
                                }
                            }          
                        }
                        .right{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .money{
                                font-weight: 700;
                                color: rgb(177, 134, 0);
                                margin-right: 30px;
                            }
                            .button{
                                width: 140px;
                                height:44px;
                                background-color: rgb(177, 134, 0);
                                font-weight: 700;
                                color: white;
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
        .will{
            width: 400px;
            margin: 60px auto;
            text-align: center;
            span{
                font-size: 26px;
                font-weight: 700;
                color: rgb(177, 134, 0);
            }
        }
    }
}
</style>