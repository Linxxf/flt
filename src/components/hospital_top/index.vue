<template>
    <div class="top-wapper">
        <div class="content">
            <!-- 左侧logo -->
            <div class="left-logo" @click="goHome">
                <img src="../../assets/images/logo.jpg" alt="">
                <p>枫林堂 预约挂号统一平台</p>
            </div>
            <div class="right-list">
                <p class="help">帮助中心</p>
                <p class="login" @click="login" v-if="!userStore.userInfo?.name">登录/注册</p>
                <!-- dropdown 下拉菜单 -->
                <template v-else>
                    <el-dropdown>
                        <span class="el-dropdown-link" > 
                            {{userStore.userInfo?.name}}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="toUser">实名认证</el-dropdown-item>
                                <el-dropdown-item @click="toOrder">挂号订单</el-dropdown-item>
                                <el-dropdown-item @click="toUserMange">就诊人管理</el-dropdown-item>
                                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    //导入用户信息仓库
    import useUserStore from '@/store/moudules/user.ts'
    let userStore = useUserStore()
    // export default {
    //     name:"HospitalTop"
    // }
    //引入路由器
    import { useRouter,useRoute } from 'vue-router'
    const $router = useRouter()
    const $route = useRoute()

    import { ArrowDown } from '@element-plus/icons-vue'    
    const goHome = () => {
        $router.push({ path: '/home' })
    }

    //定义点击登录响应函数
    const login = () => {
        userStore.visiable = true
    }
    //退出登录响应函数
    const logout = () => {
        $router.push({path:'/home'})
        userStore.logout()
    }
    //点击跳转到用户管理路由
    const toUser = () => {
        $router.push({path:'/user/confirm'})
    }
    //点击转跳到订单管理路由
    const toOrder = () => {
        $router.push({path:'/user/bookOrder'})
    }
    //点击转跳到就诊人管理路由
    const toUserMange = () => {
        $router.push({path:'/user/userMange'})
    }
</script>
<script lang="ts">
    export default {
        name: 'HospitalTop'
    }
</script>
<style scoped lang="scss">
    .top-wapper {
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        position: fixed;
        z-index:999;
        width: 100%;
        height: 70px;
        background-color: #fff;

        /* display: flex;
        justify-content: center; */
        .content {
            width: 1200px;
            height: 70px;
            background-color: #fff;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .left-logo {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }

                p {
                    font-size: 20px;
                    color: rgb(177, 134, 0);
                }
            }

            .right-list {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 15px;

                .el-dropdown-link{
                    cursor: pointer;
                    font-size: 15px;
                    &:hover{
                        color: rgb(177, 134, 0);
                    }
                }
                p {
                    cursor: pointer;
                }

                .help {
                    margin-right: 10px;
                }

                .help:hover,
                .login:hover {
                    color: rgb(177, 134, 0);
                }
            }
        }
    }
</style>