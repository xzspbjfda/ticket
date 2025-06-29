<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper style="height: 90vh;" :current="swiperCurrent" @transition="transition"
			@animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 90vh;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="(item,index) in info.list" :key="index" @click="goinfo(item.orderNo)">
						<view class="infobox" v-if="item.status == 1">
							<view
								style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
								<view>
									{{item.group_list_arr[0].fromAirportName}}-{{item.group_list_arr[0].toAirportName}}
								</view>
								<view>
									待支付
								</view>
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								{{item.group_list_arr[0].airlineCompany}}{{item.group_list_arr[0].flightNo}}
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								出发时间:{{item.group_list_arr[0].toDateTime}}
							</view>
							<view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
								待付款<text style="color: red;font-size: 35rpx;">￥{{item.money}}</text></view>
						</view>
					</view>

				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 90vh;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="(item,index) in info.list" :key="index" @click="goinfo(item.orderNo)">
						<view class="infobox" v-if="item.status == 2">
							<view
								style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
								<view>
									{{item.group_list_arr[0].fromAirportName}}-{{item.group_list_arr[0].toAirportName}}
								</view>
								<view>
									待出票
								</view>
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								{{item.group_list_arr[0].airlineCompany}}{{item.group_list_arr[0].flightNo}}
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								出发时间:{{item.group_list_arr[0].toDateTime}}
							</view>
							<view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
								实付款<text style="color: red;font-size: 35rpx;">￥{{item.money}}</text></view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 90vh;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="(item,index) in info.list" :key="index" @click="goinfo(item.orderNo)">
						<view class="infobox" v-if="item.status == 3">
							<view
								style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
								<view>
									{{item.group_list_arr[0].fromAirportName}}-{{item.group_list_arr[0].toAirportName}}
								</view>
								<view>
									出票中
								</view>
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								{{item.group_list_arr[0].airlineCompany}}{{item.group_list_arr[0].flightNo}}
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								出发时间:{{item.group_list_arr[0].toDateTime}}
							</view>
							<view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
								实付款<text style="color: red;font-size: 35rpx;">￥{{item.money}}</text></view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 90vh;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="(item,index) in info.list" :key="index" @click="goinfo(item.orderNo)">
						<view class="infobox" v-if="item.status == 4">
							<view
								style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
								<view>
									{{item.group_list_arr[0].fromAirportName}}-{{item.group_list_arr[0].toAirportName}}
								</view>
								<view>
									已出票
								</view>
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								{{item.group_list_arr[0].airlineCompany}}{{item.group_list_arr[0].flightNo}}
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								出发时间:{{item.group_list_arr[0].toDateTime}}
							</view>
							<view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
								实付款<text style="color: red;font-size: 35rpx;">￥{{item.money}}</text></view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 90vh;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="(item,index) in info.list" :key="index" @click="goinfo(item.orderNo)">
						<view class="infobox" v-if="item.status == 99">
							<view
								style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
								<view>
									{{item.group_list_arr[0].fromAirportName}}-{{item.group_list_arr[0].toAirportName}}
								</view>
								<view>
									已取消
								</view>
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								{{item.group_list_arr[0].airlineCompany}}{{item.group_list_arr[0].flightNo}}
							</view>
							<view style="font-size: 30rpx;margin-top: 15rpx;">
								出发时间:{{item.group_list_arr[0].toDateTime}}
							</view>
							<!-- <view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
								实付款<text style="color: red;font-size: 35rpx;">￥{{item.money}}</text></view> -->
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import {
		orderlist
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				list: [{
					name: '待支付'
				}, {
					name: '待出票'
				}, {
					name: '出票中'
				}, {
					name: '已出票'
				}, {
					name: '已取消'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				info: {}
			};
		},
		computed: {

		},

		onShow() {

		},
		onLoad(options) {
			this.status = options.status
			this.getlist()
		},
		// 下拉刷新
		onPullDownRefresh() {

		},

		methods: {
			goinfo(val) {
				console.log(val)
				uni.navigateTo({
					url:'/pages/pet/Hotel/Hotel_order?orderNo=' + val
				})
			},
			getlist() {
				var form = {
					type: 2,
					status: '',
					page: 1,
					pageSize: 20
				}
				this.$http.get(`${orderlist}`, form).then(r => {
					console.log(r.data)
					this.info = r.data
					uni.hideLoading();
				}).catch(() => {

				});
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	};
</script>
<style lang="scss">
	.infobox {
		width: 96%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
		margin-top: 20rpx;
	}
</style>