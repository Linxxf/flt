<template>
    <el-row gutter="20">
        <!-- 左侧医院信息 -->
        <el-col :span="20">
            <!-- 展示医院的文字信息等 -->
            <div class="level">
                <div class="hospital-name">医院</div>
                <div class="level-Content">
                    <div class="left">等级:</div>
                    <ul class="hospital-level">
                        <li :class="{active:levelActiveFlag == ''}" @click="changeActive('',areaActiveFlag)">全部</li>
                        <li :class="{active:levelActiveFlag == item.value}" v-for="item in HospitalLevel" :key="item.id"
                            @click="changeActive(item.value,areaActiveFlag)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="area-content">
                    <div class="left">地区:</div>
                    <ul class="hospital-area">
                        <li :class="{active:areaActiveFlag == ''}" @click="changeActive(levelActiveFlag,'')">全部</li>
                        <li :class="{active:areaActiveFlag == item.value}" v-for="item in HospitalArea" :key="item.id"
                            @click="changeActive(levelActiveFlag,item.value)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <!-- 展示医院信息卡片 -->
            <div class="card-wapper">
                <div class="card" v-for="item in hospitalInfo" :key="item.id" @click="changeRouter(item.hoscode)">
                    <el-card class="box-card" shadow="hover">
                        <div class="box-info">
                            <div class="left">
                                <div class="hospital-name">
                                    {{item.hosname}}
                                </div>
                                <div class="tip">
                                    <div class="level">
                                        <span><svg t="1690861209364" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" li-id="14927" width="32" height="24">
                                                <path
                                                    d="M505.088 513.1264m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                                                    fill="#FFBC42" li-id="14928"></path>
                                                <path
                                                    d="M356.6592 575.0784c0-54.5792 0.3584-109.1584-0.2048-163.6864-0.1536-15.872 5.5296-24.2176 20.992-29.5424 58.88-20.2752 93.7472-63.1296 110.848-121.9072 5.9392-20.4288 11.4176-41.216 19.7632-60.672 13.4656-31.5904 38.2464-42.7008 72.6528-35.328 26.5216 5.6832 43.3152 28.3648 43.5712 60.16 0.3584 40.4992 0.0512 80.9984 0.1536 121.4976 0.0512 22.2208 3.9424 26.7264 26.5728 26.9824 45.568 0.512 91.1872 1.536 136.704-0.256 40.5504-1.5872 69.9392 24.832 59.7504 69.9904-12.2368 54.0672-27.648 107.4688-42.7008 160.8704-9.2672 32.9216-20.1728 65.4336-30.8736 97.9456-14.1312 43.008-40.448 62.0544-84.8896 62.0544H390.2976c-32.1024 0-33.6384-1.536-33.6384-32.8704v-155.2384zM307.8656 573.9008c0 52.8896 0.1024 105.7792-0.0512 158.6688-0.1024 26.0096-4.9152 30.6176-30.3616 30.6688-7.3216 0-14.6432 0.0512-21.9648 0-29.8496-0.1536-44.032-14.08-44.2368-44.6976-0.3072-55.1424-0.1024-110.2848-0.1024-165.4272 0-40.4992-0.1536-81.0496 0.0512-121.5488 0.2048-32.2048 15.7696-47.616 47.5136-47.7184 49.1008-0.2048 49.152-0.2048 49.152 48.2304 0.0512 47.2576 0.0512 94.5152 0 141.824z"
                                                    fill="#FFFFFF" li-id="14929"></path>
                                            </svg></span>
                                        {{item.param.hostypeString}}
                                    </div>
                                    <div class="time">
                                        <span><svg t="1690861101119" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" li-id="7445" width="32" height="32">
                                                <path
                                                    d="M512 570.311111m-250.311111 0a250.311111 250.311111 0 1 0 500.622222 0 250.311111 250.311111 0 1 0-500.622222 0Z"
                                                    fill="#FBB040" li-id="7446"></path>
                                                <path
                                                    d="M512 834.844444c-145.066667 0-264.533333-118.044444-264.533333-264.533333 0-145.066667 118.044444-264.533333 264.533333-264.533333s264.533333 118.044444 264.533333 264.533333c0 145.066667-119.466667 264.533333-264.533333 264.533333z m0-500.622222c-129.422222 0-236.088889 105.244444-236.088889 236.088889S382.577778 806.4 512 806.4s236.088889-105.244444 236.088889-236.088889S641.422222 334.222222 512 334.222222z"
                                                    fill="#808285" li-id="7447"></path>
                                                <path
                                                    d="M512 777.955556c-113.777778 0-207.644444-92.444444-207.644444-207.644445 0-113.777778 92.444444-207.644444 207.644444-207.644444S719.644444 455.111111 719.644444 570.311111c0 113.777778-93.866667 207.644444-207.644444 207.644445z m0-386.844445c-98.133333 0-179.2 79.644444-179.2 179.2C332.8 668.444444 412.444444 749.511111 512 749.511111S691.2 668.444444 691.2 570.311111c0-98.133333-81.066667-179.2-179.2-179.2z"
                                                    fill="#808285" li-id="7448"></path>
                                                <path
                                                    d="M512 584.533333c-8.533333 0-14.222222-5.688889-14.222222-14.222222v-122.311111c0-8.533333 5.688889-14.222222 14.222222-14.222222s14.222222 5.688889 14.222222 14.222222v122.311111c0 7.111111-5.688889 14.222222-14.222222 14.222222z"
                                                    fill="#808285" li-id="7449"></path>
                                                <path
                                                    d="M600.177778 672.711111c-4.266667 0-7.111111-1.422222-9.955556-4.266667l-88.177778-88.177777c-5.688889-5.688889-5.688889-14.222222 0-19.911111s14.222222-5.688889 19.911112 0l88.177777 88.177777c5.688889 5.688889 5.688889 14.222222 0 19.911111-2.844444 2.844444-7.111111 4.266667-9.955555 4.266667z"
                                                    fill="#808285" li-id="7450"></path>
                                                <path
                                                    d="M318.577778 864.711111c-4.266667 0-7.111111-1.422222-9.955556-4.266667-5.688889-5.688889-5.688889-14.222222 0-19.911111l41.244445-41.244444c5.688889-5.688889 14.222222-5.688889 19.911111 0s5.688889 14.222222 0 19.911111l-41.244445 41.244444c-1.422222 2.844444-5.688889 4.266667-9.955555 4.266667zM705.422222 864.711111c-4.266667 0-7.111111-1.422222-9.955555-4.266667L654.222222 819.2c-5.688889-5.688889-5.688889-14.222222 0-19.911111s14.222222-5.688889 19.911111 0l41.244445 41.244444c5.688889 5.688889 5.688889 14.222222 0 19.911111-2.844444 2.844444-7.111111 4.266667-9.955556 4.266667z"
                                                    fill="#808285" li-id="7451"></path>
                                                <path
                                                    d="M392.533333 270.222222c-1.422222 0-4.266667 0-5.688889-1.422222-7.111111-2.844444-9.955556-11.377778-7.111111-18.488889 22.755556-55.466667 76.8-91.022222 136.533334-91.022222 59.733333 0 112.355556 35.555556 136.533333 89.6 2.844444 7.111111 0 15.644444-7.111111 18.488889-7.111111 2.844444-15.644444 0-18.488889-7.111111-18.488889-44.088889-62.577778-72.533333-109.511111-72.533334-48.355556 0-91.022222 28.444444-109.511111 72.533334-5.688889 5.688889-11.377778 9.955556-15.644445 9.955555z"
                                                    fill="#808285" li-id="7452"></path>
                                                <path
                                                    d="M375.466667 324.266667c12.8-8.533333 12.8-28.444444 0-36.977778-27.022222-18.488889-62.577778-18.488889-91.022223 0S243.2 338.488889 250.311111 369.777778c2.844444 15.644444 21.333333 22.755556 34.133333 14.222222l91.022223-59.733333z"
                                                    fill="#FBB040" li-id="7453"></path>
                                                <path
                                                    d="M271.644444 402.488889c-4.266667 0-9.955556-1.422222-14.222222-2.844445-11.377778-4.266667-19.911111-14.222222-21.333333-27.022222-7.111111-38.4 8.533333-76.8 41.244444-98.133333s73.955556-21.333333 106.666667 0c9.955556 7.111111 15.644444 18.488889 15.644444 31.288889 0 12.8-5.688889 24.177778-17.066666 29.866666l-91.022222 61.155556c-5.688889 4.266667-12.8 5.688889-19.911112 5.688889z m58.311112-115.2c-12.8 0-25.6 4.266667-36.977778 11.377778-22.755556 15.644444-34.133333 42.666667-28.444445 69.688889 1.422222 4.266667 4.266667 5.688889 5.688889 5.688888 1.422222 0 4.266667 1.422222 7.111111-1.422222l91.022223-61.155555c2.844444-1.422222 4.266667-5.688889 4.266666-7.111111 0-1.422222 0-4.266667-4.266666-7.111112-11.377778-7.111111-25.6-9.955556-38.4-9.955555z"
                                                    fill="#808285" li-id="7454"></path>
                                                <path
                                                    d="M648.533333 324.266667c-12.8-8.533333-12.8-28.444444 0-36.977778 27.022222-18.488889 62.577778-18.488889 91.022223 0s41.244444 52.622222 35.555555 83.911111c-2.844444 15.644444-21.333333 22.755556-34.133333 14.222222l-92.444445-61.155555z"
                                                    fill="#FBB040" li-id="7455"></path>
                                                <path
                                                    d="M752.355556 402.488889c-7.111111 0-14.222222-1.422222-19.911112-5.688889L640 335.644444c-9.955556-7.111111-17.066667-18.488889-17.066667-29.866666 0-12.8 5.688889-24.177778 15.644445-31.288889 32.711111-21.333333 73.955556-21.333333 106.666666 0s48.355556 59.733333 41.244445 98.133333c-2.844444 12.8-9.955556 22.755556-21.333333 27.022222-2.844444 1.422222-8.533333 2.844444-12.8 2.844445z m-58.311112-115.2c-12.8 0-27.022222 4.266667-38.4 11.377778-2.844444 2.844444-4.266667 5.688889-4.266666 7.111111 0 1.422222 0 4.266667 4.266666 7.111111l91.022223 61.155555c2.844444 1.422222 5.688889 1.422222 7.111111 1.422223 1.422222 0 4.266667-2.844444 5.688889-5.688889 5.688889-27.022222-5.688889-54.044444-28.444445-69.688889-11.377778-9.955556-24.177778-12.8-36.977778-12.8z"
                                                    fill="#808285" li-id="7456"></path>
                                                <path
                                                    d="M274.488889 280.177778c-4.266667 0-9.955556-2.844444-11.377778-7.111111l-4.266667-7.111111c-4.266667-7.111111-1.422222-15.644444 4.266667-19.911112 7.111111-4.266667 15.644444-1.422222 19.911111 4.266667l4.266667 7.111111c4.266667 7.111111 1.422222 15.644444-4.266667 19.911111-2.844444 2.844444-5.688889 2.844444-8.533333 2.844445z"
                                                    fill="#808285" li-id="7457"></path>
                                                <path
                                                    d="M746.666667 281.6c-2.844444 0-5.688889 0-7.111111-2.844444-7.111111-4.266667-8.533333-12.8-4.266667-19.911112l4.266667-7.111111c4.266667-7.111111 12.8-8.533333 19.911111-4.266666 7.111111 4.266667 8.533333 12.8 4.266666 19.911111l-4.266666 7.111111c-2.844444 4.266667-7.111111 7.111111-12.8 7.111111z"
                                                    fill="#808285" li-id="7458"></path>
                                            </svg></span>
                                        每天{{item.bookingRule.releaseTime}}放号
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <img :src="`data:image/jpeg;base64,${item.logoData}`" alt="">
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
        </el-col>
        <!-- 右侧提示信息 -->
        <el-col :span="4">
            <div class="tip">
                <!-- 常见科室 -->
                <div class="departments">
                    <div class="header">
                        <div class="left">
                            <svg t="1691209616440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" li-id="2355" width="20" height="20">
                                <path
                                    d="M896 938.666667H682.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V640a42.666667 42.666667 0 0 0-42.666667-42.666667H277.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V533.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128v-64H128a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h384a42.666667 42.666667 0 0 1 42.666667 42.666667v213.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-149.333333v64h298.666666v-96a32 32 0 0 1 64 0V448h64v-181.333333a32 32 0 0 1 64 0V448a85.333333 85.333333 0 0 1 85.333334 85.333333v362.666667a42.666667 42.666667 0 0 1-42.666667 42.666667zM490.666667 341.333333a21.333333 21.333333 0 0 0 21.333333-21.333333V149.333333a21.333333 21.333333 0 0 0-21.333333-21.333333H149.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v170.666667a21.333333 21.333333 0 0 0 21.333333 21.333333h341.333334zM170.666667 192a21.333333 21.333333 0 0 1 21.333333-21.333333h256a21.333333 21.333333 0 0 1 21.333333 21.333333v85.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H192a21.333333 21.333333 0 0 1-21.333333-21.333334V192z"
                                    fill="#FCBD3F" li-id="2356"></path>
                            </svg>
                            <span>常见科室</span>
                        </div>
                        <div class="right"><span>全部</span>
                            <svg t="1691209795355" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" li-id="4346" width="16" height="16">
                                <path
                                    d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                                    fill="#FCBD3F" li-id="4347"></path>
                            </svg>
                        </div>
                    </div>
                    <ul class="body">
                        <li>神经内科</li>
                        <li>消化内科</li>
                        <li>呼吸内科</li>
                        <li>内科</li>
                        <li>神经外科</li>
                        <li>妇科</li>
                        <li>产科</li>
                        <li>儿科</li>
                    </ul>
                </div>
                <!-- 平台公告 -->
                <div class="public-notice">
                    <div class="header">
                        <div class="left">
                            <svg t="1691229092831" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5597" width="20" height="20"><path d="M844.544 908.8H191.5392c-61.696 0-111.7696-50.0224-111.7696-111.7696v-107.2128h876.4928v107.2128c0 61.7472-50.0224 111.7696-111.7184 111.7696z" fill="#ffa115" p-id="5598"></path><path d="M853.8624 268.4416h-87.2448l-163.1232-145.1008c-48.6912-43.3152-122.2656-43.4688-171.1616-0.3584L267.4176 268.4416H182.1696c-73.4208 0-133.12 59.6992-133.12 133.12v404.8384c0 73.4208 59.6992 133.12 133.12 133.12h671.6928c73.4208 0 133.12-59.6992 133.12-133.12V401.5616c0-73.4208-59.6992-133.12-133.12-133.12zM472.9856 169.0624c25.6-22.5792 64.1536-22.4768 89.7024 0.2048l111.5136 99.1744h-313.856l112.64-99.3792z m452.5568 637.3376c0 39.5264-32.1536 71.68-71.68 71.68H182.1696c-39.5264 0-71.68-32.1536-71.68-71.68V401.5616c0-39.5264 32.1536-71.68 71.68-71.68h671.6928c39.5264 0 71.68 32.1536 71.68 71.68v404.8384z" fill="#474A54" p-id="5599"></path><path d="M756.1216 479.744H271.7184c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h484.4544c16.9472 0 30.72-13.7728 30.72-30.72s-13.7728-30.72-30.7712-30.72zM611.4304 659.1488H271.7184c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h339.712c16.9472 0 30.72-13.7728 30.72-30.72s-13.7728-30.72-30.72-30.72z" fill="#474A54" p-id="5600"></path></svg>
                            <span>平台公告</span>
                        </div>
                        <div class="right">
                            <span>全部</span>
                            <svg t="1691209795355" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" li-id="4346" width="16" height="16">
                                <path
                                    d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                                    fill="#FCBD3F" li-id="4347"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="body">
                        <li>关于延长北京大学国际医院放假通知</li>
                        <li>北京中药大学东方医院部分科室医生门诊</li>
                        <li>武警总医院号源暂停更新通知</li>
                    </div>
                </div>
                <!-- 停诊公告 -->
                <div class="stop-notice">
                    <div class="header">
                        <div class="left">
                            <svg t="1691230243357" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5994" width="20" height="20"><path d="M342 391.1h24.7v180.4H342z" fill="#FCBD3F" p-id="5995"></path><path d="M404.6 711.5c-0.4 3.7-0.6 7.5-0.6 11.2v70c0 59.7 48.4 108 108 108 59.7 0 108-48.4 108-108v-70c0-3.8-0.2-7.5-0.6-11.2H404.6z m0 0" fill="#FCBD3F" p-id="5996"></path><path d="M512 923.9c-72.3 0-131.1-58.8-131.1-131.1v-70c0-4.5 0.2-9.1 0.7-13.6 1.2-11.8 11.1-20.7 23-20.7h214.9c11.8 0 21.8 8.9 23 20.7 0.5 4.5 0.7 9.1 0.7 13.6v70c-0.1 72.3-58.9 131.1-131.2 131.1z m-84.9-189.3v58.1c0 46.8 38.1 84.9 84.9 84.9 46.8 0 84.9-38.1 84.9-84.9v-58.1H427.1z m148-477.2c-0.8 0-1.6 0-2.4-0.1-12.7-1.3-21.9-12.7-20.6-25.4 0.1-1.4 0.2-2.8 0.2-4.2v-41.1c0-22.2-18.1-40.3-40.3-40.3-22.2 0-40.3 18.1-40.3 40.3v41.1c0 1.4 0.1 2.8 0.2 4.2 1.3 12.7-7.9 24.1-20.6 25.4-12.7 1.3-24.1-7.9-25.4-20.6-0.3-3-0.5-6-0.5-9v-41.1c0-47.7 38.8-86.5 86.5-86.5s86.5 38.8 86.5 86.5v41.1c0 3-0.2 6-0.5 9-1.1 11.9-11.1 20.7-22.8 20.7z m0 0" fill="#FCBD3F" p-id="5997"></path><path d="M756.7 616.9c-12.8 0-23.1-10.3-23.1-23.1V481.3c0-122.2-99.4-221.6-221.6-221.6-122.2 0-221.6 99.4-221.6 221.6v112.5c0 12.8-10.3 23.1-23.1 23.1s-23.1-10.3-23.1-23.1V481.3c0-147.7 120.2-267.8 267.8-267.8 147.7 0 267.9 120.2 267.9 267.8v112.5c0 12.8-10.4 23.1-23.2 23.1z m0 0" fill="#FCBD3F" p-id="5998"></path><path d="M168.3 677h687.5v113.6H168.3z" fill="#FCBD3F" p-id="5999"></path><path d="M855.7 813.7H168.3c-12.8 0-23.1-10.3-23.1-23.1V677c0-12.8 10.3-23.1 23.1-23.1h687.5c12.8 0 23.1 10.4 23.1 23.1v113.6c0 12.8-10.4 23.1-23.2 23.1z m-664.3-46.2h641.3v-67.4H191.4v67.4z m0 0" fill="#FCBD3F" p-id="6000"></path></svg>
                            <span>停诊公告</span>
                        </div>
                        <div class="right">
                            <span>全部</span>
                            <svg t="1691209795355" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" li-id="4346" width="16" height="16">
                                <path
                                    d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                                    fill="#FCBD3F" li-id="4347"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="body">
                        <li>中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告</li>
                        <li>首都医科大学附属北京潞河医院老年医学科门诊停诊公告</li>
                        <li>中德友好医院中医西医结合心内科门诊停诊公告</li>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-empty description="没有相关医院信息" v-show="hospitalInfo.length == 0" :span="20" />
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    //导入组合式API函数
    import { reqHospitalLOA } from '@/api/home/home.ts'
    //导入路由
    import { useRouter } from 'vue-router'

    
    //接收父组件的props(医院数据)
    let props = defineProps(['hospitalInfo']);

    //接收医院等级数组
    let HospitalLevel = ref([])
    //接受医院地区数组
    let HospitalArea = ref([])
    //接收医院等级标签的value值(高亮)
    let levelActiveFlag = ref([])
    //接收医院地区标签的value值(高亮)
    let areaActiveFlag = ref([])
    //注册路由
    let $router = useRouter()

    //注册组件自定义事件发射函数
    let $emit = defineEmits(['sendLevelAndAreaValue'])

    onMounted(() => {
        TakeHospitalLevel()
        // console.log(HospitalLevel);
        TakeHospitalArea()
        // console.log(HospitalArea);
    })
    //获取医院等级数据
    const TakeHospitalLevel = async () => {
        let result = await reqHospitalLOA('HosType');
        if (result.code == 200) {
            HospitalLevel.value = result.data
            // console.log(result);
        }
    }
    //获取医院地区数据
    const TakeHospitalArea = async () => {
        let result = await reqHospitalLOA('Beijin');
        if (result.code == 200) {
            HospitalArea.value = result.data
            // console.log(result);
        }
    }
    //更改医院等级地区高亮 + 把value值传给父组件 
    const changeActive = (levelValue, areaValue) => {
        console.log(levelValue, areaValue);
        levelActiveFlag.value = levelValue
        areaActiveFlag.value = areaValue
        $emit('sendLevelAndAreaValue', levelValue, areaValue)
    }
    //点击卡片触发路由跳转
    const changeRouter = (hoscode) => {
        $router.push({ path: '/detail/register',query:{hoscode:hoscode}})
    }
    
   


