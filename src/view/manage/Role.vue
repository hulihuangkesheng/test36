<template>
  <div>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="height: 30px; font-size: 18px; line-height: 30px"
    >
      <el-breadcrumb-item :to="{ path: '/manage/home' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item><a href="/">角色权限</a></el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
    <router-view />
  </div>
</template>


<script>
export default {
  name: "Role",
};
</script>


<style scoped>
</style>