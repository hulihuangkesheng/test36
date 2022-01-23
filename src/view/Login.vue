<template>
  <div class="loginSub">
    <div class="header">
      <i class="el-icon-cloudy" style="font-size: 36px; color: blue"></i>
      <h2>欢迎登陆36kr后台信息管理系统</h2>
    </div>
    <el-form
      :model="from"
      ref="from"
      label-width="100px"
      :rules="rules"
      class="demo-from Login"
      status-icon
    >
      <el-form-item label="Admin:" prop="username">
        <el-input type="username" v-model="from.username"></el-input>
      </el-form-item>
      <el-form-item label="Password:" prop="password">
        <el-input
          type="password"
          v-model="from.password"
          show-password
        ></el-input>
      </el-form-item>
      <div class="box">
        <el-link type="primary" style="border: none">忘记密码？</el-link>
        <el-button
          type="success"
          @click.prevent="onSubmit"
          native-type="submit"
          class="submit"
          >登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      from: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.from.validate(async (valid) => {
        if (valid) {
          //store ---> login 通过$store的方式传递数据
          const data = await this.$store.dispatch("login", {
            params: this.from,
          });
          //   console.log('data',data);
          if (data.code === 200) {
            console.log("登陆成功");
            //动态添加路由
            // this.$store.commit('addRoute')
            //路由守卫
            const { targetUrl = "/manage" } = this.$route.query;
            console.log("targetUrl", targetUrl);
            this.$router.push(targetUrl);
          } else {
            console.log("登录失败");
          }
        }
      });
    },
  },
};
</script>

<style lang='scss'>
body {
  height: 100%;
}
.loginSub {
  width: 100%;
  height: 100%;
}
.header {
  height: 65px;
  // background-color: #ececec;
  display: flex;
  align-items: center;
  h2 {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
}
.Login {
  background-color: #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 160px;
  border: 5px solid #ccc;
  padding: 15px 30px;
  border-radius: 12px 12px;
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .submit {
      // margin-right: 30px;
      width: 120px;
      height: 40px;
      border-radius: 20px;
    }
  }
  .el-input .el-input__inner {
    border-radius: 20px;
  }
}
</style>