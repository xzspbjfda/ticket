<template>
	<view class="wrap">
		<view class="toptitle" :class="'bg-' + themeColor.name">
			<view v-if="info.type == 1" style="font-size: 39rpx;font-weight: bold;margin-bottom: 5rpx;">
				{{infos.psgStatusName}}</view>
			<view v-if="info.type == 0" style="font-size: 39rpx;font-weight: bold;margin-bottom: 5rpx;">
				{{infos.chaOrderStatusName}}</view>
			<view style="font-size: 30rpx;font-weight: bold;margin-bottom: 5rpx;" v-if="infos.refundOrderStatusName">
				{{infos.refundOrderStatusName}}</view>
			<view>

			</view>
		</view>
		<view style="width: 100%;" v-if="info.type == 1">
			<view style="width: 100%;padding: 30rpx;font-size: 35rpx;font-weight: bold;">退款明细</view>
			<view class="infoitem">
				<text style="font-weight: bold;">退款单号:</text>{{infos.refundNo}}
			</view>
			<view class="infoitem">
				<text style="font-weight: bold;">交易流水号:</text>{{infos.refundTransactionNo}}
			</view>
			<view class="infoitem">
				<text style="font-weight: bold;">申请时间:</text>{{infos.createTime}}
			</view>
			<view class="infoitem" v-if="infos.refundReason !== null">
				<text style="font-weight: bold;">退款原因:</text>{{infos.refundReason}}
			</view>
			<view class="infoitem" v-if="infos.refundAmount !== null">
				<text style="font-weight: bold;">退款总金额:</text>{{infos.refundAmount}}
			</view>
			<view class="infoitem" v-if="infos.realrefundAmount !== null">
				<text style="font-weight: bold;">退还用户余额:</text>{{infos.realrefundAmount}}
			</view>
			<view class="infoitem" v-if="infos.refundPoundageAmount !== null">
				<text style="font-weight: bold;">退款手续费:</text>{{infos.refundPoundageAmount}}
			</view>
			<view class="infoitem" v-if="infos.refundSuccessTime !== null">
				<text style="font-weight: bold;">成功时间:</text>{{infos.refundSuccessTime}}
			</view>
			<view class="infoitem" v-if="infos.refundFailedReason !== null">
				<text style="font-weight: bold;">退票失败原因:</text>{{infos.refundFailedReason}}
			</view>
		</view>
		<view style="width: 100%;" v-if="info.type == 0">
			<view style="width: 100%;padding: 30rpx;font-size: 35rpx;font-weight: bold;">改签明细</view>
			<view class="infoitem">
				<text style="font-weight: bold;">改签后航司:</text>{{infos.airlineCompany}}
			</view>
			<view class="infoitem">
				<text style="font-weight: bold;">改签后航班号:</text>{{infos.flightNo}}
			</view>
			<view class="infoitem">
				<view>
					{{infos.fromAirportName}}{{infos.fromTerminal}}-{{infos.toAirportName}}{{infos.toTerminal}}
				</view>
				<view>
					起飞时间:{{infos.fromDateTime}}
				</view>
				<view>
					抵达时间:{{infos.toDateTime}}
				</view>
			</view>
			<!-- <view class="infoitem">
				<view>
					
				</view>
				<view>
					起飞时间:{{infos.fromDateTime}}   
				</view>
				<view>
					抵达时间:{{infos.toDateTime}}
				</view>
			</view> -->
		</view>
		<view class="paybox" v-if="info.type == 0 &&infos.chaOrderStatus == 23">
			<view style="font-size: 30rpx;margin-right: 30rpx;"><text style="font-size: 40rpx;font-weight: bold;"
					:class="'text-' + themeColor.name">￥{{jginfo.chaOrderAmount}}</text></view>
			<view @click="clickoff" class="paybtn" :class="'bg-' + themeColor.name">
				取消改签
			</view>
			<view @click="clickpay" class="paybtn" :class="'bg-' + themeColor.name">
				余额支付
			</view>
		</view>
		<view class="paybox" v-if="infos.chaOrderStatus == 21">
			<view style="font-size: 30rpx;margin-right: 30rpx;"></view>
			<view @click="clickoff" class="paybtn" :class="'bg-' + themeColor.name">
				取消改签
			</view>
		</view>
		<view class="paybox" v-if="infos.chaOrderStatus == 27">
			<view style="font-size: 30rpx;margin-right: 30rpx;"></view>
			<view @click="goinfo(infos)" class="paybtn" :class="'bg-' + themeColor.name">
				再次改签
			</view>
		</view>
		<u-modal v-model="showtype" :content="contents" @confirm="modalclick" @cancel="modaloff"
			:show-cancel-button="true"></u-modal>
	</view>
