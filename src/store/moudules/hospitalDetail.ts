import {defineStore} from 'pinia';
import {reqHosRegister} from '@/api/detail/detail'

//pinia仓库写法:组合式API,选择式API
const useDetailStore = defineStore('Detail',{
    state:() => {
        return {
            HosDetailInfo:{}
        }
    },
    actions:{
        //获取医院详情的方法
        async getHosInfo(hoscode:string){
            const result:any= await reqHosRegister(hoscode)
            // console.log(result);
            if(result.code == 200){
                this.HosDetailInfo = result.data
            }
        }
    },
    getters:{

    }
})

export default useDetailStore