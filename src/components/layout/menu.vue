<template>
  <div id="menu">
    <router-link
      class="href"
      v-for="(item, index) in menuList"
      :key="index"
      :to="item.path"
    >
      <el-button
        :type="item.path == $route.path ? 'primary' : ''"
        size="mini"
        :class="item.meta.iconfont"
      >
        {{ item.meta.name }}
        <span
          v-if="menuList.length != 1"
          class="el-icon-close"
          @click.prevent.stop="closeTags(item)"
        ></span>
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    menuList() {
      return this.$store.getters.menuList;
    },
  },
  watch: {
    //  添加标签页
    $route(to, from) {
      this.$store.dispatch("addTab", to);
    },
  },
  methods: {
    //  删除标签页，当标签页是当前页删除跳转到上一个页面
    closeTags(item) {
      this.$store.dispatch("delTab", item).then((res) => {
        if (item.path == this.$route.path) {
          this.$router.push(res[res.length - 1].path);
        }
      });
    },
  },
  created() {
    this.$store.dispatch("addTab", this.$route);
  },
};
</script>

<style scoped>
#menu {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.href {
  margin: 5px;
}
</style>