<template>
  <view>
    <swiper indicator-dots>
      <swiper-item v-for="(item, i) in swiperData" :key="i">
        <image
          :src="item.pics_big"
          mode="aspectFit"
          @click="previewImg(item)"
        ></image>
      </swiper-item>
    </swiper>
    <view class="title">
      <p class="showPrice">￥{{ goodsInfo.goods_price }}</p>
      <view class="showDesc">
        <p class="goodName">{{ goodsInfo.goods_name }}</p>
        <span class="collect"></span>
      </view>
    </view>
  </view>
</template>

<script>
import { myRequest } from "util/api";
export default {
  data() {
    return {
      id: 0,
      goodsInfo: {},
      swiperData: [],
    };
  },
  onLoad(params) {
    this.id = params.id;
    // console.log(params);
    this.getGoodInfo();
  },
  methods: {
    async getGoodInfo() {
      let res = await myRequest(`/goods/detail`, "GET", { goods_id: this.id });
      console.log(res);
      this.goodsInfo = res.data.message;
      this.swiperData = res.data.message.pics;
    },
    previewImg(cur) {
      let arr = [];
      this.swiperData.forEach((item) => {
        arr.push(item.pics_big);
      });
      //   console.log(arr);
      uni.previewImage({
        current: cur.pics_big,
        urls: arr,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
swiper {
  width: 750rpx;
  height: 380rpx;
  image {
    height: 100%;
    width: 100%;
  }
}
.showPrice {
  font-size: 19px;
  color: #c0392b;
  font-weight: bolder;
  padding-left: 10px;
}
.showDesc {
  padding: 10px 10px;
  margin-top: 10px;
  display: flex;
  background: #f5f6fa;
  .goodName {
    flex: 8;
    font-size: 13px;
    box-sizing: border-box;
    border-right: 1px solid #95a5a6;
    padding-left: 10px;
    padding-right: 10px;
  }
  .collect {
    flex: 2;
  }
}
</style>
