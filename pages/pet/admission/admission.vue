<template>
	<view class="warf">
		<view class="seachtop">
			<view class="wrap" style="margin-bottom: 10rpx;">
				<u-swiper :list="imglist" name="cover" height="400" @click="goad"></u-swiper>
			</view>
			<view class="flex flex-mar b-line" style="width: 100%;margin-bottom: 5rpx;justify-content: space-between;height: 100rpx;align-items: center;"> <!-- @click="chooseLocation" -->
				<view v-if="item.address" @tap="navTo('/pages/pet/city')" class="hotel-city">{{item.address}}</view>
				<view v-else="item.address" @tap="navTo('/pages/pet/city')" class="hotel-city">{{citys.title}}</view>
				<view class="flex-box hotel-text" @click="chooseLocation" style="display: flex;">
					<text>定位</text>
					<u-icon name="map" :color="themeColor.color"></u-icon>
				</view>
			</view>
			<view class="seachtops">
				<view class="seachtop_right">
					<u-search shape="square" bg-color="#fff" placeholder="景点/地标/关键词" :show-action="false"
						v-model="keyword" @search="searchHotel"></u-search>
				</view>
			</view>
		</view>
		<HM-filterDropdown :menuTop="-5" :filterData="filterData" :defaultSelected="defaultSelected"
			:updateMenuName="true" @confirm="confirm" dataFormat="Object"></HM-filterDropdown>
		<view class="toptab">
			<view class="listbox">
				<view style="font-size: 35rpx; font-weight: bold;">
					为你心选
				</view>
			</view>
			<view style="width: 60%;margin: 0 auto;" v-if="list.length == 0">
				<image src="https://img11.360buyimg.com/ftfman/jfs/t1/130609/24/19259/35205/5fd03cc7E49456a46/4fb443c24e0cf799.png" mode="widthFix"></image>
				<view style="width: 100%;text-align: center;font-size: 30rpx;font-weight: 700;">当前搜索无结果</view>
			</view>
			<view class="listbox" v-if="list.length>0">
				<view class="list_item" v-for="(item,index) in list" :key="index" @click="goinfo(item)">
					<image style="height: 100%;width: 28%;border-radius: 20rpx;" :src="item.mainImage"
						mode="aspectFill"></image>
					<view
						style="display: flex;flex-direction: column;justify-content: space-between;margin-left: 20rpx;width: 70%;">
						<view class="list_item_title">
							{{item.scenicName}}
						</view>
						<view style="color: #f1ab4a;">
							{{item.commentScore}}分
						</view>
						<view style="color: #a8a8a8;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
							{{item.address}}
						</view>
						<view style="color: #a8a8a8;">
							{{item.themeGroups}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" icon-type="iconType" :load-text="loadText" />
	</view>
</template>

<script>
	import {
		searchScenicList
	} from '@/api/admission.js';
	import {
		indexlistad
	} from '@/api/Hotel.js';
	import datass from '@/common/datass.js'; //筛选菜单数据
	import datasss from '@/common/datasss.js'; //筛选菜单数据
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	export default {
		data() {
			return {
				path: '/pages/pet/admission/admission',
				title: '周边旅游门票',
				status: 'loadmore',
				sort: 0,
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				citys: {
					id: 0,
					title: '全国'
				},
				keyword: '',
				list: [],
				imglist:[],
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
				defaultSelected: [],
				filterData: [],
				pageIndex: 1,
				themeGroup: '',
				citychange: false,
				types: 1,
				distanceRange: '20',
				item: {

				},
				qqmapsdk: null,
				city: '',
				status1:false
			};
		},
		onLoad(option) {
			this.qqmapsdk = new QQMapWX({
				key: this.$mData.maps[0].key
			});
			if (option.keyword) {
				this.keyword = option.keyword
			}
			this.filterData = datass;
			uni.setNavigationBarTitle({
				title: '门票'
			})
			this.getCity()
		},
		onShow() {
			this.getbanner()
			if (this.status1 == true) {
				let city = uni.getStorageSync('city');
				if (city && this.citys.id != city.id) {
					this.list = []
					this.pageIndex = 1
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
		mounted() {

		},
		methods: {
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
			getbanner(){
				var form = {
					ad_type:7
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
										_this.list = []
										_this.pageIndex = 1
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
								_this.list = []
								_this.pageIndex = 1
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
										_this.list = []
										_this.pageIndex = 1
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
			searchHotel() {
				this.list = []
				this.pageIndex = 1
				this.getlist()
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				let location = uni.getStorageSync('location');
				console.log(location)
				var form = {
					keyWord: this.keyword,
					pageIndex: this.pageIndex,
					pageSize: 20,
					cityName: this.citys.title,
					provinceName: '',
					themeGroup: this.themeGroup,
					sort: this.sort,
					star: '',
				}
				if (this.item.address !== undefined) {
					form.cityName = this.city,
						form.longitude = this.item.coords.lng,
						form.latitude = this.item.coords.lat,
						form.range = this.distanceRange
				}
				this.$http.post(`${searchScenicList}`, form).then(r => {
					if (r.data.scenicList.length > 0) {
						this.pageIndex++
						this.status = "loadmore"
						for (var i = 0; i < r.data.scenicList.length; i++) {
							this.list.push(r.data.scenicList[i])
						}
					} else {
						this.status = "nomore"
						console.log(this.list)
					}
					this.status1 = true
					console.log(this.list)
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			},
			goinfo(item) {
				uni.navigateTo({
					url: "/pages/pet/admission/admission_info?scenicID=" + item.scenicId
				})
			},

			// 通用跳转

			navTo(route) {
				this.$mRouter.push({
					route
				});
			},
			confirm(e) {
				this.list = []
				console.log(e)
				this.distanceRange = e.value[1][0]
				this.sort = e.value[0][0]
				if (e.value[0][0] == 0) {
					this.citychange = true
				} else {
					if (this.types !== 0) {
						this.citychange = false
					}
				}

				this.pageIndex = 1
				this.getlist()
			},
		},
		onReachBottom() {
			this.status = 'loading'
			this.getlist()
		},
	};
</script>

<style lang="scss">
	.hotel-city {
		font-weight: #a8a8a8;
		font-weight: bold;
	}

	.hotel-text {
		font-size: 32rpx;
		color: #666666;
		width: 20%;
		text-align: right;
		position: relative;
	}

	.list_item_title {
		font-size: 33rpx;
		font-weight: bold;
	}

	.list_item {
		width: 100%;
		height: 250rpx;
		margin-top: 20rpx;
		display: flex;
	}

	.toptab {
		padding: 20rpx;
		background: #fff;
	}

	.seachtop {
		z-index: 10999;
		margin-top: 90rpx;
		top: 0;
		left: 0;
		padding: 20rpx;
		width: 100%;
		background: #fff;
	}

	.seachtops {
		background: #fff;
		border-radius: 50rpx;
		overflow: hidden;
		width: 100%;
		padding-left: 20rpx;
		padding-right: 20rpx;
		border: 1px solid #ccc;

		.seachtop_left {
			width: 20%;
			display: flex;
			align-items: center;
			border-right: 2px solid #ccc;
		}

		.seachtop_right {
			width: 80%;
		}
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
</style>