</template>

<script>
	import {
		getChaOrderDetail
	} from '@/api/ticket.js';
	import {
		getRefundOrderDetail
	} from '@/api/ticket.js';
	import {
		chaAutoPay
	} from '@/api/ticket.js';
	import {
		cancelChange
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				info: {},
				infos: {},
				jginfo: {},
				contents: '',
				showtype: false,
				changelist: {
					list: [],
					orderNo: [],
					money: 0,
					hkcode: []
				},
			}
		},
		onLoad(option) {
			let userInfo = JSON.parse(decodeURIComponent(option.info));
			this.info = userInfo
			console.log('userInfo', userInfo);
			this.getlist()
		},
		onShow() {

		},
		onReady() {

		},
		computed: {

		},
		methods: {
			goinfo(items) {
				var that = this
				this.changelist.money = 0
				this.changelist.list.push(items.order_list_id)
				this.changelist.hkcode.push(items.flightNo.substring(0, 2))
				this.changelist.orderNo.push(items.orderNo)
				if (items.ticketType == 1) {
					this.changelist.money = this.changelist.money + items.adultSalePrice + items.adultFuel + items.adultTax
				}
				if (items.ticketType == 2) {
					this.changelist.money = this.changelist.money + items.childSalePrice + items.childFuel + items.childTax
				}
				if (items.ticketType == 3) {
					this.changelist.money = this.changelist.money + items.babySalePrice + items.babyFuel + items.babyTax
				}
				const a = items
				console.log(a[0])
				var form = {
					fromCityCode: a.fromAirportCode,
					toCityCode: a.toAirportCode,
					fromDate: a.fromDateTime.substring(0, 10),
					cabinLevel: 0,
					month: a.fromDateTime.substring(5, 7),
					day: a.fromDateTime.substring(8, 10),
					days: 31,
				}
				uni.navigateTo({
					url: '/pages/pet/ticket/tickerList?Item=' + encodeURIComponent(JSON.stringify(form)) +
						'&orderItem=' + encodeURIComponent(JSON.stringify(this.changelist))
				})
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				if (this.info.type == 1) {
					var form = {
						orderNo: this.info.orderNo,
						refundNo: this.info.refundNo
					}
					this.$http.get(`${getRefundOrderDetail}`, form).then(r => {
						console.log(r)
						this.infos = r.data.list
						uni.hideLoading();
					}).catch(() => {

					});
				} else if (this.info.type == 0) {
					var form = {
						orderNo: this.info.orderNo,
						chaNo: this.info.chaNo
					}
					this.$http.get(`${getChaOrderDetail}`, form).then(r => {
						console.log(r)
						this.infos = r.data.list[0]
						this.jginfo = r.data.change[0]
						uni.hideLoading();
					}).catch(() => {

					});
				}

			},
			clickpay() {

				this.contents = '共计' + this.jginfo.chaOrderAmount + '元，确认支付吗'
				this.showtype = true
			},
			modalclick() {
				var forms = {
					orderNo: this.info.orderNo,
					chaNo: this.info.chaNo
				}
				var that = this
				uni.showLoading({
					title: '加载中'
				});
				that.$http.post(`${chaAutoPay}`, forms).then(res => {
					uni.showToast({
						title: '改签支付成功',
						//将值设置为 success 或者直接不用写icon这个参数
						icon: 'success',
						//显示持续时间为 2秒
						duration: 1000
					})
					that.getlist()
				}).catch(() => {

				});
			},
			clickoff() {
				var forms = {
					chaNo: this.info.chaNo
				}
				var that = this
				uni.showLoading({
					title: '加载中'
				});
				that.$http.post(`${cancelChange}`, forms).then(res => {
					uni.showToast({
						title: '改签支付成功',
						//将值设置为 success 或者直接不用写icon这个参数
						icon: 'success',
						//显示持续时间为 2秒
						duration: 1000
					})
					
					uni.navigateTo({
						url:"/pages/order/orderlist?state=1"
					})
				}).catch(() => {

				});
			},

		}
	};
</script>

<style lang="scss">
	.paybox {
		width: 100%;
		height: 130rpx;
		z-index: 99999;
		background: #fff;
		padding: 10rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		.paybtn {
			width: 220rpx;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			color: #fff;
			border-radius: 40rpx;
		}
	}

	.toptitle {
		width: 100%;
		height: 200rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.infoitem {
		width: 100%;
		border-top: 1px solid #ccc;
		font-size: 30rpx;
		border-bottom: 1px solid #ccc;
		padding: 30rpx;
	}
</style>