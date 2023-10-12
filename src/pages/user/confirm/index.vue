<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>实名信息</span>
                </div>
            </template>
            <!-- 用户实名信息 -->
            <div class="content">
                <!-- 顶部提示 -->
                <div class="top">
                    <svg t="1694156541087" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4020" width="20" height="20">
                        <path
                            d="M512 170.666667C324.266667 170.666667 170.666667 324.266667 170.666667 512s153.6 341.333333 341.333333 341.333333 341.333333-153.6 341.333333-341.333333S699.733333 170.666667 512 170.666667z m0 640c-164.266667 0-298.666667-134.4-298.666667-298.666667s134.4-298.666667 298.666667-298.666667 298.666667 134.4 298.666667 298.666667-134.4 298.666667-298.666667 298.666667z"
                            fill="#B18600" p-id="4021"></path>
                        <path
                            d="M512 448c-12.8 0-21.333333 8.533333-21.333333 21.333333v213.333334c0 10.666667 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333333-21.333333V469.333333c0-10.666667-8.533333-21.333333-21.333333-21.333333zM512 320c-12.8 0-21.333333 10.666667-21.333333 21.333333v42.666667c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-10.666667 21.333333-21.333333v-42.666667c0-12.8-8.533333-21.333333-21.333333-21.333333z"
                            fill="#B18600" p-id="4022"></path>
                    </svg>
                    <p>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。</p>
                </div>
                <!-- 内容||操作 -->
                <div class="body">
                    <!-- 认证成功---展示已实名信息 -->
                    <el-descriptions v-if="userData.authStatus == 1" class="margin-top" :column="1" :size="size" border>
                        <el-descriptions-item label-align="center" width="30px">
                            <template #label>
                                <div class="cell-item">
                                    用户姓名
                                </div>
                            </template>
                            {{userData.name}}
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" width="30px">
                            <template #label>
                                <div class="cell-item">
                                    证件类型
                                </div>
                            </template>
                            {{userData.certificatesType == 10 ? '身份证' : '显示错误' || userData.certificatesType == 20 ? '户口本' : '显示错误'}}
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" width="30px">
                            <template #label>
                                <div class="cell-item">
                                    证件号码
                                </div>
                            </template>
                            {{userData.certificatesNo}}
                        </el-descriptions-item>
                    </el-descriptions>
                    <!-- 还未认证---展示收集认证数据模块 -->
                    <el-form style="width:40%;margin: 0 auto;" v-if="userData.authStatus == 0" :model="userConfirmData" :rules="rule" ref="form">
                        <el-form-item label="用户姓名" prop="name">
                            <el-input placeholder="请输入用户姓名" v-model="userConfirmData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型" prop="certificatesType">
                            <el-select style="width: 100%;" placeholder="请选择证件类型" v-model="userConfirmData.certificatesType">
                                <el-option :value="item.value" :label="item.name" v-for="(item,index) in certificateType" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码" prop="certificatesNo">
                            <el-input placeholder="请输入证件号码" v-model="userConfirmData.certificatesNo"></el-input>
                        </el-form-item>
                        <el-form-item label="上传证件" prop="certificatesUrl">
                            <!-- action:  upload组件向服务器提交图片路径
                                 limit:  照片墙约束图片个数
                                 on-exceed: 超出约束数量的钩子
                                 on-success: 图片上传成功的钩子
                                 on-remove: 移除图片的钩子
                                 on-preview: 预览图片时的钩子
                                 clearFiles: 清空已上传的文件列表,方法在组件原型链上
                            -->
                            <el-upload list-type="picture-card" ref="upload" :limit="1" :on-remove="handlerRemove" :on-preview="handlerPreview" :on-success="handlerSuccess" :on-exceed="handlerOver" action="/api/oss/file/fileUpload?fileHost=userAuah">
                                <img style="width: 100%;" src="../../../assets/images/auth_example.png"/>
                            </el-upload>
                            <!-- 点击预览的对话框 -->
                            <el-dialog v-model="dialogVisible" style="height: 500px;">
                                <img w-full v-if="userConfirmData.certificatesUrl" style="height:410px; width: 100%;"  :src="userConfirmData.certificatesUrl" alt="Preview Image" />
                              </el-dialog>
                        </el-form-item>
                        <el-form-item style="margin-left:68px">
                            <el-button class="btn" @click="confirmCommit">提交</el-button>
                            <el-button class="btn" @click="reset">重写</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import {reqUserData,userConfirm,reqCertificateType} from '@/api/user/user.ts'
