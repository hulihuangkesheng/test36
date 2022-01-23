<template>
  <div>
    <el-table ref="filterTable" :data="actlist" style="width: 100%" border>
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" label="#" width="100" />
      <el-table-column prop="picUrl" label="活动封面" width="180">
        <template v-slot="{ row }">
          <el-image :src="row.picUrl"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="activityTime" label="活动时间" width="180" />
      <el-table-column prop="name" label="活动主题" width="180" />
      <el-table-column prop="address" label="活动地点" width="180" />
      <el-table-column prop="url" label="活动链接" width="180" />
      <el-table-column prop="activityIntro" label="活动介绍" width="180" />
      <el-table-column prop="status" label="活动状态" width="180" />
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            class="eidt el-icon-edit"
            @click="$router.push('/manage/content/ceidt')"
          ></el-button>
          <el-button
            class="btn el-icon-delete"
            @click="del(scope.row)"
            type="text"
            size="small"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  style="text-align:center"
      background
      @size-shange="changeSize"
      @current-change="changePage"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
       layout="total,prev, pager, next,sizes"
      :total="total">
    </el-pagination>
  </div>
</template>


<script>
export default {
  name: "Act",
  data() {
    //获取地址栏数据,然后写入data
    let { page = 1, size = 4 } = this.$route.query;
        page = Number(page)
    size = Number(size)
    return {
      actlist: [],
      page,
      size,
      total: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      await this.$request.get("/activity/more", {
          params: {
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then(({ data }) => {
          const { result, total } = data.data;
          this.actlist = result;
          this.total = total;
        });
    },
    changeSize(size) {
      this.size = size;
      this.getData();
      this.$router.replace({
        query: {
          ...this.$route.query,
          size,
        },
      });
    },
    changePage(page) {
      this.page = page;
      this.getData();
      this.$router.replace({
        query: {
          ...this.$route.query,
          page,
        },
      });
    },
  },
};
</script>


<style scoped>
td {
  border: solid 1px #000;
}
</style>