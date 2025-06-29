<template>
	<view class="wrap">
		<u-navbar style="position: absolute;" :is-fixed="false" :border-bottom="false" :is-back="false" :title="title"
			title-color="#fff" background="220,38,38,0.2">
			<view class="slot-wrap" @tap="navTo('/pages/pet/city')">
				<i class="iconfont iconicon-test" :class="'text-' + themeColor.name" />
				<view class="city">{{city.title}} <text class="iconfont iconxiajiantou2" /></view>
			</view>
		</u-navbar>
		 
		<view class="wrap">
			<u-swiper :list="imglist" name="cover" height="550" @click="goad1"></u-swiper>
		</view>
		<!-- 顶部轮播图(挪位)	 -->
		<!-- <view class="swiper-adv" v-if="advs.index_top.length">

			<uni-swiper-dot :info="imglist" :current="current" field="content" mode="round"
				:dotsStyles="{ backgroundColor: '#FFF', color: themeColor.color, selectedBackgroundColor: themeColor.color, border: 'none', selectedBorder: 'none' }">
				<swiper class="swiper-box" :current="current" circular autoplay :indicator-dots="false"
					indicator-color="#FFF" :indicator-active-color="themeColor.color"
					@animationfinish="animationfinish">
					<swiper-item v-for="(item, index) in imglist" :key="index" @tap="goad(item)">
						<u-image :src="item.cover" width="100%" height="350" border-radius="15" mode="aspectFill" />
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view> -->
		<!-- <view class="swiper">
			<view class="swiper-box">
				<rf-swipe-dot :info="advs.index_top" mode="dot" :current="current" field="title">
					<swiper @change="handleDotChange" autoplay="true">
						<swiper-item v-for="(item, index) in advs.index_top" @tap="indexTopToDetailPage(item)" :key="index">
							<view class="swiper-item">
								<u-image :src="item.cover" width="100%" height="240" border-radius="20" mode="aspectFill" />
							</view>
						</swiper-item>
					</swiper>
				</rf-swipe-dot>
			</view>
		</view>
		<!-- 顶部搜索栏 -->
		<!-- <view class="indextop" :class="'bg-' + themeColor.name">
			<view class="indextop-info">
				<view class="serach">
					<u-search placeholder="热门景点" @custom="searchadm" v-model="value" :animation="true" @search="searchadm"></u-search>
				</view>
				<scroll-view style="white-space: nowrap;" class="indextop-label" scroll-x="true" @scroll="scroll">
					<text class="indextop-labelitem" v-for="item in toplabellist" :key="item.id">
						{{item.name}}
					</text>
				</scroll-view>
			</view>
		</view> -->
		<!-- 公告 -->
		<view class="slideback">
			<rf-swiper-slide v-if="notices.length > 0" :list="notices" class="rf-skeleton"
				@navTo="navTo('/pages/index/notice/notice')">
				<view slot="header" class="swiper-slide-header">
					<text class="iconfont icongonggao" :class="'text-' + themeColor.name"></text>
				</view>
			</rf-swiper-slide>
		</view>

		<!-- 频道 -->
		<swiper :indicator-active-color="themeColor.color" indicator-color="#666" class="channel-wrap"
			:indicator-dots="channels.length > 10" :style="{height: channels.length <= 5 ? '200rpx' : '400rpx'}">
			<swiper-item class="channel-list">
				<view class="channel">
					<view class="icon-wrap" @click="gotoitem(0)">
						<!-- <u-image :src="'/static/pet/icon-' + item.key  + '.png'" width="84" height="84" borderRadius="15" mode="aspectFill" /> -->

						<image class="iconimg" src="@/static/图标_02-03.png" mode="heightFix"></image>
					</view>
					<view class="text">机票</view>
				</view>
				<view class="channel" @click="gotoitem(1)">
					<view class="icon-wrap">
						<!-- <u-image :src="'/static/pet/icon-' + item.key  + '.png'" width="84" height="84" borderRadius="15" mode="aspectFill" /> -->

						<image class="iconimg" src="@/static/酒店 (1).png" mode="heightFix"></image>
					</view>
					<view class="text">酒店</view>
				</view>
				<view class="channel" @click="gotoitem(2)">
					<view class="icon-wrap">
						<!-- <u-image :src="'/static/pet/icon-' + item.key  + '.png'" width="84" height="84" borderRadius="15" mode="aspectFill" /> -->

						<image class="iconimg" src="@/static/图标_07.png" mode="heightFix">
						</image>
					</view>
					<view class="text">门票</view>
				</view>

			</swiper-item>

		</swiper>
		<!-- 推荐酒店 -->
		<view class="ggitem" v-for="(item,index) in dbgglist">
			<image style="width: 100%;" :src="item.cover" mode="widthFix" @click="goad(item)"></image>
		</view>
		<view class="ggitem" style="width: 100%;">
			<view style="width: 50%;text-align: center;margin: 0 auto;margin-top: 100rpx;margin-bottom: 100rpx;" v-for="(item,index) in xxlist">
				<image  :src="item.cover" mode="widthFix"></image>
				<!-- <u-icon name="star-fill" :color="themeColor.color"></u-icon>
				<text :class="'text-' + themeColor.name"
					style="font-size: 35rpx;font-weight: bold;font-style: italic">安心购·</text>
				<text style="font-weight: bold;">低价保障</text>
				<text :class="'text-' + themeColor.name" style="font-size: 35rpx;">·</text>
				<text style="font-weight: bold;">出行保障</text>
				<text :class="'text-' + themeColor.name" style="font-size: 35rpx;">·</text>
				<text style="font-weight: bold;">售后保障</text>
			</view>
			<view style="width: 100%;text-align: center;margin-bottom: 20rpx;">
				<u-icon name="shopping-cart-fill" :color="themeColor.color"></u-icon>
				<text style="font-weight: bold;">全程预订保障，去哪儿都放心</text> -->
			</view>
		</view>
		<!-- 频道提示内容 -->
		<!-- <view class="channel-wrap-info">
			<rfWarapInfo></rfWarapInfo>
		</view> -->
		<!-- <view style="padding: 5px 10px;">
			<frAd></frAd>
		</view> -->
		<!--列表-->
		<!-- <view class="pet-wrap" style="padding-bottom: 1%;">
			<view class="sticky">
				<view class="sticky-tabs">
					<u-tabs-swiper ref="tabs" :list="$mData.types" :current="tabsCurrent" @change="tabsChange"
						:is-scroll="false" bar-height="6" bar-width="40"
						:active-color="themeColor.color"></u-tabs-swiper>
				</view>

				<view class="sticky-more" @tap="navToChannel(0)">
					更多 <text class="iconfont iconyou" />
				</view>
			</view>

			<swiper :current="swiperCurrent" @transition="swiperTransition" @animationfinish="swiperAnimationfinish"
				style="height:1150rpx;">
				<swiper-item v-for="(item, tabsIndex) in $mData.types" :key="tabsIndex">
					<pet-index-mescroll-item ref="mescrollItem" :i="tabsIndex" :index="tabsIndex" :tabs="$mData.types"
						:params="params"></pet-index-mescroll-item>
				</swiper-item>
			</swiper>
		</view>

		<u-gap height="20" /> -->

		<!--备案-->
		<!--#ifdef H5-->
		<!-- <view class="copyright" v-if="config.web_site_icp">
			{{ config.copyright_desc }}

			<a href="http://www.beian.miit.gov.cn">{{ config.web_site_icp }}</a>
		</view> -->
		<!-- #endif -->

		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
		<rf-back-top :scrollTop="scrollTop"></rf-back-top>

	</view>
