<template>
	<view class="wrap">
		<u-swiper height="320" :list="Hotelinfo.pictures" name="path"></u-swiper>
		<view class="info_box">
			<view class="info_title">
				<view style="width: 100%;
		              font-size: 35rpx;
		              font-weight: bold;
		              word-wrap: break-word;
		              word-break: break-all;
		              white-space: pre-line;">
					{{Hotelinfo.hotelName}}
				</view>
				<view class="title_info">
					<view @click="infoshow" :class="'text-' + themeColor.name">
						设施/详情<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<u-popup v-model="htinfoshow" mode="bottom">
					<view style="padding: 20rpx;">
						<view class="introduce_box">
							<view style="font-size: 35rpx;font-weight: bold;">酒店介绍</view>
							<rich-text :nodes="Hotelinfo.description"></rich-text>
							<view class="gnbox">
								<view style="width: 25%;padding: 6rpx;" v-for="item in Hotelinfo.facilities"
									:key="item.name">
									<view style="font-size: 23rpx;text-overflow: ellipsis;
							overflow: hidden;
							word-break: break-all;
							white-space: nowrap;"><u-icon name="checkbox-mark"></u-icon>{{item.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</u-popup>
				<view @click="gomapApp(Hotelinfo.googleLat,Hotelinfo.googleLon,Hotelinfo.hotelName)">
					<u-icon name="map"></u-icon>{{Hotelinfo.address}}
				</view>
			</view>
		</view>
		<u-calendar max-date="2950-01-01" v-model="show" :mode="range" @change="change"></u-calendar>
		<view class="b-line checkinout">
			<view class="firstSelect" style="width:100%;">
				<view @click="timechange" class="Date_lr" style="float:left;">
					<p>入住</p>
					<input :value="form.checkInDate" type="text" disabled />
				</view>
				<span class="calendar-days" :class="'text-' + themeColor.name">
					{{ljDate}}
				</span>
				<view @click="timechange" class="Date_lr" style="float:right;">
					<p>离店</p>
					<input :value="form.checkOutDate" type="text" disabled />
				</view>
			</view>
		</view>
		<view class="room_info">
			<view v-for="(item,index) in roomlist" :key="index" @click="showopen(index,item.ratePlans)"
				style="width: 100%;">
				<view class="room_item">
					<image v-if="item.pictures.length == 0" style="width: 30%;height: 100%;"
						src="https://image.ceekee.com/hotelimages/room.png" mode="aspectFill"></image>
					<image v-if="item.pictures.length !== 0" style="width: 30%;height: 100%;"
						:src="item.pictures[0].path" mode="aspectFill"></image>
					<view
						style="width: 70%;padding-left: 20rpx;display: flex;flex-direction: column;justify-content: space-between;padding-right: 10rpx;">
						<view>
							<view class="title">{{item.roomName}}</view>
							<view style="color: #a8a8a8;">{{item.bedType}} {{item.capacity}}人入住 {{item.useableArea}}
								{{item.windowType}}
							</view>
						</view>
						<view style="font-size: 35rpx;font-weight: bold;text-align: right;" :class="'text-' + themeColor.name">
							￥{{item.ratePlans[0].averagePrice_addprice}}起
						</view>
					</view>
				</view>
				<view class="show-more" :class="[isShow == index ? 'show-more-click' : '']"
					:style="{height:roomlist[index].height}">
					<view v-for="(items,indexs) in item.ratePlans" :key="indexs" style="margin-top: 15rpx;">
						<view style="width: 35%;display: flex;justify-content: flex-start;margin-left: 20rpx;">
							<view style="font-size: 30rpx;font-weight: bold;margin-right: 10rpx;">
								{{items.breakfast}}
							</view>
							<view class="" style="border-right: 2rpx solid #ccc;"></view>
							<view style="font-size: 30rpx;font-weight: bold;margin-left: 10rpx;">
								{{items.cancelRule.name}}
							</view>
						</view>
						<view style="font-size: 26rpx;color: #a8a8a8;margin-left: 20rpx;">{{items.ratePlanName}}</view>
						<view style="font-size: 26rpx;color: #a8a8a8;margin-left: 20rpx;">{{items.cancelRule.desc}}
						</view>
						<view class="" style="width: 100%;display: flex;justify-content: flex-end;">
							<view class="btnText" :class="'bg-' + themeColor.name" @click="payinfo(item,items)">订</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="roomlist.length == 0 " style="width: 100%;text-align: center;color: #a8a8a8;">
				暂无可订房型
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getHotelDetail
	} from '@/api/Hotel.js';
	import {
		queryRoomAndRatePlan
	} from '@/api/Hotel.js';
	export default {

		data() {
			return {
				Hotelinfo: {},
				roomlist: [],
				show: false,
				htinfoshow: false,
				ljDate: '',
				form: {

				},
				isShow: -1,
				isnum: -1,
				domHeight: []
			};
		},
		onLoad(option) {
			const Item = JSON.parse(decodeURIComponent(option.item));
			console.log(Item)
			this.form = Item
			this.ljDate = this.calculate(this.form.checkInDate, this.form.checkOutDate)
			this.getlist()
		},
		methods: {
			showopen(index, item) {
				var that = this
				for (var i = 0; i < that.roomlist.length; i++) {
					if (i == index) {
						console.log(111)
					} else {
						that.roomlist[i].height = (0 * Number(item.length)).toString() + 'rpx'
					}
				}
				that.roomlist[index].height = (210 * Number(item.length)).toString() + 'rpx'
				this.isShow = index
			},
			// 打开的点击事件，传经纬度和地点名
			gomapApp(latitude, longitude, name) {
				uni.openLocation({
					latitude: Number(latitude),
					longitude: Number(longitude),
					name: name,
					success() {
						console.log('success');
					}
				});
			},
			infoshow() {
				this.htinfoshow = true
			},
			timechange() {
				this.show = true
			},
			change(e) {
				console.log(e);
				this.form.checkInDate = e.startDate
				this.form.checkOutDate = e.endDate
				this.ljDate = this.calculate(e.startDate, e.endDate)
				this.getlist()
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
			payinfo(val, items) {
				console.log(val)
				uni.navigateTo({
					url: '/pages/pet/Hotel/Hotel_pay?item=' + encodeURIComponent(JSON.stringify(this.form)) +
						'&info=' + encodeURIComponent(JSON.stringify(val)) +
						'&itemsinfo=' + encodeURIComponent(JSON.stringify(items)) +
						'&hotleinfo=' + encodeURIComponent(JSON.stringify(this.Hotelinfo))
				})
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${getHotelDetail}`, this.form).then(r => {
					console.log(r)
					this.Hotelinfo = r.data
					uni.setNavigationBarTitle({
						title: this.Hotelinfo.hotelName //这是修改后的导航栏文字
					})
					this.$http.post(`${queryRoomAndRatePlan}`, this.form).then(res => {
						console.log(res)
						this.roomlist = res.data.rooms
						uni.hideLoading();
					}).catch(() => {
						uni.hideLoading();
					});
				}).catch(() => {

				});
			}
		}
	};
</script>

<style lang="scss">
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

	/* 点击更多的样式 */
	.show-more {
		width: 100%;
		height: 0px;
		overflow: hidden;
		background-color: #fff;
		transition: height 1s;
		-moz-transition: height 1s;
		/* Firefox 4 */
		-webkit-transition: height 1s;
		/* Safari and Chrome */
		-o-transition: height 1s;
		/* Opera */
	}

	.show-more-click {
		height: 500rpx;
	}

	.title_info {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 35rpx;
		font-weight: bold;
	}

	.room_info {
		width: 100%;
		padding: 20rpx;
	}

	.room_item {
		display: flex;
		background: #fff;
		border-radius: 20rpx;
		width: 100%;
		overflow: hidden;
		height: 250rpx;
		margin-top: 15rpx;
	}

	.gnbox {
		margin-top: 10rpx;
		display: flex;
		flex-flow: row wrap;
	}

	.info_box {
		padding: 20rpx;
		background: #fff;
	}

	.introduce_box {
		margin-top: 20rpx;
	}

	.calendar-days {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 28rpx;
		padding: 4rpx 16rpx;
		line-height: 40rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #0081ff;
	}

	.firstSelect p {
		line-height: 50rpx;
		color: #585858;
		font-size: 24rpx;
	}

	.Date_lr {
		width: 30%;
		text-align: center;
		line-height: 40rpx;
	}

	.checkinout {
		height: 100rpx;
		line-height: 100rpx;
		position: relative;
		padding: 4rpx 0;
		display: -webkit-box;
		display: flex;
		background-color: #fff;
	}

	.b-line:after {
		content: '';
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2rpx;
		border-bottom: 2rpx solid #e1e1e1;
		transform: scaleY(0.5);
		transform-origin: 0 100%;
	}
</style>