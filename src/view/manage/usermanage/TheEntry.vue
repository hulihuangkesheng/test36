<template>
  <div class="users-show">
    <div class="col-md-3 main-col">
      <div class="box">
        <div class="padding-md">
          <div class="list-group text-center">
            <router-link v-for="link in links" :key="link.name" :to="`${link.name}`" class="list-group-item">
              <i :class="`text-md fa fa-${link.icon}`"></i>
              {{ link.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <ul class="dropdown-menu">
  <!-- 编辑资料 -->
  <li>
    <router-link to="/users/1/edit">
      <i class="fa fa-cog text-md i-middle"></i>
      编辑资料
    </router-link>
  </li>
  <li><a href="javascript:;" @click="$router.back()"><i class="fa fa-sign-out text-md"></i>退出</a></li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'UserEntry',
  data() {
    return {
      links: [
        {
          name: 'UserEidt',
          title: '个人信息',
          icon: 'list-alt'
        },
        {
          name: 'UserAvatar',
          title: '修改头像',
          icon: 'picture-o'
        },
      ]
    }
  },
  methods:{
    //   logout(){
          
    //   }
  }
}
</script>

<style scoped>

</style>