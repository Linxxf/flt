<template>
    <div class="login-wapper">
        <!-- v-model 控制对话框的显示与隐藏 -->
        <el-dialog v-model="userStore.visiable" title="用户登录" @close="close">
                <!-- 对话框内容部分 -->
                <el-row>
                    <!-- 左侧结构 -->
                    <el-col :span="12">
                        <div class="login" v-show="scene == 0">
                            <el-form :model="userData" :rules="rules" ref="form">
                                <el-form-item prop="phone">
                                    <el-input style="margin-top: 20px;" placeholder="请输入手机号码"
                                        :prefix-icon="User" v-model="userData.phone" ></el-input>
                                </el-form-item>
                                <el-form-item prop="code">
                                    <el-input  placeholder="请输入手机验证码"
                                        :prefix-icon="Lock" v-model="userData.code"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button :disabled="!isPhoneC" @click="getUserCode">
                                        <span v-show="flag == 0">获取验证码</span>
                                        <span v-show="flag == 1">获取验证码({{dis}})</span>
                                    </el-button>
                                </el-form-item>
                                <div class="bottom">
                                    <el-button
                                        style="width: 90%; background-color: rgb(177, 134, 0); color: white; margin-top: 20px;" :disabled="(!isPhoneC&&(userData.code.length==6&&phoneCode == userData.code))?false:true" @click="login()">用户登录</el-button>
                                    <svg t="1691655896361" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4455" width="36" height="36"  @click="changeScene">
                                        <path
                                            d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                            fill="#B18600" p-id="4456"></path>
                                        <path
                                            d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                            fill="#B18600" p-id="4457"></path>
                                    </svg>
                                    <p  @click="changeScene">微信码登录</p>
                                </div>
                            </el-form>
                        </div>
                        <div class="wechat" v-show="scene == 1">
                            我是微信扫码登录
                        </div>
                    </el-col>
                    <!-- 右侧结构  P 24集 14分钟 -->
                    <el-col :span="12">
                        <div class="rightContent">
                            <img src="../../assets/images/logo.jpg" alt="">
                            <span>枫林堂 预约挂号统一平台</span>
                            <span>快速挂号 安全放心</span>
                            <!-- <div class="top">
                            <img src="" alt="">
                        </div> -->
                        </div>
                    </el-col>
                </el-row>
                <template #footer>
                    <el-button style="background-color: rgb(177, 134, 0); color: white;" @click="close">关闭窗口</el-button>
                </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
    import {ref,reactive,computed,watch} from 'vue'
    import { User, Lock } from '@element-plus/icons-vue'
    import {ElMessage,ElForm} from 'element-plus'
    //获取user仓库的数据(visiable)可控制login组件的显示与隐藏
    import useUserStore from '@/store/moudules/user.ts'
    let userStore = useUserStore()
    //引入组合式API
    import {reqUserCode} from '@/api/user/user.ts'
    // let form = ref()
    //收集表单数据 ----> 手机号码
    const userData = reactive({
        phone:'',
        code:''
    })
    let phoneCode = '111'
    //验证收集的手机号码是否符合格式
    let isPhone = computed(()=>{
        //手机号码正则表达式
        const reg = /^1[3456789]\d{9}$/
        return reg.test(userData.phone)
    })
    //可更改的isPhone
    let isPhoneC = ref<Boolean>(isPhone.value)
    // 0代表账号密码登录  1代表微信扫码登录
    let scene = ref<number>(0); 
    // 0代表未获取验证码按钮状态 1代表获取验证码后按钮状态
    let flag = ref<number>(0)
    // 按钮禁用倒计时
    let dis = ref<number>(60)
       
    watch(isPhone,()=>{
       isPhoneC.value = isPhone.value
    },{immediate:true})

    //点击微信扫码登录或微信小图标切换为微信扫码登录函数
    const changeScene = () => {
        scene.value = 1
        // console.log(scene.value);
    }
    //获取验证码
    const getUserCode = async () => {
        let result = await reqUserCode(userData.phone)
        // console.log(result);
        if(result.code == 200){
            userData.code = result.data;
            phoneCode = result.data
            flag.value = 1
            isPhoneC.value = false
            showButton()
        }else{
            alert('获取验证码失败')
        }
    }
    //获取验证码后进行倒计时且禁用按钮
    const showButton = () => {
        const timer = setInterval(()=>{
            dis.value--
            if(dis.value == 0 ){
            flag.value = 0
            isPhoneC.value = true
            dis.value = 60
            clearInterval(timer)
        }
        },1000)
    }
    //获取token值(点击登录后登录成功,存储token,关闭页面)
    const login = async () => {
        try{
            //用户登录成功
            await userStore.getToken(userData)
            userStore.visiable = false
            ElMessage.success('登录成功')
        }catch(error){
            ElMessage({
                type:'error',
                message:(error).message
            })
        }
    }
    //自定义表单校验规则
    const validatorPhone = (rule,value,callBack)=>{
        if(value == '') return
        //rule为表单校验规则对象 value为文本内容 
        //callback为放行回调函数
        const reg = /^1[3456789]\d{9}$/
        if(reg.test(value)){
            callBack()
        }else{
            callBack(new Error('请输入合法的手机号码'))
        }
    }
    const validatorCode = (rule,value,callBack)=>{
        if(value == '') return
        //rule为表单校验规则对象 value为文本内容 
        //callback为放行回调函数
        if(/^\d{6}$/.test(value)){
            callBack()
        }else{
            callBack(new Error('请输入正确的验证码'))
        }
    }
    //表单校验
    const rules = {
        //#region
        //手机号码校验
        //required表示当前字段务必进行校验
        //message代表的校验错误提示信息
        //trigger代表表单校验触发的时机  值:  change:文本发生变化进行校验
        //                                  blur:失去焦点的时候触发校验
        //min代表最小位数    max代表最大位数
        // phone:[
        //     {required:true,message:'请输入合法的11位手机号码',trigger:'change',min:11}
        // ], 
        //#endregion

        phone:[{trigger:'change',validator:validatorPhone}],
        code:[{trigger:'change',validator:validatorCode}],
    }
    //关闭窗口
    const close = () => {
        //关闭时清空收集的数据
        userData.phone = ''
        userData.code = ''
        userStore.visiable = false
        //清除上一次校验的结果
        // form.value.resetFields()
    }
    
</script>
<script lang="ts">
    export default {
        name:'Login'
    }
</script>
<style scoped lang="scss">
    .login-wapper {
        ::v-deep(.el-dialog__body) {
            border-top: 2px solid rgb(177, 134, 0);
            border-bottom: 2px solid rgb(177, 134, 0);

            .login {
                padding: 20px;
                border: 1px solid #ccc;

                .bottom {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p { 
                        cursor: pointer;
                    }

                    svg{
                        margin-top: 20px;
                        margin-bottom: 10px;
                    }
                }
            }
        }

        .rightContent {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 80px;
                height: 80px;
                margin-top: 30px;
            }

            span {
                font-size: 20px;
                color: rgb(177, 134, 0);
                font-weight: 900;
                margin-top: 30px;
            }
        }
    }
</style>