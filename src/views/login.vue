<template>
  <div id="login">
    <div class="login-select-season" v-if="isShow">
      <el-radio-group
        v-model="type"
        v-for="(item, index) in season"
        :key="index"
        @change="setSeason"
      >
        <el-radio-button :label="item.key">{{ item.title }}</el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="type == 1">
      <spring @login="login"></spring>
    </div>
    <div v-else-if="type == 2">
      <summer @login="login"></summer>
    </div>
    <div v-else-if="type == 3">
      <autumn @login="login"></autumn>
    </div>
    <div v-else>
      <winter @login="login"></winter>
    </div>
  </div>
</template>

<script>
import Spring from "@/components/login/spring";
import Summer from "@/components/login/summer";
import Autumn from "@/components/login/autumn";
import Winter from "../components/login/winter.vue";
export default {
  data() {
    return {
      type: 2,
      isShow: false,
      season: [
        {
          key: 1,
          value: [3, 4, 5],
          title: "春",
        },
        {
          key: 2,
          value: [6, 7, 8],
          title: "夏",
        },
        {
          key: 3,
          value: [9, 10, 11],
          title: "秋",
        },
        {
          key: 4,
          value: [12, 1, 2],
          title: "冬",
        },
      ],

      url: "",
    };
  },
  components: { Spring, Summer, Autumn, Winter },
  methods: {
    _getLoginType() {
      let now = new Date();

      let month = now.getMonth() + 1;

      this.season.forEach((item) => {
        if (item.value.indexOf(month) !== -1) {
          this.type = item.key;
        }
      });
    },

    setSeason(value) {
      this.$func.setCache("season_type", value);
    },

    _getSeason() {
      let s_type = this.$func.getCache("season_type");

      if (s_type) {
        this.type = s_type;
      }
    },

    getLoginType() {
      let localhost = ["192.168.2.238", "localhost"];

      if (localhost.indexOf(window.location.hostname) !== -1) {
        this.isShow = true;
        this._getSeason();
      } else {
        this._getLoginType();
      }
    },

    login() {
      this.$router.replace(this.url);
    },

    //跳转路由
    routerPush() {
      this.url = this.$route.query.redirect || "/home";

      if (this.$func.getCache("token")) {
        this.$router.replace(this.url);
      }
    },

    _run() {
      this.routerPush();
      this.getLoginType();
    },
  },
  created() {
    this._run();
  },
};
</script>

<style>
.login-select-season {
  position: absolute;
  z-index: 1;
}
</style>