</script>

<style scoped lang="scss">
    .level {
        .hospital-name {
            color: #7f7f7f;
            font-weight: bold;
            margin: 10px 0;
        }

        .level-Content {
            color: #7f7f7f;
            display: flex;

            .left {
                margin-right: 11px;
            }

            .hospital-level {
                display: flex;
                flex-wrap: wrap;

                .active {
                    color: rgb(177, 134, 0);
                }

                li {
                    margin-left: 10px;
                    /* margin-bottom: 10px; */
                    cursor: pointer;
                }

                /* li:nth-child(1) {
                    
                } */

                li:not(:nth-child(1)):hover {
                    color: rgb(177, 134, 0);
                }
            }
        }

        .area-content {
            color: #7f7f7f;
            margin: 10px 0;
            display: flex;

            .left {
                /* margin-right: 10px; */
                width: 50px;
            }

            .hospital-area {
                display: flex;
                flex-wrap: wrap;

                .active {
                    color: rgb(177, 134, 0);
                }

                li {
                    margin-left: 10px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    /* width: 70px; */
                }


                li:not(:nth-child(1)):hover {
                    color: rgb(177, 134, 0);

                }
            }
        }
    }

    .card-wapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;

        .card {
            width: 48%;
            margin: 10px 0;

            .box-info {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .right {

                    img {
                        width: 50px;
                        height: 50px;
                    }
                }

                .left {
                    width: 60%;

                    .hospital-name {
                        margin-left: 8px;
                    }

                    .tip {
                        color: #7f7f7f;
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-between;

                        .level,
                        .time {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .card:hover {
            box-shadow: 0 0 10px rgba(177, 134, 0, .5);
        }
    }

    .tip {
        .departments {
            color: #7f7f7f;
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{

                    display: flex;
                    align-items: center;
                    span{
                    margin-left: 6px;
                    cursor: pointer;
                }
                }
                .right{
                    display: flex;
                    cursor: pointer;
                }
            }
            .body{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    cursor: pointer;
                    width: 40%;
                    margin-top: 20px;
                 
                }
                li:nth-child(1),li:nth-child(2){
                    margin-top: 30px;
                }
            }
        }
        .public-notice{
            color: #7f7f7f;
            margin-top: 40px;
            .header{
                display: flex;
                justify-content: space-between;
                .left{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        margin-left: 5px;
                    }
                }
                .right{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
            }
            .body{
                li{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 20px;
                    cursor: pointer;
                }
                li:nth-child(1){
                    margin-top: 30px;
                }
            }
        }
        .stop-notice{
            color: #7f7f7f;
            margin-top: 40px;
            .header{
                display: flex;
                justify-content: space-between;
                
                .left{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        margin-left: 5px;
                    }
                }
                .right{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
            }
            .body{
                li{
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 20px;
                }
                li:nth-child(1){
                    margin-top: 30px;
                }
            }
        }
    }
</style>