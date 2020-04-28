<template>
  <div class="evaluate">
    <div class="evaluate_title">
      <span>综合评分</span>
      <span>{{grade}}</span>
    </div>
    <div class="wire"></div>
    <div class="evaluate_content">
      <div class="main-wrap" v-for="(item,index) in evaluateList" :key="index">
        <div class="revtit">
          <span>{{item.content+':'}}</span>
        </div>
        <div class="star">
          <ul class="star_ul">
            <li
              :num="child_item"
              v-for="(child_item,child_index) in item.imgList"
              :key="child_index"
            >
              <div class="img_div">
                <img
                  :src="child_item.flag==0?noCheckUrl:checkUrl"
                  class="xing_hui"
                  @click="handleClick(item.id,child_item)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default {
  props: ["name"],
  name: "evaluateView",
  data() {
    return {
      grade: "5.00",
      noCheckUrl: require("@/assets/evaluate/star_empty.png"),
      checkUrl: require("@/assets/evaluate/star_full.png"),
      evaluateList: [
        {
          id: 0,
          content: "内容实用",
          number: 0,
          imgList: [
            {
              id: 0,
              flag: 0
            },
            {
              id: 1,
              flag: 0
            },
            {
              id: 2,
              flag: 0
            },
            {
              id: 3,
              flag: 0
            },
            { id: 4, flag: 0 }
          ]
        },
        {
          id: 1,
          content: "通俗易懂",
          number: 0,
          imgList: [
            {
              id: 0,
              flag: 0
            },
            {
              id: 1,
              flag: 0
            },
            {
              id: 2,
              flag: 0
            },
            {
              id: 3,
              flag: 0
            },
            { id: 4, flag: 0 }
          ]
        },
        {
          id: 2,
          content: "逻辑清晰",
          number: 0,
          imgList: [
            {
              id: 0,
              flag: 0
            },
            {
              id: 1,
              flag: 0
            },
            {
              id: 2,
              flag: 0
            },
            {
              id: 3,
              flag: 0
            },
            { id: 4, flag: 0 }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {
    handleClick(id, child) {
      var flag = child.flag;
      this.evaluateList
        .filter(a => a.id == id)[0]
        .imgList.forEach(element => {
          if (flag == 0 && element.id <= child.id) {
            element.flag = 1;
          } else if (flag == 1 && element.id >= child.id) {
            element.flag = 0;
          }
        });
      this.evaluateList.forEach(element => {
        var num = 0;
        element.imgList.forEach(el => {
          if (el.flag > 0) {
            num++;
          }
          element.number = num;
        });
      });
      this.$emit("number", this.evaluateList);
    }
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.evaluate {
  display: inline-flex;
  width: 90%;
  margin-left: 5%;
  background-color: #dbdbdb;
  position: relative;
  .evaluate_title {
    font-size: 0.5rem;
    line-height: 0.8rem;
    text-align: center;
    margin: 0.6rem 1rem;
    span {
      display: block;
    }
  }
  .wire {
    width: 1px;
    height: 70%;
    background-color: #dbdb;
    position: absolute;
    margin: 5% 40%;
  }
  .evaluate_content {
    width: 50%;
    left: 30%;
    margin-top: 0.65rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
    .main-wrap {
      display: inline-flex;
      width: 100%;
      .revtit {
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        span {
          font-size: 0.319rem;
        }
      }
      .star {
        width: 50%;
        .star_ul {
          width: 90%;
          padding: 2% 5%;
          overflow: hidden;
          // margin-top: 7%;
          li {
            float: left;
            font-size: 0.9em;
            color: #666;
            .img_div {
              width: 0.319rem;
              height: 0.319rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
