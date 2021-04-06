<template>
  <div id="summer">
    <div class="center">
      <div class="photo" v-for="(item, index) in imageList" :key="index">
        <div class="photo-frame">
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="login">
        <div class="login-header">Astrology</div>
        <div class="login-center">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input
                size="mini"
                v-model="form.username"
                prefix-icon="el-icon-user"
                placeholder="请输入账号名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
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
                class="bgc-summer-sure"
                type="primary"
                size="mini"
                @click="onSubmit"
                >登录</el-button
              >
              <el-button type="warning" size="mini">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-bottom"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Summer1 from "@/assets/summer_1.jpg";
import Summer2 from "@/assets/summer_2.jpg";
import Summer3 from "@/assets/summer_3.jpg";
import Summer4 from "@/assets/summer_4.jpg";
import Summer5 from "@/assets/summer_5.jpg";
import Summer6 from "@/assets/summer_6.jpg";
export default {
  data() {
    return {
      imageList: [Summer1, Summer2, Summer3, Summer4, Summer5, Summer6],
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {},
  },
  created() {},
};
</script>

<style scoped>
#summer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../assets/summer.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}

.center {
  position: relative;
  width: 80%;
  height: 50%;
  align-self: center;
}

.center > div {
  position: absolute;
  border-radius: 15%;
}

.center .photo {
  top: 50%;
  transform: translateY(-50%);
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.center .photo .photo-frame {
  width: 100%;
  height: 70%;
  background-color: #fff;
  padding: 5px;
}

.center .photo-frame img {
  width: 100%;
  height: 100%;
}

.center > div:nth-child(1) {
  left: 0;
  width: 15%;
  height: 200px;
  background-image: linear-gradient(#99d4ec, #2493cc);
}
.center > div:nth-child(2) {
  left: 10%;
  width: 18%;
  height: 240px;
  background-image: linear-gradient(#fefdfc, #e0ae82);
}
.center > div:nth-child(3) {
  width: 21%;
  height: 280px;
  left: 20%;
  background-image: linear-gradient(#c1c1cb, #00335f);
}
.center > div:nth-child(4) {
  width: 21%;
  height: 280px;
  right: 20%;
  background-image: linear-gradient(#f9f9f8, #a3b858);
  z-index: 2;
}
.center > div:nth-child(5) {
  width: 18%;
  height: 240px;
  right: 10%;
  background-image: linear-gradient(#f9e4a7, #f8a103);
  z-index: 1;
}
.center > div:nth-child(6) {
  width: 15%;
  height: 200px;
  right: 0;
  background-image: linear-gradient(#eaeaec, #adadad);
}
.center > div:nth-child(7) {
  width: 500px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 3;
}

.center .login {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(#90a8bb, #fcffff, #f5fcfe);
}

.center .login .login-header {
  padding: 20px 0;
  font-size: 1.5em;
  font-weight: 600;
  color: #002156;
  border-bottom: 2px solid rgba(45, 180, 255, 0.1);
}

.center .login .login-center {
  margin: 60px 60px 0 60px;
}

.center .login .login-center > form button {
  width: 48%;
  border-radius: 5px;
  font-size: 15px;
}
.center .login .login-bottom {
  border-top: 2px solid rgba(45, 180, 255, 0.1);
}

.bgc-summer-sure {
  background-color: rgba(1, 114, 137, 0.8);
  border-color: #017289;
  color: #fff;
}
</style>