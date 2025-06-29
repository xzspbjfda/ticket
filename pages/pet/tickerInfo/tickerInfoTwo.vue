<template>
	<view>
		<view class="topInfo">
			<view>
				去程{{startItem.fromDatemd}} <text style="color: #ffb810;margin-left: 15rpx;margin-right: 15rpx;"></text>
				总时长{{startItem.flyDuration}}
			</view>
			<view class="process_more">
				<!-- 步骤条 -->
				<view class="set-2" :key="index" v-for="(item,index) in options">
					<!-- 图片 -->
					<view class="img-border">
						<view class="left_img"></view>
					</view>
					<view v-if='index!=0' class="left_line_up"></view>
					<view v-if='index!=options.length-1' class="left_line_down"></view>
					<view class="set-view">
						<view class="set-view-test">
							<view class="set-view-test2">{{item.time}}</view>
						</view>
						<view v-if='index!=options.length-1' class="iteminfo">
							<view class="leftbox">
								<view class="leftbox_1">
									<image :src="startItem.airlineLogoUrl" mode="widthFix"></image>
									<view>
										{{startItem.airlineCompany}}
									</view>
								</view>
								<view style="margin-left: 30rpx;">
									{{startItem.flightNo}}
								</view>
							</view>
							<view class="rightbox">
								<view>
									{{startItem.craftType}}<text
										style="color: #ffb810;border-left: 2px solid #ccc;padding-left: 5rpx;margin-left: 5rpx;">{{startItem.meals}}</text>
								</view>
								<view>
									到达准点率84%
								</view>
								<view>
									机龄9.0年
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<view class="topInfo" style="padding-top: 0;">
			<view>
				返程{{endItem.fromDatemd}} <text style="color: #ffb810;margin-left: 15rpx;margin-right: 15rpx;"></text>
				总时长{{endItem.flyDuration}}
			</view>
			<view class="process_more">
				<!-- 步骤条 -->
				<view class="set-2" :key="index" v-for="(item,index) in options2">
					<!-- 图片 -->
					<view class="img-border">
						<view class="left_img"></view>
					</view>
					<view v-if='index!=0' class="left_line_up"></view>
					<view v-if='index!=options2.length-1' class="left_line_down"></view>
					<view class="set-view">
						<view class="set-view-test">
							<view class="set-view-test2">{{item.time}}</view>
						</view>
						<view v-if='index!=options2.length-1' class="iteminfo">
							<view class="leftbox">
								<view class="leftbox_1">
									<image :src="endItem.airlineLogoUrl" mode="widthFix"></image>
									<view>
										{{endItem.airlineCompany}}
									</view>
								</view>
								<view style="margin-left: 30rpx;">
									{{endItem.flightNo}}
								</view>
							</view>
							<view class="rightbox">
								<view>
									{{endItem.craftType}}<text
										style="color: #ffb810;border-left: 2px solid #ccc;padding-left: 5rpx;margin-left: 5rpx;">{{endItem.meals}}</text>
								</view>
								<view>
									到达准点率84%
								</view>
								<view>
									机龄9.0年
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<view>
			<view>
				<u-tabs-swiper ref="uTabs" name="name" :list="endItem.dataGroup" :inactive-color="themeColor.color" :active-color="themeColor.color" :current="current" @change="tabsChange"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper style="height: 40vh;" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in endItem.dataGroup" :key="index">
					<view>
						<view style="display: flex;">
							<view style="width: 100%;">
								<view style="font-size: 30rpx;font-weight: bold;text-align: center;padding-top: 10rpx;">
									去程</view>
								<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom"
									class="ticketList">
									<view class="ticketItem" v-for="(items,indexs) in startItem.dataGroup[index].list"
										:key="indexs" @click="Booking(items)"
										:class="{active:showw==items.cabinBookPara}">
										<view class="flex1 Itemtop">
											<view class="Itemtitle" :class="'text-' + themeColor.name">
												<text
													style="font-size: 25rpx;">优惠后</text>￥{{items.cabinPrice_addprice.adultFarePrice}}<text
													style="font-size: 25rpx;">起</text>
											</view>
											<view class="btnText" :class="'bg-' + themeColor.name">订</view>
										</view>
										<view class="Itembody">
											{{items.cabinName}}<text
												style="margin-left: 20rpx;">{{items.discount}}折</text>
										</view>
										<view class="Itembody">
											<!-- 托运行李<text style="margin-left: 20rpx;">共10公斤</text> -->
										</view>
									</view>
								</scroll-view>
							</view>
							<view class="" style="width: 100%;">
								<view style="font-size: 30rpx;font-weight: bold;text-align: center;padding-top: 10rpx;">
									返程</view>
								<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom"
									class="ticketList">
									<view class="ticketItem" v-for="(items,indexss) in endItem.dataGroup[index].list"
										:key="indexss" @click="Booking2(items)"
										:class="{active:showw2==items.cabinBookPara}">
										<view class="flex1 Itemtop">
											<view class="Itemtitle" :class="'text-' + themeColor.name">
												<text
													style="font-size: 25rpx;">优惠后</text>￥{{items.cabinPrice_addprice.adultFarePrice}}<text
													style="font-size: 25rpx;">起</text>
											</view>
											<view class="btnText" :class="'bg-' + themeColor.name">订</view>
										</view>
										<view class="Itembody">
											{{items.cabinName}}<text
												style="margin-left: 20rpx;">{{items.discount}}折</text>
										</view>
										<view class="Itembody">
											<!-- 托运行李<text style="margin-left: 20rpx;">共10公斤</text> -->
										</view>
									</view>
								</scroll-view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view
			style="position:absolute;
  bottom:0;border-top: 2rpx solid #ccc;width: 100%;background: #fff;height: 120rpx;align-items: center;display: flex;justify-content: flex-end;">
			<view style="display: flex;align-items: center;">
				<view style="float: right;margin-right: 30rpx;">
					<view style="font-size: 35rpx;font-weight: bold;" :class="'text-' + themeColor.name">￥{{moneys}}起</view>
					<view>往返总价</view>
				</view>
				<u-button style="float: right;margin-right: 20rpx;" type="primary" @click="goinfo()">下一步</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startItem: {},
				endItem: {},
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				options: [{
						time: '23:10  新郑机场 T2'
					},
					{
						time: '23:10  美兰机场 T1'
					},
				],
				options2: [{
						time: '23:10  新郑机场 T2'
					},
					{
						time: '23:10  美兰机场 T1'
					},
				],
				moneys: 0,
				showw: 0,
				showw2: 0,
				formval1: {},
				formval2: {},
				ticketcglist:{},
				ticketcgtype:false
			}
		},
		onLoad(option) {
			const endItem = JSON.parse(decodeURIComponent(option.endItem));
			const startItem = JSON.parse(decodeURIComponent(option.startItem));
			if (option.orderItem) {
				this.ticketcglist = JSON.parse(decodeURIComponent(option.orderItem))
				this.ticketcgtype = true
			}
			this.endItem = endItem
			this.options2[0].time = endItem.fromTime + ' ' + endItem.fromAirportName + ' ' + endItem.fromTerminal
			this.options2[1].time = endItem.toTime + ' ' + endItem.toAirportName + ' ' + endItem.toTerminal
			this.startItem = startItem
			this.options[0].time = startItem.fromTime + ' ' + startItem.fromAirportName + ' ' + startItem.fromTerminal
			this.options[1].time = startItem.toTime + ' ' + startItem.toAirportName + ' ' + startItem.toTerminal
		},
		methods: {
			Booking(val) {
				this.showw = val.cabinBookPara
				this.formval1 = val
				if (this.showw2 == 0) {
					this.moneys = val.cabinPrice_addprice.adultFarePrice
					if(this.ticketcgtype == true){
						this.moneys = val.cabinPrice_addprice.adultFarePrice - this.ticketcglist.money
					}
				} else {
					this.moneys = val.cabinPrice_addprice.adultFarePrice + this.formval2.cabinPrice_addprice.adultFarePrice
					if(this.ticketcgtype == true){
						this.moneys = val.cabinPrice_addprice.adultFarePrice + this.formval2.cabinPrice_addprice.adultFarePrice - this.ticketcglist.money
					}
				}
				// uni.navigateTo({
				// 	url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item))
				// })
			},
			Booking2(val) {
				this.formval2 = val
				this.showw2 = val.cabinBookPara
				if (this.showw == 0) {
					this.moneys = val.cabinPrice_addprice.adultFarePrice
					if(this.ticketcgtype == true){
						this.moneys = val.cabinPrice_addprice.adultFarePrice - this.ticketcglist.money
					}
				} else {
					this.moneys = val.cabinPrice_addprice.adultFarePrice + this.formval1.cabinPrice_addprice.adultFarePrice
					if(this.ticketcgtype == true){
						this.moneys = val.cabinPrice_addprice.adultFarePrice + this.formval1.cabinPrice_addprice.adultFarePrice - this.ticketcglist.money
					}
				}
				// console.log(val)
				// uni.navigateTo({
				// 	url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item))
				// })
			},
			goinfo() {
				if(this.ticketcgtype == false){
					uni.navigateTo({
						url: '/pages/pet/Ticket_orders/Ticket_ordersTwo?startItem=' + encodeURIComponent(JSON.stringify(
								this.startItem)) + '&endItem=' + encodeURIComponent(JSON.stringify(this.endItem)) +
							'&formval1=' + encodeURIComponent(JSON.stringify(this.formval1)) +
							'&formval2=' + encodeURIComponent(JSON.stringify(this.formval2))
					})
				}else{
					uni.navigateTo({
						url: '/pages/pet/Ticket_orders/Ticket_ordersTwo?startItem=' + encodeURIComponent(JSON.stringify(
								this.startItem)) + '&endItem=' + encodeURIComponent(JSON.stringify(this.endItem)) +
							'&formval1=' + encodeURIComponent(JSON.stringify(this.formval1)) +
							'&formval2=' + encodeURIComponent(JSON.stringify(this.formval2))+
							'&orderItem=' + encodeURIComponent(JSON.stringify(this.ticketcglist))
					})
				}
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
	}
</script>

<style lang="scss">
	.active {
		background: #c2e9fb !important;
	}

	.topInfo {
		width: 100%;
		padding: 25rpx;
		background: #fff;
	}

	.ticketList {
		display: flex;
		flex-direction: column;
		width: 48%;

		.ticketItem {
			display: flex;
			flex-direction: column;
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			border-radius: 30rpx;
			background: #fff;
			padding: 20rpx;

			.Itemtop {
				.Itemtitle {
					font-size: 38rpx;
					font-weight: bold;
				}

				.btnText {
					width: 70rpx;
					height: 70rpx;
					color: #fff;
					font-size: 30rpx;
					font-weight: bold;
					border-radius: 15rpx;
					text-align: center;
					line-height: 70rpx;
				}
			}

			.Itembody {
				display: flex;
				align-items: center;
				font-size: 20rpx;
				font-weight: bold;
				color: #848484;
			}
		}
	}

	.flex1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.process_text {
		position: relative;

		.process_left {
			position: absolute;
			top: 200rpx;
			left: 40rpx;

			image {
				width: 44rpx;
				height: 44rpx;
			}
		}
	}

	.set-2:last-child::after {
		display: none;
	}

	.set-2 {
		border-radius: 10rpx;
		width: 600rpx;
		margin-left: 60rpx;
		position: relative;

		.set-view {
			width: 100%;

			.set-view-test {
				margin: 0 auto;
				padding-top: 26rpx;
				padding-bottom: 30rpx;
				border-bottom: 1rpx solid #EFEFEF;

				.set-view-test2 {
					width: 100%;
					height: 26rpx;
					font-family: Gibson;
					font-size: 35rpx;
					font-weight: bold;
					color: #333333;
				}
			}

			.iteminfo {
				display: flex;
				justify-content: space-between;

				.leftbox {
					display: flex;
					flex-direction: column;
					color: #848484;

					.leftbox_1 {
						image {
							width: 30rpx;
						}

						display: flex;
					}
				}

				.rightbox {
					color: #848484;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
				}
			}
		}
	}

	/* 普通 */
	.set-2 .img-border {
		width: 18rpx;
		height: 17rpx;
		background: gray;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		margin-top: -1rpx;
		left: -58rpx;
		z-index: 100;
	}

	/* 特殊 */
	.set-2:nth-of-type(1)>.img-border {
		width: 38rpx;
		height: 38rpx;
		background: #FFCCD8;
		border-radius: 50%;
		position: absolute;
		top: 18%;
		margin-top: -3rpx;
		left: -68rpx;
		z-index: 100;
	}

	.set-2:nth-of-type(1) .left_img {
		border-radius: 50%;
		width: 16rpx;
		height: 16rpx;
		background: #FE3666;
		top: 50%;
		margin-top: 13rpx;
		margin-left: 10rpx;
	}

	.left_line_up {
		position: absolute;
		top: -4rpx;
		left: -52upx;
		height: 80%;
		margin-top: -22rpx;
		border-style: solid;
		border-left: 1rpx;
		border-color: #ccc;
	}

	.left_line_down {
		position: absolute;
		top: 18%;
		left: -52upx;
		height: 60%;
		margin-top: 22rpx;
		border-style: solid;
		border-left: 1rpx;
		border-color: #ccc;
	}
</style>