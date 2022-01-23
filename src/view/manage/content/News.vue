<template>
  <div>
    <el-table ref="filterTable" :data="newslist" style="width: 100%" border>
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" label="#" width="100" />
      <el-table-column prop=" widgetImage" label="文章封面" width="180">
        <template v-slot="{ row }">
          <el-image :src="row.widgetImage"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="widgetTitle" label="文章标题" width="180" />
      <el-table-column prop="summary" label="文章概述" width="180" />
      <el-table-column prop="authorName" label="作者" width="180" />
      <el-table-column prop="publishTime" label="文章发布时间" width="180" />
      <el-table-column prop="navName" label="分类" width="180" />
      <el-table-column prop="themeName" label="文章主题" width="180" />
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
    <el-pagination style="text-align:center"
      background
      @size-change="changeSize"
      @current-change="changePage"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total,prev, pager, next,sizes"
      :total="total"
    >
    </el-pagination>
  </div>
</template>


<script>
import dayjs from 'dayjs'
export default {
  name: "News",
  data() {
    //获取地址栏数据,然后写入data
    let  { page = 1, size = 5 } = this.$route.query;
    page = Number(page)
    size = Number(size)
    return {
      newslist: [],
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
   await this.$request
        .get("/article/more", {
          params: {
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then(({ data }) => {
          let { result, total } = data.data;
          let res = result.map(item=>{
            item.publishTime = dayjs(item.publishTime).format('YYYY-MM-DD')
            return item
          })
          this.newslist = res;
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