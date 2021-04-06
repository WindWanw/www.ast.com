<template>
  <div id="header">
    <div class="header-left">
        <div class="header-logo">
            Astrology
        </div>
        <div>
            <i class="iconfont iconoutdent"></i>
        </div>
    </div>
    <div class="header-right">
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="iconfont iconyonghu"></i>
            <span>admin 超级管理员</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="iconfont iconmima"></i>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="iconfont iconxiaoxi2"></i>
            <span>消息</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="iconfont iconxiaoxi"></i>
              <span>系统消息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="iconfont iconbiaoqiankuozhan_xiaoxi-137"></i>
              <span>用户消息</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-link :underline="false">
          <i class="iconfont iconzhuxiaologout11"></i>
          <span>退出登录</span>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
  background-color: rgba(44, 51, 61);
  display: flex;
  justify-content: space-around;
}
.header-left {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.header-right {
  flex: 3;
  display: flex;
  justify-content: flex-end;
}
.header-right > div {
  margin: 0 30px;
}

.header-right .el-dropdown {
  color: #fff;
}

.header-right .el-link.el-link--default {
    color: #fff;
}
</style>