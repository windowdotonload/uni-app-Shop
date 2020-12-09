<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view class="userContiner">
    <view class="topBac">
      <image
        class="bac"
        mode="scaleToFill"
        :src="userinfo.userInfo.avatarUrl"
      ></image>
      <image
        mode="aspectFit"
        class="showAvatar"
        :src="userinfo.userInfo.avatarUrl"
      ></image>
    </view>

    <view class="Menu"> </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {},
    };
  },
  onShow() {
    uni.getUserInfo({
      provider: "weixin",
      success: (infoRes) => {
        console.log(infoRes);
        this.userinfo = infoRes;
        uni.setStorageSync("userinfo", infoRes);
      },
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.userContiner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.topBac {
  width: 100%;
  height: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  .bac {
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }
  .showAvatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
  }
}
.Menu {
  width: 98%;
  height: 100px;
  background: red;
  position: relative;
  margin-top: -180px;
}
</style>
