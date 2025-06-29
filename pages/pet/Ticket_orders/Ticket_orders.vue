<template>
	<view>
		<view class="padding-20">
			<view class="title_Information padding-20 fffbox" v-if="ticketcgtype == true">
				<view style="font-weight: bold;">
					请确认改签详情
				</view>
			</view>
			<view class="title_Information padding-20 fffbox">
				<view style="font-size: 30rpx;font-weight: bold;margin-top: 10rpx;">
					{{toptitle.fromAirportName}}<text
						style="margin-left: 10rpx;margin-right: 10rpx;">-</text>{{toptitle.toAirportName}}
					{{toptitle.fromDatemd}} {{toptitle.fromTime}}
				</view>
				<view style="font-size: 26rpx;margin-top: 10rpx;" v-if="ticketcgtype == false">
					成人票 <text class="yellow">￥{{money}}</text>
				</view>
				<view style="font-size: 26rpx;margin-top: 10rpx;">
					<u-icon name="clock"></u-icon>预计支付成功后一小时内出票
				</view>
			</view>
			<view v-if="ticketcgtype == true" class="title_Information padding-20 fffbox">
				<u-form :model="form2" ref="uForm">
					<u-form-item label="备注">
						<u-input v-model="form2.remack" />
					</u-form-item>
				</u-form>
			</view>
			<view class="title_Information padding-20 fffbox" v-if="ticketcgtype == false">
				<view style="font-size: 30rpx;font-weight: bold;margin-top: 10rpx;">
					乘机人
				</view>
				<view class="flex1" style="padding-top: 20rpx;padding-bottom: 20rpx;">
					<view>
						<u-tag v-for="(item,index) in SelectedLists" :key="index" style="margin-right: 10rpx;"
							:text="item.name" :bg-color="themeColor.color" mode="dark" />
					</view>
					<u-tag @click="addpeople" style="margin-right: 10rpx;" :bg-color="themeColor.color" text="添加"
						mode="dark" />

				</view>
				<!-- 添加联系人弹框 -->
				<u-popup v-model="bodyshow" mode="bottom">
					<u-tabs :list="list" :is-scroll="false" :inactive-color="themeColor.color"
						:active-color="themeColor.color" :current="current" @change="change"></u-tabs>
					<view class="addbox" style="background: #e6e6e6;margin-bottom: 100rpx;">
						<view v-if="status == 0" style="display: flex;flex-direction: column;">
							<view style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
								选择乘机人
							</view>
							<scroll-view :scroll-y="true" style="height: 400rpx;overflow: hidden;overflow-y: scroll;">
								<u-checkbox-group size="50" :wrap="true" @change="checkboxGroupChange">
									<u-checkbox shape="square" @change="checkboxChange" v-model="item.checked"
										v-for="(item, index) in peopleList" :key="index" :name="item">
										<view>
											{{item.name}}
										</view>
										<view>
											身份证{{item.cardNo}}
										</view>
									</u-checkbox>
								</u-checkbox-group>
							</scroll-view>
							<view style="display: flex;justify-content: center;margin-bottom: 20rpx;">
								<u-button
									:custom-style="{ borderColor: themeColor.color, color: '#fff',background:themeColor.color }"
									@click="sureclick" type="primary" style="width: 96%;">确定</u-button>
							</view>
						</view>
						<view v-if="status == 1">
							<view style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
								新增乘机人
							</view>
							<view class="formbox">
								<u-form label-width="150rpx" :model="userform" ref="uForm">
									<u-form-item label="姓名">
										<u-input v-model="userform.name" />
									</u-form-item>
									<u-form-item label="证件号码">
										<u-input v-model="userform.cardNo" />
									</u-form-item>
									<u-form-item label="手机号码">
										<u-input v-model="userform.mobile" />
									</u-form-item>
								</u-form>
							</view>
							<view style="display: flex;justify-content: center;margin-bottom: 20rpx;">
								<u-button @click="adduser"
									:custom-style="{ borderColor: themeColor.color, color: '#fff',background:themeColor.color }"
									type="primary" style="width: 96%;">确定</u-button>
							</view>
						</view>
					</view>
				</u-popup>
				<view style="border-top: 1rpx solid #d6d6d6;margin-top: 20rpx;margin-bottom: 20rpx;">
				</view>
				<view v-for="(item, index) in SelectedLists" :key="index" class="flex1">
					<view style="width: 10%;display: flex;justify-content: center;align-items: center;">
						<u-icon @click="purge(item)" :color="themeColor.color" size="40" name="minus-circle"></u-icon>
					</view>
					<view style="margin-top: 10rpx;margin-bottom: 10rpx;">
						<view style="font-size: 30rpx;font-weight: bold;">
							{{item.name}}
						</view>
						<view>
							身份证{{item.cardNo}}
						</view>
					</view>
				</view>
				<view style="border-top: 1rpx solid #d6d6d6;margin-top: 20rpx;margin-bottom: 20rpx;">
				</view>
				<view>
					<u-form :model="form" ref="uForm">
						<u-form-item style="padding: 0;" label-width="150rpx" label="联系人电话" right-icon="account">
							<u-input v-model="form.phone" />
						</u-form-item>
						<u-form-item style="padding: 0;" label-width="150rpx" label="联系人" right-icon="account">
							<u-input v-model="form.name" />
						</u-form-item>
					</u-form>
				</view>
			</view>
		</view>
		<!-- 底部结算按钮 -->
		<u-popup v-model="showdd" mode="bottom">
			<view style="padding: 20rpx;margin-bottom: 100rpx;">
				<view style="width: 100%;text-align: center;">

					订单明细
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="autnum !== 0">
					<view>
						成人票
					</view>
					<view>
						￥{{yssj.cabinPrice_addprice.adultSalePrice}} X {{autnum}}人
					</view>
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="cldnum>0">
					<view>
						儿童票
					</view>
					<view>
						￥{{yssj.cabinPrice_addprice.childSalePrice}} X {{cldnum}}人
					</view>
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="babynum>0">
					<view>
						幼儿票
					</view>
					<view>
						￥{{yssj.cabinPrice_addprice.babySalePrice}} X {{babynum}}人
					</view>
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="autnum>0">
					<view>
						机建/燃油(成人)
					</view>
					<view>
						￥{{Number(toptitle.adultFuel_appprice) + Number(toptitle.adultTax_appprice)}} X {{autnum}}人
					</view>
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="cldnum>0">
					<view>
						机建/燃油(儿童)
					</view>
					<view>
						￥{{Number(toptitle.childFuel_appprice) + Number(toptitle.childTax_appprice)}} X {{cldnum}}人
					</view>
				</view>
				<view style="margin-top: 10rpx;margin-bottom: 10rpx;
				color: #ccc;display: flex;justify-content: space-between;" v-if="babynum>0">
					<view>
						机建/燃油(幼儿)
					</view>
					<view>
						￥{{Number(toptitle.babyFuel_appprice) + Number(toptitle.babyTax_appprice)}} X {{babynum}}人
					</view>
				</view>
			</view>
		</u-popup>
		<view class="paybox">
			<view style="font-size: 30rpx;margin-right: 30rpx;" v-if="ticketcgtype == false"><text
					v-if="SelectedLists.length>0">共{{SelectedLists.length}}人</text><text
					style="font-size: 40rpx;font-weight: bold;" :class="'text-' + themeColor.name">￥{{money}}</text> <text
					v-if="SelectedLists.length>0" @click="mxinfo">明细<u-icon name="photo"></u-icon></text> </view>
			<view v-if="ticketcgtype == false" @click="clickpay" class="paybtn" :class="'bg-' + themeColor.name">
				余额支付
			</view>
			<view v-if="ticketcgtype == true" @click="clickpay1" class="paybtn" :class="'bg-' + themeColor.name">
				确认改签
			</view>
		</view>
		<u-modal v-model="showtype" :content="contents" @confirm="modalclick" @cancel="modaloff"
			:show-cancel-button="true"></u-modal>
	</view>
