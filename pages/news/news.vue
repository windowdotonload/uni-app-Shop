<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view class="wrap">
    <mysearch></mysearch>
    <view class="showContent">
      <scroll-view scroll-top="100" scroll-y="true" class="leftMenu">
        <view
          v-for="(item, i) in categories"
          :key="i"
          class="leftItem"
          :class="i == index ? 'active' : ''"
          @click="ifActive(i)"
        >
          {{ item.cat_name }}
        </view>
      </scroll-view>
      <scroll-view :scroll-top="scrollTop" scroll-y="true" class="rightMenu">
        <view v-for="(item, i) in rightContent" :key="i" class="contentItem">
          <p>/{{ item.cat_name }}/</p>
          <view class="goodsIcon">
            <view
              v-for="(item1, i1) in item.children"
              :key="i1"
              class="pic"
              @click="godetail"
            >
              <image :src="item1.cat_icon"></image>
              <p>{{ item1.cat_name }}</p>
            </view>
          </view>
        </view>
      </scroll-view>
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
      categories: [],
      index: 0,
      rightContent: [],
      scrollTop: 0,
    };
  },
  onLoad() {
    this.getCatList();
  },
  methods: {
    async getCatList() {
      try {
        let res = await myRequest("/categories");
        // console.log(res);
        this.categories = res.data.message;
        this.rightContent = this.categories[0].children;
        console.log("categories", this.categories);
      } catch (err) {
        uni.showToast(err);
      }
    },
    ifActive(i) {
      //   console.log(i);
      this.index = i;
      this.rightContent = this.categories[i].children;
      this.scrollTop = 0;
      console.log(this.rightContent);
    },
    godetail() {
      console.log("ok");
      uni.navigateTo({
        url: "/pages/goodsdetail/goodsdetail?id=10",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.active {
  color: #e74c3c;
}
.showContent {
  height: 100%;
  //   height: calc(100%-35px);
  display: flex;
  .leftMenu {
    height: 100%;
    flex: 3;
  }
  .rightMenu {
    height: 100%;
    flex: 7;
  }
  .leftItem {
    height: 35px;
    line-height: 35px;
    width: 100%;
    text-align: center;
  }
}
.contentItem {
  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.goodsIcon {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left: 15px;
  .pic {
    width: 60px;
    box-sizing: border-box;
    padding: 5px;
    image {
      width: 100%;
      height: 60px;
    }
    p {
      font-size: 10px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>>

