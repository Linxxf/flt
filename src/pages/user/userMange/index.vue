<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <!-- 卡片头部 -->
                <div class="card-header">
                    <span>就诊人管理</span>
                    <el-button class="button" text :icon="User" @click="addUserBu"
                        style="background-color: rgb(177, 134, 0 );color: white;" v-if="scene == 0">添加就诊人</el-button>
                </div>
            </template>
            <!-- 卡片身体部分展示就诊人信息 -->
            <div class="user" v-if="scene == 0">
                <div class="visitor" v-for="(item,index) in userInfo">
                    <div class="top">
                        <div class="left">
                            <span class="free">{{item.isInsure == 0 ? '医保' : ''}}</span>
                            <span class="name">{{item.name}}</span>
                        </div>
                        <div class="right">
                            <el-button :icon="Edit" circle @click="updateUserBu(item.id)"
                                style="background-color:rgb(177, 134, 0 );border: 0;"></el-button>
                            
                            <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消"
                                :icon="InfoFilled" icon-color="#626AEF" title="是否确认删除此就诊人信息?" @confirm="confirmDelete(item.id)">
                                <template #reference>
                                    <el-button type="danger" :icon="Delete" circle
                                style="background-color:rgb(210, 75, 75);border: 0;"></el-button>
                                </template>
                            </el-popconfirm>
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
            <!-- 添加就诊人|修改已有的就诊人信息的结构 -->
            <div class="form" v-if="scene == 1 || scene == 2">
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
                        <el-button style="background-color: rgb(177, 134, 0 ); color: white;" @click="addUsers"
                            v-if="scene == 1">提交</el-button>
                        <el-button style="background-color: rgb(177, 134, 0 ); color: white;" @click="updateUsers"
                            v-if="scene == 2">修改</el-button>
                        <el-button style="background-color: rgb(177, 134, 0 ); color: white;"
                            @click="reset">重写</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, reactive } from 'vue'
    import { reqUserInfo, reqCertificateType, reqCityData, addUser, updateUser, deleteUser } from '@/api/user/user.ts'
    import { User, Edit, Delete } from '@element-plus/icons-vue'
    import { ElMessage } from 'element-plus'
    //存储账户就诊人信息
    let userInfo = ref([])
    //定义一个响应式数据:决定卡片的身体部分的展示内容
    let scene = ref(0)
    //存储身份证类型信息
    let certificateType = ref([])
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
    //获取账户就诊人信息
    const getUserInfo = async () => {
        let result = await reqUserInfo()
        if (result.code == 200) {
            // console.log(result);
            userInfo.value = result.data
        }
    }
    //添加就诊人按钮回调
    const addUserBu = () => {
        scene.value = 1
        reset()
    }
    //修改就诊人按钮回调
    const updateUserBu = (id) => {
        scene.value = 2
        // 找出当前需要修改信息的对象
        let newobj = userInfo.value.find((item) => item.id == id)
        // console.log(newobj);
        Object.assign(addUserInfo, newobj)
    }
    //修改信息提交按钮回调
    const updateUsers = async () => {
        try {
            await updateUser(addUserInfo)
            getUserInfo()
            ElMessage.success('修改成功')
            scene.value = 0
            reset()
        } catch (error) {
            ElMessage.success('提交修改信息失败')
        }

    }
    //清空添加就诊人列表数据
    const reset = () => {
        Object.assign(addUserInfo, {
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
        try {
            await addUser(addUserInfo)
            ElMessage.success('添加成功')
            scene.value = 0
            getUserInfo()
        } catch (error) {
            ElMessage.error('添加失败')
        }
    }
    //点击确认删除就诊人信息
    const confirmDelete = async (id) => {
        try{
            await deleteUser(id)
            ElMessage.success('删除成功')
            getUserInfo()
        }catch(error){
            ElMessage.error('删除出现错误')
        }
        
    }

    onMounted(() => {
        getUserInfo()
        getCertificateType()
    })
</script>

<style scoped lang="scss">
    /* 177, 134, 0 */
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

        }
    }
</style>