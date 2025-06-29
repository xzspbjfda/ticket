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
				<u-button style="width: 48%;" shape="circle" @click="refund()">申请退款</u-button>
			
			</view>
		</view>
		<view style="padding: 20rpx;">
			<view class="box">
				<view style="font-size: 35rpx;font-weight: bold;">
					订单费用
				</view>
				<view>
					<text :class="'text-' + themeColor.name">{{info.info.money}}元</text>
				</view>
			</view>
			<view class="box">
				<view style="font-size: 35rpx;font-weight: bold;margin-bottom: 20rpx;">
					订单明细
				</view>
				<view>
					<view style="font-weight: bold;">
						{{info.info.title}}
					</view>
					<view style="color: #a7a7a7;margin-top: 10rpx;" @click="gomapApp()">
						{{info.list.productName}}
					</view>
					<view style="color: #a7a7a7;margin-top: 10rpx;" @click="infoshow">
						使用规则详情<u-icon name="arrow-right"></u-icon>
					</view>
					<view class="borderbn"></view>

				</view>
				<view style="font-size: 35rpx;font-weight: bold;margin-bottom: 20rpx;">
					出行信息
				</view>
				<view class="title">
					<view style="color: #a7a7a7;width: 128rpx;">取票人</view>
					<view style="margin-left: 20rpx;">
						<view>
							{{info.list.contact.name}}
						</view>
						<view>
							{{info.list.contact.mobile}}
						</view>
					</view>
				</view>
				<view class="title" v-for="(item,index) in info.list.tourists">
					<view style="color: #a7a7a7;width: 128rpx;">出行人</view>
					<view style="margin-left: 20rpx;">
						<view>
							{{item.name}}
						</view>
						<view>
							{{item.mobile}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom">
			<view style="padding: 20rpx;">
				<view class="title" v-for="(item,index) in info.list.bookNotice">
					<view style="color: #a7a7a7;width: 180rpx;">{{item.name}}</view>
					<view style="margin-left: 20rpx;">
						<rich-text :nodes="item.value"></rich-text>
					</view>
				</view>
				<view class="title" v-for="(item,index) in info.list.refundChangeRule">
					<view style="color: #a7a7a7;width: 128rpx;">{{item.name}}</view>
					<view style="margin-left: 20rpx;">
						<rich-text :nodes="item.value"></rich-text>
					</view>
				</view>
				<view class="title" v-for="(item,index) in info.list.useDescription">
					<view style="color: #a7a7a7;width: 128rpx;">{{item.name}}</view>
					<view style="margin-left: 20rpx;">
						<rich-text :nodes="item.value"></rich-text>
					</view>
				</view>
			</view>
		</u-popup>
		<view class="ggitem" style="width: 100%;">
			<view style="width: 50%;text-align: center;margin: 0 auto;margin-top: 100rpx;margin-bottom: 30rpx;">
				<image src="https://www.yunnanyijian.cn/static/dibu.png" mode="widthFix"></image>
			</view>
		</view>
		<u-popup width="700rpx" border-radius="14" v-model="refundshow" mode="center" style="padding: 15rpx;">
			<view style="text-align: center;font-size: 35rpx;font-weight: bold;">退票填写</view>
			<view style="padding: 10rpx;">
				<u-field v-model="cause" label="退票原因" placeholder="请填写原因">
				</u-field>
				<!-- <u-upload :action="action" :file-list="fileList"></u-upload> -->
				<u-button @click="refunds()">确定</u-button>
			</view>
		</u-popup>
	</view>
</template>
<script>
	import {
		getOrderDetail
	} from '@/api/admission.js';
	import {
		adautoPay
	} from '@/api/admission.js';
	import {
		cancelOrder
	} from '@/api/admission.js';
	import {
		ApplyRefundTicket
	} from '@/api/admission.js';
	/* eslint-disable */
	export default {

		data() {
			return {
				show: false,
				orderNo: {

				},
				info: {},
				dstime: '',
				refundshow:false,
				cause:'',
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
			refund() {
				this.refundshow = true
			},
			refunds() {
				this.refundshow = false
				var form = {
					orderNo: this.orderNo.orderNo,
				}
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${ApplyRefundTicket}`, form).then(r => {
					console.log(r.data)
					uni.showToast({
						title: r.msg,
						icon: 'none',
						duration: 2000
					})
					uni.hideLoading();
					this.getlist()
				}).catch(() => {
			
				});
			},
			infoshow() {
				this.show = true
			},
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
			Cancelorder() {
				var that = this
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${cancelOrder}`, this.orderNo).then(r => {
					uni.showToast({
						title: '取消订单成功',
						icon: 'none',
						duration: 2000
					})
					setTimeout(function() {
						that.getlist()
					}, 2000)
					uni.hideLoading();
				}).catch(() => {

				});
			},
			payclick() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${adautoPay}`, this.orderNo).then(r => {

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
				this.$http.get(`${getOrderDetail}`, this.orderNo).then(r => {
					console.log(r)
					this.info = r.data
					if (r.data.info.orderStatus == 1) {
						let timeout = setInterval(function() {
							const date1 = that.info.list.created_at.replace(/-/g, '/');
							var date2 = new Date(); //结束时间
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
							if (minutes == 0 && seconds == 0) {
								clearInterval(timeout);
								that.Cancelorder()
								that.getlist()
							}
						}, 1000)
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