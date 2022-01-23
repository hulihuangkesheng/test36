<template>
  <el-table ref="filterTable" :data="userlist" style="width: 100%" border>
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" label="#" width="100" />
    <el-table-column prop="username" label="姓名" width="180" />
    <el-table-column prop="gender" label="性别" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="role" label="权限" width="180" />
    <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small"
          >删除</el-button
        >
        <el-button type="text" size="small" @click="$router.push('/manage/usermanage/userentry?keyword='+keyword)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  name: "userlist",
  data() {
    return {
      keyword:'编辑',
      userlist: [],
    };
  },
  created() {
    this.$request
      .get("/user/userslist", {
        params: {
          pageSize: 2,
        },
      })
      .then(({ data }) => {
        // console.log(data);
        this.userlist = data.data.result;
      });
  },
  methods: {
    async getActData() {
      await this.$request.get("/user/userslist", {
        params: {
          pageSize: 2,
        },
      });
    },
  },
};
</script>


<style scoped>
</style>