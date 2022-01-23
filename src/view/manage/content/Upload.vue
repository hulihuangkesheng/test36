<template>
  <el-form ref="form" :model="form" label-width="80px" size="mini">
    <el-form-item label="文章标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="上传类型">
      <el-select v-model="form.type" placeholder="请选择上传类型">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章概述">
      <el-input
        type="textarea"
        v-model="form.overview"
        style="width: 90%"
      ></el-input>
    </el-form-item>
    <el-form-item label="发布时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 80%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 80%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="图片封面">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  name: "Upload",
  data() {
    return {
        form: {
          name: "",
          overview: "",
          date1: "",
          date2: "",
          type: "",
        },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
</style>