<template>
	<view>
		<view class="pay_info">
			<view class="box">
				<view style="display: flex;width: 50%;justify-content: space-between;">
					<view style="box-sizing: border-box;
    font-size: 35rpx;
    font-weight: bold;">{{statrdata}}</view>
					<span class="calendar-days" :class="'text-' + themeColor.name">
						{{ljDate}}
					</span>
					<view style="box-sizing: border-box;
    font-size: 35rpx;
    font-weight: bold;">{{enddata}}</view>
				</view>
				<view style="font-size: 30rpx;font-weight: bold;margin-top: 15rpx;">{{info.roomName}}</view>
				<view style="color: #a8a8a8;margin-top: 15rpx;">
					{{info.bedType}} {{info.windowType}} {{info.useableArea}} {{info.capacity}}人入住
				</view>
			</view>
			<view class="box" style="margin-top: 20rpx;margin-bottom: 100rpx;">
				<view style="box-sizing: border-box;
				font-size: 35rpx;
				font-weight: bold;">入住信息</view>
				<u-form label-width="180" :model="forms" ref="uForm">
					<u-form-item label="预定数量">
						<u-input :disabled="true" v-model="forms.num" @click="numclick" />
					</u-form-item>
					<u-form-item right-icon="account-fill" v-for="(item,index) in peoplenum" :key="item" :label="'住客姓名'+item">
						<u-input v-model="forms.name[index]" />
					</u-form-item>
					<u-form-item right-icon="phone-fill" label="联系电话">
						<u-input v-model="forms.phone" />
					</u-form-item>
					<u-form-item right-icon="hourglass" label="预计到店">
						<u-input :disabled="true" @click="timeclick" v-model="forms.time" />
					</u-form-item>
				</u-form>
				<!-- 预定数量选择 -->
				<u-select @confirm="confirms" v-model="numshow" :list="arr"></u-select>
				<!-- 预计到店时间选择 -->
				<u-select @confirm="confirm" v-model="timeshow" :list="Timelist"></u-select>
				<!-- 房间信息选择 -->
				<!-- <u-popup height="700rpx" v-model="tcshow" mode="bottom">
					<view style="padding: 20rpx;">
						<view style="font-size: 30rpx;font-weight: bold;">套餐选择</view>
						<view style="display: flex;justify-content: space-between;flex-wrap: wrap;margin-top: 10px;">
							<view class="tcbox" v-for="(item,index) in info.ratePlans" :key="index"
								:class="{'tabs-active': index == active}" @click="tabsChange(item,index)">
								<view style="color: #a7a7a7;font-size: 25rpx;">
									<view>
										{{item.ratePlanName}}
									</view>
									<view>
										{{item.breakfast}}
									</view>
								</view>
								<view style="color: #a7a7a7;font-size: 25rpx;">
									<view>
										{{item.cancelRule.name}}
									</view>
									<view style="font-size: 30rpx;font-weight: bold;color: red;">
										￥{{item.averagePrice_addprice}}元
									</view>
								</view>
							</view>
						</view>
					</view>
				</u-popup> -->
			</view>
		</view>
		<!-- 底部结算按钮 -->
		<view class="paybox">
			<view style="font-size: 30rpx;margin-right: 30rpx;"><text>共1间</text><text
					style="font-size: 40rpx;font-weight: bold;" :class="'text-' + themeColor.name">￥{{money}}</text></view>
			<view @click="clickpay" class="paybtn" :class="'bg-' + themeColor.name">
				余额支付
			</view>
		</view>
	</view>
</template>

