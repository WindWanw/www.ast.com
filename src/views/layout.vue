<template>
  <div id="layout">
    <div id="header">
      <Header
        @getAsideCollapse="getAsideCollapse"
        :isCollapse="isCollapse"
      ></Header>
    </div>
    <div id="main">
      <div id="aside">
        <Aside :isCollapse="isCollapse"></Aside>
      </div>
      <div id="content">
        <div id="content-menu">
          <Menu></Menu>
        </div>
        <div id="content-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="footer">Astrology-占星 @author：ww 后台管理系统</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import Aside from "@/components/layout/aside";
import Menu from "@/components/layout/menu";
export default {
  data() {
    return {
      isCollapse: false,
      avatar: "",
    };
  },
  components: { Header, Aside, Menu },
  methods: {
    getAsideCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  created() {},
};
</script>

<style scoped>
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #efeef3;
  /* min-width: 1024px; */
}

#header {
  min-height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 14px;
}
#main {
  flex: 1;
  display: flex;
}
#aside {
  background-color: #545c64;
}
#content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#content-menu,
#content-main {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

#content-main {
  margin:20px;
  flex: 1;
}

#footer {
  min-height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(44, 51, 61);
}
</style>