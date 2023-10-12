//统一管理首页模块接口
import request from "@/utils/request"
import type {HospitalResponseData} from "./type"
//通过枚举管理首页模块的接口地址
enum API {
    //获取已有的医院接口地址
    HOSPITAL_URL='/hosp/hospital/',
    //获取已有医院等级或者地区接口
    HOSPITAL_LOA='/cmn/dict/findByDictCode/',
    //根据医院名称获取医院列表接口地址
    HOSPITAL_NAME='/hosp/hospital/findByHosname/'
}

//获取医院的数据
export const reqHospital = (page:number,limit:number,hostype='',districtCode ='')=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院等级或地区数据
export const reqHospitalLOA = (type:string) => request.get(API.HOSPITAL_LOA+`${type}`)
//根据医院名称获取医院列表
export const reqHospitalName = (hosname:string)=> request.get(API.HOSPITAL_NAME+`${hosname}`)
