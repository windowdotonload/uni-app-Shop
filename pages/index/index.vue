<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view class="home">
    <swiper indicator-dots>
      <swiper-item v-for="item in swiperData" :key="item.goods_id">
        <image :src="item.image_src"></image>
      </swiper-item>
    </swiper>
    <!-- 导航 -->
    <view class="nav">
      <div class="wrap">
        <div class="navigation">
          <image src="../../static/chaoshi1.svg"></image>
        </div>
        <p>优选商城</p>
      </div>
      <div class="wrap">
        <div class="navigation">
          <image src="../../static/lianxisvg.svg"></image>
        </div>
        <p>联系我们</p>
      </div>
      <div class="wrap">
        <div class="navigation">
          <image src="../../static/tupiansvg.svg"></image>
        </div>
        <p>精选图片</p>
      </div>
      <div class="wrap">
        <div class="navigation">
          <image src="../../static/shipin1.svg"></image>
        </div>
        <p>共享视频</p>
      </div>
    </view>
    <view class="recommend">
      <p>推荐商品</p>
    </view>
  </view>
</template>

<script>
import { myRequest } from "util/api";
export default {
  data() {
    return {
      swiperData: [],
      current: 0,
      mode: "round",
    };
  },
  onLoad() {
    this.getSwipers();
  },
  methods: {
    async getSwipers() {
      try {
        let res = await myRequest("/home/swiperdata", "GET", { msg: "123" });
        // console.log(res);
        this.swiperData = res.data.message;
        console.log("swiperdata", this.swiperData);
      } catch (err) {
        uni.showToast(err);
      }
    },
  },
};
</script>

<style lang='scss'>
.home {
  swiper {
    width: 750rpx;
    height: 380rpx;
    image {
      height: 100%;
      width: 100%;
    }
  }
}
.nav {
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.wrap {
  display: flex;
  width: 80px;
  justify-content: center;
  flex-wrap: wrap;
  p {
    margin-top: 10px;
  }
}
.navigation {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 234, 167, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  image {
    width: 70%;
    height: 70%;
  }
}
.recommend {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-top: 15px;
  background: rgba(116, 185, 255, 0.6);
  border-radius: 10px;
  text-align: center;
  font-size: 26px;
  color: rgba(99, 110, 114, 1);
  letter-spacing: 1em;
}
</style>
