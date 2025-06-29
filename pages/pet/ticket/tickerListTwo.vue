<template>
	<view style="display: flex;">
		<view style="width: 60%;margin: 0 auto;" v-if="tickerlist.length == 0&&tickerlist2.length == 0">
			<image src="https://img11.360buyimg.com/ftfman/jfs/t1/130609/24/19259/35205/5fd03cc7E49456a46/4fb443c24e0cf799.png" mode="widthFix"></image>
			<view style="width: 100%;text-align: center;font-size: 30rpx;font-weight: 700;">当前搜索无结果</view>
		</view>
		<view style="width: 50%;" v-if="tickerlist.length != 0">
			<u-calendar max-date="2950-01-01" v-model="show" mode="date" @change="changeday"></u-calendar>
			<view style="display: flex;">
				<u-tabs name="month" style="width: 85%;" :inactive-color="themeColor.color" :active-color="themeColor.color"  :list="daytab" :current="current" @change="change"></u-tabs>
				<view @click="changetimedata"
					style="width: 15%;background: #fff;display: flex;flex-direction: column;align-items: center;">
					<image style="width: 40%;" src="../../../static/日历.png" mode="widthFix"></image>
					<view>
						日历
					</view>
				</view>
			</view>
			<!-- <view class="toptitle">出发日期：{{form.fromDate}}</view> -->
			<scroll-view scroll-y class="Listbox">
				<view v-if="tickerlist.length == 0" class="" style="margin-top: 20rpx;width: 100%;text-align: center;">
					暂无可订航班
				</view>
				<view v-for="(item,index) in tickerlist" :key="index" class="ticket_item" @click="buyInfo(index)"
					:class="{active:showw==index}">
					<view class="ticket_item_top">
						<view class="ticket_item_top_left">
							<view class="flex1" style="width: 40%;">
								<view>
									<view style="font-size: 35rpx;font-weight: bold;text-align: left;">
										{{item.fromTime}}
									</view>
									<view style="font-size: 20rpx;text-align: left;">
										{{item.fromAirportName}}
									</view>
								</view>
							</view>
							<view style="width: 18%;margin-right: 10rpx;">
								<image style="width: 100%;" src="@/static/changjiantou1.png" mode="widthFix"></image>
							</view>
							<view class="flex1" style="width: 40%;float: right;">
								<view class="flex3" style="width: 100%;">
									<view style="font-size: 25rpx;">

									</view>
									<view style="font-size: 35rpx;font-weight: bold;text-align: right;">
										{{item.toTime}}
									</view>
									<view style="font-size: 20rpx;text-align: right;">
										{{item.toAirportName}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view>
						<view class="flex1 colorccc">
							<text style="font-size: 20rpx;">{{item.airlineCompany}}{{item.craftType}}</text>
							<view class="ticket_item_top_right flex2">
								<view style="font-size: 35rpx;font-weight: bold;text-align: right;" :class="'text-' + themeColor.name">
									￥{{item.money}}<text style="font-size: 20rpx;">起</text>
								</view>
								<view class="colorccc" style="font-size: 25rpx;text-align: right;">

								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view style="width: 50%;"  v-if="tickerlist2.length != 0">
			<u-calendar max-date="2950-01-01" v-model="show2" mode="date" @change="changeday2"></u-calendar>
			<view style="display: flex;">
				<u-tabs name="month" style="width: 85%;" :list="daytab2" :inactive-color="themeColor.color" :active-color="themeColor.color" :current="current2" @change="change2"></u-tabs>
				<view @click="changetimedata2"
					style="width: 15%;background: #fff;display: flex;flex-direction: column;align-items: center;">
					<image style="width: 40%;" src="../../../static/日历.png" mode="widthFix"></image>
					<view>
						日历
					</view>
				</view>
			</view>
			<!-- <view class="toptitle">出发日期：{{form.fromDate}}</view> -->
			<scroll-view scroll-y class="Listbox">
				<view v-if="tickerlist2.length == 0" class="" style="margin-top: 20rpx;width: 100%;text-align: center;">
					暂无可订航班
				</view>
				<view v-for="(item,index) in tickerlist2" :key="index" class="ticket_item" @click="buyInfo2(index)"
					:class="{active:showw2==index}">
					<view class="ticket_item_top">
						<view class="ticket_item_top_left">
							<view class="flex1" style="width: 40%;">
								<view>
									<view style="font-size: 35rpx;font-weight: bold;text-align: left;">
										{{item.fromTime}}
									</view>
									<view style="font-size: 20rpx;text-align: left;">
										{{item.fromAirportName}}
									</view>
								</view>
							</view>
							<view style="width: 18%;margin-right: 10rpx;">
								<image style="width: 100%;" src="@/static/changjiantou1.png" mode="widthFix"></image>
							</view>
							<view class="flex1" style="width: 40%;float: right;">
								<view class="flex3" style="width: 100%;">
									<view style="font-size: 25rpx;">

									</view>
									<view style="font-size: 35rpx;font-weight: bold;text-align: right;">
										{{item.toTime}}
									</view>
									<view style="font-size: 20rpx;text-align: right;">
										{{item.toAirportName}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view>
						<view class="flex1 colorccc">
							<text style="font-size: 20rpx;">{{item.airlineCompany}}{{item.craftType}}</text>
							<view class="ticket_item_top_right flex2">
								<view style="font-size: 35rpx;font-weight: bold;text-align: right;" :class="'text-' + themeColor.name">
									￥{{item.money}}<text style="font-size: 20rpx;">起</text>
								</view>
								<view class="colorccc" style="font-size: 25rpx;text-align: right;">

								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
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
	import {
		airticket
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				show: false,
				show2: false,
				form: {

				},
				tickerlist: [],
				tickerlist2: [],
				
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
				current2: 0,
				optionsList: {},
				daytab: [],
				yearData: '',
				dayData: '',
				monthData: '',
				daytab2: [],
				form2: '',
				yearData2: '',
				dayData2: '',
				monthData2: '',
				showw: 0,
				showw2: 0,
				startItem: {},
				endItem: {},
				moneys: 0,
				ticketcglist: {},
				ticketcgtype: false,
				tickernum:false,
				tickernum1:false
			};
		},
		onLoad(options) {
			const Item = JSON.parse(decodeURIComponent(options.Item))
			if (options.orderItem) {
				console.log('0000000')
				this.ticketcglist = JSON.parse(decodeURIComponent(options.orderItem))
				this.ticketcgtype = true
			}
			console.log('Item',Item)
			this.yearData = Item.fromDate.slice(0, 4)
			this.yearData2 = Item.fromDate2.slice(0, 4)
			this.optionsList = Item
			this.form = {
				fromCityCode: Item.fromCityCode,
				toCityCode: Item.toCityCode,
				fromDate: Item.fromDate,
				cabinLevel: Item.cabinLevel,
				airlineCode:''
			}
			this.form2 = {
				fromCityCode: Item.fromCityCode2,
				toCityCode: Item.toCityCode2,
				fromDate: Item.fromDate2,
				cabinLevel: Item.cabinLevel,
				airlineCode:''
			}
			if(Item.toairportCode == "undefined" || Item.toairportCode == undefined){
				this.form.toairportCode = ''
			}else{
				this.form.toairportCode = Item.toairportCode
			}
			if(Item.fromairportCode == "undefined" || Item.fromairportCode == undefined){
				this.form.fromairportCode = ''
			}else{
				this.form.fromairportCode = Item.fromairportCode
			}
			if(Item.toairportCode2 == "undefined" || Item.toairportCode2 == undefined){
				this.form2.toairportCode = ''
			}else{
				this.form2.toairportCode = Item.toairportCode2
			}
			if(Item.fromairportCode2 == "undefined" || Item.fromairportCode2 == undefined){
				this.form2.fromairportCode = ''
			}else{
				this.form2.fromairportCode = Item.fromairportCode2
			}
			this.daytab[0] = {
				month: this.optionsList.month + '月' + this.optionsList.day
			}
			this.daytab2[0] = {
				month: this.optionsList.month2 + '月' + this.optionsList.day2
			}
			if (Item.month < 10) {
				if (Item.day < 10) {
					this.daytab[0] = {
						month: '0' + Item.month + '月' + '0' + Item.day
					}
				} else {
					this.daytab[0] = {
						month: '0' + Item.month + '月' + Item.day
					}
				}
			} else {
				if (Item.day < 10) {
					this.daytab[0] = {
						month: Item.month + '月' + '0' + Item.day
					}
				} else {
					this.daytab[0] = {
						month: Item.month + '月' + Item.day
					}
				}
			}
			if (Item.month2 < 10) {
				if (Item.day2 < 10) {
					this.daytab2[0] = {
						month: '0' + Item.month2 + '月' + '0' + Item.day2
					}
				} else {
					this.daytab2[0] = {
						month: '0' + Item.month2 + '月' + Item.day2
					}
				}
			} else {
				if (Item.day2 < 10) {
					this.daytab2[0] = {
						month: Item.month2 + '月' + '0' + Item.day2
					}
				} else {
					this.daytab2[0] = {
						month: Item.month2 + '月' + Item.day2
					}
				}
			}
			var iday = 1
			for (var i = 0; i < 6; i++) {
				if (i > 0) {
					var num = Number(Item.day) + i
					if (num > Item.days) {
						var monthnum = Number(Item.month) + 1
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
						if (Item.month < 10) {
							if (num < 10) {
								this.daytab[i] = {
									month: '0' + Item.month + '月' + '0' + num
								}
							} else {
								this.daytab[i] = {
									month: '0' + Item.month + '月' + num
								}
							}
						} else {
							if (num < 10) {
								this.daytab[i] = {
									month: Item.month + '月' + '0' + num
								}
							} else {
								this.daytab[i] = {
									month: Item.month + '月' + num
								}
							}
						}
					}
				}
			}
			var iday2 = 1
			for (var i = 0; i < 6; i++) {
				if (i > 0) {
					var num = Number(Item.day2) + i
					if (num > Item.days2) {
						var monthnum = Number(Item.month2) + 1
						if (monthnum < 10) {
							this.daytab2[i] = {
								month: '0' + monthnum + '月' + '0' + iday2
							}
						} else {
							this.daytab2[i] = {
								month: monthnum + '月' + '0' + iday2
							}
						}
						iday2++
					} else {
						if (Item.month2 < 10) {
							if (num < 10) {
								this.daytab2[i] = {
									month: '0' + Item.month2 + '月' + '0' + num
								}
							} else {
								this.daytab2[i] = {
									month: '0' + Item.month2 + '月' + num
								}
							}
						} else {
							if (num < 10) {
								this.daytab2[i] = {
									month: Item.month2 + '月' + '0' + num
								}
							} else {
								this.daytab2[i] = {
									month: Item.month2 + '月' + num
								}
							}
						}
					}
				}
			}
			this.getlist()
		},
		methods: {
			changeday(e) {
				console.log(e)
				this.form.fromDate = e.result
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
			changeday2(e) {
				console.log(e)
				this.form2.fromDate = e.result
				this.yearData2 = e.year
				if (e.month < 10) {
					if (e.day < 10) {
						this.daytab2[0] = {
							month: '0' + e.month + '月' + '0' + e.day
						}
					} else {
						this.daytab2[0] = {
							month: '0' + e.month + '月' + e.day
						}
					}
				} else {
					if (e.day < 10) {
						this.daytab2[0] = {
							month: e.month + '月' + '0' + e.day
						}
					} else {
						this.daytab2[0] = {
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
								this.daytab2[i] = {
									month: '0' + monthnum + '月' + '0' + iday
								}
							} else {
								this.daytab2[i] = {
									month: monthnum + '月' + '0' + iday
								}
							}
							iday++
						} else {
							if (e.month < 10) {
								if (num < 10) {
									this.daytab2[i] = {
										month: '0' + e.month + '月' + '0' + num
									}
								} else {
									this.daytab2[i] = {
										month: '0' + e.month + '月' + num
									}
								}
							} else {
								if (num < 10) {
									this.daytab2[i] = {
										month: e.month + '月' + '0' + num
									}
								} else {
									this.daytab2[i] = {
										month: e.month + '月' + num
									}
								}
							}
						}
					}
				}
				this.change2(0)
			},
			changetimedata() {
				this.show = true
			},
			changetimedata2() {
				this.show2 = true
			},
			change(index) {
				this.current = index;
				console.log(index)
				this.dayData = this.daytab[index].month.slice(0, 2)
				this.monthData = this.daytab[index].month.slice(3, 5)
				this.form.fromDate = this.yearData + '-' + this.dayData + '-' + this.monthData
				console.log(this.form.fromDate)
				this.getlist()
			},
			change2(index) {
				this.current2 = index;
				console.log(index)
				this.dayData2 = this.daytab2[index].month.slice(0, 2)
				this.monthData2 = this.daytab2[index].month.slice(3, 5)
				this.form2.fromDate = this.yearData2 + '-' + this.dayData2 + '-' + this.monthData2
				console.log(this.form2.fromDate)
				this.getlist2()
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				if(this.ticketcgtype == true){
					this.form.airlineCode = this.ticketcglist.hkcode[0]
				}
				this.$http.get(`${airticket}`, this.form).then(r => {
					console.log(r.data)
					this.tickerlist = r.data
					this.startItem = this.tickerlist[0]
					this.moneys = this.startItem.money + this.endItem.money
					if(this.ticketcgtype == true){
						this.moneys = this.startItem.money + this.endItem.money - this.ticketcglist.money
					}
					if(r.data.length == 0){
						this.tickernum = true
					}else{
						this.tickernum = false
					}
					this.getlist2()
				}).catch(() => {

				});
			},
			getlist2() {
				uni.showLoading({
					title: '加载中'
				});
				if(this.ticketcgtype == true){
					this.form2.airlineCode = this.ticketcglist.hkcode[1]
				}
				this.$http.get(`${airticket}`, this.form2).then(r => {
					console.log(r.data)
					this.tickerlist2 = r.data
					this.endItem = this.tickerlist2[0]
					this.moneys = this.startItem.money + this.endItem.money
					if(this.ticketcgtype == true){
						this.moneys = this.startItem.money + this.endItem.money - this.ticketcglist.money
					}
					if(r.data.length == 0){
						this.tickernum1 = true
					}else{
						this.tickernum1 = false
					}
					uni.hideLoading();
				}).catch(() => {

				});
			},
			buyInfo(index) {
				this.showw = index
				this.startItem = this.tickerlist[index]
				this.moneys = this.startItem.money + this.endItem.money
				if(this.ticketcgtype == true){
					this.moneys = this.startItem.money + this.endItem.money - this.ticketcglist.money
				}
				// uni.navigateTo({
				// 	url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item))
				// })
			},
			buyInfo2(index) {
				this.showw2 = index
				this.endItem = this.tickerlist2[index]
				this.moneys = this.startItem.money + this.endItem.money
				if(this.ticketcgtype == true){
					this.moneys = this.startItem.money + this.endItem.money - this.ticketcglist.money
				}
				// uni.navigateTo({
				// 	url: '/pages/pet/tickerInfo/tickerInfo?Item=' + encodeURIComponent(JSON.stringify(item))
				// })
			},
			goinfo() {
				if(this.ticketcgtype == false){
					uni.navigateTo({
						url: '/pages/pet/tickerInfo/tickerInfoTwo?endItem=' + encodeURIComponent(JSON.stringify(this
							.endItem)) + '&startItem=' + encodeURIComponent(JSON.stringify(this.startItem))
					})
				}else{
					uni.navigateTo({
						url: '/pages/pet/tickerInfo/tickerInfoTwo?endItem=' + encodeURIComponent(JSON.stringify(this
							.endItem)) + '&startItem=' + encodeURIComponent(JSON.stringify(this.startItem))+ '&orderItem=' + encodeURIComponent(JSON.stringify(this.ticketcglist))
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.active {
		background: #c2e9fb !important;
	}

	.Listbox {
		padding-top: 10rpx;
		height: 80vh;
		overflow: hidden;
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
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20rpx;
			}
		}

		.ticket_item_top_right {
			.label {

				width: 80rpx;
				height: 30rpx;
				background: red;
				font-size: 10rpx;
				line-height: 30rpx;
				text-align: center;
				background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
				border-radius: 10rpx;
				color: #ff4c4f;
			}
		}
	}
</style>