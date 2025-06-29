<template>
	<u-grid :col="2">
		<u-grid-item>
			<view class="ad-item">
				<view class="toptitle">
					<image style="height: 40rpx;" src="../../static/icon_rhc5mvj0nvd/hongbao.png" mode="heightFix">
					</image>
					<view>
						天天特惠
					</view>
				</view>
				<view class="topimg">
					<u-gap height="50" />
					<view class="topimg-title">
						华天酒店
					</view>
					<view class="topimg-title">
						￥300起
					</view>
				</view>
			</view>
		</u-grid-item>
		<u-grid-item>
			<view class="ad-item">
				<view class="toptitle">
					<image style="height: 40rpx;" src="../../static/icon_rhc5mvj0nvd/hongbao.png" mode="heightFix">
					</image>
					<view>
						天天特惠
					</view>
				</view>
				<view class="topimg">
					<u-gap height="50" />
					<view class="topimg-title">
						华天酒店
					</view>
					<view class="topimg-title">
						￥300起
					</view>
				</view>
			</view>
		</u-grid-item>
	</u-grid>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			RandomColor(index) {
				let r, g, b;
				r = Math.floor(Math.random() * 256);
				g = Math.floor(Math.random() * 256);
				b = Math.floor(Math.random() * 256);
				return "rgb(" + r + ',' + g + ',' + b + ")";
			}
		},

		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.ad-item {
		width: 98%;
		border-radius: 15rpx;
		height: 200rpx;
		background: #FFCE0C;
		padding: 10rpx;
	}

	.toptitle {
		height: 40rpx;
		font-size: 25rpx;
		display: flex;
	}

	.topimg {
		background-image: url('../../static/vip-card.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 140rpx;
		padding: 10rpx;
	}

	.topimg-title {
		color: #fff;
		font-size: 20rpx;
	}
</style>