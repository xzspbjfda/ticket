<template>
	<view class="">
		<view class="toptitle" :class="'bg-' + themeColor.name">
			<view style="font-size: 40rpx;font-weight: bold;">
				{{info.info.orderStatusName}}
			</view>
			<view style="font-size: 30rpx;font-weight: bold;" v-if="info.info.orderStatus == 1">
				{{dstime}}后订单将自动关闭
			</view>
			<view style="display: flex;justify-content: space-between;margin-top: 20rpx;"
				v-if="info.info.orderStatus == 1">
				<u-button style="width: 48%;" shape="circle" @click="Cancelorder">关闭订单</u-button>
				<u-button style="width: 48%;" shape="circle" type="primary" @click="payclick">立即支付</u-button>
			</view>
			<view style="display: flex;justify-content: space-between;margin-top: 20rpx;"
				v-if="info.info.orderStatus == 3">
				<u-button style="width: 48%;" shape="circle" @click="Cancelorder">申请退款</u-button>

			</view>
		</view>
		<view style="padding: 20rpx;">
			<view class="box">
				<view style="font-size: 35rpx;font-weight: bold;">
					订单费用
				</view>
				<view>
					房间费用 <text  :class="'text-' + themeColor.name">{{info.info.money}}</text>
				</view>
			</view>
			<view class="box">
				<view style="font-size: 35rpx;font-weight: bold;margin-bottom: 20rpx;">
					订单明细
				</view>
				<view>
					<view style="font-weight: bold;">
						{{info.list.hotelName}}
					</view>
					<view style="color: #a7a7a7;margin-top: 10rpx;" @click="gomapApp()">
						<u-icon name="map"></u-icon>{{info.list.hotelAddress}}
					</view>
					<view class="borderbn"></view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">入离日期</view>
						<view style="margin-left: 20rpx;">
							{{info.list.checkInDate}}-{{info.list.checkOutDate}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">房型信息</view>
						<view style="margin-left: 20rpx;">
							{{info.list.roomTypeName}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">房间数</view>
						<view style="margin-left: 20rpx;">
							{{info.list.roomNum}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">入住人</view>
						<view style="margin-left: 20rpx;" v-for="(item,index) in info.list.guestNames" :key="index">
							{{item}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">联系电话</view>
						<view style="margin-left: 20rpx;">
							{{info.info.contactMobile}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">订单编号</view>
						<view style="margin-left: 20rpx;">
							{{info.info.orderNo}}
						</view>
					</view>
					<view class="title">
						<view style="color: #a7a7a7;width: 150rpx;">下单时间</view>
						<view style="margin-left: 20rpx;">
							{{info.info.created_at}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		getOrderDetail
	} from '@/api/Hotel.js';
	import {
		autoPay
	} from '@/api/Hotel.js';
	import {
		cancelOrder
	} from '@/api/Hotel.js';
	/* eslint-disable */
	export default {

		data() {
			return {

				orderNo: {

				},
				info: {},
				dstime: null,
			};
		},
		onLoad(option) {
			console.log(option)
			this.orderNo = {
				orderNo: option.orderNo
			}
			this.getlist()
		},
		methods: {
			// 打开的点击事件，传经纬度和地点名
			gomapApp() {
				uni.openLocation({
					latitude: Number(this.info.list.latitude),
					longitude: Number(this.info.list.longitude),
					name: this.info.list.hotelName,
					success() {
						console.log('success');
					}
				});
			},
			countdown() {

			},
			Cancelorder() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${cancelOrder}`, this.orderNo).then(r => {
					uni.showToast({
						title: '申请取消订单成功',
						icon: 'none',
						duration: 2000
					})
					this.getlist()
					uni.hideLoading();
				}).catch(() => {

				});
			},
			payclick() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${autoPay}`, this.orderNo).then(r => {

					uni.showToast({
						title: '支付成功',
						icon: 'none',
						duration: 2000
					})
					this.getlist()
					uni.hideLoading();
				}).catch(() => {

				});
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				var that = this
				this.$http.post(`${getOrderDetail}`, this.orderNo).then(r => {
					console.log(r)
					this.info = r.data
					if (r.data.info.orderStatus == 1) {
						 let timeout =  setInterval(function() {
							const date1 = that.info.list.created_at.replace(/-/g, '/');
							var date2 = new Date(); //结束时间
							console.log(date1,date2)
							var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数      

							//------------------------------

							//计算出相差天数
							var days = Math.floor(date3 / (24 * 3600 * 1000))

							//计算出小时数

							var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
							var hours = Math.floor(leave1 / (3600 * 1000))
							//计算相差分钟数
							var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
							var minutes = 30 - Math.floor(leave2 / (60 * 1000))
							//计算相差秒数
							var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
							var seconds = 60 - Math.round(leave3 / 1000)
							console.log(minutes + " 分钟" + seconds + " 秒")
							that.dstime = minutes + " 分钟" + seconds + " 秒"
							if(minutes == 0&& seconds == 0){
								clearInterval(timeout);
								this.Cancelorder()
								this.getlist()
							}
							if(this.info.info.orderStatus != 1){
								clearInterval(timeout);
								this.Cancelorder()
								this.getlist()
							}
						},1000)
					}
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	.title {
		display: flex;
		margin-bottom: 10rpx;
	}

	.borderbn {
		width: 100%;
		border-top: 1px solid #ccc;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.box {
		padding: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
	}

	.toptitle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20rpx;
		width: 100%;
	}
</style>