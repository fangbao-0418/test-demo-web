<template>
<div class="main">
  <VHeader :user-info="userInfo"></VHeader>
  <div class="content">
    <div class="content-left">
      <VAside></VAside>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
    <div class="loading"></div>
  </div>
</div>
</template>

<script>
import VHeader from '../components/header.vue'
import VAside from '../components/aside.vue'

export default {
  data: function() {
    return {
      userInfo: {}
    }
  },
  components: {
    VHeader,
    VAside
  },
  created() {
    var userInfos = JSON.parse(sessionStorage.getItem('userInfo'))
    this.userInfo.RoleName = userInfos.RoleName
    this.userInfo.RealName = userInfos.RealName
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content {
  flex: auto;
  display: flex;
}

.content-left {
  width: 150px;
  background: #303f4a;
  color: #fff;
}

.el-tree {
  border: none;
  background: transparent;
}

.content-right {
  flex: auto;
  overflow-y: auto;
}
</style>