<script>
	import {
		createOrder
	} from '@/api/Hotel.js';
	import {
		autoPay
	} from '@/api/Hotel.js';
	export default {
		data() {
			return {
				info: {},
				show: false,
				timeshow: false,
				ljDate: '',
				form: {

				},
				forms: {
					name: []
				},
				peoplenum: [1],
				tcshow: false,
				numshow: false,
				active: 0,
				tabsitem: {},
				statrdata: '',
				enddata: '',
				money: '',
				oldmoney: '',
				moneys: '',
				oldmoneys: '',
				arr: [],
				Timelist: [{
						value: '00:00',
						label: '00:00'
					},
					{
						value: '01:00',
						label: '01:00'
					}, {
						value: '02:00',
						label: '02:00'
					},
					{
						value: '03:00',
						label: '03:00'
					}, {
						value: '04:00',
						label: '04:00'
					},
					{
						value: '05:00',
						label: '05:00'
					}, {
						value: '06:00',
						label: '06:00'
					},
					{
						value: '07:00',
						label: '07:00'
					}, {
						value: '08:00',
						label: '08:00'
					},
					{
						value: '09:00',
						label: '09:00'
					}, {
						value: '10:00',
						label: '10:00'
					},
					{
						value: '11:00',
						label: '11:00'
					}, {
						value: '12:00',
						label: '12:00'
					},
					{
						value: '13:00',
						label: '13:00'
					}, {
						value: '14:00',
						label: '14:00'
					},
					{
						value: '15:00',
						label: '15:00'
					}, {
						value: '16:00',
						label: '16:00'
					},
					{
						value: '17:00',
						label: '17:00'
					}, {
						value: '18:00',
						label: '18:00'
					},
					{
						value: '19:00',
						label: '19:00'
					}, {
						value: '20:00',
						label: '20:00'
					},
					{
						value: '21:00',
						label: '21:00'
					}, {
						value: '22:00',
						label: '22:00'
					},
					{
						value: '23:00',
						label: '23:00'
					},
				],
				hotleinfo:{}
			};
		},
		onLoad(option) {
			const Item = JSON.parse(decodeURIComponent(option.item));
			const info = JSON.parse(decodeURIComponent(option.info));
			const itemsinfo = JSON.parse(decodeURIComponent(option.itemsinfo));
			const hotleinfo = JSON.parse(decodeURIComponent(option.hotleinfo));
			this.hotleinfo = hotleinfo
			console.log(Item, info,itemsinfo)
			this.form = Item
			this.ljDate = this.calculate(this.form.checkInDate, this.form.checkOutDate)
			this.tabsChange(itemsinfo)
			this.info = info
			uni.setNavigationBarTitle({
				title:this.info.roomName	//这是修改后的导航栏文字
			})
			this.statrdata = this.form.checkInDate.substring(5, 10)
			this.enddata = this.form.checkOutDate.substring(5, 10)
			this.forms.num = '1间'
			this.forms.nums = 1
		},
		methods: {
			clickpay() {
				var that = this
				if (!this.tabsitem.ratePlanId) {
					uni.showToast({
						title: '请选择房间信息',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (!this.forms.num) {
					uni.showToast({
						title: '请选择房间数量',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (this.forms.name.length>0) {
					if (this.forms.name.length < Number(this.forms.nums)) {
						uni.showToast({
							title: '请完整填写住客',
							icon: 'none',
							duration: 1000
						})
						return
					}
				} else {
					uni.showToast({
						title: '请填写住客',
						icon: 'none',
						duration: 1000
					}) 
					return
				}
				if (!this.forms.phone) {
					uni.showToast({
						title: '请填写号码',
						icon: 'none',
						duration: 1000
					})
					return
				}
				if (!this.forms.time) {
					uni.showToast({
						title: '请选择到店时间',
						icon: 'none',
						duration: 1000
					})
					return
				}
				var form = {
					hotelID: this.form.hotelID,
					ratePlanID: this.tabsitem.ratePlanId,
					roomNum: this.forms.num.substring(0, 1),
					checkInDate: this.form.checkInDate,
					checkOutDate: this.form.checkOutDate,
					guestNames: this.forms.name,
					arriveTime: this.forms.time,
					money: this.money,
					orderAmount: this.oldmoney,
					contactName: this.forms.name[0],
					contactMobile: this.forms.phone,
					longitude:this.hotleinfo.googleLon,
					latitude:this.hotleinfo.googleLat,
				}
				console.log(form)
				uni.showModal({
					title: '提示',
					content: "确定支付" + that.money + "元吗？",
					success: function(res) {
						if (res.confirm) {
							// 执行确认后的操作
							uni.showLoading({
								title: '加载中'
							});
							that.$http.post(`${createOrder}`, form).then(r => {
								var orderNo = r.data.orderNo
								var forms = {
									orderNo: orderNo
								}
								that.$http.post(`${autoPay}`, forms).then(res => {
									uni.redirectTo({
										url: '/pages/pet/Hotel/Hotel_order?orderNo='+orderNo
									})
									console.log(res)
									uni.hideLoading();
								}).catch(() => {
									uni.redirectTo({
										url: '/pages/pet/Hotel/Hotel_order?orderNo='+orderNo
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
			confirm(e) {
				console.log(e);
				this.forms.time = e[0].label
			},
			confirms(e) {
				this.peoplenum = []
				this.forms.name = []
				this.forms.num = e[0].label
				this.forms.nums = e[0].value
				for (var i = 0; i < e[0].value; i++) {
					var a = i + 1
					this.peoplenum.push(a)
				}
				this.money = this.moneys * (e[0].value*100)/100
				this.oldmoney = this.oldmoneys * (e[0].value*100)/100
			},
			numclick() {
				if (this.arr.length < 1) {
					uni.showToast({
						title: '请先选择房间信息',
						icon: 'none',
						duration: 1000
					})
					return
				}
				this.numshow = true
			},
			timeclick() {
				this.timeshow = true
			},
			tabsChange(items) {
				var arr = items.stockPerDay.split('|');
				var a = arr.reduce((x, y) => x < y ? x : y)
				for (var i = 0; i < a; i++) {
					var b = {
						value: Number(i) + 1,
						label: Number(i) + 1 + '间'
					}
					this.arr.push(b)
				}
				this.tabsitem = items
				this.forms.tc = items.ratePlanName + items.averagePrice_addprice + '元'
				var as = this.ljDate.substring(1, 2)
				console.log(as,this.ljDate)
				this.money = items.averagePrice_addprice * Number(as)
				this.oldmoney = items.averagePrice * Number(as)
				this.moneys = items.averagePrice_addprice * Number(as)
				this.oldmoneys = items.averagePrice * Number(as)
				this.tcshow = false
			},
			timechange() {
				this.show = true
			},
			change(e) {
				console.log(e);
				this.form.checkInDate = e.startDate
				this.form.checkOutDate = e.endDate
				this.ljDate = this.calculate(e.startDate, e.endDate)
			},
			calculate(day1, day2) {
				console.log("这是你要比较的日期1：", day1, "这是你要比较的日期2：", day2)
				const msPerDay = 1000 * 60 * 60 * 24 //一天的毫秒数

				//将day1,day2的yyyy-mm-dd时间格式转换成：中国标准时间格式
				const newDay1 = new Date(day1);
				const newDay2 = new Date(day2);
				console.log("来看看他们被转换成什么样啦, newDay1是：", newDay1, "newDay2是：", newDay2)

				//再给它俩换成UTC格式
				const utc1 = Date.UTC(newDay1.getFullYear(), newDay1.getMonth(), newDay1.getDate());
				const utc2 = Date.UTC(newDay2.getFullYear(), newDay2.getMonth(), newDay2.getDate());

				//最后再用Math.floor()来计算它们之间相差的天数~
				const result = '共' + Math.floor((utc2 - utc1) / msPerDay) + '天';

				//样我们看看结果是啥
				return result
			},

		}
	};
</script>

<style lang="scss">
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

	.tcbox {
		padding: 10rpx;
		border-radius: 10rpx;
		margin-top: 10rpx;
		border: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.tabs-active {
		border: 1px solid #cc7f12;
	}

	.box {
		padding: 20rpx;
		background: #fff;
		border-radius: 20rpx;

	}

	.introduce_box {
		padding: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}

	.pay_info {
		padding: 20rpx;
	}

	.calendar-days {
		font-size: 28rpx;
		background-color: #fff;
	}
</style>