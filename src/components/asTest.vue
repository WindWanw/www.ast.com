<template>
  <div class="as-test">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="最高等级:">
            <el-select
              v-model="form.h_level"
              placeholder="请选择素材的最高等级"
              title="请选择素材的最高等级"
              size="mini"
              clearable
            >
              <el-option
                v-for="(item, index) in hLevelList"
                :key="index"
                :label="item.title"
                :value="item.value"
                :style="'color:' + item.color"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="所需数量:">
            <el-input
              v-model="form.h_num"
              size="mini"
              placeholder="请填写最高等级素材所需数量"
              title="请填写最高等级素材所需数量"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="进阶倍率:">
            <el-input
              v-model="form.mag"
              size="mini"
              placeholder="请填写素材进阶倍率"
              title="请填写素材进阶倍率"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="form.h_level >= 4">
        <el-col :span="8">
          <el-form-item label="金色素材:">
            <el-input
              v-model="form.gold"
              placeholder="请填写金色素材数量"
              size="mini"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="form.h_level >= 3">
        <el-col :span="8">
          <el-form-item label="紫色素材:">
            <el-input
              v-model="form.purple"
              placeholder="请填写紫色素材数量"
              size="mini"
              clearable
            ></el-input
          ></el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="form.h_level >= 2">
        <el-col :span="8">
          <el-form-item label="蓝色素材:">
            <el-input
              v-model="form.blue"
              placeholder="请填写蓝色素材数量"
              size="mini"
              clearable
            ></el-input
          ></el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="form.h_level >= 1">
        <el-col :span="8">
          <el-form-item label="绿色素材:">
            <el-input
              v-model="form.green"
              placeholder="请填写绿色素材数量"
              size="mini"
              clearable
            ></el-input
          ></el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="text-align: center">
          <el-button
            size="mini"
            type="success"
            title="点击获取计算结果"
            @click="onSubmit"
            >确定</el-button
          >
        </el-col>
      </el-row>
    </el-form>

    <el-dialog
      title="计算结果"
      :visible.sync="dialogVisible"
      width="60%"
      center
    >
      <div class="result">
        <span v-if="_purple" style="color: #8552a1">
          需要[雾海云丹]:{{ _purple }}个
        </span>
        <span v-if="_blue" style="color: #145b7d">
          需要[漆黑陨铁]:{{ _blue }}个/
        </span>
        <span v-if="_green" style="color: #45b97c">
          需要[凛风奔狼]:{{ _green }}个
        </span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const color = ["#45b97c", "#145b7d", "#8552a1", "#c37e00"];

const name = ["凛风奔狼", "漆黑陨铁", "雾海云丹", "孤云寒林"];
export default {
  name: "as-test", //全局测试组件
  components: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        h_level: "",
        h_num: "",
        mag: "",
        gold: "",
        purple: "",
        blue: "",
        green: "",
      },

      hLevelList: [],

      _purple: 0,
      _blue: 0,
      _green: 0,
    };
  },
  methods: {
    getHLevelList() {
      this.hLevelList = [];

      let num = 4;

      while (num > 1) {
        this.hLevelList.push({
          title: num + "." + name[num - 1],
          value: num,
          color: color[num - 1],
        });

        num--;
      }
    },

    onSubmit() {
      let f = this.form;

      let h_level = f.h_level || 0;
      let h_num = f.h_num || 0;
      let mag = f.mag || 0;
      let gold = f.gold || 0;
      let purple = f.purple || 0;
      let blue = f.blue || 0;
      let green = f.green || 0;

      let _h_num = 0;

      switch (h_level) {
        case 4:
          _h_num = h_num - gold; //实际需要数
          this._purple = _h_num * mag - purple;
          this._blue = _h_num * mag * mag - blue;
          this._green = _h_num * mag * mag * mag - green;
          break;
        case 3:
          _h_num = h_num - purple; //实际需要数
          this._blue = _h_num * mag * mag - blue;
          this._green = _h_num * mag * mag * mag - green;
          break;
        case 2:
          _h_num = h_num - blue; //实际需要数
          this._green = _h_num * mag * mag * mag - green;
          break;
      }

      this.dialogVisible = true;
    },

    _run() {
      this.getHLevelList();
    },
  },
  created() {
    this._run();
  },
};
</script>
<style scoped>
.as-test {
  padding: 10px 30px;
}

.as-test .el-select,
.as-test .el-input {
  width: 80%;
}
</style>