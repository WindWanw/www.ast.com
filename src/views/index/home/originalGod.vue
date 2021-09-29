<template>
  <div class="original-god">
    <div class="center">
      <el-row>
        <el-col>
          <div class="title">原神</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="form.logUrl"
            type="textarea"
            placeholder="https://webstatic.mihoyo.com/hk4e/event/e20190909gacha/index.html?...#/log"
            :autosize="{ minRows: 5, maxRows: 10 }"
            resize="none"
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="btn">
          <el-button size="mini" type="danger" @click="analyse">分析</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="result">
          <span v-for="(item, index) in dataList" :key="index">
            <el-tag
              v-if="item.rank_type > 3"
              size="medium"
              :class="getTagColor(item.rank_type)"
              effect="dark"
              >{{ index + 1 }}.{{ item.name }}</el-tag
            >
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        logUrl: "",
      },
      config: {
        gacha_type: 301,
        page: 1,
        size: 20,
        end_id: 0,
      },

      currentData: [],
      dataList: [],
      currentFlag: true,

      maxPage: 20,
    };
  },
  methods: {
    getTagColor(type) {
      switch (type) {
        case "3":
          return "";

        case "4":
          return "purple";
        case "5":
          return "gold";
      }
    },
    analyse() {
      let l = this.form.logUrl;

      let _config = {};

      if (!l) {
        this.$message.warning("请填写正确的log地址");
        return false;
      }

      let _l = decodeURIComponent(l);

      let params = _l
        .substring(_l.indexOf("?") + 1, _l.lastIndexOf("#"))
        .split("&");

      params.forEach((item) => {
        let _p = item.replace("=", "*").split("*");

        _config[_p[0]] = _p[1];
      });

      if (_config) {
        this.getLog(_config);
      }
    },

    async getLog(c) {
      let form = Object.assign({}, c, this.config);

      this.currentData = [];
      this.dataList = [];

      while (true) {
        await this._getLog(form).then((res) => {
          this.currentData = this.currentData.concat(res);

          this.currentFlag = res && res.length ? true : false;
        });

        if (this.currentFlag) {
          form.end_id = this.currentData.length
            ? this.currentData[this.currentData.length - 1]["id"]
            : 0;

          form.page++;
        } else {
          break;
        }
      }

      this.dataList = this.currentData.reverse();

      console.log(this.dataList);
    },

    async _getLog(form) {
      let response;

      await this.$api.getYsLog(form).then((res) => {
        response = res.data.list;
      });

      return response;
    },
  },
  created() {
    // this.getLog();
    //https://webstatic.mihoyo.com/hk4e/event/e20190909gacha/index.html?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&gacha_id=81b5e01fe6c50a6b9c88e94c51c312b1790141&timestamp=1630453166&lang=zh-cn&device_type=mobile&ext=%7b%22loc%22%3a%7b%22x%22%3a1673.5477294921875%2c%22y%22%3a201.14666748046876%2c%22z%22%3a288.9316101074219%7d%2c%22platform%22%3a%22Android%22%7d&game_version=CNRELAndroid2.1.0_R4458120_S4398912_D4465483&region=cn_gf01&authkey=7esPq9TNKwQgoBWA%2fVVNIpRZMP7LMxMGUXLC4Pg0sQJb0tVz9w7x0pzvWb8zy06wSm9%2blx0a6Keny%2b30WFxFOrWObCoCl8%2bklu5j5o3Ne6Ht%2fril0iNdRkrXUL88a0gL8WZZ4QCJeTGodKDo4rugDWoqK0A3Do34D%2f0OoxYsPi6xI9IEAC2fEXfix1YnJ6UPT8PkDQ43EzEzkRJiBtuLhC1gfmn7NiDubf6nTnpin5O9sB8ffU2Dye30Rd1uqLdLJUMddXuRubh3f1MMb1WwSuHj24HZbnJXi1S2uJPqdc0%2bgZyLTNLnXvhyP1dBTpeE8w7d6ocPF5m5oV3T60u%2faHKhmYQlUTKtAr5%2fmL8JMjyUYiJIyXnKaps16dSMPxz%2bHMFsrGRbwXQvLKbgFWEppRBoqOuMdjGc2EHavxb8ZddhvCD3Gti%2bJo%2fX7jBaiQEFNBt7IVk7iZWR32zDomOSevIIC8%2bVUd%2fcajygjKgjrXis8PO0axp%2fe8RX%2fk35yKL%2bvWLjiR4dzvxrIs6BMRsG8f7Pgtqc1c5zFYRLWFJE8BeA6tcE%2bnM5kipNgeeRr%2by16PT%2bPN4fsD6Z%2bC%2fp3D2nlCQPX%2f45BykpCQSozrtKQa1Ge5vA1KESJz5O4FiUNRBWb5PU3KYkZZjqDWh1iDlusOZAgVwgfIfE2%2bAvgl2yyjp2C33mUXvwJsxtdqewnaXmO7hF8cdSVFnqAAybBEFRkmMgMsnUcOWzjuBDv2dUEOg9Nok4Pwwu0CsnkkK3ur6Hyi3%2bVusSCDzKJW2n2%2fnBsgX6AG37ulp5zOyd5cysTQ9%2bBpWFDT9M4PliplEjTeaCI8omnbnhS1wFnAidY5a%2bkSqWBz%2fuV5wmuSIEmt0mWbc3Zs7BLIxe9O3PcD9KDY%2bTuis5DNly0Jhe3X9G1FHpGJivpsQeoNtu2YF%2bMpetROxccvAW08rbBWBLoMU%2bEGnIiSFFuRlM9H1qFMXPjZaMynm%2fCf2J3aeN4b4rbe12haTLB4RCC51RuxdcZodB4aO9U9637%2f%2bLthtv8iofoucEFYCG5QBmsmTICgr2Kfkb3lIlyZsWon%2bdWEQTvZzt%2fcjuIlIIZv7RvkIdtzrUkOXcCzSE7CxJyR8jS5pDaVvrY9rbu5U5Xk0u63%2bZD6Gmd9FplU2zh5MVbymvfAqapR7Uf%2fSXoVDUJMZVpk6wgY6%2b57kVhd%2bWdvYG6Gml1wMBI3UWaj6%2fOJJHR85UyScFf9ghUYfP0HEGzxurG1i1T9eH2tTVK9kYERpw5wxc64Eh4gnCOuBTTJrzW8F0P0z1l2D2sGyFMnWW9oiqiP%2fRW8Nbu2CR38u2f8mHexK%2b835WmbBQ2YcuyTrt3T1Ao0VcLwzxSw%3d%3d&game_biz=hk4e_cn#/log
  },
};
</script>
<style scoped>
.el-col {
  padding: 5px;
}
.original-god {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../../assets/yuanshen.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.title {
  padding: 10px;
  text-align: center;
  font-weight: 900;
  font-size: 3em;
  font-family: sans-serif;
  background: -webkit-linear-gradient(45deg, #2040f1, #fcd72d, #5f2cf8);
  -webkit-background-clip: text;
  color: transparent;
  /*设置字体颜色透明*/
  animation: ran 10s linear infinite;
  /*动态10s展示*/
}

@keyframes ran {
  from {
    backgroud-position: 0 0;
  }
  to {
    background-position: 2000px 0;
  }
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  width: 50%;
}

.btn {
  text-align: center;
}

.purple {
  background-color: purple;
  border-color: purple;
  color: #fff;
}

.gold {
  background-color: rgb(245, 216, 51);
  border-color: rgb(245, 216, 51);
  color: #fff;
}

.el-tag {
  margin: 5px;
}

.result {
  max-height: 400px;
  overflow: auto;
}
</style>