<template>
  <view class="goodsDescContiner">
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
        <span class="collect">
          <span class="icon">
            <svg
              t="1607081114549"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3168"
              width="32"
              height="32"
            >
              <path
                d="M758.272 921.088c-5.12 0-10.24-1.024-14.848-3.584L512 796.16l-231.424 121.344c-10.752 5.632-23.552 4.608-33.28-2.56s-14.336-18.944-12.288-30.72l44.032-257.024-187.392-182.272c-8.704-8.192-11.776-20.992-8.192-32.256 3.584-11.776 13.312-19.968 25.6-21.504l259.072-37.376 115.712-233.984c5.12-10.752 16.384-17.408 28.16-17.408 12.288 0 23.04 6.656 28.16 17.408l115.712 233.984 259.072 37.376c11.776 1.536 22.016 9.728 25.6 21.504 3.584 11.264 0.512 24.064-8.192 32.256l-187.392 182.272 44.032 257.024c2.048 11.776-2.56 23.552-12.288 30.72-5.12 4.096-11.776 6.144-18.432 6.144z m-624.64-492.032l177.152 172.032c7.68 7.168 10.752 17.92 9.216 28.16l-41.984 243.2L497.152 757.76c9.216-4.608 19.968-4.608 29.184 0l219.136 114.688-41.984-243.2c-1.536-10.24 1.536-20.48 9.216-28.16l177.664-172.032-245.248-35.84c-10.24-1.536-18.944-7.68-23.552-17.408L512 154.624 402.432 376.32c-4.608 9.216-13.312 15.36-23.552 16.896l-245.248 35.84z"
                p-id="3169"
              ></path>
            </svg>
          </span>
          <p
            style="
              width: 100%;
              font-size: 13px;
              text-align: center;
              margin-top: 5px;
            "
          >
            收藏
          </p>
        </span>
      </view>
    </view>

    <view class="sectitle">
      <p>图文详情</p>
    </view>

    <div v-html="goodsInfo.goods_introduce"></div>
    <!-- 底部工具栏 -->
    <view class="bottomMenu">
      <span class="bottomItem">
        <view class="iconContiner">
          <image src="../../static/kefu.svg"></image>
        </view>
        <p class="bottomText">联系客服</p>
      </span>
      <span class="bottomItem">
        <view class="iconContiner">
          <image src="../../static/share.svg"></image>
        </view>
        <p class="bottomText">分享</p>
      </span>
      <span class="bottomItem">
        <view class="iconContiner">
          <image src="../../static/shopcar.svg"></image>
        </view>
        <p class="bottomText">购物车</p>
      </span>
      <span class="menuBottom" size="mini" style="background: #e67e22">
        加入购物车
      </span>
      <span class="menuBottom" size="mini" style="background: #e74c3c">
        立即购买
      </span>
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
  box-sizing: border-box;
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .icon {
      width: 26px;
      height: 26px;
    }
  }
}
.sectitle {
  margin-top: 10px;
  margin-bottom: 10px;
  background: #f5f6fa;
  padding: 3px 18px;
  p {
    color: crimson;
    font-weight: 1000;
    font-size: 20px;
  }
}
.goodsDescContiner {
  padding-bottom: 50px;
}
.bottomMenu {
  height: 50px;
  width: 100%;
  padding-left: 5px;
  position: fixed;
  display: flex;
  z-index: 999;
  background: #f5f6fa;
  bottom: 0;
}
.iconContiner {
  width: 16px;
  height: 16px;
}
.bottomItem {
  width: 50px;
  height: 50px;
  padding-top: 5px;
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .iconContiner {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .bottomText {
    width: 100%;
    text-align: center;
    font-size: 10px;
  }
}
.menuBottom {
  height: 50px;
  line-height: 50px;
  padding: 0 12px;
  float: right;
}
</style>
