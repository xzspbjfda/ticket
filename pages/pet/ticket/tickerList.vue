<template>
	<view>
		<u-calendar max-date="2950-01-01" v-model="show" mode="date" @change="changeday"></u-calendar>
		<view style="display: flex;">
			<u-tabs name="month" style="width: 85%;" :show-bar="false" :list="daytab" :inactive-color="themeColor.color" :active-color="themeColor.color" :current="current" @change="change"></u-tabs>
			<view @click="changetimedata"
				style="width: 15%;background: #fff;display: flex;flex-direction: column;align-items: center;">
				<image style="width: 40%;" src="../../../static/日历.png" mode="widthFix"></image>
				<view>
					日历
				</view>
			</view>
		</view>
		<view style="width: 60%;margin: 0 auto;" v-if="tickerlist.length == 0">
			<image src="https://img11.360buyimg.com/ftfman/jfs/t1/130609/24/19259/35205/5fd03cc7E49456a46/4fb443c24e0cf799.png" mode="widthFix"></image>
			<view style="width: 100%;text-align: center;font-size: 30rpx;font-weight: 700;">当前搜索无结果</view>
		</view>
		<!-- <view class="toptitle">出发日期：{{form.fromDate}}</view> -->
		<view class="Listbox">
			<view  v-if="tickerlist.length > 0" v-for="(item,index) in tickerlist" :key="index" class="ticket_item">
				<view class="ticket_item_top" @click="buyInfo(item)">
					<view class="ticket_item_top_left">
						<view class="flex1" style="width: 30%;">
							<image style="width: 30%;" :src="item.airlineLogoUrl" mode="widthFix"></image>
							<view>
								<view style="font-size: 35rpx;font-weight: bold;">
									{{item.fromTime}}
								</view>
								<view style="font-size: 25rpx;">
									{{item.fromAirportName}}
								</view>
							</view>
						</view>
						<view style="width: 28%;">
							<image style="width: 100%;" src="@/static/changjiantou1.png" mode="widthFix"></image>
						</view>
						<view class="flex1" style="width: 30%;">
							<view class="flex3">
								<view style="font-size: 25rpx;">

								</view>
								<view style="font-size: 35rpx;font-weight: bold;">
									{{item.toTime}}
								</view>
								<view style="font-size: 25rpx;">
									{{item.toAirportName}}
								</view>
							</view>
						</view>
					</view>
					<view class="ticket_item_top_right flex2">
						<view class="label" :class="'bg' + themeColor.name">
							剩{{item.seatLeftNum}}张
						</view>
						<view v-if="ticketcgtype == false"
							style="font-size: 35rpx;font-weight: bold;text-align: right;" :class="'text-' + themeColor.name">
							￥{{item.money}}<text style="font-size: 20rpx;">起</text>
						</view>
						<view v-if="ticketcgtype == true"
							style="font-size: 35rpx;font-weight: bold;text-align: right;" :class="'text-' + themeColor.name">
							{{getnum(item)}}
						</view>
						<view class="colorccc" style="font-size: 25rpx;text-align: right;">

						</view>
					</view>
				</view>
				<view>
					<view class="flex1 colorccc" style="margin-left: 60rpx;">
						<text>{{item.airlineCompany}}{{item.craftType}}</text>
						<text>{{item.discount}}折 起</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		airticket
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				show: false,
				form: {},
				tickerlist: [],
				list: [{
					name: '7月7日'
				}, {
					name: '7月8日'
				}, {
					name: '7月8日'
				}, {
					name: '7月9日'
				}, {
					name: '7月10日'
				}, {
					name: '7月11日'
				}],
				current: 0,
				optionsList: {},
				daytab: [],
				yearData: '',
				dayData: '',
				monthData: '',
				ticketcglist: {},
				ticketcgtype: false,
				tickernum:false
			};
		},
		onLoad(options) {
			console.log(options)
			if (options.orderItem) {
				const Item = JSON.parse(decodeURIComponent(options.Item))
				console.log('0000000')
				this.ticketcglist = JSON.parse(decodeURIComponent(options.orderItem))
				this.ticketcgtype = true
				this.yearData = Item.fromDate.slice(0, 4)
				this.optionsList = Item
				this.form.fromCityCode = Item.fromCityCode
				this.form.toCityCode = Item.toCityCode
				this.form.fromDate = Item.fromDate
				this.form.cabinLevel = Item.cabinLevel
				if(Item.toairportCode !== ''){
					this.form.toairportCode == Item.toairportCode
				}
				if(Item.fromairportCode !== ''){
					this.form.fromairportCode == Item.fromairportCode
				}
				this.daytab[0] = {
					month: Item.month + '月' + Item.day
				}
				var iday = 1
				for (var i = 0; i < 6; i++) {
					if (i > 0) {
						var num = Number(Item.day) + i
						if (num > this.optionsList.days) {
							var monthnum = Number(Item.month) + 1
							this.daytab[i] = {
								month: monthnum + '月' + iday
							}
							iday++
						} else {
							this.daytab[i] = {
								month: Item.month + '月' + num
							}
						}
					}
				}
			} else {
				this.yearData = options.fromDate.slice(0, 4)
				this.optionsList = options
				this.form.fromCityCode = options.fromCityCode
				this.form.toCityCode = options.toCityCode
				this.form.fromDate = options.fromDate
				this.form.cabinLevel = options.cabinLevel
				if(options.toairportCode == "undefined"){
					this.form.toairportCode = ''
				}else{
					this.form.toairportCode = options.toairportCode
				}
				if(options.fromairportCode == "undefined"){
					this.form.fromairportCode = ''
				}else{
					this.form.fromairportCode = options.fromairportCode
				}
				this.daytab[0] = {
					month: options.month + '月' + options.day
				}
				if (options.month < 10) {
					if (options.day < 10) {
						this.daytab[0] = {
							month: '0' + options.month + '月' + '0' + options.day
						}
					} else {
						this.daytab[0] = {
							month: '0' + options.month + '月' + options.day
						}
					}
				} else {
					if (options.day < 10) {
						this.daytab[0] = {
							month: options.month + '月' + '0' + options.day
						}
					} else {
						this.daytab[0] = {
							month: options.month + '月' + options.day
						}
					}
				}
				var iday = 1
				for (var i = 0; i < 6; i++) {
					if (i > 0) {
						var num = Number(options.day) + i
						if (num > this.optionsList.days) {
							var monthnum = Number(options.month) + 1
							if (monthnum < 10) {
								this.daytab[i] = {
									month: '0' + monthnum + '月' + '0' + iday
								}
							} else {
								this.daytab[i] = {
									month: monthnum + '月' + '0' + iday
								}
							}
							iday++
						} else {
							if (options.month < 10) {
								if (num < 10) {
									this.daytab[i] = {
										month: '0' + options.month + '月' + '0' + num
									}
								} else {
									this.daytab[i] = {
										month: '0' + options.month + '月' + num
									}
								}
							} else {
								if (num < 10) {
									this.daytab[i] = {
										month: options.month + '月' + '0' + num
									}
								} else {
									this.daytab[i] = {
										month: options.month + '月' + num
									}
								}
							}
						}
					}
				}
			}
			console.log(this.form,"form")
			this.getlist()
		},
		methods: {
			getnum(item){
				if(Number(item.money)-Number(this.ticketcglist.money)<0){
					return '点击购买'
				}
				return Number(item.money)-Number(this.ticketcglist.money) +'元起'
			},
			changeday(e) {
				console.log(e)
				this.current = 0
				this.form.fromDate = e
				this.yearData = e.year
				if (e.month < 10) {
					if (e.day < 10) {
						this.daytab[0] = {
							month: '0' + e.month + '月' + '0' + e.day
						}
					} else {
						this.daytab[0] = {
							month: '0' + e.month + '月' + e.day
						}
					}
				} else {
					if (e.day < 10) {
						this.daytab[0] = {
							month: e.month + '月' + '0' + e.day
						}
					} else {
						this.daytab[0] = {
							month: e.month + '月' + e.day
						}
					}
				}
				var iday = 1
				for (var i = 0; i < 6; i++) {
					if (i > 0) {
						var num = Number(e.day) + i
						if (num > e.days) {
							var monthnum = Number(e.month) + 1
							if (monthnum < 10) {
								this.daytab[i] = {
									month: '0' + monthnum + '月' + '0' + iday
								}
							} else {
								this.daytab[i] = {
									month: monthnum + '月' + '0' + iday
								}
							}
							iday++
						} else {
							if (e.month < 10) {
								if (num < 10) {
									this.daytab[i] = {
										month: '0' + e.month + '月' + '0' + num
									}
								} else {
									this.daytab[i] = {
										month: '0' + e.month + '月' + num
									}
								}
							} else {
								if (num < 10) {
									this.daytab[i] = {
										month: e.month + '月' + '0' + num
									}
								} else {
									this.daytab[i] = {
										month: e.month + '月' + num
									}
								}
							}
						}
					}
				}
				this.change(0)
			},
			changetimedata() {
				this.show = true
			},
			change(index) {
				this.current = index;
				console.log(this.daytab[index])
				this.dayData = this.daytab[index].month.slice(0, 2)
				this.monthData = this.daytab[index].month.slice(3, 5)
				this.form.fromDate = this.yearData + '-' + this.dayData + '-' + this.monthData
				console.log(this.form.fromDate)
				this.getlist()
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				if (this.ticketcgtype == true) {
					this.form.airlineCode = this.ticketcglist.hkcode[0]
				}
				this.$http.get(`${airticket}`, this.form).then(r => {
					console.log(r.data)
					this.tickerlist = r.data
					if(r.data.length == 0){
						this.tickernum = true
					}else{
						this.tickernum = false
					}
					uni.hideLoading();
				}).catch(() => {

				});
			},
			buyInfo(item) {
				if (this.ticketcgtype == false) {
					uni.navigateTo({
						url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item))
					})
				} else {
					uni.navigateTo({
						url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item)) +
							'&orderItem=' + encodeURIComponent(JSON.stringify(this.ticketcglist))
					})
				}
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
	.Listbox {
		padding-top: 10rpx;
	}

	.colorccc {
		color: #8c8c8c;
	}

	.flex1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flex2 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.flex3 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.toptitle {
		background: #fff;
		width: 98%;
		margin: 0 auto;
		margin-top: 10rpx;
		padding: 10rpx;
		border-radius: 20rpx;
		text-align: center;
		font-weight: bold;
	}

	.ticket_item {
		background: #fff;
		width: 98%;
		margin: 0 auto;
		margin-top: 10rpx;
		padding: 10rpx;
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;

		.ticket_item_top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.ticket_item_top_left {
				width: 70%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.ticket_item_top_right {
			.label {
				width: 80rpx;
				height: 30rpx;
				font-size: 25rpx;
				line-height: 30rpx;
				text-align: center;
				border-radius: 10rpx;
				color: #fff;
			}
		}
	}
</style>