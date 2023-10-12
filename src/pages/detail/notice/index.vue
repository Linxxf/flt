<template>
    <div class="notice">
        <h1>{{hosDetailStore.HosDetailInfo.hospital?.hosname}}挂号预约须知</h1>
        <div class="top">为了方便您早日就医康复,请您认真阅读预约挂号须知:</div>
        <div class="info">
            <div class="confirm">
               <h2>一、预约实名制:</h2> 
               <p>统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号（身份证、护照）、性别、手机号码、社保卡号等基本信息。</p>
            </div>
            <div class="booking">
               <h2>二、预约挂号:</h2> 
               <ul>按照北京市卫健委统一平台要求，预约挂号规则如下：
                    <li>在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源；</li>
                    <li>在同一自然周，同一就诊人，可以预约最多8个号源；</li>
                    <li>在同一自然月，同一就诊人，可以预约最多12个号源；</li>
                    <li>在同一自然季度，同一就诊人，可以预约最多24个号源。</li>
                </ul>
            </div>
            <div class="cancel">
               <h2>三、取消预约:</h2> 
               <p>已完成预约的号源，如需办理退号，至少在就诊前一工作日14:00前通过网站、微信公众号、114电话等平台预约渠道进行取消预约。</p>
            </div>
            <div class="break-book">
               <h2>四、爽约处理:</h2> 
               <ul>如预约成功后患者未能按时就诊且不办理取消预约号视为爽约，同一患者在自然年内爽约规则如下：
                    <li>累计爽约3次，自3次爽约日起，90天内不允许通过114平台进行预约挂号；</li>
                    <li>累计爽约6次，自6次爽约日起，180天内不允许通过114平台进行预约挂号。</li>
               </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/moudules/hospitalDetail.ts'
let hosDetailStore = useDetailStore()
</script>

<style scoped lang="scss">
    .notice{
        margin-left: 20px;
        h1{
            font-size: 24px;
            text-align: center;
        }
        .top{
            color: #7f7f7f;
            margin-top: 30px;
        }
        .info{              
                h2{
                    margin-top: 30px;
                    font-weight: 900;
                    color: #3e3d3d;
                }
                p{
                    color: #7f7f7f;
                    margin-top: 30px;
                    line-height: 24px;
                }
                .booking{
                    ul{
                        color: #7f7f7f;
                        margin-top: 30px;
                        li{
                        margin-top: 10px;
                        color: #7f7f7f;
                    }
                    } 
                }
                .break-book{
                    ul{
                        color: #7f7f7f;
                        margin-top: 30px;
                        li{
                            margin-top: 10px;
                            color: #7f7f7f;
                        }
                    }
                }
        }
    }
</style>