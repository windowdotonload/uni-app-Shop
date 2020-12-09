<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
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

    <view class="Menu">
      <view class="collect">
        <view class="showItem">
          <p>0</p>
          <p>收藏的店铺</p>
        </view>
        <view class="showItem">
          <p>0</p>
          <p>收藏的店铺</p>
        </view>
        <view class="showItem">
          <p>0</p>
          <p>收藏的店铺</p>
        </view>
        <view class="showItem">
          <p>0</p>
          <p>收藏的店铺</p>
        </view>
      </view>  
      <view class="order">
        <p class="myorder">我的订单</p>
        <view class="orderDetail">
          <view class="detailItem">
            <image src='../../static/userorder.svg'></image>
            <p>全部订单</p>
          </view>
          <view class="detailItem">
            <image src='../../static/userpay.svg'></image>
            <p>待付款</p>
          </view>
          <view class="detailItem">
            <image src='../../static/userrec.svg'></image>
            <p>待收货</p>
          </view>
          <view class="detailItem">
            <image src='../../static/refund.svg'></image>
            <p>退款/退货</p>
          </view>
        </view>
      </view>
      <view class="address">
        <p>收货地址管理</p>
      </view>
      <view class="other">
        <ul>
          <li>联系客服</li>
          <li>关于我们</li>
          <li @click='toMap'>公司地址</li>
        </ul>
      </view>
     </view>
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
  methods: {
    toMap(){
      uni.navigateTo({
         url: '/pages/map/map'
      });
    }
  },
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
  width: 96%;
  height: 100px;
  position: relative;
  margin-top: -150px;
  border-radius: 5px;
  .collect{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: #f5f6fa;
    .showItem{
      width: 60px;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      margin-bottom: 5px;
      p{
        width: 60px;
        font-size: 12px;
        text-align: center;
        &:nth-child(1){
          color:red
        }
      }
      
    }
  }
  .order{
    background: #f5f6fa;
    .myorder{
      padding-left: 5px;
      padding-top: 5px;
      margin-top: 10px;
      height: 20px;
      line-height: 20px;
      color:rgb(197, 196, 192);
    };
    .orderDetail{
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgb(167, 166, 166);
      display: flex;
      justify-content: space-between;
    }
    .detailItem{
      width: 60px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 5px;
      image{
        width: 30px;
        height: 30px;
      }
      p{
        width: 60px;
        font-size: 12px;
        text-align: center;
      }
    }
  }
  .address{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding-left: 10px;
    line-height: 50px;
    background: #f5f6fa;
  }
  .other{
    margin-top: 10px;
    margin-bottom: 30px;
    background: #f5f6fa;
    ul,li{
      list-style: none;
    }
    li{
      padding-left: 10px;
      width: 100%;
      height:30px;
      line-height: 30px;
      border-bottom: 1px solid rgb(175, 150, 150);
      &:nth-child(3){
        border: none;
      }
    }
  }
}

</style>
