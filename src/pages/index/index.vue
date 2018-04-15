<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <tabbar  :tabList="this.tabList"></tabbar>
    <div class="list">
      <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
                <div v-for="(item,index) in topics" :key="index" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="item.author.avatar_url" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.title}}</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import { baseUrl } from "@/utils/api";
import tabbar from "@/components/tabbar/tabbar";
import { tabList } from "@/utils/tabitem";
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      topics: [],
      page: 1, // 当前页
      total: 9999, // 总条数
      currentTab: 0,
      tabList: tabList
    };
  },

  components: {
    card,
    tabbar
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    fetchTopics() {
      console.log("测试测试");
      this.$http
        .get(baseUrl.cnode + "/topics", {
          params: {
            limit: 40,
            mdrender: false,
            tab: "all",
            page: this.page
          }
        })
        .then(res => {
          this.topics = res.data.data;
          console.log(this.topics);
        })
        .catch();
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo(), this.fetchTopics();
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.weui-media-box{
  display: flex;
  padding: 15px;
  position: relative
}
.weui-media-box:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1rpx solid #e5e5e5;
  color: #e5e5e5;
  left: 15px
}

.weui-media-box:first-child:before {
  display: none
}
.weui-media-box__hd {
  margin-right: 0.8em;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.weui-media-box .weui-media-box__hd {
  width: 60px;
  height: 60px;
   overflow: hidden;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
        flex-basis: 60px;
}
.weui-media-box__thumb{
  width: 60px;
  height: 60px;

}
.weui-media-box__bd{
  overflow: hidden;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.weui-media-box__bd .weui-media-box__title{
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;

}
</style>
