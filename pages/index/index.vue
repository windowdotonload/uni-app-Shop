<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view class="home">
    <mysearch></mysearch>
    <swiper indicator-dots>
      <swiper-item v-for="item in swiperData" :key="item.goods_id">
        <image :src="item.image_src"></image>
      </swiper-item>
    </swiper>
    <!-- 导航 -->
    <view class="nav">
      <div class="wrap">
        <div class="navigation" style="background: rgba(85, 239, 196, 0.6)">
          <image src="../../static/cat.svg"></image>
        </div>
        <p>商品分类</p>
      </div>
      <div class="wrap">
        <div class="navigation">
          <image src="../../static/paimai1.svg"></image>
        </div>
        <p>秒杀拍</p>
      </div>
      <div class="wrap">
        <div class="navigation" style="background: rgba(129, 236, 236, 0.6)">
          <image src="../../static/market.svg"></image>
        </div>
        <p>超市购</p>
      </div>
      <div class="wrap">
        <div class="navigation" style="background: rgba(116, 185, 255, 0.6)">
          <image src="../../static/muying.svg"></image>
        </div>
        <p>母婴品</p>
      </div>
    </view>
    <view class="recommend">
      <p>推荐商品</p>
    </view>
    <!-- 楼层 -->
    <view class="floorContiner" v-for="(item, i) in floorList" :key="i">
      <image :src="item.floor_title.image_src" mode="widthFix"></image>
    </view>
  </view>
</template>

<script>
import { myRequest } from "util/api";
import mysearch from "components/searchinput";
export default {
  components: {
    mysearch,
  },
  data() {
    return {
      swiperData: [],
      floorList: [],
      current: 0,
      mode: "round",
    };
  },
  onLoad() {
    this.getSwipers();
    this.getFloor();
  },
  methods: {
    async getSwipers() {
      try {
        let res = await myRequest("/home/swiperdata", "GET", { msg: "123" });
        // console.log(res);
        this.swiperData = res.data.message;
        // console.log("swiperdata", this.swiperData);
      } catch (err) {
        uni.showToast(err);
      }
    },

    async getFloor() {
      try {
        let res = await myRequest("/home/floordata");
        // console.log("floor", res);
        this.floorList = res.data.message;
        console.log(this.floorList);
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
  width: 60px;
  justify-content: center;
  flex-wrap: wrap;
  p {
    font-size: 12px;
    margin-top: 10px;
  }
}
.navigation {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 234, 167, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  image {
    width: 60%;
    height: 60%;
  }
}
.recommend {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
  background: rgba(116, 185, 255, 0.6);
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  color: rgba(99, 110, 114, 1);
  letter-spacing: 1em;
}
</style>