</template>

<script>
	import {
		passengerList
	} from '@/api/passenger.js';
	import {
		passengerinsert
	} from '@/api/passenger.js';
	import {
		createOrder
	} from '@/api/ticket.js';
	import {
		autoPay
	} from '@/api/ticket.js';
	import {
		applyChangeTicket
	} from '@/api/ticket.js';
	import {
		chaAutoPay
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				showtype: false,
				contents: '',
				userform: {},
				status: 0,
				list: [{
					name: '选择乘客'
				}, {
					name: '添加乘客'
				}],
				current: 0,
				peopleList: [],
				SelectedList: [],
				SelectedLists: [],
				bodyshow: false,
				form: {},
				form2: {},
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value: 'orange',
				toptitle: {},
				formitem: {},
				money: '',
				yssj: {},
				passengers: [],
				ticketcglist: {},
				ticketcgtype: false,
				showdd: false,
				autnum:0,
				cldnum:0,
				babynum:0,
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: '机票下单'
			})
			if (option.orderItem) {
				console.log('000000')
				this.ticketcglist = JSON.parse(decodeURIComponent(option.orderItem))
				this.ticketcgtype = true
			}
			this.toptitle = {
				fromDatemd: option.fromDatemd,
				fromdd: option.fromdd,
				enddd: option.enddd,
				qfsj: option.qfsj,
			}
			const Item = JSON.parse(decodeURIComponent(option.Item));
			const tickerinfos = JSON.parse(decodeURIComponent(option.tickerinfos));
			const yssj = JSON.parse(decodeURIComponent(option.yssj));
			this.toptitle = tickerinfos
			console.log(this.toptitle)
			this.formitem = Item
			this.yssj = yssj
			this.getlist()
		},
		methods: {
			mxinfo() {
				this.showdd = !this.showdd
			},
			clickpay1() {
				var form = {
					remark: this.form2.remack,
					orderNo: this.ticketcglist.orderNo[0],
					flightsid: this.ticketcglist.list,
					changeFlights: this.formitem.flights,
				}
				console.log(form)
				this.$http.post(`${applyChangeTicket}`, form).then(r => {
					var forms = {
						orderNo:r.data.orderNo,
						chaNo:r.data.chaNo,
						type:0
					}
					uni.showToast({
						title: '申请改签成功',
						//将值设置为 success 或者直接不用写icon这个参数
						icon: 'success',
						//显示持续时间为 2秒
						duration: 1000
					})
					setTimeout(function() {
						uni.redirectTo({
							url:"/pages/pet/Ticket_orders/status_info?info=" + encodeURIComponent(JSON.stringify(forms))
						})
					}, 1000)
				}).catch(() => {

				});
			},
			clickpay() {
				let reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
				if (this.form.phone == undefined || this.form.phone == '') {
					uni.showToast({
						title: '请填写电话',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (!reg.test(this.form.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的11位手机号'
					})
					this.form.phone = '';
					return;
				}
				if (this.passengers.length == 0) {
					uni.showToast({
						title: '请选择乘机人',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.form.name == undefined || this.form.name == '') {
					uni.showToast({
						title: '请填写联系人',
						icon: 'none',
						duration: 2000
					})
					return
				}
				this.contents = '共计' + this.money + '元，确认支付吗'
				this.showtype = true
			},
			modalclick() {
				var form = {
					flightRangeType: 0,
					contactName: this.form.name,
					contactMobile: this.form.phone,
					flights: this.formitem.flights,
					passengers: this.passengers
				}
				var that = this
				uni.showLoading({
					title: '加载中'
				});
				that.$http.post(`${createOrder}`, form).then(r => {
					var info = {
						orderNo: r.data.orderNo
					}
					that.$http.post(`${autoPay}`, info).then(r => {
						uni.showToast({
							title: '支付成功',
							icon: 'none',
							duration: 2000
						})
						uni.hideLoading();
						uni.reLaunch({
							url: '/pages/pet/Ticket_orders/orders_info?orderNo=' + info.orderNo
						})
					}).catch(() => {
						uni.reLaunch({
							url: '/pages/pet/Ticket_orders/orders_info?orderNo=' + info.orderNo
						})
					});

				}).catch(() => {

				});
			},
			modaloff() {
				uni.showToast({
					title: '取消支付',
					icon: 'none',
					duration: 2000
				})
			},
			purge(val) {
				if (val.ticketType == 1) {
					this.autnum = this.autnum - 1
					this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.adultSalePrice) * 100 -
						this
						.toptitle.adultFuel_appprice * 100 - this.toptitle.adultTax_appprice * 100) / 100
				}
				if (val.ticketType == 2) {
					this.cldnum = this.cldnum - 1
					this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.childSalePrice) * 100 -
						this
						.toptitle.childFuel_appprice * 100 - this.toptitle.childTax_appprice * 100) / 100
				}

				if (val.ticketType == 3) {
					this.babynum = this.babynum - 1
					this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.babySalePrice) * 100 -
						this
						.toptitle.babyFuel_appprice * 100 - this.toptitle.babyTax_appprice * 100) / 100
				}
				this.SelectedLists = this.SelectedList.filter(function(item) {
					return item.name !== val.name
				});
				this.SelectedList = this.SelectedList.filter(function(item) {
					return item.name !== val.name
				});
				this.passengers = this.passengers.filter(function(item) {
					return item !== val.name.id
				});
				for (var i = 0; i < this.peopleList.length; i++) {
					if (this.peopleList[i].name == val.name) {
						this.peopleList[i].checked = false
					}
				}
				console.log(this.passengers)
			},
			adduser() {
				if (this.userform.cardNo == undefined || this.userform.cardNo == '') {
					uni.showToast({
						title: '请填写身份证',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.name == undefined || this.userform.name == '') {
					uni.showToast({
						title: '请填写姓名',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.mobile == undefined || this.userform.mobile == '') {
					uni.showToast({
						title: '请填写号码',
						icon: 'none',
						duration: 2000
					})
					return
				}
				this.userform.birthday = this.getBirthdayFromIdCard(this.userform.cardNo)
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${passengerinsert}`, this.userform).then(r => {
					console.log(r.data)
					this.eopleList = [],
					this.SelectedList = [],
					this.SelectedLists = [],
					this.autnum = 0
					this.cldnum = 0
					this.babynum = 0
					this.money = 0
					this.getlist()
					uni.hideLoading();
				}).catch(() => {

				});
			},
			sureclick() {
				this.bodyshow = false
				var a = this.SelectedList
				this.SelectedLists = JSON.parse(JSON.stringify(a));;
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.get(`${passengerList}`, this.form).then(r => {
					console.log(r.data)
					this.peopleList = r.data
					this.SelectedLists = ''
					this.userform = {}
					uni.hideLoading();
				}).catch(() => {

				});
			},
			// 计算总价
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(e) {
				if (e.value == true) {

					this.passengers.push(e.name.id)
					this.SelectedList.push(e.name)
					if (e.name.ticketType == 1) {
						this.autnum = this.autnum + 1
						this.money = (this.money * 100 + this.yssj.cabinPrice_addprice.adultSalePrice * 100 + this.toptitle
							.adultFuel_appprice * 100 + this.toptitle.adultTax_appprice * 100) / 100
					}
					if (e.name.ticketType == 2) {
						this.cldnum = this.cldnum + 1
						this.money = (Number(this.money) * 100 + Number(this.yssj.cabinPrice_addprice.childSalePrice) *
							100 + this
							.toptitle.childFuel_appprice * 100 + this.toptitle.childTax_appprice * 100) / 100
					}
					if (e.name.ticketType == 3) {
						this.babynum = this.babynum + 1
						this.money = (Number(this.money) * 100 + Number(this.yssj.cabinPrice_addprice.babySalePrice) *
							100 + this
							.toptitle.babyFuel_appprice * 100 + this.toptitle.babyTax_appprice * 100) / 100
					}
				} else {
					if (e.name.ticketType == 1) {
						this.autnum = this.autnum - 1
						this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.adultSalePrice) *
							100 - this
							.toptitle.adultFuel_appprice * 100 - this.toptitle.adultTax_appprice * 100) / 100
					}
					if (e.name.ticketType == 2) {
						this.cldnum = this.cldnum - 1
						this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.childSalePrice) *
							100 - this
							.toptitle.childFuel_appprice * 100 - this.toptitle.childTax_appprice * 100) / 100
					}

					if (e.name.ticketType == 3) {
						this.babynum = this.babynum - 1
						this.money = (Number(this.money) * 100 - Number(this.yssj.cabinPrice_addprice.babySalePrice) *
							100 - this
							.toptitle.babyFuel_appprice * 100 - this.toptitle.babyTax_appprice * 100) / 100
					}
					this.passengers = this.passengers.filter(function(item) {
						return item !== e.name.id
					});
					this.SelectedList = this.SelectedList.filter(function(item) {
						return item.name !== e.name.name
					});
				}
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);
			},
			addpeople() {
				this.bodyshow = true
			},
			change(index) {
				this.current = index;
				if (index == 0) {
					this.status = 0
				} else {
					this.status = 1
				}
			},
			getBirthdayFromIdCard(idCard) {
				var birthday = "";
				if (idCard != null && idCard != "") {
					if (idCard.length == 15) {
						birthday = "19" + idCard.substr(6, 6);
					} else if (idCard.length == 18) {
						birthday = idCard.substr(6, 8);
					}
					birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
				}
				return birthday;
			}
		}
	}
</script>

<style lang="scss">
	.formbox {
		background: #fff;
		border-radius: 20rpx;
		padding: 15rpx;
		margin-bottom: 20rpx;
	}

	.addbox {
		padding: 20rpx;
	}

	.flex1 {
		display: flex;
	}

	.yellow {
		color: #ff771d;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.padding-20 {
		padding: 20rpx;
	}

	.morebtn {
		font-size: 22rpx;
		padding: 0rpx 22rpx;
		line-height: 1;
		color: #fff;
		background: #ff9900;
		border-radius: 10rpx;
	}

	.fffbox {
		background: #fff;
		border-radius: 20rpx;
	}

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

	.title_Information {
		margin-top: 20rpx;
	}
</style>
