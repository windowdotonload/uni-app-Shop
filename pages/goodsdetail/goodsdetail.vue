<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <view>
    <mysearch></mysearch>
    <h1>detail</h1>
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
    // console.log(params);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
