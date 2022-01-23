<template>
  <div>
    <el-table ref="filterTable" :data="videolist" style="width: 100%" border>
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" label="#" width="100" />
      <el-table-column prop="widgetImage" label="视频图片" width="180">
        <template v-slot="{ row }">
          <el-image :src="row.widgetImage"></el-image>
        </template>
      </el-table-column>

      <el-table-column prop="widgetTitle" label="视频标题" width="180" />
      <el-table-column prop="authorName" label="作者" width="180" />
      <el-table-column prop="summary" label="视频内容" width="180" />
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
  name: "Video",
  data() {
    //获取地址栏数据,然后写入data
    let  { page = 1, size = 5 } = this.$route.query;
    page = Number(page)
    size = Number(size)
    return {
      videolist: [],
      page,
      size,
      total: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ///video/more
    async getData() {
      await this.$request
        .get("/video/moreVideos", {
          params: {
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then(({ data }) => {
          const { result, total } = data.data;
          this.videolist = result;
          this.total = total;
          // console.log('data',data);
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