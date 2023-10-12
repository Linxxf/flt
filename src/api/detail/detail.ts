import request from '@/utils/request.ts'


//枚举请求地址
enum API {
    //获取医院预约挂号详情
    DETAIL_REGISTER = '/hosp/hospital/',
    //获取医院科室数据
    DETAIL_DEPARTMENT= '/hosp/hospital/department/',
    //小科室排班日期数据
    DETAIL_REGISTER_DATE = '/hosp/hospital/auth/getBookingScheduleRule/',
    //小科室排班数据
    DETAIL_REGISTER_DATA = '/hosp/hospital/auth/findScheduleList/',
    //根据排班医生的id获取排班医生的数据
    DETAIL_GET_DOCTORINFO = '/hosp/hospital/getSchedule/'
    
}
//获取医院详情的接口
export const reqHosRegister = (hoscode:string) => request.get(API.DETAIL_REGISTER+`${hoscode}`) 
//获取医院科室的接口
export const reqHosDepartment = (hoscode:string) => request.get(API.DETAIL_DEPARTMENT+`${hoscode}`)
//获取医院科室预约(时间数据..)接口
export const reqHosRegisterDate = (page:number,limit:number,hoscode:string,depcode:string) => request.get(API.DETAIL_REGISTER_DATE+`${page}/${limit}/${hoscode}/${depcode}`);
//获取医院科室排班数据(医生姓名,病种类)接口
export const reqHosRegisterData = (hoscode:string,depcode:string,workDate:string) => request.get(API.DETAIL_REGISTER_DATA+`${hoscode}/${depcode}/${workDate}`)
//获取预约的排班医生的信息
export const reqDoctorInfo = (doctorId:string) => request.get(API.DETAIL_GET_DOCTORINFO+`${doctorId}`)