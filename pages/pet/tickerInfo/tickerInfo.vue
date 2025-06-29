<template>
	<view>
		<view class="topInfo">
			<view>
				{{tickerinfos.fromDatemd}} <text style="color: #ffb810;margin-left: 15rpx;margin-right: 15rpx;"></text>
				总时长{{tickerinfos.flyDuration}}
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
									<image :src="tickerinfos.airlineLogoUrl" mode="widthFix"></image>
									<view>
										{{tickerinfos.airlineCompany}}
									</view>
								</view>
								<view style="margin-left: 30rpx;">
									{{tickerinfos.flightNo}}
								</view>
							</view>
							<view class="rightbox">
								<view>
									{{tickerinfos.craftType}}<text
										style="color: #ffb810;border-left: 2px solid #ccc;padding-left: 5rpx;margin-left: 5rpx;">{{tickerinfos.meals}}</text>
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
				<u-tabs-swiper ref="uTabs" :inactive-color="themeColor.color" :active-color="themeColor.color" name="name" :list="tickerinfos.dataGroup" :current="current"
					@change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper style="height: 800rpx;" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item style="overflow: auto;" class="swiper-item" v-for="(item, index) in tickerinfos.dataGroup"
					:key="index">
					<scroll-view scroll-y style="width: 100%;" @scrolltolower="onreachBottom">
						<view class="ticketList">
							<view class="ticketItem" v-for="(items,index) in item.list" :key="index" @click="Booking(items)" v-if="isshows(items)">
								<view class="flex1 Itemtop">
									<view class="Itemtitle" :class="'text-' + themeColor.name">
										<text v-if="ticketcgtype == true"
											style="font-size: 25rpx;">优惠后</text>￥{{Number(items.cabinPrice_addprice.adultFarePrice)-Number(ticketcglist.money)}}<text
											style="font-size: 25rpx;">起</text>
									</view>
									<view  class="btnText" :class="'bg-' + themeColor.name">订</view>
								</view>
								<view class="Itembody">
									{{items.cabinName}}<text style="margin-left: 20rpx;">{{items.discount}}折</text>
								</view>
								<view class="Itembody">
									<!-- 托运行李<text style="margin-left: 20rpx;">共10公斤</text> -->
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '十年'
				}, {
					name: '青春'
				}, {
					name: '之约'
				}],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				numList: [{
					name: '23:10'
				}, {
					name: '01:55'
				}, ],
				options: [{
						time: '23:10  新郑机场 T2'
					},
					{
						time: '23:10  美兰机场 T1'
					},
				],
				tickerinfos: {},
				ticketcglist:{},
				ticketcgtype:false,
			}
		},
		onLoad(option) {
			const Item = JSON.parse(decodeURIComponent(option.Item));
			this.tickerinfos = Item
			if (option.orderItem) {
				this.ticketcglist = JSON.parse(decodeURIComponent(option.orderItem))
				this.ticketcgtype = true
			}
			this.options[0].time = Item.fromTime + ' ' + Item.fromAirportName + ' ' + Item.fromTerminal
			this.options[1].time = Item.toTime + ' ' + Item.toAirportName + ' ' + Item.toTerminal
		},
		methods: {
			isshows(item){
				if(this.ticketcgtype == false){
					return true
				}else{
					if(Number(item.cabinPrice_addprice.adultFarePrice)<Number(this.ticketcglist.money)){
						return false
					}else{
						return true
					}
				}
			},
			Booking(val) {
				console.log(val)
				var form = {
					flights: [{
						airlineCompany: this.tickerinfos.airlineCompany,
						fromAirportName: this.tickerinfos.fromAirportName,
						toAirportName: this.tickerinfos.toAirportName,
						cabinName: val.cabinName,
						flightNo: this.tickerinfos.flightNo,
						fromAirportCode: this.tickerinfos.fromAirportCode,
						toAirportCode: this.tickerinfos.toAirportCode,
						fromDateTime: this.tickerinfos.fromDateTime,
						toDateTime: this.tickerinfos.toDateTime,
						fromTerminal: this.tickerinfos.fromTerminal,
						toTerminal: this.tickerinfos.toTerminal,
						isShareFlight: this.tickerinfos.isShareFlight,
						realFlightNo: this.tickerinfos.realFlightNo,
						cabinCode: val.cabinCode,
						adultFarePrice: val.cabinPrice.adultFarePrice,
						adultSalePrice: val.cabinPrice.adultSalePrice,
						childFarePrice: val.cabinPrice.childFarePrice,
						childSalePrice: val.cabinPrice.childSalePrice,
						babyFarePrice: val.cabinPrice.babyFarePrice,
						babySalePrice: val.cabinPrice.babySalePrice,
						adultTax: this.tickerinfos.adultTax,
						adultFuel: this.tickerinfos.adultFuel,
						childTax: this.tickerinfos.childTax,
						childFuel: this.tickerinfos.childFuel,
						babyTax: this.tickerinfos.babyTax,
						babyFuel: this.tickerinfos.babyFuel,
						babyFuel: this.tickerinfos.babyFuel,
						cabinBookParms: val.cabinBookPara,
					}],
				}
				var b = val
				if(this.ticketcgtype == false){
					uni.navigateTo({
						url: '/pages/pet/Ticket_orders/Ticket_orders?Item=' + encodeURIComponent(JSON.stringify(
							form)) + '&tickerinfos=' + encodeURIComponent(JSON.stringify(this.tickerinfos)) +
							'&yssj=' + encodeURIComponent(JSON.stringify(b))
					})
				}else{
					uni.navigateTo({
						url: '/pages/pet/Ticket_orders/Ticket_orders?Item=' + encodeURIComponent(JSON.stringify(
							form)) + '&tickerinfos=' + encodeURIComponent(JSON.stringify(this.tickerinfos)) +
							'&yssj=' + encodeURIComponent(JSON.stringify(b))+
							'&orderItem=' + encodeURIComponent(JSON.stringify(this.ticketcglist))
					})
				}
			},
			// this.tickerinfos.fromDatemd + '&fromdd=' + this.tickerinfos.fromAirportName+ '&enddd=' + this.tickerinfos.toAirportName + '&qfsj=' + this.tickerinfos.fromTime
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
	.topInfo {
		width: 100%;
		padding: 25rpx;
		background: #fff;
	}

	.ticketList {
		display: flex;
		flex-direction: column;

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