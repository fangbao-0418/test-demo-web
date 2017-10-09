<template>
  <div class="login">
    <div class="l-back"></div>
    <div class="l-box">
      <div class="l-logo pull-left">
      </div>
      <div class="l-lbox pull-right">
        <div class="text-center l-header">
          <img src="../assets/LOGO.png" alt="">
        </div>
        <!-- <form class="form-inline" v-on:submit="login"> -->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" type="password" v-model="form.password" @keydown.native="keyDown($event)"></el-input>
          </el-form-item>
          <el-form-item class="login-align">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  requestLogin
} from '../api/api'
export default {
  data: function() {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    keyDown: function(event) {
      if (event.keyCode === 13) {
        this.onSubmit()
      }
    },
    onSubmit: function(event) {
      var that = this
      requestLogin({
        UserName: this.form.userName,
        PassWord: this.form.password
      }).then(function(res) {
        if (res.status) {
          sessionStorage.userInfo = JSON.stringify(res.data)
          that.$store.commit('updateUserInfo')
          that.$router.push('/')
        } else {
          // that.$alert(res.message, '警告', {
          //   confirmButtonText: '确定'
          // })
        }
      })
    }
  }
}
</script>

<style>
.l-box {
  position: absolute;
  width: 1000px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.l-lbox {
  width: 400px;
  height: 310px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.l-lbox .l-header {
  margin: 20px 0 20px;
  border-bottom: 1px solid #eee
}

.l-lbox .l-header img {
  width: 60%;
}

.l-lbox>form .form-group {
  margin: 12px;
}

.l-lbox>form .form-group>label {
  width: 80px;
  text-align: right;
  padding-right: 20px;
}

.l-back {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #204162;
}
.login .login-align {
  text-align: center;
}
.login .el-form {
  padding: 0 20px;
}
.login .el-form .el-input {
  width: 80%;
}
.login .login-align .el-form-item__content .el-button--primary {
  background-color: #245580;
  border-color: #245580;
}
</style>
