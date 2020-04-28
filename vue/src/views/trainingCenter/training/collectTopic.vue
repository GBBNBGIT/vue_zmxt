<template>
  <div>
    <div class="time">
      <!-- <span>使用时间</span> -->
      <span>{{time}}</span>
    </div>
    <div class="content">
      <div class="contentcard" v-for="(item,index) in questionList" :key="index">
        <div class="title">
          <span>{{item.index +'.'+ item.title+(item.type == 1?'(单选)':'(多选)')}}</span>
        </div>
        <div v-if="item.type == 1">
          <mt-radio title v-model="item.value" :options="item.options"></mt-radio>
        </div>
        <div v-else>
          <mt-checklist title v-model="item.value" :options="item.options"></mt-checklist>
        </div>
        <mt-button
          size="small"
          type="primary"
          @click="handleResultClick"
          style="position: absolute;right: 1rem;background-color: white;color: black;"
        >答案提示</mt-button>
      </div>
    </div>
    <div>
      <evaluateView ref="evaluate" v-on:number="getnumber"></evaluateView>
    </div>
    <div class="footer">
      <mt-button plain size="normal" type="primary" @click="handleClick">提交</mt-button>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import moment from "moment";
import { Radio, Checklist, MessageBox } from "mint-ui";
Vue.component(Checklist.name, Checklist);
Vue.component(Radio.name, Radio);
import "@/styles/collectTopic/index.css";
import EvaluateView from "@/components/evaluateView";
export default {
  name: "collectTopic",
  data() {
    return {
      time: "0时0分0秒",
      times: 0,
      timeset: null,
      questionList: [
        {
          id: 1,
          index: 1,
          title:
            "停电有可能导致人员伤亡或主要生产设备损坏的用户的用电设备属于(   )",
          value: "",
          options: [
            {
              value: "1",
              label: "一级负荷"
            },
            {
              value: "2",
              label: "二级负荷"
            },
            {
              value: "3",
              label: "三级负荷"
            },
            {
              value: "4",
              label: "特级负荷"
            }
          ],
          type: 1
        },
        {
          id: 2,
          index: 2,
          title:
            "停电有可能导致人员伤亡或主要生产设备损坏的用户的用电设备属于(   )",
          value: [],
          options: [
            {
              value: "1",
              label: "一级负荷"
            },
            {
              value: "2",
              label: "二级负荷"
            },
            {
              value: "3",
              label: "三级负荷"
            },
            {
              value: "4",
              label: "特级负荷"
            }
          ],
          type: 2
        }
      ]
    };
  },
  created() {
    this.timestart();
  },
  beforeDestroy() {
    if (this.timeset) {
      clearInterval(this.timeset);
    }
  },
  methods: {
    timestart() {
      var self = this;
      var time = new Date();
      self.timeset = setInterval(function() {
        self.times = moment(new Date()).valueOf() - moment(time).valueOf();
        self.time =
          Math.floor(self.times / 1000 / 3600) +
          "时" +
          Math.floor((self.times / 1000 / 60) % 60) +
          "分" +
          Math.floor((self.times / 1000) % 60) +
          "秒";
      }, 1000);
    },
    handleClick() {
      console.log(this.questionList);
    },
    handleResultClick() {
      MessageBox("答案提示", "答案详情");
    },
    getnumber(list) {
      console.log(list);
    }
  },
  computed: {},
  components: {
    EvaluateView
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.time {
  line-height: 1rem;
  height: 1rem;
  text-align: center;
  font-size: 0.5rem;
  margin-bottom: 0.1rem;
}
.content {
  margin: 0.1rem;
  .contentcard {
    margin-bottom: 1rem;
    .title {
      width: 98%;
      margin-left: 1%;
      font-size: 0.426rem;
      span {
        line-height: 0.7rem;
      }
    }
  }
}
.footer {
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 2;
  background-color: white;
  button {
    width: 40%;
    height: 1rem;
    margin-bottom: 0.1rem;
  }
}
</style>
