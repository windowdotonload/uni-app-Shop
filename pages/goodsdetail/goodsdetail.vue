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
    <mysearch></mysearch>
    <ul>
      <li
        v-for="(item, i) in goodsList"
        :key="i"
        class="listGoodsItem"
        @click="goDesc(item)"
      >
        <image :src="item.goods_big_logo" mode="scaleToFill"></image>
        <view class="desContent">
          <p class="showDesc">{{ item.goods_name }}</p>
          <p class="price">￥{{ item.goods_price }}</p>
        </view>
      </li>
    </ul>
  </view>
</template>

<script>
import { myRequest } from "util/api";
import mysearch from "components/searchinput";
export default {
  components: {
    mysearch,
  },
  onLoad(params) {
    // this.requestparams.cid = params.id;
    this.getGoodsList();
  },
  onReachBottom() {
    this.requestparams.pagenum++;
    this.getGoodsList();
  },
  data() {
    return {
      requestparams: {
        query: "",
        cid: 10,
        pagenum: 1,
        pagesize: 10,
      },
      goodsList: [],
    };
  },
  methods: {
    async getGoodsList() {
      let res = await myRequest("/goods/search", "GET", this.requestparams);
      this.goodsList = this.goodsList.concat(res.data.message.goods);
      if (this.goodsList.length == res.data.message.total) {
        uni.showToast({
          title: "已加载所有数据",
          duration: 2000,
        });
      }
    },
    goDesc(item) {
      console.log(item);
      uni.navigateTo({
        url: `/pages/goodsdescription/goodsdescription?id=${item.goods_id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  margin: 0;
  padding: 0;
  padding-left: 10px;
  list-style: none;
  height: 120px;
}
.listGoodsItem {
  display: flex;
  align-items: center;
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
    height: 90px;
    box-sizing: border-box;
    padding-left: 110px;
    float: left;
    .price {
      color: #d63031;
    }
  }
}
</style>
