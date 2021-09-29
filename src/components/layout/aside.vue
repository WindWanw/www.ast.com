<template>
  <el-menu
    :default-active="active"
    :router="true"
    unique-opened
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 一级菜单 -->
    <template v-for="item in asideList">
      <el-submenu
        v-if="item.children && item.children.length && getAuthPath(item.name)"
        :index="item.path"
        :key="item.path"
      >
        <template slot="title">
          <i :class="item.meta.iconfont"></i>
          <span>{{ item.meta.name }}</span>
        </template>

        <!-- 二级菜单 -->
        <template v-for="itemChild in item.children">
          <el-submenu
            v-if="
              itemChild.children &&
              itemChild.children.length &&
              getAuthPath(itemChild.name)
            "
            :index="itemChild.path"
            :key="itemChild.path"
          >
            <template slot="title">
              <i :class="itemChild.meta.iconfont"></i>
              <span>{{ itemChild.meta.name }}</span>
            </template>

            <!-- 三级菜单 -->
            <template v-for="itemChild_Child in itemChild.children">
              <el-menu-item
                v-if="getAuthPath(itemChild_Child.name)"
                :index="itemChild_Child.path"
                :key="itemChild_Child.path"
              >
                <i :class="itemChild_Child.meta.iconfont"></i>
                <span slot="title">{{ itemChild_Child.meta.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item
            v-else-if="getAuthPath(itemChild.name)"
            :index="itemChild.path"
            :key="itemChild.path"
          >
            <i :class="itemChild.meta.iconfont"></i>
            <span slot="title">{{ itemChild.meta.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>

      <el-menu-item
        v-else-if="getAuthPath(item.name)"
        :index="item.path"
        :key="item.path"
      >
        <i :class="item.meta.iconfont"></i>
        <span slot="title">{{ item.meta.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
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
    return {
      active: this.$route.path,
    };
  },
  methods: {},
  computed: {
    asideList() {
      return this.$store.getters.asideList;
    },
  },
  watch: {
    $route(to, from) {
      this.active = this.$route.path;
    },
  },
  components: {},
  methods: {
    //检测路由
    getAuthPath(name) {
      let localhost = ["192.168.2.238", "localhost"];

      if (localhost.indexOf(window.location.hostname) !== -1) {
        return true;
      }
      let router = this.$store.getters.path;

      for (let i in router) {
        if (router[i].code == name && router[i].status == "1") {
          return true;
        }
      }

      return false;
    },
  },
  created() {
    this.active = this.$route.path;
  },
};
</script>

<style>
.el-menu {
  height: 100%;
  text-align: left;
  font-size: 15px;
  /* border-right: none; */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.el-menu-item {
  border-left: 4px solid transparent;
}
.el-menu-item.is-active {
  border-left: 4px solid #ffd04b;
  font-size: 16px;
}

.el-menu-item:hover,
.el-submenu__title:hover,
.el-menu-item i:hover,
.el-submenu__title i:hover {
  font-size: 16px;
}

.el-menu-item i,
.el-submenu__title i {
  font-size: 15px;
  color: #fff;
  padding: 0 10px;
}
</style>
