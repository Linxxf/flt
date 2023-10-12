<template>
    <div class="book-order">
        <!-- 订单详情 有id参数时显示 -->
        <div class="order-detail" v-if="$route.query.orderId">
            <el-card class="box-card">
                <!-- 卡片头部 -->
                <template #header>
                    <div class="card-header">
                        <span>挂号详情</span>
                    </div>
                </template>
                <!-- 卡片内容部分顶部 -->
                <div class="content-top">
                    <el-tag class="ml-2" type="warning">
                        <div class="tag">
                            <svg t="1693384005923" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4017" width="16" height="16">
                                <path
                                    d="M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z"
                                    fill="#B18600" p-id="4018"></path>
                            </svg>
                            <!-- 订单状态 -->
                            <span>{{orderInfo.param?.orderStatusString}}</span>
                        </div>
                    </el-tag>
                </div>
                <!-- 拉片内容部分底部 -->
                <div class="content-bottom">
                    <!-- 展示订单详情信息 -->
                    <div class="left">
                        <el-descriptions class="margin-top" :column="1" :size="size" border>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        就诊人信息
                                    </div>
                                </template>
                                {{orderInfo.patientName}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        就诊日期
                                    </div>
                                </template>
                                {{orderInfo.reserveDate}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        就诊医院
                                    </div>
                                </template>
                                {{orderInfo.hosname}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        就诊科室
                                    </div>
                                </template>
                                {{orderInfo.depname}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        医生职称
                                    </div>
                                </template>
                                {{orderInfo.title}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        医生服务费
                                    </div>
                                </template>
                                {{orderInfo.amount}}元
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        挂号订单
                                    </div>
                                </template>
                                {{orderInfo.outTradeNo}}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon>
                                            <user />
                                        </el-icon>
                                        挂号时间
                                    </div>
                                </template>
                                {{orderInfo.quitTime}}
                            </el-descriptions-item>
                        </el-descriptions>
                        <div class="btn">
                            <el-popconfirm title="确定取消预约吗?" @confirm="cancelRegisterOrder">
                                <template #reference>
                                    <el-button class="cancel" :disabled="orderInfo.orderStatus == -1">取消预约</el-button>
                                </template>
                            </el-popconfirm>
                            <el-button class="pay"
                                :disabled="orderInfo.orderStatus == -1 || orderInfo.orderStatus ==  1"
                                @click="dialogV">支付</el-button>
                        </div>
                    </div>
                    <div class="right">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <span>注意事项</span>
                                </div>
                            </template>
                            <p>1、请确认就诊人信息是否准确，若填写错误将无法取号就诊，损失由本人承担；</p>
                            <p>2、【取号】就诊当天需在{{orderInfo.fetchTime}}在医院取号，未取号视为爽约，该号不退不换；</p>
                            <p>3、【退号】在{{orderInfo.quitTime}}前可在线退号 ，逾期将不可办理退号退费；</p>
                            <p>4、北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号；</p>
                            <p>5、请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。</p>
                        </el-card>
                    </div>
                </div>
            </el-card>
            <!-- 对话框 -->
            <el-dialog v-model="dialogVisible" @click="close" title="微信支付" width="36%" top="20vh" :close-on-click-modal="false" >
                <div class="content">
                    <img :src="QRcode">
                    <span>请使用微信扫一扫</span>
                    <span>扫描二维码支付</span>
                </div>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisibleView()">取消</el-button>
                        <el-button type="primary" @click="dialogVisibleView()">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
        <!-- 订单列表 无id参数 -->
        <div class="order-list" v-if="!$route.query.orderId">
            <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>挂号订单</span>
                  </div>
                </template>
                <!-- 提供用户选择的下拉菜单 -->
                <el-form inline="true">
                    <el-form-item label="就诊人">
                        <el-select placeholder="请选择就诊人" v-model="patientId" @change="newUser">
                            <el-option :value="item.id" :label="item.name" v-for="item of allUsers"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单状态">
                        <el-select placeholder="请选择订单状态" v-model="orderStatus" @change="newStatus">
                            <el-option :value="item.status" :label="item.comment" v-for="item in allOrderStatus"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                 <!-- 表格展示订单的数据 -->
                 <el-table border style="margin-bottom:20px;" :data="allOrder.records" >
                    <el-table-column prop="reserveDate" label="就诊时间" width="120"></el-table-column>
                    <el-table-column prop="hosname" label="医院" width="180"></el-table-column>
                    <el-table-column prop="depname" label="科室" width="160"></el-table-column>
                    <el-table-column prop="title" label="医生" width="120"></el-table-column>
                    <el-table-column prop="amount" label="服务费" width="100"></el-table-column>
                    <el-table-column prop="patientName" label="就诊人" width="100"></el-table-column>
                    <el-table-column prop="param.orderStatusString" label="订单状态" width="160"></el-table-column>
                    <el-table-column label="操作" width="60" >
                        <template #="{row}">
                            <el-button type="text" style="color:rgb(177, 134, 0)" @click="toDetail(row)">详情</el-button>
                        </template>
                    </el-table-column>
                 </el-table>
                 <!-- 分页器 -->
                 <div class="demo-pagination-block">
                    <el-pagination
                      v-model:current-page="pageNo"
                      v-model:page-size="pageSize"
                      :page-sizes="[10, 20, 30, 40]"
                      :disabled="disabled"
                      layout="prev, pager, next, jumper, -> , sizes,total "
                      :total="total"
                      @current-change="changePage"
                      @size-change="changeSize"
                    />
                  </div>
              </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router'
    import { reqOrderDeati, cancelRegister , reqQRcode , reqOrderStatus ,reqOrderData, reqAllUsers, reqAllOrderStatus} from '@/api/user/user.ts'
    import { onMounted, ref } from 'vue'
    import { ElMessage } from 'element-plus'
    //生成二维码插件
    import QRCode from 'qrcode'


    //----------订单列表有id参数--------------------------------
    let $route = useRoute()
    let $router = useRouter()
    //存储订单详情数据 orderStatus有三种状态 -1 取消预约  0 预约,未支付  1 预约并支付成功
    let orderInfo = ref({})
    //支付对话框的显示状态
    let dialogVisible = ref(false)
    //微信支付二维码
    let QRcode = ref('')
    //存储定时器
    let timer = ref()
    //获取订单详情
    const getOrderDetail = async () => {
        let result = await reqOrderDeati($route.query.orderId)
        if (result.code == 200) {
            orderInfo.value = result.data
            // console.log(1111);
        }
    }
    //取消预约
    const cancelRegisterOrder = async () => {
        let result = await cancelRegister($route.query.orderId)
        if (result.code == 200) {
            getOrderDetail()
            ElMessage.success("取消预约成功")
        } else {
            ElMessage.error("取消预约失败")
        }
    }
    //点击支付弹出对话框并获取支付二维码
    const dialogV = async () => {
        dialogVisible.value = true
        let result = await reqQRcode($route.query.orderId)
        // console.log(result);
        if(result.code == 200){
           //根据服务器返回的二维码信息生成二维码图片
           QRCode.toDataURL(result.data.codeUrl).then((r)=>{
                QRcode.value = r
           })
           //查询订单状态
           timer.value = setInterval( async ()=>{
            let result = await reqOrderStatus($route.query.orderId)
            console.log(result);
            //data值为flase表示支付中 为true表示支付成功
            if(result.data == true){
                dialogVisible.value = false
                clearInterval(timer.value)
                ElMessage.success('支付成功')
                getOrderDetail()
            }
           },2000)   
        }
        
    }
    //点击确认和取消按钮对话框隐藏
    const dialogVisibleView = () => {
        dialogVisible.value = false
        clearInterval(timer.value)
    }
    const close = ()=>{
        clearInterval(timer.value)
    }
    // console.log(reqQRcode($route.query.orderId));
    //--------------------------------------------------------------------


    //---------------订单列表无id参数----------------------------------------------------
    // 当前分页器页码
    let pageNo = ref(1)
    // 当前页码展示几条数据
    let pageSize = ref(10)
    // 存储病人id
    let patientId = ref('')
    // 存储订单状态
    let orderStatus = ref('')
    // 存储全部订单数据
    let allOrder = ref([])
    // 存储全部订单状态
    let allOrderStatus = ref([])
    //订单总数
    let total = ref(0)
    //所有就诊人
    let allUsers = ref([])
    // 获取用户订单数据
    const getOrderData = async () => {
        let result = await reqOrderData(pageNo.value,pageSize.value,patientId.value,orderStatus.value)
        // ,patientId.value,orderStatus.value
        // console.log(result);
        if(result.code == 200){
            allOrder.value = result.data
            total.value = result.data.total
        }
    }
    // 点击详情进行路由转跳
    const toDetail = async (row) => {
        await $router.push({path:'/user/bookOrder' , query:{orderId:row.id}})
        getOrderDetail()
    }
    //页数发生改变
    const changePage = () => {
        // console.log(111);
        getOrderData()
    }
    //页面尺寸发生改变
    const changeSize = () => {
        getOrderData()
    }
    //获取所有就诊人信息
    const getAllUsers = async () => {
        let result = await reqAllUsers()
        if(result.code == 200){
            allUsers.value = result.data
        }
        // console.log(result.data);
    }
    //获取所有订单状态
    const getAllOrderStatus = async () => {
       let result =  await reqAllOrderStatus()
       if(result.code == 200){
            allOrderStatus.value = result.data
       }
    }
    //select选择分类用户
    const newUser = ()=>{
        getOrderData()
    }
    //select选择分类状态
    const newStatus = ()=>{
        getOrderData()
    }
     
    
    onMounted(() => {
        if($route.query.orderId != void 0){
            getOrderDetail()
        }else{
            getOrderData()
        }
        // console.log($route.query.orderId);
        getAllUsers()
        getAllOrderStatus()
    })
</script>

<script lang="ts">
    export default {
        name: 'BookOrder'
    }
</script>

<style scoped lang="scss">
    /* 177, 134, 0 */
    .book-order {
        .order-detail{
            .box-card {
            .card-header {
                span {
                    color: #7f7f7f;
                    font-weight: 900;
                }
            }

            .content-top {
                margin-bottom: 20px;

                .ml-2 {
                    .tag {
                        display: flex;
                        align-items: center;

                        span {
                            margin-left: 5px;
                        }
                    }
                }
            }

            .content-bottom {
                border-top: 1px solid rgb(228, 231, 237);
                padding-top: 20px;
                display: flex;
                flex-wrap: nowrap;

                .left {
                    width: 40%;

                    .btn {
                        margin-top: 20px;

                        .cancel {
                            color: white;
                            background-color: rgba(177, 134, 0);
                            font-weight: 700;

                            &:hover {
                                color: rgb(177, 134, 0);
                                background-color: rgba(177, 134, 0, .5);
                            }
                        }

                        .pay {
                            color: white;
                            background-color: rgba(177, 134, 0);
                            font-weight: 700;

                            &:hover {
                                color: rgb(177, 134, 0);
                                background-color: rgba(177, 134, 0, .5);
                            }
                        }
                    }
                }

                .right {
                    width: 55%;
                    margin-left: 30px;

                    p {
                        line-height: 24px;

                        &:nth-child(2) {
                            color: rgb(177, 134, 0);
                        }
                    }
                }
            }

        }
        }
        .content{
            border-top: 1px solid rgba(0,0,0,.1);
            border-bottom: 1px solid rgba(0,0,0,.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 50%;
                margin-top: 20px;
            }
            span{
                margin-top: 10px;
                &:nth-child(3){
                    margin-bottom: 20px;
                }
            }
        }
    }

    .demo-pagination-block{
       ::v-deep(.number):hover{
            color: rgb(177, 134, 0);
       }
       ::v-deep(.is-active){
            background-color: rgb(177, 134, 0);
            color:white;
            &:hover{
                color:white;
            }
       }
       ::v-deep(.el-input){
            .is-foucs{
                border-color: rgb(177, 134, 0);
            }
            
       }
    }
</style>