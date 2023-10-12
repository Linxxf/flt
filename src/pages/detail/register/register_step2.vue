<template>
    <div>
        <div class="container">
            <h1 class="tip">确认挂号信息</h1>
            <!-- 卡片:展示就诊人信息 -->
            <el-card class="box-card">
                <template #header>
                    <!-- 卡片头部 -->
                    <div class="card-header">
                        <span>请选择就诊人</span>
                        <el-button class="button" text :icon="User"
                            style="background-color: rgb(177, 134, 0 );color: white;" @click="addUserBu">添加就诊人</el-button>
                    </div>
                </template>
                <!-- 卡片身体部分展示就诊人信息 -->
                <div class="user" v-if="scene == 0">
                    <div class="visitor" v-for="(item,index) in userInfo" :class="{active:activeFlag == index}"
                        @click="choose(index)">
                        <div class="top">
                            <div class="left">
                                <span class="free">{{item.isInsure == 0 ? '医保' : ''}}</span>
                                <span class="name">{{item.name}}</span>
                            </div>
                            <div class="right">
                                <el-button :icon="Edit" circle
                                    style="background-color:rgb(177, 134, 0 );border: 0;" @click="updateUserBu(item.id)"></el-button>
                            </div>
                        </div>
                        <div class="bottom">
                            <p>证件类型:{{item.param.certificatesTypeString}}</p>
                            <p>证件号码:{{item.certificatesNo}}</p>
                            <p>用户性别:{{item.sex == 1 ? '男' : '女'}}</p>
                            <p>出生日期:{{item.birthdate}}</p>
                            <p>手机号码:{{item.phone}}</p>
                            <p>婚姻状况:{{item.isMarry == 0 ? '未婚' : '已婚'}}</p>
                            <p>当前住址:{{item.param.fullAddress}}</p>
                            <p>详细地址:{{item.address}}</p>
                        </div>
                    </div>
                </div>
                <!-- 展示添加就诊人页面部分 -->
                <div class="form" v-if="scene == 1 || scene == 2" >
                    <el-divider content-position="left">就诊人信息</el-divider>
                    <el-form style="width:46%;margin:20px auto;margin-bottom: 50px;">
                        <el-form-item label="用户姓名">
                            <el-input placeholder="请输入用户姓名" v-model="addUserInfo.name"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型">
                            <el-select placeholder="请选择证件类型" v-model="addUserInfo.certificatesType">
                                <el-option v-for="item in certificateType" :label="item.name" :key="item.id"
                                    :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码">
                            <el-input placeholder="请输入证件号码" v-model="addUserInfo.certificatesNo"></el-input>
                        </el-form-item>
                        <el-form-item label="用户性别">
                            <el-radio-group v-model="addUserInfo.sex">
                                <el-radio :label=1>男</el-radio>
                                <el-radio :label=0>女</el-radio>
                                <!-- <el-radio :label="2">沃尔玛购物袋</el-radio> -->
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <div class="block">
                                <el-date-picker v-model="addUserInfo.birthdate" type="date" format="YYYY/MM/DD"
                                    placeholder="请选择出生日期" />
                            </div>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input placeholder="请输入手机号码" v-model="addUserInfo.phone"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-divider content-position="left">建档信息 (完善后部分医院首次就诊不排队建档)</el-divider>
                    <el-form style="width:46%;margin:50px auto;">
                        <el-form-item label="婚姻状况">
                            <el-radio-group v-model="addUserInfo.isMarry">
                                <el-radio :label=1>未婚</el-radio>
                                <el-radio :label=0>已婚</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="自费/医保">
                            <el-radio-group v-model="addUserInfo.isInsure">
                                <el-radio :label=1>自费</el-radio>
                                <el-radio :label=0>医保</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="当前住址">
                            <el-cascader :props="props" v-model="addUserInfo.addressSelected" />
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input placeholder="请输入地址详情" v-model="addUserInfo.address"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-divider content-position="left">联系人信息(选填)</el-divider>
                    <el-form style="width:46%;margin:0 auto; margin-top:50px;">
                        <el-form-item label="用户姓名">
                            <el-input placeholder="请输入用户姓名" v-model="addUserInfo.contactsName"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型">
                            <el-select placeholder="请选择证件类型" v-model="addUserInfo.contactsCertificatesType">
                                <el-option v-for="item in certificateType" :label="item.name" :key="item.id"
                                    :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码">
                            <el-input placeholder="请输入证件号码" v-model="addUserInfo.contactsCertificatesNo"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input placeholder="请输入手机号码" v-model="addUserInfo.contactsPhone"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="background-color: rgb(177, 134, 0 ); color: white;"
                                @click="addUsers" v-if="scene == 1">提交</el-button>
                            <el-button style="background-color: rgb(177, 134, 0 ); color: white;"
                                @click="updateUsers" v-if="scene == 2" >修改</el-button>
                            <el-button style="background-color: rgb(177, 134, 0 ); color: white;"
                                @click="reset">重写</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
            <!-- 卡片:展示医生信息 -->
            <el-card class="box-card" v-if="scene == 0">
                <!-- 卡片的头部 -->
                <template #header>
                    <div class="card-header">
                        <span>挂号信息</span>
                    </div>
                </template>
                <!-- 卡片的身体部分:展示医生的信息 -->
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">就诊日期:</div>
                        </template>
                        {{doctorInfo.workDate}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">就诊医院:</div>
                        </template>
                        {{doctorInfo.param?.hosname}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">就诊科室:</div>
                        </template>
                        {{doctorInfo.param?.depname}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">医生姓名:</div>
                        </template>
                        {{doctorInfo.docname == '' ? '医师' : doctorInfo.docname}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">医生职称:</div>
                        </template>
                        {{doctorInfo.title}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">医生专长:</div>
                        </template>
                        {{doctorSkill}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">医生服务费:</div>
                        </template>
                        {{doctorInfo.amount}}
                    </el-descriptions-item>
                </el-descriptions>
                <!-- 确定挂号按钮 -->
                <div class="btn">
                    <el-button style="background-color: rgb(177, 134, 0 ); color: white;"
                        :disabled="activeFlag == -1 ? true : false" @click="changeRouter">确认挂号</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref ,reactive } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { User, Edit } from '@element-plus/icons-vue'
    import { ElMessage } from 'element-plus'
    import { reqUserInfo, commitOrder, addUser, reqCityData, reqCertificateType, updateUser } from '@/api/user/user.ts'
    import { reqDoctorInfo } from '@/api/detail/detail.ts'
    let $route = useRoute()
    let $router = useRouter()
    //存储账户就诊人信息
    let userInfo = ref([])
    //存储身份证类型信息
    let certificateType = ref([])
    //就诊人信息框高亮状态
    let activeFlag = ref(-1)
    //储存预约的医生信息
    let doctorInfo = ref({})
    let doctorSkill = ref('')
    // 0 显示用户信息, 1显示添加就诊人页面 2修改就诊人信息
    let scene = ref(0)
    //存储新增就诊人信息
    let addUserInfo = reactive({
        name: "",
        certificatesType: "",
        certificatesNo: "",
        sex: 1,
        birthdate: "",
        phone: "",

        isMarry: 1,
        isInsure: 1,
        addressSelected: [],
        address: "",

        contactsName: "",
        contactsCertificatesType: "",
        contactsCertificatesNo: "",
        contactsPhone: "",

        // cardNo: "", 
        // cityCode: "",      
        // createTime: "",
        // districtCode: "",   
        // isDeleted: 0,        
        // param: {},  
        // provinceCode: "",   
        // status: "",
        // updateTime: "",
        // userId: 0
    })


    //添加就诊人函数
    const addUserBu = () => {
        scene.value = 1
        reset()
    }
    //获取账户就诊人信息
    const getUserInfo = async () => {
        let result = await reqUserInfo()
        if (result.code == 200) {
            // console.log(result);
            userInfo.value = result.data
        }
    }
    //获取预约医生信息
    const getDoctorInfo = async () => {
        let result = await reqDoctorInfo($route.query.doctorId)
        if (result.code == 200) {
            doctorInfo.value = result.data
        }
        doctorSkill.value = doctorInfo.value.skill.slice(0, doctorInfo.value.skill.length - 1)
    }
    //点击就诊人信息卡片高亮
    const choose = (index) => {
        activeFlag.value = index
    }
   
    //点击'确认挂号'跳转路由并 提交预约订单
    const changeRouter = async () => {
        //参数:医院编号 医生id 就诊人id
        console.log($route.query.hoscode, doctorInfo.value.id, userInfo.value[activeFlag.value].id);
        let result = await commitOrder($route.query.hoscode, doctorInfo.value.id, userInfo.value[activeFlag.value].id)
        // console.log(result);

        if (result.code == 200) {
            ElMessage.success('提交信息成功')
            $router.push({ path: '/user/bookOrder', query: { orderId: result.data } })
        } else {
            // ElMessage({
            //     type:'error',
            //     message:result.message
            // })
            ElMessage.error('提交信息失败')
        }

    }
    //清空添加就诊人列表数据
    const reset = () => {
        Object.assign(addUserInfo,{
            name: "",
            certificatesType: "",
            certificatesNo: "",
            sex: 1,
            birthdate: "",
            phone: "",

            isMarry: 1,
            isInsure: 1, 
            addressSelected:[], 
            address: "",
                    
            contactsName: "",
            contactsCertificatesType: "",
            contactsCertificatesNo: "",
            contactsPhone: ""
        })
    }
    //获取证件类型
    const getCertificateType = async () => {
        let result = await reqCertificateType()
        if (result.code == 200) {
            certificateType.value = result.data
        }
    }
    //级联选择器数据
    const props = {
        lazy: true,//懒加载数据
        //加载级联选择器数据方法
        async lazyLoad(node, reslove) {
            //node表示选中节点,上来只拿一级节点(懒加载)
            let result = await reqCityData(node.data.id || '86')
            // console.log(result);
            //整理数据
            let showData = result.data.map((item) => {
                return {
                    label: item.name,
                    value: item.value,
                    //是否有下一级
                    leaf: !item.hasChildren,
                    id: item.id
                }
            })
            //注入组件需要展示的数据
            reslove(showData)
        }
    }
    //获取中国各个城市的数据
    const getCityData = async () => {
        let result = await reqCityData()
    }
    //新增就诊人
    const addUsers = async () => {
        try{
            await addUser(addUserInfo)
            ElMessage.success('添加成功')
            scene.value = 0
            getUserInfo()
        }catch(error){
            ElMessage.error('添加失败')
        }
    }
    //修改就诊人按钮回调
    const updateUserBu = (id) => {
        scene.value = 2
        // 找出当前需要修改信息的对象
        let newobj = userInfo.value.find((item) => item.id == id)
        // console.log(newobj);
        Object.assign(addUserInfo,newobj)
    }
    //修改信息提交按钮回调
    const updateUsers = async () => {
        try{
            let result = await updateUser(addUserInfo)
            getUserInfo()
            ElMessage.success('修改成功')
            scene.value = 0
            reset()
        }catch(error){
            ElMessage.success('提交修改信息失败')
        }
       
    }
    onMounted(() => {
        getUserInfo()
        getDoctorInfo()
        getCertificateType()
    })

</script>

<style scoped lang="scss">
    /* 177, 134, 0 */
    .container {
        margin-top: 30px;
        margin-left: 20px;

        .tip {
            font-weight: 900;
            color: #7f7f7f;
            font-size: 20px;
        }

        .box-card {
            margin: 30px 0;
            width: 100%;

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .user {
                display: flex;
                flex-wrap: wrap;

                .visitor {
                    width: 30%;
                    margin-left: 20px;
                    box-shadow: 0px 0px 1px rgb(177, 134, 0);
                    margin-top: 30px;
                    cursor: pointer;

                    /* text-align: center; */
                    .top {
                        height: 46px;
                        background-color: rgba(177, 134, 0, .5);
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .left {
                            display: flex;
                            align-items: center;

                            .free {
                                background-color: white;
                                padding: 5px;
                                font-size: 12px;
                                margin-right: 5px;
                                border-radius: 5px;
                            }

                            .name {
                                color: #7f7f7f;
                            }
                        }
                    }

                    .bottom {
                        margin-left: 30px;

                        p {
                            line-height: 30px;
                        }
                    }
                }

                .active {
                    box-shadow: 0 0 20px rgb(177, 134, 0);
                }
            }
        }

        .box-card {
            .btn {
                display: flex;
                justify-content: center;
                margin-top: 20px;

            }
        }
    }
</style>