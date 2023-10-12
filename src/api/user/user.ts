import request from '@/utils/request'

enum API {
    //获取验证码
    USER_AUTH_CODE = '/sms/send/',
    //用户登录
    USER_LOGIN = '/user/login',
    //用户实名认证
    USER_CONFIRM = '/user/auth/userAuah',
    //获取当前用户信息(携带token值)
    USER_DATA = '/user/auth/getUserInfo',
    //获取某一个账号下就诊人的信息
    USER_INFO = 'user/patient/auth/findAll',
    //创建订单
    COMMIT_ORDER = '/order/orderInfo/auth/submitOrder/',
    //预约订单详情
    ORDER_DETAIL = '/order/orderInfo/auth/getOrderInfo/',
    //取消预约
    CANCEL_REGISTER = '/order/orderInfo/auth/cancelOrder/',
    //获取订单支付二维码接口
    ORDER_QRCODE = '/order/weixin/createNative/',
    //查询订单支付状态
    ORDER_STATUS = '/order/weixin/queryPayStatus/',
    //获取证件类型
    CERTIFICATE_TYPE = '/cmn/dict/findByDictCode/certificatesType',
    //获取用户订单号的数据
    ORDER_DATA = '/order/orderInfo/auth/',
    //获取中国各个城市的数据
    CITY_DATA = '/cmn/dict/findByParentId/',
    //新增就诊人
    ADDUSER = '/user/patient/auth/save',
    //修改就诊人
    UPDATEUSER = '/user/patient/auth/update',
    //删除就诊人
    DELETEUSER = '/user/patient/auth/remove/',
    //获取所有就诊人
    ALL_USER = '/user/patient/auth/findAll',
    //获取订单状态
    AllORDER_STATUS = '/order/orderInfo/auth/getStatusList'
}
//获取验证码接口
export const reqUserCode = (phone:string)=> request.get(API.USER_AUTH_CODE+`${phone}`)
//用户登录接口
export const reqUserLogin = (data:any) => request.post(API.USER_LOGIN,data)
//获取账户里的就诊人信息(requset时已携带token)
export const reqUserInfo = () => request.get(API.USER_INFO)
//提交预约挂号的订单
export const commitOrder = (hoscode:string,scheduleId:string,patientId:number) => request.post(API.COMMIT_ORDER+`${hoscode}/${scheduleId}/${patientId}`)
//获取预约订单详情
export const reqOrderDeati = (id:string) => request.get(API.ORDER_DETAIL+`${id}`)
//取消预约
export const cancelRegister = (id:string) => request.get(API.CANCEL_REGISTER+`${id}`)
//获取订单支付二维码
export const reqQRcode = (id:string) => request.get(API.ORDER_QRCODE+`${id}`)
//查询订单的支付状态
export const reqOrderStatus = (id:string) => request.get(API.ORDER_STATUS+`${id}`)
//获取当前用户信息
export const reqUserData = () => request.get(API.USER_DATA)
//用户实名认证
export const userConfirm = (data:any) => request.post(API.USER_CONFIRM,data)
//获取证件类型
export const reqCertificateType = () => request.get(API.CERTIFICATE_TYPE)
//获取用户订单号的数据
export const reqOrderData = (page:any,limit:any,patientId:string,orderStatus:string) => request.get(API.ORDER_DATA+`${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`)
// export const reqOrderData = (page:any,limit:any,patientId:string,orderStatus:string) => request.get(API.ORDER_DATA+`${page}/${limit}`)
//获取中国各个城市
export const reqCityData = (parentId:string) => request.get(API.CITY_DATA+`${parentId}`)
//新增就诊人
export const addUser = (data:any) => request.post(API.ADDUSER,data)
//修改就诊人
export const updateUser = (data:any) => request.put(API.UPDATEUSER,data)
//删除就诊人
export const deleteUser = (id:string) => request.delete(API.DELETEUSER+`${id}`)
//获取所有就诊人
export const reqAllUsers = () => request.get(API.ALL_USER)
//获取订单状态
export const reqAllOrderStatus = () => request.get(API.AllORDER_STATUS)