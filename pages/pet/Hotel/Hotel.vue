<template>
	<view>
		<u-navbar style="position: absolute;" back-text="返回" :border-bottom="false" title-color="#fff" background="220,38,38,0.2" :custom-back="gohome"></u-navbar>
		<view class="wrap" style="margin-bottom: 10rpx;">
			<u-swiper :list="imglist" name="cover" height="550"></u-swiper>
		</view>
		<view style="padding: 20rpx;">
			<view class="tab-panel-item" style="margin-bottom: 20rpx;">
				<view class="flex flex-mar b-line">
					<view v-if="item.address" @tap="navTo('/pages/pet/city')" class="hotel-city">{{item.address}}</view>
					<view v-else="item.address" @tap="navTo('/pages/pet/city')" class="hotel-city">{{citys.title}}
					</view>
					<view class="flex-box hotel-text" @click="chooseLocation" style="display: flex;">
						<text style="margin-right: 5rpx;">定位</text>
						<u-icon name="map" :color="themeColor.color"></u-icon>
					</view>
				</view>

				<view class="b-line checkinout">
					<view class="firstSelect" style="width:100%;">
						<view @click="timechange" class="Date_lr" style="float:left;">
							<p>入住</p>
							<input :value="statrdata" type="text" disabled />
						</view>
						<span class="calendar-days">
							{{ljDate}}
						</span>
						<view @click="timechange" class="Date_lr" style="float:right;">
							<p>离店</p>
							<input :value="enddata" type="text" disabled />
						</view>
					</view>
				</view>

				<view class="flex flex-mar b-line">
					<view class="flex-head">搜索</view>
					<view class="flex-box"><input type="text" v-model="vals" class="flex-search"
							placeholder="名称/位置/品牌" />
					</view>
				</view>

				<view class="flex flex-mar b-line">
					<!-- <view class="flex-head">价格星级</view>
					<view class="flex-box"><input type="text" class="flex-search" placeholder="价格不限/星级不限" disabled /></view> -->
				</view>

				<view class="flex-button-box"><button class="flex-button-btn" :class="'bg-' + themeColor.name"
						@click="seachHotel">酒店查询</button></view>
			</view>
			<!-- 酒店预订 end -->
			<u-calendar max-date="2950-01-01" v-model="show" :mode="range" @change="change" start-text="入住"
				end-text="离店">
			</u-calendar>
			<view class="ggitem" style="width: 100%;">
				<view style="width: 50%;text-align: center;margin: 0 auto;margin-top: 100rpx;margin-bottom: 30rpx;" v-for="(item,index) in xxlist">
					<image  :src="item.cover" mode="widthFix"></image>
				</view>
			</view>
		</view>

		<!-- 推荐酒店 -->
		<!-- <view class="wrap">
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
						@click="goinfo(item.hotelID)">
				
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
					
						<view class="demo-img-wrap">
							<image class="demo-image" :src="item.mainImage" mode="widthFix"></image>
						</view>
						
						<view class="demo-title">
							{{item.hotelName}}
						</view>
						<view class="demo-price">
							{{item.startingPrice_addprice}}元
						</view>
						<view class="demo-tag">

						</view>
						<view class="demo-shop">

						</view>

					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
						@click="goinfo(item.hotelID)">
					
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
					
						<view class="demo-img-wrap">
							<image class="demo-image" :src="item.mainImage" mode="widthFix"></image>
						</view>
				
						<view class="demo-title">
							{{item.hotelName}}
						</view>
						<view class="demo-price">
							{{item.startingPrice_addprice}}元
						</view>
						<view class="demo-tag">

						</view>
						<view class="demo-shop">

						</view>

					</view>
				</template>
			</u-waterfall>

		</view> -->
	</view>
</template>

