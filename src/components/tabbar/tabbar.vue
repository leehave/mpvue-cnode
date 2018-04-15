<template>
  <div class="weui-tab">
    <view class="weui-tab-item" v-for="(item,index) in tabList" :key="index" @tap="swichNav">
      {{item.title}}
    </view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    tabList: {
      type: Array
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  methods: {
    swichNav(e) {
      const { current } = e.target.dataset;
      console.log(this.tabList);
      if (this.currentTab === current) {
        return false;
      } else {
        this.$emit("update:currentTab", current);
      }
    }
  }
};
</script>
<style>
.weui-tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}
.weui-tab .weui-tab-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: -webkit-linear-gradient(
      top,
      #e5e5e5,
      #e5e5e5,
      rgba(229, 229, 229, 0)
    )
    bottom left no-repeat;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0))
    bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: #666;
}
.weui-tab .weui-tab-item.weui-tab-selected {
  color: #ff9900;
  border-bottom: 3px solid #ff9900;
}
.weui-tab {
  width: 100%;
}
</style>
