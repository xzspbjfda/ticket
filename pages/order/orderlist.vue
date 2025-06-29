<template>
	<view>
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="tabsChange"></u-tabs>
		</view>
		<scroll-view scroll-y style="height: 90vh;width: 100%;padding-top: 10rpx;" @scrolltolower="onreachBottom">
			<u-search  placeholder="请输入" bg-color="#fff" v-model="keyword" :show-action="false" @search="searchits"></u-search>
			<view>
				<view v-for="(item,index) in infos.list" :key="index" @click="goinfo(item.orderNo)">
					<view class="infobox">
						<view style="display: flex;justify-content: space-between;font-size: 35rpx;font-weight: bold;">
							<view>
								{{rangeval(item.title,item.flightRangeType)}}
							</view>
							<view>
								{{item.orderStatusName}}
							</view>
						</view>
						<view style="font-size: 30rpx;margin-top: 15rpx;display: flex;justify-content: space-between;" >
							<view class="">
								{{item.created_at}}
							</view>
							<view v-if="item.isHasRefundOrder == 1" :class="'bg-' + themeColor.name" style="color: #fff;">
								退
							</view>
							<view v-if="item.isHasChangeOrder == 1"  style="color: #fff;background: #ff8800;">
								改
							</view>
						</view>
						<view style="font-size: 30rpx;margin-top: 15rpx;">
							订单号:{{item.customerOrderNo}}
						</view>
						<view style="font-size: 30rpx;margin-top: 15rpx;" v-if="item.realrefundAmount>0" >
							退款金额:{{item.realrefundAmount}}
						</view>
						<view style="text-align: right;margin-top: 15rpx;font-size: 30rpx;font-weight: bold;">
							<text style="font-size: 35rpx;" :class="'text-' + themeColor.name">￥{{item.money}}</text></view>
					</view>
				</view>
				<view v-if="infos.list.length == 0"
					style="width: 100%;text-align: center;color: #a8a8a8;margin-top: 30rpx;">
					暂无此类订单
				</view>
			</view>

		</scroll-view>
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
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '已出票'
				}, {
					name: '已取消'
				}, ],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				info: {},
				status: 0,
				page: 1,
				type: 0,
				keyword:''
			};
		},
		computed: {

		},

		onShow() {

		},
		onLoad(options) {
			console.log(options.state)
			if(options.state == 2){
				this.list[2].name = '已预定'
			}
			if(options.state == 3){
				this.list[2].name = '已出票'
			}
			this.status = options.state
			this.getlist()
		},
		// 下拉刷新
		onPullDownRefresh() {

		},

		methods: {
			searchits(){
				console.log(this.keyword)
			},
			rangeval(val, type) {
				var str1 = ''
				if (type == 0) {
					 str1 = val.replace("|", "-");
				}else{
					 str1 = val.replace("|", "⇌");
				}
				return str1
			},
			goinfo(val) {
				console.log(val)
				if(this.status == 1){
					uni.navigateTo({
						url: '/pages/pet/Ticket_orders/orders_info?orderNo=' + val
					})
				}
				if(this.status == 2){
					uni.navigateTo({
						url:'/pages/pet/Hotel/Hotel_order?orderNo=' + val
					})
				}
				if(this.status == 3){
					uni.navigateTo({
						url:'/pages/pet/admission/admission_order?orderNo=' + val
					})
				}
			},
			getlist() {
				var form = {
					type: this.status,
					status: this.type,
					page: this.page,
					pageSize: 20
				}
				this.$http.get(`${orderlist}`, form).then(r => {
					console.log(r.data)
					this.info = r.data
					this.infos = r.data
					uni.hideLoading();
				}).catch(() => {

				});
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.info = {}
				this.current = index;
				this.page = 1
				this.type = index
				if(index == 5){
					this.type = 99
				}
				this.getlist()
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