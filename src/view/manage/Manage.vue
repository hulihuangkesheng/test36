<template>
  <el-container style="height: 100vh">
    <el-header style="height: 80px">
      <div>
        <i class="el-icon-cloudy" style="font-size: 36px; color: blue"></i>
        <span>欢迎来到36kr后台信息管理系统</span>
      </div>
      <div style="display: flex">
        <p style="font-size: 10px; text-align: center; padding-top: 15px">
          欢迎{{ userInfo.username }}管理员
        </p>
        <el-button style="border: none" type="info" plain @click="logout"
          >退出</el-button
        >
      </div>
    </el-header>
    <el-container class="main">
      <el-aside width="200px" class="aside">
        <el-menu
          background-color="rgb(16, 137, 236)"
          text-color="#000"
          active-text-color="rgb(124 124 124) 1px 1px 5px 0px"
          style="height: 100%"
          router
          :default-active="active"
          :default-openeds="opens"
        >
          <template v-for="item in navlist">
            <!-- 有子菜单 -->
            <el-submenu
              :index="baseUrl + item.path"
              v-if="item.children"
              :key="item.path"
            >
              <template v-slot:title>
                <i :class="item.icon"></i>
                {{ item.text }}
              </template>
              <el-menu-item
                :index="baseUrl + item.path + subitem.path"
                v-for="subitem in item.children"
                :key="subitem.path"
                >{{ subitem.text }}</el-menu-item
              >
            </el-submenu>
            <!-- 没有子菜单 -->
            <el-menu-item :index="baseUrl + item.path" v-else :key="item.path">
              <i :class="item.icon"></i>
              {{ item.text }}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="amain">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Manage",
  data() {
    return {
      active: "/manage/home",
      opens: ["/manage/content"],
      baseUrl: "/manage",
      navlist: [
        {
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home ic",
        },
        {
          text: "内容管理",
          path: "/content",
          icon: "el-icon-folder ic",
          children: [
            {
              text: "最新文章",
              path: "/news",
            },
            {
              text: "快讯",
              path: "/newsletter",
            },
            {
              text: "视频",
              path: "/video",
            },
            {
              text: "专题",
              path: "/topic",
            },
            {
              text: "活动",
              path: "/activity",
            },{
              text:"上传",
              path:'/upload'
            }
          ],
        },
        {
          text: "用户管理",
          path: "/usermanage",
          icon: "el-icon-user-solid ic",
          children: [
            {
              text: "添加用户",
              path: "/adduser",
            },
            {
              text: "用户列表",
              path: "/userlist",
            },
          ],
        },
        {
          text: "角色权限",
          path: "/role",
          icon: "el-icon-unlock",
          children: [
            {
              text: "管理员",
              path: "/admins",
            },
            {
              text: "用户",
              path: "/user",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
    // chamgeMue(index){
    //   console.log(index);
    //   this.$router.push('/')
    // }
    // handleOpen(key, keyPath) {
    //     this.$store.commit('addRoute')
    //     this.$router.push(keyPath);
    //     console.log(key, keyPath);
    //   },
  },
};
</script>


<style lang="scss">
header {
  background-color: rgba(0, 0, 255, 0.481);
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: 700;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .loginOut {
    border: none;
  }
}
.main {
  //   margin:15px;
  background-color: #686464;
}

.aside {
  margin: 15px 0 15px 15px;
  background-color: rgb(5, 56, 97);
}
.amain {
  margin: 15px 15px 15px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
  padding: 0;
}
.ic {
  color: #000;
}
li{
  border-bottom: solid 1px #ccc;
}
</style>