<script>
	import {
		searchHotelList
	} from '@/api/Hotel.js';
	import {
		indexlistad
	} from '@/api/Hotel.js';
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	export default {
		data() {
			return {
				path: '/pages/pet/Hotel/Hotel',
				title: '酒店预定查询',
				form: {},
				show: false,
				shows: false,
				statrdata: '请选择',
				enddata: '请选择',
				ljDate: '',
				city: '长沙',
				params: {
					province: true,
					city: true,
					area: false
				},
				citys: {
					id: 0,
					title: '全国'
				},
				imglist: [],
				lists: [{
						image: 'https://img95.699pic.com/photo/50092/9420.jpg_wh300.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://img95.699pic.com/desgin_photo/40018/5298_detail.jpg!/fw/320/clip/0x432a0a0/unsharp/true',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://img95.699pic.com/desgin_photo/40106/2539_detail.jpg!/fw/320/clip/0x432a0a0/unsharp/true',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				loadStatus: 'loadmore',
				flowList: [],
				list: [],
				vals: '',
				hotelStars: '',
				item: {

				},
				qqmapsdk: null,
				status1: false,
				dbgglist: [],
				xxlist:[]
			}
		},
		onShow() {
			this.getbanner()
			this.getbanner2()
			this.getbanner3()
			if (this.status1 == true) {
				let city = uni.getStorageSync('city');

				if (city && this.citys.id != city.id) {
					this.item = {}
					this.citys = city;
					this.getlist()
					// this.$nextTick(() => {
					// 	for (let tab of this.$mData.types) {
					// 		this.getMescroll(tab.key - 1).triggerDownScroll();
					// 	}
					// });
				}
			}
		},
		onLoad() {
			this.qqmapsdk = new QQMapWX({
				key: this.$mData.maps[0].key
			});
			console.log(this.qqmapsdk)
			uni.setNavigationBarTitle({
				title: '酒店查询'
			})
			this.getCity()
			this.getlist()
		},
		// onReachBottom() {
		// 	this.loadStatus = 'loading';
		// 	// 模拟数据加载
		// 	setTimeout(() => {
		// 		this.addRandomData();
		// 		this.loadStatus = 'loadmore';
		// 	}, 1000)
		// },
		onShareTimeline(res) {
			let distSource = uni.getStorageSync('distSource');
			if (distSource) {
				return {
					title: this.title,
					type: 0,
					summary: "",
					imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
				}
			}
		},
		onShareAppMessage() {
			return {
				title: this.title,
				path: `${this.path}`
			};
		},
		methods: {
			gohome() {
				console.log('返回首页')
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			getbanner3() {
				var form = {
					ad_type: 10
				}
			
			
				this.$http.post(`${indexlistad}`, form).then(r => {
					console.log(r)
					this.xxlist = r.data.list
				}).catch(() => {
			
				});
			},
			goad(index) {
				var item = this.imglist[index]
				if(item.jump_type == 2){
					uni.navigateTo({
						url: `/pages/public/web-view?url=${item.jump_link}`, // 要跳转的网址
						success(res) {
							console.log('跳转成功', res)
						},
						fail(err) {
							console.log('跳转失败', err)
						}
					})
				}
				if (item.jump_type == 1) {
					wx.navigateTo({
						url: item.jump_link,
					})
				}if(item.jump_type == 3){
					uni.navigateToMiniProgram({
					    appId:item.jump_appid,
					    path:item.jump_link,
					    success: res => {
					         // 打开成功
					    },
					    fail: err => {
					         // 打开失败
					    }
					})
				}
			},
			getbanner2() {
				var form = {
					ad_type: 9
				}


				this.$http.post(`${indexlistad}`, form).then(r => {
					console.log(r)
					this.dbgglist = r.data.list
				}).catch(() => {

				});
			},
			getbanner() {
				var form = {
					ad_type: 5
				}


				this.$http.post(`${indexlistad}`, form).then(r => {
					console.log(r)
					this.imglist = r.data.list
					// for(var i =0;i<this.imglist.length;i++){
					// 	this.imglist[i].cover = 'https://www.yunnanyijian.cn'+this.imglist[i].cover
					// }
				}).catch(() => {

				});
			},
			getCity() {
				let _this = this;
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						uni.getLocation({
							type: 'gcj02',
							geocode: true,
							success(res) {
								console.log(res)
								var item = {
									latitude: res.latitude,
									longitude: res.longitude
								}
								_this.item.coords = {
									lat: res.latitude,
									lng: res.longitude
								};
								uni.setStorageSync('location', item);
								_this.qqmapsdk.reverseGeocoder({
									location: {
										latitude: res.latitude,
										longitude: res.longitude
									},
									success(res) {
										console.log(res)
										_this.$set(_this.item, 'address', res.result
											.address); //解决不及时更新的问题
										_this.city = res.result
											.address_component.city
										//_this.item.address = res.address;
										//纬度&经度
										// let city = {
										// 	id: res.result.ad_info.city_code - 156000000,
										// 	title: res.result.ad_info.city
										// }
										// uni.setStorageSync('city', city);
										// _this.city = city;
										// _this.getMescroll(_this.swiperCurrent)
										// 	.triggerDownScroll();
										_this.getlist()
									},
									fail(error) {
										console.error(error);
									}
								});
							},
							fail(error) {
								console.error(error);
							}
						});
					}
				});

			},
			chooseLocation() {
				let _this = this;
				//#ifdef MP
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						//#endif
						uni.chooseLocation({
							success(res) {
								console.log(res)
								_this.$set(_this.item, 'address', res.address); //解决不及时更新的问题
								//_this.item.address = res.address;
								_this.item.coords = {
									lat: res.latitude,
									lng: res.longitude
								}; //纬度&经度
								_this.item.location = res.name;
								console.log(_this.item)
								_this.qqmapsdk.reverseGeocoder({
									location: {
										latitude: res.latitude,
										longitude: res.longitude
									},
									success(res) {
										console.log(res)
										_this.$set(_this.item, 'address', res.result
											.address); //解决不及时更新的问题
										_this.city = res.result
											.address_component.city
										//_this.item.address = res.address;
										//纬度&经度
										// let city = {
										// 	id: res.result.ad_info.city_code - 156000000,
										// 	title: res.result.ad_info.city
										// }
										// uni.setStorageSync('city', city);
										// _this.city = city;
										// _this.getMescroll(_this.swiperCurrent)
										// 	.triggerDownScroll();
										_this.getlist()
									},
									fail(error) {
										console.error(error);
									}
								});
							},
							fail(error) {
								console.error(error);
							}
						});
						//#ifdef MP
					},
					fail() {
						uni.showModal({
							content: '位置信息授权才能选择',
							success(res) {
								if (res.confirm) {
									uni.openSetting({
										success(res) {
											//console.log(res.authSetting);
										}
									});
								}
							}
						});
					}
				});
				//#endif
			},
			getlist() {
				this.list = []
				this.flowList = []
				let date = new Date(); //Fri Oct 29 2021 16:37:56 GMT+0800 (CST)
				let y = date.getFullYear(); //获取完整的年份(4位)
				var m = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
				var d = date.getDate(); //获取当前日(1-31)
				var ds = date.getDate() + 1
				if (m < 10) {
					m = '0' + m
				}
				if (d < 10) {
					d = '0' + d
				}
				if (ds < 10) {
					ds = '0' + ds
				}
				this.statrdata = y + '-' + m + '-' + d
				this.enddata = y + '-' + m + '-' + ds
				if (ds > 31) {
					var ms = date.getMonth() + 2;
					if (ms < 10) {
						ms = '0' + ms
					}
					this.enddata = y + '-' + ms + '-' + '0' + 1
				}
				var form = {
					cityName: this.city,
					checkInDate: this.statrdata,
					checkOutDate: this.enddata,
					pageIndex: 1,
					pageSize: 20,
					hotelStars: this.hotelStars,
					minPrice: '',
					maxPrice: '',
					range: '',
					sort: '',
					districtName: '',
					queryText: this.vals,
				}
				if (this.item.address !== undefined) {
					form.cityName = this.city,
						form.longitude = this.item.coords.lng,
						form.latitude = this.item.coords.lat,
						form.range = 20
				}
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${searchHotelList}`, form).then(r => {
					this.list = r.data.hotelList
					this.status1 = true
					this.addRandomData();
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			},
			seachHotel() {
				if (this.statrdata == '请选择' || this.enddata == '请选择') {
					uni.showToast({
						title: '请选择时间',
						icon: 'none',
						duration: 1000
					})
					return
				}
				var form = {
					cityName: this.citys.title,
					checkInDate: this.statrdata,
					checkOutDate: this.enddata,
					pageIndex: 1,
					pageSize: 20,
					hotelStars: this.hotelStars,
					minPrice: '',
					maxPrice: '',
					range: '',
					sort: '',
					districtName: '',
					queryText: this.vals,
				}
				if (this.item.address !== undefined) {
					form.cityName = this.city,
						form.longitude = this.item.coords.lng,
						form.latitude = this.item.coords.lat,
						form.range = 20
				} else {
					if (this.citys.title == '全国') {
						uni.showToast({
							title: '请先选地点',
							icon: 'none',
							duration: 1000
						})
						return
					}
				}
				console.log(form)
				uni.navigateTo({
					url: '/pages/pet/Hotel/Hotel_list?item=' + encodeURIComponent(JSON.stringify(form))
				})
			},
			addRandomData() {
				this.flowList = this.list
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			// 通用跳转
			navTo(route) {
				this.$mRouter.push({
					route
				});
			},
			getMescroll(i) {
				let mescrollItems = this.$refs.mescrollItem;

				if (mescrollItems) {
					let item = mescrollItems[i];
					if (item) return item.mescroll;
				}

				return null;
			},
			citychange() {
				this.shows = true
				console.log(this.shows)
			},
			cityclick(e) {
				console.log(e)
				this.city = e.province.label + e.city.label
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
			timechange() {
				this.show = true
			},
			change(e) {
				console.log(e);
				this.statrdata = e.startDate
				this.enddata = e.endDate
				this.ljDate = this.calculate(e.startDate, e.endDate)
			},
			goinfo(val) {
				var form = {
					hotelID: val,
					checkInDate: this.statrdata,
					checkOutDate: this.enddata,

				}
				uni.navigateTo({
					url: '/pages/pet/Hotel/Hotel_info?item=' + encodeURIComponent(JSON.stringify(form))
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-panel-item {
		background: #fff;
		border-radius: 20rpx;
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

	.flex {
		display: flex;
		align-items: center;
		padding: 30rpx;
		position: relative;
	}

	.flex-box {
		flex: 1;
		min-width: 0;
		font-size: 28rpx;
		color: #333;
	}

	.hotel-content {
		width: 750rpx;
		height: 100%;
		position: absolute;
		background-image: linear-gradient(to bottom, #6ccc7b, #119160);
		background-color: #0d8f5e;
		overflow: scroll;
	}

	.hotel-content-bg {
		background-image: url('http://img.lanyanxi.com/app/enjoybg.png');
		background-size: 100%;
		background-position: top center;
		background-repeat: no-repeat;
		background-color: #0d8f5e;
		width: 750rpx;
		height: 100%;
		position: relative;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		overflow: scroll;
	}

	.hotel-head {
		background-image: url('http://img.lanyanxi.com/app/enjoytext-title.png');
		background-size: 70%;
		background-position: bottom center;
		background-repeat: no-repeat;
		width: 750rpx;
		height: 210rpx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	.tab {
		padding-top: 300rpx;
		position: absolute;
		width: 92%;
		top: 50%;
		margin-top: -440rpx;
		margin-right: 4%;
		margin-left: 4%;
	}

	.tab-nav {
		height: 80rpx;
		line-height: 80rpx;
		display: block;
		position: relative;
		z-index: 1;
		width: 75%;
		border-radius: 40rpx 40rpx 0 0;
	}

	.tab-nav-item {
		height: 80rpx;
		line-height: 80rpx;
		position: relative;
		text-align: center;
		color: #fff;
		font-size: 34rpx;
		display: block;
		float: left;
		border-radius: 40rpx 40rpx 0 0;
		width: 50%;
		background: #cbcbcb;
		margin-right: -10px;
	}

	.tab-nav-item.tab-active {
		color: #1dd08c;
		font-weight: bold;
		background-color: #fff;
		z-index: 100;
	}

	.tab-panel {
		position: relative;
		overflow: hidden;
		background: #fff;
		border-radius: 0 40rpx 40rpx 40rpx;
		transition: height 2s;
		padding-bottom: 20rpx;
	}

	.tab-panel .tab-panel-item {
		width: 100%;
		position: absolute;
		top: 0;
		transform: translateX(-100%);

	}

	.tab-panel .tab-panel-item.tab-active~.tab-panel-item {
		transform: translateX(100%);
	}

	.tab-panel .tab-panel-item.tab-active {
		position: relative;
		transition: transform 0.15s;
		transform: translateX(0);
	}

	.hotel-city {
		font-size: 34rpx;
		font-weight: bold;
		width: 80%;
		overflow:hidden; 
		text-overflow:ellipsis;
		white-space:nowrap;
		/*隐藏溢出*/
		/*当文本溢出包含元素时显示省略符号来代表被修剪的文本*/
		/*规定段落中的文本不进行换行*/
	}

	.hotel-text {
		font-size: 32rpx;
		color: #666666;
		width: 100%;
		text-align: right;
		position: relative;
	}

	.flex-mar {
		margin: 0 40rpx;
		padding: 30rpx 0;
	}

	.Date_lr {
		width: 30%;
		text-align: center;
		line-height: 40rpx;
	}

	.calendar-days {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 28rpx;
		color:#0081ff;
		padding: 4rpx 16rpx;
		line-height: 40rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #0081ff;
	}

	.checkinout {
		height: 100rpx;
		line-height: 100rpx;
		position: relative;
		padding: 4rpx 0;
		display: -webkit-box;
		display: flex;
		background-color: #fff;
		margin: 0 40rpx;
	}

	.firstSelect p {
		line-height: 50rpx;
		color: #585858;
		font-size: 24rpx;
	}


	.flex-head {
		font-size: 30rpx;
		color: #222222;
		padding-left: 10rpx;
	}

	.flex-button-box {
		padding: 20rpx 40rpx;
	}

	.flex-button-btn {
		text-align: center;
		position: relative;
		border: none;
		pointer-events: auto;
		width: 100%;
		display: block;
		font-size: 38rpx;
		line-height: 88rpx;
		margin-top: 18rpx;
		// background-color: #0bc66f;
		color: #fff;
		// box-shadow: 0 4rpx 16rpx #6ee0ab;
		border-radius: 200rpx;
		height: 88rpx;
		outline: none;
	}

	.flex-button-btn:hover {
		outline: none;
	}

	.flex-search {
		color: #666666;
		font-size: 26rpx;
		padding-left: 10rpx;
	}

	.city-select {
		position: relative;
		display: flex;
		align-items: center;
		height: 100rpx;
		padding: 0 20rpx;
		margin: 0 40rpx;
	}

	.city-swap {
		position: absolute;
		left: 50%;
		top: 50%;
		color: #b9b9b9;
		transform: translate(-50%, -50%);
		width: 50rpx;
		height: 50rpx;
		background: url('@/static/icon-swap.png') no-repeat;
		background-size: contain;
	}

	.city-select-item {
		width: 45%;
		margin-right: 10%;
		line-height: 84rpx;
		height: 84rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #212121;
		font-weight: bolder;
	}

	.city-select .city-fr {
		width: 45%;
		float: right;
		line-height: 84rpx;
		height: 84rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #212121;
		margin-right: 0;
		text-align: right;
	}

	.city-calendar .city-select-item {
		line-height: normal;
	}

	.city-calendar .city-fr {
		text-align: left;
	}

	.city-calendar .city-select-item p {
		color: #666666;
		font-size: 32rpx;
		font-weight: normal;
		padding-top: 6rpx;
		line-height: 36rpx;
	}

	.city-calendar .city-select-item h2 {
		font-weight: normal;
		font-size: 30rpx;
	}

	.city-calendar .city-select-item h2 em {
		font-style: normal;
		color: #666666;
		font-size: 30rpx;
		font-weight: normal;
	}

	.city-select .city-fr h2 {
		font-style: normal;
		color: #666666;
		font-size: 26rpx;
		font-weight: normal;
		position: relative;
	}


	.cell-checkbox-uncheck:after {
		content: '';
		width: 32rpx;
		height: 32rpx;
		display: block;
		border-radius: 100%;
		background-image: url(data:image/png;base64,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);
		background-size: 32rpx;
	}

	.cell-checkbox-check:after {
		content: '';
		width: 32rpx;
		height: 32rpx;
		display: block;
		border-radius: 100%;
		background-image: url(data:image/png;base64,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);
		background-size: 32rpx;
	}

	.cell-item {
		display: flex;
		position: relative;
		overflow: hidden;
		font-size: 32rpx;
		color: #333;
		float: left;
		margin: 0 0.4rem 0 0.8rem;
	}

	.cell-left {
		width: 100%;
		color: #666666;
		font-size: 0.75rem;
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
		background-repeat: no-repeat;
		background-size: 40rpx;
	}

	.icon-location {
		background-image: url('data:image/png;base64,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');
		width: 30rpx;
		height: 30rpx;
		background-size: 30rpx;
		position: absolute;
		right: 0;
		bottom: 0.15rem;
	}

	.icon-add {
		width: 30rpx;
		height: 30rpx;
		background-size: 30rpx;
		position: absolute;
		left: 3.2rem;
		bottom: 0.01rem;
		background-image: url('data:image/png;base64,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');
	}
</style>