<template>
	<view class="warp">
		<view class="wrap" style="margin-bottom: 10rpx;">
			<u-swiper :list="infolist.images"></u-swiper>
		</view>
		<view class="main">
			<view style="display: flex;align-items: center;">
				<view style="font-size: 40rpx;font-weight: bold;">{{infolist.scenicName}}</view>
				<view
					style="padding: 5rpx;background: #a7a7a7;font-size: 20rpx;height: 30rpx;border-radius: 5rpx;line-height: 28rpx;margin-left: 10rpx;">
					{{infolist.star}}A</view>
			</view>
			<view class="pfbox" style="width: 120rpx;font-size: 25rpx;margin-top: 10rpx;"
				:class="'bg-' + themeColor.name">
				评分{{infolist.commentScore}}
			</view>
			<view style="margin-top: 10rpx;"
				@click="gomapApp(infolist.latitude,infolist.longitude,infolist.scenicName)">
				<u-icon name="map"></u-icon>{{infolist.scenicAddress}}
			</view>
			<view class="info_item" v-for="(item,index) in infolist.ticketProducts">
				<view style="font-size: 30rpx;font-weight: bold;">
					{{item.productName}}
				</view>
				<view style="display: flex;justify-content: flex-end;align-items: center;margin-top: 15rpx;">
					<view v-if="item.marketPrice_addprice> item.settlePrice_addprice"
						style="font-size: 30rpx;font-weight: bold;" :class="'text-' + themeColor.name">
						{{item.marketPrice_addprice}}元起
					</view>
					<view v-if="item.marketPrice_addprice< item.settlePrice_addprice"
						style="font-size: 30rpx;font-weight: bold;" :class="'text-' + themeColor.name">
						{{item.settlePrice_addprice}}元起
					</view>
					<view class="dgbtn" @click="goinfo(item)" :class="'bg-' + themeColor.name">
						订
					</view>
				</view>
			</view>
			<view class="ggitem" style="width: 100%;">
				<view style="width: 50%;text-align: center;margin: 0 auto;margin-top: 100rpx;margin-bottom: 30rpx;">
					<image src="https://www.yunnanyijian.cn/static/dibu.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getScenicDetail
	} from '@/api/admission.js';
	export default {
		data() {
			return {
				infolist: {},
				lists: [{
						image: 'https://img95.699pic.com/photo/50092/9420.jpg_wh300.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://img95.699pic.com/desgin_photo/40018/5298_detail.jpg!/fw/320/clip/0x432a0a0/unsharp/true',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://img95.699pic.com/desgin_photo/40106/2539_detail.jpg!/fw/320/clip/0x432a0a0/unsharp/true',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
			};
		},
		onLoad(option) {
			this.scenicID = option.scenicID
			console.log(this.scenicID)
			this.getlist()
		},
		methods: {
			gomapApp(latitude, longitude, name) {
				uni.openLocation({
					latitude: Number(latitude),
					longitude: Number(longitude),
					name: name,
					success() {
						console.log('success');
					}
				});
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				var form = {
					scenicID: this.scenicID
				}
				this.$http.post(`${getScenicDetail}`, form).then(r => {
					console.log(r)
					this.infolist = r.data
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			},
			goinfo(item) {
				uni.navigateTo({
					url: "/pages/pet/admission/admission_pro?productId=" + item.productId + '&scenicID=' + this
						.scenicID + '&latitude=' + this.infolist.latitude + '&longitude=' + this.infolist.longitude
				})
			}
		}
	};
</script>

<style lang="scss">
	.main {
		padding: 20rpx;
	}

	.pfbox {
		padding: 6rpx;
		width: 100rpx;
		color: #fff;
		align-items: center;
		text-align: center;
		border-top-left-radius: 10rpx;
		border-bottom-right-radius: 15rpx;
	}

	.info_item {
		margin-top: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
	}

	.dgbtn {
		width: 70rpx;
		height: 70rpx;
		margin-left: 10rpx;
		border-radius: 15rpx;
		text-align: center;
		line-height: 70rpx;
		color: #FFF;
	}
</style>