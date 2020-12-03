<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view class="continer">
    <navigator
      url="/pages/search/search"
      hover-class="navigator-hover"
      class="nav"
    >
      搜索
    </navigator>
  </view>
</template>

<script>
export default {};
</script>

<style  lang='scss' scoped>
.continer {
  height: 35px;
  background: rgba(116, 185, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  padding: 0;
  width: 90%;
  height: 20px;
  padding-left: 43%;
  text-align: center;
  color: #b2bec3;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #74b9ff;
  border-radius: 5px;
  background: #fff;
  text-align: center;
}
</style>