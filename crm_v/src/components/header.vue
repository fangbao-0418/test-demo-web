<template>
  <div class="header">
    	<el-menu class="el-menu-demo" mode="horizontal">
        <div @click="loginout" class="pull-right info con-out">退出登陆</div>
        <div class="pull-right info">
          <span>欢迎 {{userInfo.RoleName}}：</span>
          <span>{{userInfo.RealName}} 进入！</span>
        </div>
        <h4>爱康鼎客户管理系统</h4>
      </el-menu>
    </div>
</template>

<script>
import {
  logout
} from '../api/api'
export default {
  props: ['userInfo'],
  methods: {
    loginout() {
      logout().then((res) => {
        if (res.status) {
          location.href = '/#login'
        }
      })
    }
  }
}
</script>

<style>
h1, h2, h4 {
  font-weight: normal;
  margin: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.header, h4 {
  font-weight: 600;
}

.info {
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  cursor: pointer;
}

.con-out {
  margin-left: 30px;
  padding-right: 10px;
}

.header .el-menu--horizontal .el-submenu .el-submenu__title {
  height: 42px;
  line-height: 42px;
}

.el-menu--horizontal .el-submenu>.el-menu {
  top: auto;
}
</style>
