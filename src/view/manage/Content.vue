<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="height:30px;font-size:18px;line-height:30px;">
      <el-breadcrumb-item  :to="{ path: '/manage/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">内容管理</a></el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "Content",
  data() {
    return {
      
    };
  },
  // computed(){

  // }
};
</script>


<style scoped>
</style>