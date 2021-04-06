<template>
  <div id="layout">
    <div id="header">
      <Header></Header>
    </div>
    <div id="main">
      <div id="aside">
        <Aside></Aside>
      </div>
      <div id="content">
        <div id="content-menu">
          <Menu></Menu>
        </div>
        <div id="content-main">1</div>
      </div>
    </div>
    <div id="footer">底部</div>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import Aside from "@/components/layout/aside";
import Menu from "@/components/layout/menu";
export default {
  data() {
    return {};
  },
  components: { Header, Aside, Menu },
  methods: {},
  created() {},
};
</script>

<style scoped>
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 1024px;
}

#header {
}
#main {
  flex: 1;
  display: flex;
}
#content {
  flex: 1;
}
</style>