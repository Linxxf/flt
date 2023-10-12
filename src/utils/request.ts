//对于axios函数库进行二次封装

//目的1:利用axiso请求,响应拦截器功能
//目的2:请求拦截器,一般可以在请求头中携带公共的参数:token
//目的3:响应拦截器,可以简化服务器返回的数据,处理http网络错误
import axios from 'axios';
import {ElMessage} from 'element-plus'

//引入用户相关的仓库
import useUserStore from '@/store/moudules/user.ts'


//利用axios.create方法创建一个axios实例:可以设置基础路径,超时的时间的设置
const request = axios.create({
    baseURL:'/api', //请求的基础路径设置
    timeout:5000 //超时时间的设置
});

//请求拦截器
request.interceptors.request.use((config)=>{
    //config:请求拦截器回调注入的对象(配置对象),配置对象的身上最重要的一件事情headers属性
    //可以通过请求头携带公共参数-token
    const userStore = useUserStore()
    if(userStore.userInfo.token){
        config.headers.token = userStore.userInfo.token
    }
    return config;
})

request.interceptors.response.use((response)=>{
    //响应拦截器成功的回调,一般会进行简化数据
    return response.data;
},(error)=>{
    // console.log(error);
    //处理http网络错误
    
    let status = error.respone.status;
    if(status == undefined) {return} 
    switch(status){
        case 404:
            //错误信息提示
            ElMessage({
                type:'error',
                message:error.message
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type:'error',
                message:'服务器挂了'
            })
            break;
        case 402:
            ElMessage({
                type:'error',
                message:'参数有误'
            })
    }
    return Promise.reject(new Error(error.message))
})

export default request; 