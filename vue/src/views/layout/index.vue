<template>
  <div>
    <div class="user">
      <div class="username">
        <div>
          <img src="../../assets/avator1.jpeg" alt="用户头像" />
        </div>
        <span>{{username}}</span>
      </div>
      <div class="usernumber">
        <div>
          <span>答题次数</span>
          <span>{{number}}</span>
        </div>
        <div>
          <span>奖励积分</span>
          <span>{{integral}}</span>
        </div>
      </div>
    </div>
    <div class="content" v-for="(item,index) in list" :key="index">
      <router-link to="trainingCenter/collectTopic">
        <div class="content_img">
          <img :src="getImgurl(item.imgurl)" :alt="item.title" />
        </div>
        <div class="content_text">
          <span class="span_title">{{item.title}}</span>
          <span class="span_text">{{item.text}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      username: "用户名称",
      number: 1,
      integral: 6,
      list: [
        {
          imgurl: "class1",
          title: "开始答题",
          text: "随机练习，加深理解"
        },
        {
          imgurl: "class2",
          title: "答题记录",
          text: "展现近30天的答题记录"
        },
        {
          imgurl: "class3",
          title: "错题重现",
          text: "做错的题可以在这里重新练习"
        }
      ]
    };
  },
  created() {},
  methods: {
    getImgurl(name) {
      return require("@/assets/" + name + ".png");
    }
  },
  computed: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.user {
  height: 3rem;
  margin: 0.5rem 0.5rem 0.5rem 1.5rem;
  .username {
    float: left;
    position: relative;
    div {
      width: 2rem;
      height: 2rem;
      border: 0.053333rem solid #e0e0e0;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      display: block;
      position: absolute;
      left: 50%;
      margin-left: -0.64rem;
      font-size: 0.3rem;
    }
  }
  .usernumber {
    float: left;
    width: 67%;
    margin-left: 0.5rem;
    div {
      display: inline-block;
      height: 1rem;
      line-height: 0.5rem;
      margin-left: 0.5rem;
      margin-top: 0.8rem;
      span {
        font-size: 0.3rem;
        display: block;
        text-align: center;
      }
    }
  }
}
.content {
  background-color: #caced8;
  height: 4rem;
  margin: 0.01rem;
  .content_img {
    width: 3rem;
    height: 2rem;
    float: left;
    margin: 1rem 0 1rem 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content_text {
    float: left;
    height: 2rem;
    line-height: 0.7rem;
    margin-top: 1rem;
    width: 50%;
    border: 0.025rem solid;
    padding: 0.3rem;
    span {
      display: block;
      text-align: left;
    }
    .span_title {
      font-size: 0.5rem;
    }
    .span_text {
      font-size: 0.3rem;
    }
  }
}
</style>
