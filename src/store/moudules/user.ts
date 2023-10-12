//定义用户相关的仓库
import { defineStore } from "pinia";
//引入API模块化请求组件
import {reqUserLogin} from '@/api/user/user'

const useUserStore = defineStore('User',{
    state: () => {
        return{
            visiable:false, //控制登录组件对话框的显示与隐藏
            //存储用户信息
            userInfo:JSON.parse(localStorage.getItem('USERINFO') as string) || {}

        }
    },
    actions:{
        //获取token值
        async getToken(data:any){
            let result:any = await reqUserLogin(data)
            if(result.code == 200){
                this.userInfo = result.data
                //本地存储持久化用户信息
                localStorage.setItem('USERINFO',JSON.stringify(this.userInfo))
                //返回一个成功的promise
                return "ok";
            }else{
                return Promise.reject(new Error(result.messgae))
            }
        },

        logout(){
            this.userInfo = {}
            localStorage.removeItem('USERINFO')
        }

    },
    getters:{

    }
})


// export default function initUserStore(){
//     return useUserStore()
// }

export default useUserStore;