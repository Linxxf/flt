import { createApp } from 'vue'

//引入清楚默认样式
import '@/style/reset.scss'

import App from '@/App.vue'

//引入根组件App
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/login/index.vue'

//引入vue-router核心插件并安装
import router from '@/router/index'

//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入国际化语言
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//引入仓库
import pinia from '@/store/index'


// createApp(App).mount('#app')
const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.component('Login',Login)


//安装vue-router
app.use(router)

//安装element-plus插件
app.use(ElementPlus,{
    locale:zhCn
})

//安装pinia仓库
app.use(pinia)

app.mount('#app')




