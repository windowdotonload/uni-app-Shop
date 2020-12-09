<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
	<view class='continer'>
		<map class="map" longitude='116.403963' latitude='39.915119' :markers='markpoint'></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markpoint:[
					{
					latitude:'116.403963',
					longitude:'39.915119',
					iconPath:"/static/maker.png"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
.continer{
	width: 100%;
	height: 100%;
}
.map{
	width:100%;
	height:100%;
}
</style>
