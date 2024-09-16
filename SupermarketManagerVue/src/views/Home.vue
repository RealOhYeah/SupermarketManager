<!--
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-09-02 21:47:56
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-09-16 16:32:23
 * @FilePath: \SupermarketManagerVue\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb><br />

        <div id="home_bg">
            <h1 style="color: white;font-size: 28px;">欢迎访问超市管理系统</h1>
        </div>
        
    </div>
</template>
<script>

export default {
    data() {
        return {
        };
    },
    methods: {
        
    },
    mounted() {
    },
};
</script>
<style>
#home_bg {
    top: 0;
    left: 0;
    overflow-y: auto;
    height: 80vh;
    background: url("../assets/img/13.jpg") center top / cover no-repeat;

}
</style>