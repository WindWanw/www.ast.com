<template>
  <div id="header">
    <div class="header-left">
      <div class="header-logo">Astrology</div>
      <div>
        <i
          class="iconfont"
          :class="isCollapse ? 'iconzhankai1' : 'iconoutdent'"
          :title="isCollapse ? '点击展开' : '点击收缩'"
          @click="collapse()"
        ></i>
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
      <div class="logout">
        <el-link :underline="false" @click="logout()">
          <i class="iconfont iconzhuxiaologout11"></i>
          <span>退出登录</span>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    collapse() {
      this.$emit("getAsideCollapse");
    },
    //退出登录
    logout() {
      this.$confirm("确定要退出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then((_) => {
        //跳转到登录界面
        this.$router.replace("/login");
        //清除当前token
        localStorage.clear("token");
      });
    },
  },
  created() {},
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(44, 51, 61);
  display: flex;
  justify-content: space-around;
}

.iconfont {
  cursor: pointer;
}

.header-left {
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
}

.header-left > div {
  margin: 0 10px;
}

.header-left .header-logo {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 1.8em;
  font-weight: 600;
}

.header-left .iconfont {
  font-size: 1.5em;
}
.header-left .iconfont:hover {
  font-size: 1.8em;
}
.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.header-right > div {
  margin: 0 30px;
}

.header-right .el-dropdown,
.header-right .el-link.el-link--default {
  color: #fff;
}

.logout:hover {
  transform: scale(1.1, 1.1);
}
</style>