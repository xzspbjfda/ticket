<template>
	<view>
		<view>
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
			</view>
			<view class="topInfo">
				<view>
					{{info.group_list[0].fromDatemd}} <text
						style="color: #ffb810;margin-left: 15rpx;margin-right: 15rpx;"></text>
				</view>
				<view class="process_more">
					<!-- 步骤条 -->
					<view class="set-2" :key="index" v-for="(items,index) in options">
						<!-- 图片 -->
						<view class="img-border">
							<view class="left_img"></view>
						</view>
						<view v-if='index!=0' class="left_line_up"></view>
						<view v-if='index!=options.length-1' class="left_line_down"></view>
						<view class="set-view">
							<view class="set-view-test">
								<view class="set-view-test2">{{items.time}}</view>
							</view>
							<view v-if='index!=options.length-1' class="iteminfo">
								<view class="leftbox">
									<view class="leftbox_1">
										<!-- <image :src="item.airlineLogoUrl" mode="widthFix"></image> -->
										<view>
											{{info.group_list[0].airlineCompany}}
										</view>
									</view>
									<view>
										{{info.group_list[0].flightNo}}
									</view>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="topInfo" v-if="optionsstype == true">
				<view>
					{{info.group_list[1].fromDatemd}} <text
						style="color: #ffb810;margin-left: 15rpx;margin-right: 15rpx;"></text>
				</view>
				<view class="process_more">
					<!-- 步骤条 -->
					<view class="set-2" :key="index" v-for="(items,index) in optionss">
						<!-- 图片 -->
						<view class="img-border">
							<view class="left_img"></view>
						</view>
						<view v-if='index!=0' class="left_line_up"></view>
						<view v-if='index!=optionss.length-1' class="left_line_down"></view>
						<view class="set-view">
							<view class="set-view-test">
								<view class="set-view-test2">{{items.time}}</view>
							</view>
							<view v-if='index!=optionss.length-1' class="iteminfo">
								<view class="leftbox">
									<view class="leftbox_1">
										<!-- <image :src="item.airlineLogoUrl" mode="widthFix"></image> -->
										<view>
											{{info.group_list[0].airlineCompany}}
										</view>
									</view>
									<view>
										{{info.group_list[0].flightNo}}
									</view>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="peopleinfo">
				<view style="font-size: 35rpx;font-weight: bold;margin-bottom: 20rpx;">
					出行信息
				</view>
				<view v-for="(item,index) in info.list" :key="index" style="display: flex;">

					<view style="width: 70%;"
						v-if="item.psg_status== 11||item.psg_status== 13||item.psg_status== 21||item.psg_status== 23">
						<view class="typepeo" v-if="item.voyageType == 1">去</view>
						<view class="typepeo" v-if="item.voyageType == 2">返</view>
						<view class="peopleinfo_item">
							<view style="font-size: 31rpx;font-weight: bold;">
								<u-icon size="35" name="rmb-circle" :class="'text-' + themeColor.name"
									style="margin-right: 10rpx;"></u-icon>{{item.psgStatusName}}
							</view>
							<!-- <view style="margin-left: 45rpx;font-size: 30rpx;">
								<view>
									{{item.name}}
								</view>
								<view>
									身份证{{item.cardNo}}
								</view>
							</view> -->
						</view>

						<view class="peopleinfo_item">
							<view style="color: #b5b5b5;font-size: 28rpx;">
								乘机人
							</view>
							<view style="margin-left: 45rpx;font-size: 30rpx;">
								<view>
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
					<view style="width: 70%;" v-else>
						<view class="typepeo" v-if="item.voyageType == 1">去</view>
						<view class="typepeo" v-if="item.voyageType == 2">返</view>
						<view class="peopleinfo_item">
							<view style="color: #b5b5b5;font-size: 28rpx;">
								乘机人
							</view>
							<view style="margin-left: 45rpx;font-size: 30rpx;">
								<view>
									{{item.name}}
								</view>
								<view>
									身份证{{item.cardNo}}
								</view>
							</view>
						</view>
						<view class="peopleinfo_item">
							<view style="color: #b5b5b5;font-size: 28rpx;">
								联系人手机
							</view>
							<view style="margin-left: 45rpx;font-size: 30rpx;">
								<view>
									{{item.mobile}}
								</view>
							</view>
						</view>

					</view>
					<view class="itemcz"
						v-if="item.psg_status > 1">
						<view class="czbtn" style="color: #b5b5b5;" @click="gostatusinfo(item)">
							详情
						</view>
					</view>

					<view class="itemcz" v-if="item.psg_status == 1	">
						<view class="czbtn" style="background: #ffb810;margin-left: 8rpx;" @click="refund(item)">
							<text>退票</text>
						</view>
						<view class="czbtn"><text style="color: #b5b5b5;" @click="goinfo(item)">改签</text></view>
					</view>
				</view>
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
		<u-modal v-model="changestatus" :show-cancel-button="true" confirm-text="确定" title="请选择改签机票" @cancel="cancel"
			@confirm="confirm">
			<view class="u-update-content" style="padding-left: 20rpx;">
				<u-checkbox-group wrap @change="checkboxGroupChange">
					<u-checkbox @change="checkboxChange" v-model="item.checked" v-for="(item, index) in info.list"
						:key="index" :name="item">
						<view>
							<view style="display: flex;">
								<view class="typepeo" v-if="item.voyageType == 1">去</view>
								<view class="typepeo" v-if="item.voyageType == 2">返</view>
								<view style="margin-left: 20rpx;">
									{{item.fromAirportName}}-{{item.toAirportName}}
								</view>
							</view>
							<view class="">
								{{item.name}}
							</view>
						</view>
					</u-checkbox>
				</u-checkbox-group>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		orderdetails
	} from '@/api/ticket.js';
	import {
		cancelOrder
	} from '@/api/ticket.js';
	import {
		applyRefundTicket
	} from '@/api/ticket.js';
	import {
		autoPay
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				causename: '',
				cause: '',
				refundshow: false,
				info: {},
				options: [{
						time: '23:10  新郑机场 T2'
					},
					{
						time: '23:10  美兰机场 T1'
					},
				],
				optionss: [{
						time: '23:10  新郑机场 T2'
					},
					{
						time: '23:10  美兰机场 T1'
					},
				],
				changelist: {
					list: [],
					orderNo: [],
					money: 0,
					hkcode: []
				},
				changestatus: false,
				// // 演示地址，请勿直接使用
				// action: 'http://www.example.com/upload',
				// fileList: [{
				// 	url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				// }]
				dstime: null,
				optionsstype: false,
				tkstatus: false,
				gqstatus: false
			}
		},
		onLoad(option) {
			this.orderNo = option.orderNo
			this.getlist()
		},
		onShow() {
			this.getlist()
		},
		onReady() {

		},
		computed: {

		},
		methods: {
			gostatusinfo(item) {
				console.log()
				var forms = {
					orderNo: item.orderNo,
					chaNo: item.chaNo,
					type: 0
				}
				if (item.psg_status >= 11 || item.psg_status <= 16) {
					forms.type = 1
					forms.refundNo = item.refundNo
				} else {
					forms.type = 0
				}
				uni.navigateTo({
					url: "/pages/pet/Ticket_orders/status_info?info=" + encodeURIComponent(JSON.stringify(forms))
				})
			},
			Changeticket(item) {
				this.changestatus = true
			},
			payclick() {
				var info = {
					orderNo: this.orderNo
				}
				this.$http.post(`${autoPay}`, info).then(r => {
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

			cancel() {
				console.log('11112222')
				this.closeModal();
			},
			goinfo(items) {
				var that = this
				this.changelist.money = 0
				this.changelist.list.push(items.id)
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
				const a = this.info.list.filter(function(item) {
					return item.id == that.changelist.list[0]
				});
				console.log(a[0])
				var form = {
					fromCityCode: a[0].fromAirportCode,
					toCityCode: a[0].toAirportCode,
					fromDate: a[0].fromDateTime.substring(0, 10),
					cabinLevel: 0,
					month: a[0].fromDateTime.substring(5, 7),
					day: a[0].fromDateTime.substring(8, 10),
					days: 31,
				}
				uni.navigateTo({
					url: '/pages/pet/ticket/tickerList?Item=' + encodeURIComponent(JSON.stringify(form)) +
						'&orderItem=' + encodeURIComponent(JSON.stringify(this.changelist))
				})
			},
			// confirm() {
			// 	var that = this
			// 	console.log(that.changelist)
			// 	if (that.changelist.list.length == 1) {
			// 		const a = that.info.list.filter(function(item) {
			// 			return item.id == that.changelist.list[0]
			// 		});
			// 		console.log(a[0])
			// 		var form = {
			// 			fromCityCode: a[0].fromAirportCode,
			// 			toCityCode: a[0].toAirportCode,
			// 			fromDate: a[0].fromDateTime.substring(0, 10),
			// 			cabinLevel: 0,
			// 			month: a[0].fromDateTime.substring(5, 7),
			// 			day: a[0].fromDateTime.substring(8, 10),
			// 			days: 31,
			// 		}
			// 		uni.navigateTo({
			// 			url: '/pages/pet/ticket/tickerList?Item=' + encodeURIComponent(JSON.stringify(form)) +
			// 				'&orderItem=' + encodeURIComponent(JSON.stringify(this.changelist))
			// 		})
			// 	}
			// 	if (that.changelist.list.length == 2) {
			// 		const a = that.info.list.filter(function(item) {
			// 			return item.id == that.changelist.list[0]
			// 		});
			// 		const b = that.info.list.filter(function(item) {
			// 			return item.id == that.changelist.list[1]
			// 		});
			// 		console.log(a, b)
			// 		console.log(a[0].voyageType,b[0].voyageType,a[0].cardNo,b[0].cardNo)	
			// 		if (a[0].voyageType !== b[0].voyageType && a[0].cardNo !== b[0].cardNo) {
			// 			uni.showToast({
			// 				title: '不支持该种改签选择',
			// 				//将值设置为 success 或者直接不用写icon这个参数
			// 				icon: 'error',
			// 				//显示持续时间为 2秒
			// 				duration: 1000
			// 			})
			// 			setTimeout(function(){
			// 				return
			// 			},1000)
			// 		}else {
			// 			console.log(this.info.group_list)
			// 		var form = {
			// 			fromCityCode: this.info.group_list[0].fromAirportCode,
			// 			toCityCode: this.info.group_list[0].toAirportCode,
			// 			fromCityCode2: this.info.group_list[1].fromAirportCode,
			// 			toCityCode2: this.info.group_list[1].toAirportCode,
			// 			fromDate: this.info.group_list[0].fromDateY + '-' + this.info.group_list[0].fromDatemd,
			// 			fromDate2: this.info.group_list[1].fromDateY + '-' + this.info.group_list[1].fromDatemd,
			// 			cabinLevel: 0,
			// 			month2: this.info.group_list[1].fromDatemd.substring(0, 2),
			// 			day2: this.info.group_list[1].fromDatemd.substring(3, 5),
			// 			days2: 31,
			// 			month: this.info.group_list[0].fromDatemd.substring(0, 2),
			// 			day: this.info.group_list[0].fromDatemd.substring(3, 5),
			// 			days: 31,
			// 		}
			// 		uni.navigateTo({
			// 			url: '/pages/pet/ticket/tickerListTwo?Item=' + encodeURIComponent(JSON.stringify(form)) +
			// 				'&orderItem=' + encodeURIComponent(JSON.stringify(this.changelist))
			// 		})
			// 	}

			// 	} 
			// 	if(that.changelist.list.length == 3){
			// 		uni.showToast({
			// 			title: '不支持该种改签选择',
			// 			//将值设置为 success 或者直接不用写icon这个参数
			// 			icon: 'error',
			// 			//显示持续时间为 2秒
			// 			duration: 1000
			// 		})
			// 		setTimeout(function(){
			// 			return
			// 		},1000)
			// 	}if(that.changelist.list.length == 4){
			// 		var form = {
			// 			fromCityCode: this.info.group_list[0].fromAirportCode,
			// 			toCityCode: this.info.group_list[0].toAirportCode,
			// 			fromCityCode2: this.info.group_list[1].fromAirportCode,
			// 			toCityCode2: this.info.group_list[1].toAirportCode,
			// 			fromDate: this.info.group_list[0].fromDateY + '-' + this.info.group_list[0].fromDatemd,
			// 			fromDate2: this.info.group_list[1].fromDateY + '-' + this.info.group_list[1].fromDatemd,
			// 			cabinLevel: 0,
			// 			month2: this.info.group_list[1].fromDatemd.substring(0, 2),
			// 			day2: this.info.group_list[1].fromDatemd.substring(3, 5),
			// 			days2: 31,
			// 			month: this.info.group_list[0].fromDatemd.substring(0, 2),
			// 			day: this.info.group_list[0].fromDatemd.substring(3, 5),
			// 			days: 31,
			// 		}
			// 		uni.navigateTo({
			// 			url: '/pages/pet/ticket/tickerListTwo?Item=' + encodeURIComponent(JSON.stringify(form)) +
			// 				'&orderItem=' + encodeURIComponent(JSON.stringify(this.changelist))
			// 		})
			// 	}
			// },
			closeModal() {
				uni.navigateBack();
			},
			checkboxChange(e) {
				console.log(e)
				if (e.value == true) {
					this.changelist.list.push(e.name.id)
					this.changelist.hkcode.push(e.name.flightNo.substring(0, 2))
					this.changelist.orderNo.push(e.name.orderNo)
					var a = e.name
					if (a.ticketType == 1) {
						this.changelist.money = this.changelist.money + a.adultSalePrice + a.adultFuel + a.adultTax
					}
					if (e.name.ticketType == 2) {
						this.changelist.money = this.changelist.money + a.childSalePrice + a.childFuel + a.childTax
					}
					if (e.name.ticketType == 3) {
						this.changelist.money = this.changelist.money + a.babySalePrice + a.babyFuel + a.babyTax
					}
				} else {
					this.changelist.list = this.changelist.list.filter(function(item) {
						return item !== e.name.id
					});
					this.changelist.orderNo = this.changelist.orderNo.filter(function(item) {
						return item !== e.name.orderNo
					});
					this.changelist.hkcode = this.changelist.hkcode.filter(function(item) {
						return item !== e.name.flightNo.substring(0, 2)
					});
					var a = e.name
					if (a.ticketType == 1) {
						this.changelist.money = this.changelist.money - a.adultSalePrice - a.adultFuel - a.adultTax
					}
					if (e.name.ticketType == 2) {
						this.changelist.money = this.changelist.money - a.childSalePrice - a.childFuel - a.childTax
					}
					if (e.name.ticketType == 3) {
						this.changelist.money = this.changelist.money - a.babySalePrice - a.babyFuel - a.babyTax
					}
				}
				console.log(e)
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);
			},
			refund(val) {
				this.refundshow = true
				this.causename = val.name
				this.tpinfo = val
				console.log(val)
			},
			refunds() {
				var form = {
					orderNo: this.orderNo,
					order_list_id: this.tpinfo.id,
					refundFlightNos: this.tpinfo.flightNo,
					refundPsgNames: this.causename,
					refundType: 1,
					refundReason: this.cause,
					involuntaryProveUrls: ''
				}
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${applyRefundTicket}`, form).then(r => {
					console.log(r.data)
					uni.hideLoading();
					uni.navigateBack()
				}).catch(() => {

				});
			},
			Cancelorder() {
				uni.showLoading({
					title: '加载中'
				});
				var form = {
					orderNo: this.orderNo
				}
				this.$http.post(`${cancelOrder}`, form).then(r => {
					uni.showToast({
						title: '取消订单成功',
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
				var form = {
					orderNo: this.orderNo
				}
				this.$http.get(`${orderdetails}`, form).then(r => {
					console.log(r.data)
					this.info = r.data
					// if(info.info.status == 1){
					// 	uni.showToast({
					// 		title: '余额不足待支付',
					// 		icon: 'none',
					// 		duration: 2000
					// 	})
					// }
					this.options[0].time = r.data.group_list[0].fromTime + ' ' + r.data.group_list[0]
						.fromAirportName + ' ' + r.data.group_list[0].fromTerminal
					this.options[1].time = r.data.group_list[0].toTime + ' ' + r.data.group_list[0].toAirportName +
						' ' + r.data.group_list[0].toTerminal
					if (r.data.group_list[1]) {
						this.optionsstype = true
						this.optionss[0].time = r.data.group_list[1].fromTime + ' ' + r.data.group_list[1]
							.fromAirportName + ' ' + r.data.group_list[1].fromTerminal
						this.optionss[1].time = r.data.group_list[1].toTime + ' ' + r.data.group_list[1]
							.toAirportName +
							' ' + r.data.group_list[1].toTerminal
					}
					console.log(this.options)
					var that = this
					if (r.data.info.orderStatus == 1) {
						 let timeout =  setInterval(function() {
							 
							const date1 = r.data.info.created_at.replace(/-/g, '/');
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
								that.Cancelorder()
								that.getlist()
							}
							if(that.info.info.orderStatus != 1){
								clearInterval(timeout);
								that.Cancelorder()
								that.getlist()
							}
						},1000)
					}
					uni.hideLoading();

				}).catch(() => {

				});
			},
		}
	};
</script>

<style lang="scss">
	.itemcz {
		display: flex;
		align-items: center;
	}

	.czbtn {
		width: 100rpx;
		height: 50rpx;
		border-radius: 20rpx;
		border: 2rpx solid #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;

	}

	.buttonbox {
		display: flex;
		width: 100%;
		justify-content: space-around;
		position: absolute;
		bottom: 0;
		padding: 20rpx;
		background: #fff;
	}

	.typepeo {
		width: 40rpx;
		height: 40rpx;
		background: #FFCE0C;
		border-radius: 10rpx;
		text-align: center;
	}

	.toptitle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20rpx;
		width: 100%;
	}

	.peopleinfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20rpx;
		background: #fff;
		width: 100%;
		margin-top: 20rpx;

		.peopleinfo_item {
			display: flex;
			margin-top: 15rpx;
			margin-bottom: 10rpx;
		}
	}

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
					background: #ff792b;
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