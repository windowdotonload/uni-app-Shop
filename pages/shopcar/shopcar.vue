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
  <view>
    <p class="text">购物车</p>
    <view class="noGoods" v-if="goodsData.length == 0">
      <p>购物车暂无商品</p>
    </view>
    <view class="">
      <ul>
        <li v-for="(item, i) in goodsData" :key="i" class="listGoodsItem">
          <checkbox-group @change="changeSel(item)">
            <checkbox :checked="item.checked" />
          </checkbox-group>
          <view class="">
            <image
              :src="item.goods_big_logo"
              mode="scaleToFill"
              @click="goDesc(item)"
            ></image>
            <view class="desContent">
              <p class="showDesc" @click="goDesc(item)">
                {{ item.goods_name }}
              </p>
              <view class="numberbox">
                <p class="price">￥{{ item.goods_price }}</p>
                <uni-number-box
                  :value="item.num"
                  @change="changeNum(item, $event)"
                ></uni-number-box>
              </view>
              <p class="del" @click="del(item)">删除</p>
            </view>
          </view>
        </li>
      </ul>

      <view class="bottomAccount">
        <checkbox-group @change="changeAllSel">
          <label v-if="goodsData.length != 0">
            <checkbox :checked="allChecked" /> 全选
          </label>
        </checkbox-group>
        <view class="right">
          <view class="count" @click="count"> 结算({{ totalNum }}) </view>
          <view class="price">
            <p class="priceText">
              合计<span>￥{{ totalPrice }}</span>
            </p>
            <p class="priceText">包含运费</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      goodsData: [],
    };
  },
  computed: {
    allChecked() {
      if (this.goodsData.length == 0) {
        return false;
      }
      return this.goodsData.every((item) => {
        // console.log("cehecked", item.checked);
        return item.checked == true;
      });
    },
    totalPrice() {
      let price = 0;
      this.goodsData.forEach((item) => {
        if (item.checked == true) {
          price = item.num * item.goods_price + price;
        }
      });
      return price;
    },
    totalNum() {
      let num = 0;
      Number;
      this.goodsData
        .filter((item) => {
          return item.checked == true;
        })
        .forEach((item) => {
          num = Number(item.num) + Number(num);
        });
      return num;
    },
  },
  onShow() {
    this.goodsData = uni.getStorageSync("CART_DATA");
    console.log(this.goodsData);
  },
  methods: {
    goDesc(item) {
      console.log(item);
      uni.navigateTo({
        url: `/pages/goodsdescription/goodsdescription?id=${item.goods_id}`,
      });
    },
    changeSel(item) {
      console.log(item);
      this.goodsData.some((i) => {
        if (i.goods_id == item.goods_id) {
          i.checked = !i.checked;
        }
      });
      uni.setStorageSync("CART_DATA", this.goodsData);
    },
    changeNum(item, $event) {
      // console.log(arguments);
      console.log($event);
      this.goodsData.some((i) => {
        if (i.goods_id == item.goods_id) {
          i.num = $event;
        }
      });
      uni.setStorageSync("CART_DATA", this.goodsData);
    },
    changeAllSel() {
      if (this.allChecked == true) {
        this.goodsData.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.goodsData.forEach((item) => {
          item.checked = true;
        });
      }

      uni.setStorageSync("CART_DATA", this.goodsData);
    },
    del(item) {
      console.log(item);
      let index = this.goodsData.findIndex((i) => {
        return i.goods_id == item.goods_id;
      });
      // console.log(index);
      this.goodsData.splice(index, 1);
      uni.setStorageSync("CART_DATA", this.goodsData);
    },
    count() {
      // console.log("count");
      if (this.totalNum == 0) {
        uni.showToast({
          title: "您还未选择任何商品",
          icon: "none",
        });
      } else {
        uni.navigateTo({
          url: "/pages/payorder/payorder",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.noGoods {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(183, 190, 190);
  }
}
.text {
  padding: 5px 10px;
  font-size: 15px;
  color: #dfe4ea;
}
.numberbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  height: 120px;
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
  border-top: 1px solid #dfeae6;
  list-style: none;
}
.listGoodsItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  image {
    width: 100px;
    height: 100px;
    position: absolute;
  }
  .desContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding-left: 110px;
    float: left;
    .price {
      color: #d63031;
    }
  }
}
.bottomAccount {
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: rgb(218, 238, 238);
  align-items: center;
  z-index: 999;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  bottom: 0px;
}
.right {
  overflow: hidden;
}
.price {
  float: right;
  padding-top: 5px;
  padding-right: 10px;
  .priceText {
    width: 100px;
    text-align: right;
  }
}
.count {
  float: right;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgb(236, 100, 100);
}
.del {
  box-sizing: border-box;
  margin: 5px 5px;
  font-size: 13px;
  width: 100%;
  text-align: right;
  padding-right: 10px;
}
</style>
