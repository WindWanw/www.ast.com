<template>
  <div id="spring">
    <div class="center">
      <div v-for="(item, index) in imageList" :key="index">
        <div class="image">
          <img :src="item" alt="" />
        </div>
      </div>
      <div>
        <div class="login">
          <div class="login-header">Astrology</div>
          <div class="login-center">
            <el-form ref="form" :model="form">
              <el-form-item>
                <el-input
                  class="border-color"
                  size="mini"
                  v-model="form.username"
                  prefix-icon="el-icon-user"
                  placeholder="请输入账号名称"
                ></el-input>
              </el-form-item>
              <el-form-item>
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
                  class="bgc-winter-sure"
                  type="primary"
                  size="mini"
                  @click="onSubmit"
                  >登录</el-button
                >
                <el-button class="bgc-winter-cancel" type="warning" size="mini"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Winter1 from "@/assets/winter_1.jpg";
import Winter2 from "@/assets/winter_2.jpg";
import Winter3 from "@/assets/winter_3.jpg";
import Winter4 from "@/assets/winter_4.jpg";
export default {
  data() {
    return {
      imageList: [Winter1, Winter2, Winter3, Winter4],
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
};
</script>

<style scoped>
#spring {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../assets/winter.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.center {
  position: relative;
  width: 80%;
  height: 80%;
  align-self: center;
  text-align: left;
}

.center > div {
  position: absolute;
  background-color: rgba(209, 231, 252, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.center > div:nth-child(1) {
  left: 17%;
  top: 40%;
  width: 100px;
  height: 100px;
}
.center > div:nth-child(2) {
  left: 20%;
  top: 50%;
  width: 150px;
  height: 150px;
}
.center > div:nth-child(3) {
  left: 27%;
  top: 35%;
  width: 200px;
  height: 200px;
}
.center > div:nth-child(4) {
  left: 35%;
  top: 55%;
  width: 250px;
  height: 250px;
}
.center > div:nth-child(5) {
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 300px;
}

.center .image {
  width: 100%;
  height: 100%;
}

.center .image img {
  width: 100%;
  height: 100%;
}

.login {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid #fff;
  background-color: rgba(240, 247, 255, 0.3);
}

.login .login-header {
  font-size: 1.5em;
  font-weight: 600;
  color: #f788b5;
  padding-bottom: 20px;
}

.login .login-center > form button {
  width: 48%;
  border-radius: 5px;
  font-size: 15px;
}
::v-deep .border-color input:focus,
::v-deep .border-color input:hover {
  border: 1px solid #bfc3cf;
}

.bgc-winter-sure {
  background-color: rgba(140, 47, 63, 0.8);
  border-color: #8c2f3f;
  color: #fff;
}
.bgc-winter-cancel {
  background-color: rgba(191, 195, 207, 0.8);
  border-color: #bfc3cf;
  color: #fff;
}
</style>