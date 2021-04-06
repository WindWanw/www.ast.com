<template>
  <div id="spring">
    <div class="center">
      <div class="left-side">
        <div v-for="(item, index) in imageList" :key="index">
          <el-image :src="item.url"></el-image>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="right-side">
        <div>
          <div class="login-header">Astrology</div>
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
                class="bgc-spring-sure"
                type="primary"
                size="mini"
                @click="onSubmit"
                >登录</el-button
              >
              <el-button class="bgc-spring-cancel" type="warning" size="mini"
                >取消</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spring1 from "@/assets/spring_1.jpg";
import Spring2 from "@/assets/spring_2.jpg";
import Spring3 from "@/assets/spring_3.jpg";
export default {
  data() {
    return {
      imageList: [
        { url: Spring1, title: "风很柔和，空气很清新，太阳很温暖" },
        { url: Spring2, title: "吹拂过绿叶的风，变得格外温柔" },
        {
          url: Spring3,
          title: "柳树舒展开了黄绿嫩叶的枝条，在微微的春风中轻柔地拂动",
        },
      ],

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
#spring {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../assets/spring.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}

.center {
  width: 60%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.9);
  align-self: center;
  display: flex;
  justify-content: flex-start;
}

.left-side {
  position: relative;
  width: 60%;
  height: 100%;
}

.left-side > div {
  position: absolute;
  top: 25%;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  background-color: #fff;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.1);
}
.left-side > div:nth-child(1) {
  left: 40%;
  transform: rotate(-10deg);
}
.left-side > div:nth-child(2) {
  left: 30%;
  transform: rotate(10deg);
}
.left-side > div:nth-child(3) {
  left: 10%;
  transform: rotate(-10deg);
}
.left-side > div p {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: rgb(74, 136, 3);
  padding: 0 15px;
}

.right-side {
  position: relative;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.right-side > div {
  width: 100%;
  padding: 80px 10px;

  /* align-self: center; */
}
.login-header {
  font-size: 1.5em;
  font-weight: 600;
  color: rgb(74, 136, 3);
  border-bottom: 2px solid rgb(132, 171, 38);
  padding: 20px;
  margin-bottom: 30px;
}

.right-side > div form {
  padding: 20px;
}

.right-side > div form button {
  width: 45%;
  border-radius: 5px;
  font-size: 15px;
  /* padding: 10px; */
}

.bgc-spring-sure {
  background-color: #8cb42b;
  border-color: #8cb42b;
  color: #fff;
}

.bgc-spring-cancel {
  background-color: rgba(146, 139, 119, 0.8);
  border-color: #928B77;
  color: #fff;
}
::v-deep .border-color input:focus,
::v-deep .border-color input:hover {
  border: 1px solid rgb(132, 171, 38);
}
</style>