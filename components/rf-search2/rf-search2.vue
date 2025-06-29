<template>
	<view class="serach">
		<u-search :placeholder="keyword" v-model="value" :animation="true"></u-search>
	</view>
</template>

<script>
	export default {
		props: {
			fatherData: {
							type: Object,
							default: function() {
								return {};
							}
						},
		},
		data() {
			return {
				keyword: '遥看瀑布挂前川',
				value:''
			};
		},
		mounted() {
			this.keyword = this.fatherData.title
		},
		methods: {

		},
		watch: {}

	};
</script>

<style lang="scss">
.serach{
	width: 100%;
	margin: 0 auto;
}
</style>