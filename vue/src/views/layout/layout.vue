<template>
  <div>
    <mt-header ref="title" :title="title" fixed>
      <mt-button icon="back" @click="handleclick" slot="left"></mt-button>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="routercont">
      <router-view></router-view>
    </div>
    <!-- <mt-swipe :show-indicators="false" style="width:100%;height:500px;">
      <mt-swipe-item v-for="(item,index) in num" :key="index">
        <img :src="getImgurl(item)" :alt="index" style="width:100%;height:100%;" />
      </mt-swipe-item>
    </mt-swipe>-->
  </div>
</template>

<script>
import { Header } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
export default {
  name: "",
  data() {
    return {
      num: [1, 2, 3, 4, 5]
    };
  },
  created() {},
  methods: {
    getImgurl(num) {
      return require("@/assets/class" + num + ".png");
    },
    handleclick() {
      var paths = location.pathname.split("/");
      if (!(paths[1] == "fishing" && paths[2] == "default")) {
        this.$router.go(-1);
      }
    }
  },
  computed: {
    title() {
      return this.$store.state.user.title;
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.routercont {
  margin: 1.2rem 0;
}
</style>
