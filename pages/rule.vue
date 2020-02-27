<template>
    <div class="rule">
        <div class="rule-mainContent">
            <div class="rule-content-left">
                <div class="firstLevel">
                    <nuxt-link class="firstLevel-link" to="/rule/privacy">隐私政策</nuxt-link>
                </div>
                <div class="firstLevel borNottom">
                    <nuxt-link to="/rule/rights">法律声明</nuxt-link>
                </div>
                <el-collapse v-model="activeName" accordion class="rule-collapse" @change='ruleCollapse'>
                  <el-collapse-item  title="服务条款" name="1"  :class="[service?'service':'']">
                        <nuxt-link class="secondary" to="/rule/terms">平台服务条款</nuxt-link>
                        <nuxt-link class="secondary" to="/rule/bmsa">律司通会员服务协议</nuxt-link>
                  </el-collapse-item>
                  <el-collapse-item  title="运营规则" name="2" :class="[operation?'operation':'']">
                        <nuxt-link class="secondary" to="/rule/platformRules">平台运营规则</nuxt-link>
                        <nuxt-link class="secondary" to="/rule/stars">律师星级评定管理办法</nuxt-link>
                  </el-collapse-item>
                </el-collapse>
                 <div class="firstLevel">
                    <nuxt-link class="firstLevel-link" to="/rule/platform">平台公告</nuxt-link>
                </div>
            </div>
            <div  class="rule-content-right">
                <nuxt-child class="nuxtChild"></nuxt-child>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    scrollToTop: true,
    data(){
        return{
            activeName:'',
            operation:false,
            service:false,
        }
    },
     watch: {
        $route(to, from) {
            this.routeActive(to)
        }
    },
    methods:{
        ruleCollapse(e){
           
        },
        routeActive(val){
            if(val.fullPath == '/rule/privacy' || val.fullPath == '/rule/rights' || val.fullPath == '/rule/platform'){
                this.activeName = ''
            }
            if(val.fullPath == '/rule/business' || val.fullPath == '/rule/platformRules'|| val.fullPath == '/rule/stars' ){
                this.operation = true
                this.activeName = '2'
            }else{
                this.operation = false
            }
            if(val.fullPath == '/rule/terms' || val.fullPath == '/rule/bmsa' ){
                this.service = true
                this.activeName = '1'
            }else{
                this.service = false
            }
        }
    },
    mounted(){
        this.routeActive(this.$route)
    }
}
</script>
<style lang="less" scoped>
.rule{
    .rule-mainContent{
        justify-content: space-between; 
        width: 1200px;
        margin: 31px auto 0;
        .rule-content-left{
            float: left;
            width: 188px;
            position: sticky;
            top: 40px;
            margin-bottom: 50px;
            a{
                display: block;
            }
            .firstLevel{
                position: relative;
                width: 100%;
                height: 56px;
                box-sizing: border-box;
                border-bottom: 1px solid #EBEEF5;
                text-indent: 20px;
                >a{
                    font-size: 16px;
                    color: #303133;
                    letter-spacing: 0;
                    line-height: 56px;
                }
                >.nuxt-link-exact-active.nuxt-link-active::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 5px;
                    height: 56px;
                    background-color: #A82025;
                }
            }
            .borNottom{
                border-bottom: none;
            }
            /deep/.rule-collapse{
                .el-collapse-item{
                    position: relative;
                    .el-collapse-item__header{
                        font-size: 16px;
                        color: #303133;
                        letter-spacing: 0;
                        box-sizing: border-box;
                        height: 56px;
                        line-height: 56px;
                        padding-left: 20px;
                        .el-collapse-item__arrow{
                            color: #303133;
                        }
                    }
                    .el-collapse-item__wrap{
                        border-bottom: none;
                        .el-collapse-item__content{
                            background: #F7F8FA;
                            padding: 0;
                            .secondary{
                                line-height: 36px;
                                font-size: 14px;
                                color: #606266;
                                letter-spacing: 0;
                                text-indent: 20px;
                            }
                            .secondary.nuxt-link-exact-active.nuxt-link-active{
                                background: #A82025;
                                color: #FFFFFF;
                            }
                        }
                    }
                }
                .operation,.service{
                    .el-collapse-item__header{
                        border-bottom: 1px solid #EBEEF5;
                         &::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 5px;
                            height: 56px;
                            background-color: #A82025;
                        }
                    }
                }
                
            }
        }
        .rule-content-right{
            float: right;
            width: 970px;
        }
        &:after{
            content: "";
            display: block;
            visibility: hidden;
            height: 0;
            clear: both;
        }
    }
}
</style>