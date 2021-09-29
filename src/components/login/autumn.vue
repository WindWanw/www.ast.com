<template>
  <div id="autumn">
    <div class="center">
      <div class="left-side">
        <div class="left-title">夏去秋至</div>
        <div class="left-title">万物开始凋零</div>
        <div class="left-title-info">
          微风拨动着花瓣上羞涩可人的露珠，梧桐叶纷纷下落，金黄的稻穗在秋风中摇曳
        </div>
      </div>
      <div class="right-side">
        <div></div>
        <div></div>
        <div class="login">
          <div class="login-header">
            <div class="login-header-title">Astrology</div>
          </div>
          <div class="login-center">
            <el-form ref="form" :model="form">
              <el-form-item>
                <label>用户名:</label>
                <el-input
                  class="border-color"
                  size="mini"
                  v-model="form.username"
                  prefix-icon="el-icon-user"
                  placeholder="请输入账号名称"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                <el-input
                  class="border-color"
                  size="mini"
                  type="password"
                  v-model="form.password"
                  autocomplete="off"
                  prefix-icon="el-icon-lock"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="bgc-autumn-sure"
                  type="primary"
                  size="mini"
                  @click="onSubmit"
                  >登录</el-button
                >
                <el-button class="bgc-autumn-cancel" type="warning" size="mini"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div id="windmill" class="windmill-1 time-2">
        <div class="pillar"></div>
        <div class="windmill-top">
          <div class="shaft"></div>
          <div class="fan-1"></div>
          <div class="fan-2"></div>
          <div class="fan-3"></div>
        </div>
      </div>

      <div id="windmill" class="windmill-2 time-1">
        <div class="pillar"></div>
        <div class="windmill-top">
          <div class="shaft"></div>
          <div class="fan-1"></div>
          <div class="fan-2"></div>
          <div class="fan-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Autumn1 from "@/assets/autumn_1.jpg";
export default {
  data() {
    return {
      imageUrl: Autumn1,
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("login", this.form);
    },
  },
  created() {},
};
</script>

<style scoped>
#autumn {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../assets/autumn.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}

.center {
  position: relative;
  width: 80%;
  height: 80%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  text-align: left;
}

.center .left-side {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.center .left-side div[class^="left-title"] {
  padding: 10px;
}

.center .left-side .left-title {
  font-size: 1.8em;
  font-weight: 600;
}

.center .left-side .left-title-info {
  margin-top: 20px;
}
.center .right-side {
  position: relative;
  flex: 2;
}

.center .right-side > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.center .right-side > div:nth-child(1) {
  width: 500px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.3);
}

.center .right-side > div:nth-child(2) {
  width: 450px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.6);
}
.center .right-side > div:nth-child(3) {
  width: 400px;
  height: 450px;
  background-color: #fff;
}

.login {
  width: 100%;
  height: 100%;
  padding: 50px 30px;
}
.login .login-header {
  padding: 20px 0;
}

.login .login-header .login-header-title {
  font-size: 1.5em;
  font-weight: 600;
  color: #f9c32d;
  border-bottom: 2px solid #f9c32d;
  padding-bottom: 10px;
}
.login .login-center form .el-form-item {
  margin: 10px 0;
}
.login .login-center form label {
  color: #f2a018;
  font-size: 16px;
}

.login .login-center > form button {
  width: 48%;
  border-radius: 5px;
  font-size: 15px;
}
::v-deep .border-color input:focus,
::v-deep .border-color input:hover {
  border: 1px solid #f2a018;
}

.bgc-autumn-sure {
  background-color: rgba(148, 42, 9, 0.8);
  border-color: #942a09;
  color: #fff;
}
.bgc-autumn-cancel {
  background-color: rgba(255, 191, 7, 0.8);
  border-color: #ffbf07;
  color: #fff;
}
.windmill-1 {
  top: 188px;
  left: 140px;
}

.windmill-2 {
  top: 249px;
  left: 527px;
}
</style>