<template>
	<view class="warp">
		<view class="boxss">
			<view style="font-size: 32rpx;font-weight: bold;color: #a8a8a8;">
				{{infolist.productName}}
			</view>

			<view class="border">
			</view>
			<view style="color: #a8a8a8;text-align: right;" @click="gzinfo">
				购买须知<u-icon name="arrow-right"></u-icon>
			</view>
			<view style="display: flex;justify-content: space-between;">
				<view>
					{{timedata.date}}
				</view>
				<view @click="changetime">
					更换日期<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<u-popup height="700" v-model="show" mode="bottom">
			<view style="padding: 20rpx;">
				<view style="font-size: 30rpx;font-weight: bold;">
					请选择日期
				</view>
			</view>
			<view style="padding: 20rpx;display: flex;flex-flow:row wrap;">
				<view class="data_item" v-for="(item,index) in infolist.priceCalendar" :key="index"
					@click="changetimedata(item)" style="margin-right: 10rpx;margin-left: 10rpx;">
					<view>
						{{item.date.substring(5,10)}}
					</view>
					<view :class="'text-' + themeColor.name">
						{{item.settlePrice_addprice}}元
					</view>
				</view>
			</view>
		</u-popup>
		<view class="box">
			<view class="title_Information padding-20 fffbox">
				<view style="font-size: 30rpx;font-weight: bold;margin-top: 10rpx;">
					出行人
				</view>
				<view class="flex1" style="padding-top: 20rpx;padding-bottom: 20rpx;">
					<view>
						<u-tag v-for="(item,index) in SelectedLists" :key="index" style="margin-right: 10rpx;"
							:text="item.name" :bg-color="themeColor.color" type="primary" mode="dark" />
					</view>
					<u-tag @click="addpeople" style="margin-right: 10rpx;" text="添加" :bg-color="themeColor.color"
						type="primary" mode="dark" />

				</view>
				<!-- 添加联系人弹框 -->
				<u-popup v-model="bodyshow" mode="bottom">
					<u-tabs :list="list" :is-scroll="false" :inactive-color="themeColor.color"
						:active-color="themeColor.color" :current="current" @change="change"></u-tabs>
					<view class="addbox" style="background: #e6e6e6;">
						<view v-if="status == 0" style="display: flex;flex-direction: column;">
							<view style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
								选择出行人
							</view>
							<view style="height: 400rpx;overflow: hidden;overflow-y: scroll;">
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
							</view>
							<view style="display: flex;justify-content: center;margin-bottom: 20rpx;">
								<u-button :custom-style="{ borderColor: themeColor.color, color: '#fff',background:themeColor.color }" @click="sureclick" style="width: 96%;">确定</u-button>
							</view>
						</view>
						<view v-if="status == 1">
							<view style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
								新增出行人
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
								<u-button :custom-style="{ borderColor: themeColor.color, color: '#fff',background:themeColor.color }" @click="adduser" style="width: 96%;">确定</u-button>
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
						<u-form-item style="padding: 0;" label-width="150rpx" label="身份证" right-icon="account">
							<u-input v-model="form.cardNo" />
						</u-form-item>
					</u-form>
				</view>
			</view>
		</view>
		<view class="boxs">
			<view v-for="(item,index) in infolist.refundChangeRule" :key="index">
				<view>{{item.name}}</view>
				<view>
					<rich-text :nodes="item.value"></rich-text>
				</view>
			</view>
			<!-- <view v-for="(item,index) in infolist.useDescription" :key="index">
				<view>{{item.name}}</view>
				<view>
					<rich-text :nodes="item.value"></rich-text>
				</view>
			</view> -->
		</view>
		<view class="paybox">
			<view style="font-size: 30rpx;margin-right: 30rpx;"><text v-if="this.SelectedLists.length>0">共{{this.SelectedLists.length}}人</text><text
					style="font-size: 40rpx;font-weight: bold;" :class="'text-' + themeColor.name">￥{{money}}</text></view>
			<view @click="clickpay" class="paybtn" :class="'bg-' + themeColor.name">
				余额支付
			</view>
		</view>
		<u-popup height="500" v-model="gzshow" mode="bottom" length="60%">
			<view style="padding: 20rpx;">
				<view class="slot-content" v-for="(item,index) in infolist.bookNotice" :key="index">
					<view v-if="item.value !==''" style="width: 25%;margin-right: 10rpx;">
						{{item.name}}
					</view>
					<rich-text v-if="item.value !==''" style="width: 75%;" :nodes="item.value"></rich-text>
				</view>
				<view class="slot-content" v-for="(item,index) in infolist.costDescription" :key="index">
					<view v-if="item.value !==''" style="width: 25%;margin-right: 10rpx;">
						{{item.name}}
					</view>
					<rich-text v-if="item.value !==''" style="width: 75%;" :nodes="item.value"></rich-text>
				</view>
				<view class="slot-content" v-for="(item,index) in infolist.useDescription" :key="index">
					<view v-if="item.value !==''" style="width: 25%;margin-right: 10rpx;">
						{{item.name}}
					</view>
					<rich-text v-if="item.value !==''" style="width: 75%;" :nodes="item.value"></rich-text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		getTicketDetail
	} from '@/api/admission.js';
	import {
		passengerList
	} from '@/api/passenger.js';
	import {
		passengerinsert
	} from '@/api/passenger.js';
	import {
		adcreateOrder
	} from '@/api/admission.js';
	import {
		adautoPay
	} from '@/api/admission.js';
	export default {
		data() {
			return {
				infolist: {},
				userform: {},
				status: 0,
				list: [{
					name: '选择乘客'
				}, {
					name: '添加乘客'
				}],
				current: 0,
				peopleList: [],
				passengers: [],
				SelectedList: [],
				SelectedLists: [],
				bodyshow: false,
				show: false,
				form: {},
				money: 0,
				timedata: {},
				gzshow: false,
				scenicID: '',
			};
		},
		onLoad(option) {
			this.productId = option.productId
			this.scenicID = option.scenicID
			this.latitude = option.latitude
			this.longitude = option.longitude
			this.getlist()
			this.getpeoplelist()
		},
		methods: {
			// 支付调用
			clickpay() {
				if (this.SelectedLists.length < 1) {
					uni.showToast({
						title: '请选择出行人',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (this.form.name == '' || this.form.name == undefined) {
					uni.showToast({
						title: '请填写取票人姓名',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (this.form.phone == '' || this.form.phone == undefined) {
					uni.showToast({
						title: '请填写取票人电话',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (this.form.cardNo == '' || this.form.cardNo == undefined) {
					uni.showToast({
						title: '请填写取票人身份证',
						icon: 'none',
						duration: 1000
					})
					return
				}
				var form = {
					orderAmount: this.money,
					travelDate: this.timedata.date,
					scenicID: this.scenicID,
					productID: this.infolist.productId,
					quantity: this.SelectedLists.length,
					name: this.form.name,
					mobile: this.form.phone,
					cardType: 1,
					cardNo: this.form.cardNo,
					longitude:this.longitude,
					latitude:this.latitude,
					touristInfoType: this.infolist.touristInfoType,
					tourists: []
				}
				for (var i = 0; i < this.SelectedLists.length; i++) {
					form.tourists.push(this.SelectedLists[i].id)
				}
				if (this.infolist.contactInfoType == 1) {
					form.contact = {
						name: this.form.name,
						mobile: this.form.phone,
					}
				}
				if (this.infolist.contactInfoType == 2) {
					form.contact = {
						name: this.form.name,
						mobile: this.form.phone,
						cardNo: this.form.cardNo,
					}
				}
				var that = this
				uni.showModal({
					title: '提示',
					content: "确定支付" + that.money + "元吗？",
					success: function(res) {
						if (res.confirm) {
							// 执行确认后的操作
							uni.showLoading({
								title: '加载中'
							});
							that.$http.post(`${adcreateOrder}`, form).then(r => {
								var orderNo = r.data.orderNo
								var forms = {
									orderNo: orderNo
								}
								that.$http.post(`${adautoPay}`, forms).then(res => {
									uni.redirectTo({
										url: '/pages/pet/admission/admission_order?orderNo=' +
											orderNo
									})
									console.log(res)
									uni.hideLoading();
								}).catch(() => {
									uni.redirectTo({
										url: '/pages/pet/admission/admission_order?orderNo=' +
											orderNo
									})
									uni.hideLoading();
								});
							}).catch(() => {

							});
						} else {
							// 执行取消后的操作
						}
					}
				})

			},
			gzinfo() {
				this.gzshow = true
			},
			changetimedata(item) {
				this.timedata = item
				this.money = 0
				this.peopleList = []
				this.passengers = []
				this.SelectedList = []
				this.SelectedLists = []
				this.getpeoplelist()
				this.show = false

			},
			purge(val) {
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
				this.money = this.money - (this.timedata.settlePrice_addprice*100)/100
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				var form = {
					productId: this.productId
				}
				this.$http.get(`${getTicketDetail}`, form).then(r => {
					console.log(r)
					this.infolist = r.data
					this.timedata = r.data.priceCalendar[0]
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			},
			changetime() {
				this.show = true
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
			checkboxGroupChange(e) {
				// console.log(e);
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
			},
			getpeoplelist() {
				var form = {
					page: 1,
					pageSize: 50
				}
				uni.showLoading({
					title: '加载中'
				});
				this.$http.get(`${passengerList}`, form).then(r => {
					console.log(r.data)
					this.peopleList = r.data
					this.SelectedLists = ''
					this.userform = {}
					uni.hideLoading();
				}).catch(() => {

				});
			},
			checkboxChange(e) {
				console.log(e)
				if (e.value == true) {
					this.passengers.push(e.name.id)
					this.SelectedList.push(e.name)
					this.money = this.money + (this.timedata.settlePrice_addprice*100)/100
				} else {
					this.money = this.money - (this.timedata.settlePrice_addprice*100)/100
					this.passengers = this.passengers.filter(function(item) {
						return item !== e.name.id
					});
					this.SelectedList = this.SelectedList.filter(function(item) {
						return item.name !== e.name.name
					});
				}
			},
			sureclick() {
				this.bodyshow = false
				var a = this.SelectedList
				this.SelectedLists = JSON.parse(JSON.stringify(a));;
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
					this.getpeoplelist()
					uni.hideLoading();
				}).catch(() => {

				});
			},
		}
	};
</script>

<style lang="scss">
	.slot-content {
		font-size: 28rpx;
		color: $u-content-color;
		padding-left: 30rpx;
		display: flex;
	}

	.warp {}

	.data_item {
		padding: 5rpx;
		border-radius: 5rpx;
		border: 1px solid #ccc;
		margin-top: 10rpx;
	}

	.paybox {
		width: 100%;
		height: 130rpx;
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
	.boxss {
		margin-top: 20rpx;
		border-radius: 20rpx;
		background: #fff;
		padding: 20rpx;
	}
	.boxs {
		margin-top: 20rpx;
		border-radius: 20rpx;
		background: #fff;
		padding: 20rpx;
		margin-bottom: 200rpx;
	}

	.border {
		width: 100%;
		border-bottom: 1px dotted #ccc;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

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