import {onMounted,ref,reactive} from 'vue'
import {ElMessage} from 'element-plus'

//存储用户信息
let userData = ref({})
//存储用户认证信息
let userConfirmData = reactive({
    certificatesNo:'',
    certificatesType:'',
    certificatesUrl:'',
    name:''
})
//存储证件类型
let certificateType = ref([])
//预览对话框的显示与隐藏
let dialogVisible = ref(false)
//获取组件
let upload = ref()
let form = ref()

//获取用户数据
const getUserData = async () => {
    let result = await reqUserData()
    if(result.code == 200){
        userData.value = result.data
    }
}
//获取证件类型
const getCertificateType = async () => {
    let result = await reqCertificateType()
    if(result.code == 200){
        certificateType.value = result.data
    }
}
//用户认证
const confirmCommit = async () => {
    if(!(await form.value.validate())) return
    try{
        await userConfirm(userConfirmData)
        ElMessage.success('认证成功')
        getUserData()
    }catch(error){
        ElMessage.error('认证失败')
    }
    
}
//上传图片超出数量限制的钩子
const handlerOver = () => {
    ElMessage.error('上传图片数量不能超过一张')
}
//上传图片成功钩子
const handlerSuccess = (response, uploadFile, uploadFiles) => {
    //response:上传图片请求服务器返回的数据
    //uploadFile:上传文件对象
    // console.log(response);
    userConfirmData.certificatesUrl = response.data
    //清除校验结果
    form.value.clearValidate('certificatesUrl')
}
//点击预览时的钩子
const handlerPreview = () => {
    dialogVisible.value = true
}
//删除图片的钩子
const handlerRemove = () => {
    userConfirmData.certificatesUrl = ''
}

//重写事件
const reset = () => {
    // 清空数据
    userConfirmData.certificatesNo = ''
    userConfirmData.certificatesType = ''
    userConfirmData.certificatesUrl = ''
    userConfirmData.name = ''
    //清空图片列表
    upload.value.clearFiles()
}


//自定义表单校验规则
//rule为校验规则对象 value为校验文本的值 callback为放行的回调
const validatorName = (rule,value,callBack) => {
    if(value != ''){
        callBack()
    }else{
        callBack(new Error('请输入合法姓名'))
    }
}
const validatorUrl = (rule,value,callBack) => {
    if(value != ''){
        callBack()
    }else{
        callBack(new Error('请上传图片'))
    }
}
const validatorNo = (rule,value,callBack) => {
//    if(value == '') return
   const reg =  /^(^\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
   if(reg.test(value)){
        callBack()
   }else{
        callBack( new Error ('请输入合法的证件号'))
   }
}
//表单校验
const rule = {
    name:[{trigger:'change',validator:validatorName}],
    certificatesNo:[{trigger:'change',validator:validatorNo}],
    certificatesUrl:[{trigger:'change',validator:validatorUrl}]
}
onMounted(()=>{
    getUserData()
    getCertificateType()
})
</script>

<style scoped lang="scss">
    /* 177, 134, 0 */
    .card-header {
        span {
            font-size: 20px;
        }
    }

    .content {
        .top {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;

            p {
                font-size: 12px;
                color: #7f7f7f;
            }

        }
        .body{
            .btn:hover{
                background-color: rgba( 177, 134, 0,.3);
                color:rgb( 177, 134, 0);
                border-color:rgb( 177, 134, 0);
                font-weight: 700;
            }
            
        }
    }
</style>