</template>

<script>
	import rfSwipeDot from '@/components/rf-swipe-dot';
	import rfSwiperSlide from '@/components/rf-swiper-slide';
	import rfSearch from '@/components/rf-search2/rf-search2.vue';
	import rfWarapInfo from '@/components/rf-wrap-info/rf-wrapinfo.vue';
	import {
		mapMutations
	} from 'vuex';
	import PetIndexMescrollItem from './index-mescroll-item.vue';
	import frAd from '@/components/rf-index-ad/ad.vue';
	import {
		indexList
	} from '@/api/product';
	import {
		petIndex,
		petList
	} from '@/api/pet';
	import {
		searchHotelList
	} from '@/api/Hotel.js';
	import {
		indexlistad
	} from '@/api/Hotel.js';
	import {
		memberInfo,
	} from '@/api/userInfo';
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	export default {
		components: {
			rfSwipeDot,
			rfSwiperSlide,
			rfSearch,
			PetIndexMescrollItem,
			rfWarapInfo,
			frAd,
		},
		data() {
			return {
				background: {
					backgroundColor: '#FDE125',
				},
				$mData: this.$mData,
				appName: this.$mSettingConfig.appName,
				path: '/pages/index/index',
				title: this.$mSettingConfig.appName,
				qqmapsdk: null,
				city: {
					id: 0,
					title: '全国'
				},
				current: 0, // 轮播图index
				advs: {
					index_top: [11]
				}, // 广告图
				notices: [1111],
				channels: [],
				tabsCurrent: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				config: {}, // 配置
				loading: true,
				scrollTop: 0,
				kefuShow: true,
				loadingType: 'more',
				newsBg: this.$mAssetsPath.newsBg,
				errorImage: this.$mAssetsPath.errorImage,
				pages: [1, 1, 1, 1],
				// type: 1,
				// cate: 0,
				moneySymbol: this.moneySymbol,
				activeStyle: {
					background: '#FFCE0C',
					color: '#01040A'
				},
				filterShow: false,
				params: {},
				fatherData: {
					title: '热门景点'
				},
				value: '',
				list: [],
				flowList: [],
				statrdata: '',
				enddata: '',
				item: '',
				hotelStars: '',
				imglist: [],
				citytitle: '',
				item: {},
				dbgglist: [],
				xxlist:[]
			};
		},
		onLoad() {
			this.qqmapsdk = new QQMapWX({
				key: this.$mData.maps[0].key
			});
			this.getbanner()
			this.initData();
		},
		onShow() {
			this.getbanner()
			this.initData();
			this.getbanner2()
			this.getbanner3()
			this.getMemberInfo()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		/* onReachBottom() {
			this.mescroll && this.mescroll.onReachBottom();
		},
		onPageScroll(e) {
			this.mescroll && this.mescroll.onPageScroll(e);
		}, */
		onPullDownRefresh() {
			this.getIndexList('refresh');
		},
		onShareAppMessage(res) {
			return {
				title: this.title,
				path: this.path
			};
		},
		computed: {
			statusBar() {
				const e = uni.getSystemInfoSync();
				return e.statusBarHeight;
			},
			bottom() {
				let bottom = 0;
				/*  #ifdef H5  */
				bottom = 90;
				/*  #endif */
				return bottom;
			}
		},
		methods: {
			async getMemberInfo() {
				await this.$http
					.get(memberInfo)
					.then(async r => {
						console.log('注册详情', r)
						console.log(r.is_perfect, r.reviewed)
						
						if (r.data.is_perfect == 0 && r.data.reviewed == 0) {
							uni.showToast({
								title: '请完成资料填写',
								icon: 'none', //如果要纯文本，不要icon，将值设为'none'
								duration: 1000 //持续时间为 2秒
							})
							setTimeout(function(){
								uni.navigateTo({
									url:'/pages/user/userinfo/userinfo'
								})
							},1000)
						}
						if (r.data.is_perfect == 1 && r.data.reviewed == 0) {
							uni.showToast({
								title: '资料已经完善 请等待审核',
								icon: 'none', //如果要纯文本，不要icon，将值设为'none
								duration: 1000 //持续时间为 2秒
							})
							setTimeout(function(){
								uni.switchTab({
									url:'/pages/profile/profile'
								})
							},1000)
						}
						// if (r.data.auth == 0) {
			
						// 	this.$refs["userProfileDialog"].show({
						// 		desc: "主要用于向用户提供具有辨识度的用户中心界面",
						// 		avatarUrl: {
						// 			requried: true, // 是否必填
						// 			disable: false, // 是否隐藏
						// 		}
						// 	}).then(res => {
						// 		console.log("结果！！！", res)
						// 		console.log("结果！！！", res.avatarUrl, res.nickName)
						// 		this.userInfo.nickname = res.nickName
						// 		this.userInfo.head_portrait = this.head_portrait
						// 		this.handleUpdateInfo();
			
						// 	}, err => {
						// 		console.log("取消")
						// 	});
			
						// }
					})
					.catch(() => {
						
					});
			},

			goad1(index) {
				var item = this.imglist[index]
				if (item.jump_type == 2) {
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
				}
				if (item.jump_type == 3) {
					uni.navigateToMiniProgram({
						appId: item.jump_appid,
						path: item.jump_link,
						success: res => {
							// 打开成功
						},
						fail: err => {
							// 打开失败
						}
					})
				}
			},
			goad(item) {
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
			getbanner() {
				var form = {
					ad_type: 1
				}


				this.$http.post(`${indexlistad}`, form).then(r => {
					console.log(r)
					this.imglist = r.data.list
				}).catch(() => {

				});
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
			goinfo(val) {
				var form = {
					hotelID: val,
					checkInDate: this.statrdata,
					checkOutDate: this.enddata,

				}
				uni.navigateTo({
					url: '/pages/pet/Hotel/Hotel_info?item=' + encodeURIComponent(JSON.stringify(form))
				})
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			addRandomData() {
				this.flowList = this.list
			},
			// getlist() {
			// 	this.list = []
			// 	this.flowList = []
			// 	this.clear()
			// 	let date = new Date(); //Fri Oct 29 2021 16:37:56 GMT+0800 (CST)
			// 	let y = date.getFullYear(); //获取完整的年份(4位)
			// 	var m = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			// 	var d = date.getDate(); //获取当前日(1-31)
			// 	var ds = date.getDate() + 1
			// 	if (m < 10) {
			// 		m = '0' + m
			// 	}
			// 	if (d < 10) {
			// 		d = '0' + d
			// 	}
			// 	if (ds < 10) {
			// 		ds = '0' + ds
			// 	}
			// 	this.statrdata = y + '-' + m + '-' + d
			// 	this.enddata = y + '-' + m + '-' + ds
			// 	if (ds > 31) {
			// 		var ms = date.getMonth() + 2;
			// 		if (ms < 10) {
			// 			ms = '0' + ms
			// 		}
			// 		this.enddata = y + '-' + ms + '-' + '0' + 1
			// 	}
			// 	var form = {
			// 		cityName: '',
			// 		checkInDate: this.statrdata,
			// 		checkOutDate: this.enddata,
			// 		pageIndex: 1,
			// 		pageSize: 20,
			// 		hotelStars: this.hotelStars,
			// 		minPrice: '',
			// 		maxPrice: '',
			// 		range: '',
			// 		sort: '',
			// 		districtName: '',
			// 		queryText: '',
			// 	}
			// 	if (this.item.address !== undefined) {
			// 		form.cityName = this.citytitle,
			// 			form.longitude = this.item.coords.lng,
			// 			form.latitude = this.item.coords.lat,
			// 			form.range = 20
			// 	}
			// 	uni.showLoading({
			// 		title: '加载中'
			// 	});
			// 	this.$http.post(`${searchHotelList}`, form).then(r => {
			// 		this.list = r.data.hotelList
			// 		this.addRandomData();
			// 		uni.hideLoading();
			// 	}).catch(() => {
			// 		uni.hideLoading();
			// 	});
			// },
			searchadm() {
				uni.navigateTo({
					url: '/pages/pet/admission/admission?keyword=' + this.value
				})
			},
			gotoitem(type) {
				if (type == 0) {
					console.log(111);
					uni.navigateTo({
						url: '/pages/pet/ticket/ticket'
					})
				}
				if (type == 1) {
					console.log(111);
					uni.navigateTo({
						url: '/pages/pet/Hotel/Hotel'
					})
				}
				if (type == 2) {
					console.log(111);
					uni.navigateTo({
						url: '/pages/pet/admission/admission'
					})
				}
			},
			// 数据初始化
			initData() {
				this.getCity();
				this.getIndexList();
			},
			// 监听轮播图切换
			handleDotChange(e) {
				this.current = e.detail.current;
			},
			// 通用跳转
			navTo(route) {
				this.$mRouter.push({
					route
				});
			},
			// Tabbar跳转
			switchTab(route) {
				this.$mRouter.switchTab({
					route
				});
			},
			navToChannel(index) {


				let channel = this.channels[index];

				switch (channel.type) {
					case 'push':
						this.navTo(channel.route);
						this.switchTab(channel.route);
						break;
					case 'switchTab':
						this.switchTab(channel.route);
						this.navTo(channel.route);
						break;
					case 'web':
						this.navTo(`/pages/pet/web?title=${channel.name}&url=${channel.route}`);
						break;
					case 'mp':
						// #ifndef MP
						this.$mHelper.toast('不支持跳转小程序');
						// #endif

						// #ifdef MP
						uni.navigateToMiniProgram({
							appId: channel.route
						});
						// #endif
						break;
					default:
						this.navTo(channel.route);
						break;
				}
			},

			// 跳至广告图指定页面
			indexTopToDetailPage(item) {


				uni.navigateTo({
					url: `/pages/public/web-view?url=${item.jump_link}`, // 要跳转的网址
					success(res) {
						console.log('跳转成功', res)
					},
					fail(err) {
						console.log('跳转失败', err)
					}
				})

				//this.$mHelper.handleBannerNavTo(item.jump_type, item.jump_link, item.id);
			},
			// 获取主页数据
			async getIndexList(refresh) {
				await this.$http.get(`${indexList}`, {}).then(async r => {
					uni.setNavigationBarTitle({
						title: this.appName
					});
					if (refresh === 'refresh') uni.stopPullDownRefresh();
					this.initIndexData(r.data);
					this.loading = false;
				}).catch(() => {
					this.loading = false;
					if (refresh === 'refresh') uni.stopPullDownRefresh();
				});
			},
			// 首页参数赋值
			initIndexData(data) {
				this.advs = data.adv;
				this.notices = data.announce;
				this.config = data.config;
				this.channels = data.channels;
				this.$mHelper.handleWxH5Share(this.share.share_title || this.appName, this.share.share_desc ||
					`欢迎来到${this.appName}`, this.share.share_link || this.$mConfig.hostUrl, this.share.share_cover ||
					this.$mSettingConfig.appLogo);
			},
			// 跳转至商品详情页
			navToDetailPage(data) {
				const {
					id
				} = data;
				if (!id) return;
				this.navTo(`/pages/pet/view?id=${id}`);
			},
			animationfinish(e) {
				this.current = e.detail.current;
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			swiperTransition(e) {
				let dx = e.detail.dx;
				this.$refs.tabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			swiperAnimationfinish(e) {
				let tabsCurrent = e.detail.current;
				this.$refs.tabs.setFinishCurrent(tabsCurrent);
				this.swiperCurrent = tabsCurrent;
				this.tabsCurrent = tabsCurrent;

				this.cate = tabsCurrent;
			},
			getMescroll(i) {
				let mescrollItems = this.$refs.mescrollItem;

				if (mescrollItems) {
					let item = mescrollItems[i];
					if (item) return item.mescroll;
				}

				return null;
			},
			getCity() {
				let city = uni.getStorageSync('city');


				let _this = this;
				// #ifdef MP
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						// #endif
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
										console.log(111, res)
										let city = {
											id: res.result.ad_info.city_code - 156000000,
											title: res.result.ad_info.city,

										}
										_this.$set(_this.item, 'address', res.result
											.address); //解决不及时更新的问题
										_this.citytitle = res.result
											.address_component.city
										uni.setStorageSync('city', city);
										_this.city = city;
										_this.getMescroll(_this.swiperCurrent)
											.triggerDownScroll();
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
						// #ifdef MP
					}
				});
				// #endif

			}
		}
	};
</script>

<style lang="scss">
	.ggitem {
		width: 100%;
	}

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

	page {
		background: #F5F5F5;

		.indextop {
			width: 100%;
			padding-top: 70rpx;
			padding-bottom: 20rpx;

			.indextop-info {
				width: 90%;
				margin: 0 auto;

				.indextop-info-title {
					margin-bottom: 20rpx;
					width: 100rpx;
				}

				.indextop-label {
					margin-top: 20rpx;

					.indextop-labelitem {
						padding: 10rpx;
						margin-right: 10rpx;
						background: #FEF092;
						color: #000;
						border-radius: 10rpx;
						font-size: 20rpx;
					}
				}
			}
		}

		.wrap {
			.slideback {}

			.steertabar {
				.steericon {
					height: 40rpx;
				}
			}

			.slot-wrap {
				display: flex;
				align-items: center;
				/* flex: 1; */
				padding: 0 30rpx;

				.city {
					max-width: 150rpx;
					color: #fff;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					// -webkit-line-clamp: 1;
					// -webkit-box-orient: vertical;
				}
			}

			.swiper-adv {
				background: $color-white;

				.swiper-box {
					width: 100%;
					height: 350rpx;
					overflow: hidden;
					border-radius: 15rpx;

					//box-shadow: 0rpx 8rpx 25rpx rgba(0, 0, 0, 0.2);
					//兼容ios，微信小程序
					//position: relative;
					swiper {
						width: 100%;
						height: 40vw;
					}
				}
			}

			/*轮播图2*/
			.swiper-item-text {
				position: absolute;
				bottom: 16rpx;
				left: 30rpx;
				height: 48rpx;
				line-height: 48rpx;
				background: rgba(0, 0, 0, 0.2);
				width: 90%;
				color: $color-white;
				border-bottom-left-radius: 12rpx;
				padding-left: 20rpx;
			}

			/*频道列表*/
			.channel-wrap {
				height: 220rpx;
				background-color: #FFF;
				padding: 30rpx 50rpx 0 50rpx;

				.channel-list {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.channel {
						margin-top: 10rpx;
						width: calc(20% - 20rpx);
						height: 132rpx;
						display: flex;
						text-align: center;
						flex-wrap: wrap;

						.icon-wrap {
							width: 100%;
							display: flex;
							justify-content: center;

							.iconimg {
								height: 80rpx;
							}
						}

						.text {
							width: 100%;
							color: #333;
							font-size: 26rpx;
							margin-top: 16rpx;
						}
					}

					//变灰
					// .channel:nth-child(2) .text {
					// 	opacity: 0.5;
					// }
				}
			}

			.channel-wrap-info {}

			/*宠物列表*/
			.pet-wrap {
				margin-top: 20rpx;
				background: $color-white;

				.sticky {
					display: flex;
					align-items: center;

					.sticky-tabs {
						width: 80%;
					}

					.sticky-more {
						width: 20%;
						height: 80rpx;
						line-height: 80rpx;
						color: #999;
						font-size: 28rpx;
						background: #FFF;
						text-align: center;
					}
				}
			}

			/*版权显示*/
			.copyright {
				margin: 10rpx 0;
				width: 100%;
				text-align: center;
				color: #666;

				a {
					display: block;
					color: #666;
					text-decoration: none;
				}
			}
		}
	}
</style>