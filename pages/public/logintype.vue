<template>
	
	<view class="login-wrapper" style="text-align: center;">
		
		<image class="bg" :src="xxlist[0].cover"></image>
		<view class="content" style="text-align: center;">
			<!-- #ifdef MP-WEIXIN -->
			<button class="handler regin" open-type="getPhoneNumber" shape="circle" :disabled="btnLoading"
				:loading="btnLoading" ripple @getphonenumber="decryptPhoneNumber">
				<image style="width: 40rpx; height: 40rpx"></image>
				<text class="login-text">快捷一键登录</text>

			</button>
			<!-- #endif -->
			<view class="handler" @click="navTo('/pages/public/login')">

				<text class="login-text">已有账号登录</text>
			</view>
			<view class="handler"
				@click="navTo(styleLoginType === 'one' ? `/pages/public/register` : `/pages/public/login?type=1`)">

				<text class="login-text">立即注册</text>
			</view>

			<rf-protocol-popup ref="mapState" @popupState="popupState"
				protocolPath="/pages/set/about/detail?field=protocol_register&title=注册协议"
				policyPath="/pages/set/about/detail?field=protocol_privacy&title=隐私协议"
				v-if="isRfProtocolPopupShow"></rf-protocol-popup>




			<view class="look-wrapper">
				<text @tap="handleRfProtocolPopupShow" class="cuIcon"
					:class="appAgreementDefaultSelect ? `cuIcon-radiobox` : 'cuIcon-round'"></text>

				<text style="margin-left: 10rpx" @tap="handleRfProtocolPopupShow">我已仔细阅读并同意《{{ appName }}协议》</text>



			</view>
		</view>
	  <view>
	  <!-- #ifdef MP-WEIXIN -->
	  <ws-wx-privacy id="privacy-popup"></ws-wx-privacy>
	  <!-- #endif -->
	  </view>
		<rfLoading isFullScreen :active="loading"></rfLoading>
		
	</view>
</template>












<script>
/**
 * @des 登录类型
 *
 * @author stav stavyan@qq.com
 * @date 2020-01-13 12:02
 * @copyright 2019
 */
import {
	mpWechatLogin,
	wechatH5Login,
	thirdPartyWechatOpenPlatform,
	thirdPartyApple
} from '@/api/login';
import {
	indexlistad
} from '@/api/Hotel.js';
import rfProtocolPopup from '@/components/rf-protocol-popup';
import wsWxPrivacy from '@/components/ws-wx-privacy/ws-wx-privacy.vue';
export default {
	components: {
		wsWxPrivacy,
		rfProtocolPopup
	},
	data() {
		return {
			isShow: false,
			imageURL: this.$mConfig.basePath + '/login.png',
			canIUseGetUserProfile: false,
			loading: false,
			btnLoading: false,
			isRfProtocolPopupShow: false, // 控制协议popup显示
			appAgreementDefaultSelect: this.$mSettingConfig.appAgreementDefaultSelect, // 是否允许点击登录按钮
			isAuthLoginShow: false,
			isIosAuthLoginShow: false,
			logo: this.$mSettingConfig.appLogo,
			appName: this.$mSettingConfig.appName,
			promoCodeParams: {},
			styleLoginType: this.$mSettingConfig.styleLoginType,
			wechat: this.$mAssetsPath.wechat,
			apple: this.$mAssetsPath.apple,
			closeThirdPartyLogin: this.$mSettingConfig.closeThirdPartyLogin,
			loginTypeList: [{
				text: '微信',
				icon: 'iconweixin'
			}],
			phonenumbercode: '',
			xxlist: []
		};
	},
	onShow() {
		this.getbanner3()
		this.btnLoading = false;
		if (uni.getStorageSync('accessToken')) {
			this.$mRouter.reLaunch({
				route: '/pages/index/index'
			});
		}
	},
	onLoad(options) {
		
		//判断是否支持新接口
		if (wx.getUserProfile) {
			this.canIUseGetUserProfile = true;
		}

		this.$mStore.commit('logout');
		/*  #ifdef H5  */
		if (this.$mPayment.isWechat()) {
			this.isAuthLoginShow = true;
		}
		/*  #endif  */
		/*  #ifndef H5 */
		this.isAuthLoginShow = true;
		/*  #endif  */
		/*  #ifdef APP-PLUS */
		// console.log(uni.getSystemInfoSync().system > 13);
		if (uni.getSystemInfoSync().platform === 'ios') {
			this.isIosAuthLoginShow = true;
		}
		/*  #endif  */
		// 用户多次点击授权登录会生成多个code 去最后一个code
		this.code = options.code && options.code.split(',')[options.code.split(',').length - 1];
		// 如果不是第一次进来 就不需要强制阅读协议
		this.appAgreementDefaultSelect = false;
		const backUrl = uni.getStorageSync('backToPage');
		if (backUrl.indexOf('promo_code') !== -1) {
			this.promoCodeParams.promo_code = JSON.parse(backUrl)['query']['promo_code'];
		} else if (options.promo_code) {
			uni.setStorageSync('promoCode', options.promo_code);
			this.promoCodeParams.promo_code = options.promo_code;
		} else {
			this.promoCodeParams.promo_code = uni.getStorageSync('promoCode');
		}
		const _this = this;
		if (this.code) {
			this.btnLoading = true;
			this.loading = true;
			this.$http
				.get(wechatH5Login, {
					code: this.code,
					..._this.promoCodeParams
				})
				.then(async r => {
					if (!r.data.login) {
						this.user_info = r.data.user_info.original;
						uni.showModal({
							content: '您尚未绑定账号，是否跳转登录页面1？',
							success: confirmRes => {
								if (confirmRes.confirm) {
									uni.setStorageSync(
										'wechatUserInfo',
										JSON.stringify(_this.user_info)
									);
									_this.$mRouter.push({
										route: '/pages/public/login'
									});
								} else {
									this.btnLoading = false;
									this.loading = false;
								}
							}
						});
					} else {
						await this.$mStore.commit('login', r.data.user_info);
						await this.$mWebsocket.initWebsocket();
						const backToPage = uni.getStorageSync('backToPage');
						if (backToPage) {
							if (
								backToPage.indexOf('/pages/profile/profile') !== -1 ||
								//backToPage.indexOf('/pages/cart/cart') !== -1 ||
								backToPage.indexOf('/pages/index/index') !== -1 ||
								//backToPage.indexOf('/pages/notify/notify') !== -1 ||
								//backToPage.indexOf('/pages/category/category') !== -1 ||
								backToPage.indexOf('/pages/pages/adopt/list') !== -1 ||
								backToPage.indexOf('/pages/pet/my-notify') !== -1 ||
								backToPage.indexOf('/pages/pet/forum') !== -1
							) {
								this.$mRouter.reLaunch(JSON.parse(backToPage));
							} else {
								this.$mRouter.redirectTo(JSON.parse(backToPage));
							}
							uni.removeStorageSync('backToPage');
							uni.removeStorageSync('wechatUserInfo');
						} else {
							this.$mRouter.reLaunch({
								route: '/pages/profile/profile'
							});
						}
					}
				}).catch(() => {
					this.btnLoading = false;
					this.loading = false;
				});
		}
	},
	computed: {
		customStyle() {
			return {
				background: this.themeColor.color,
				color: '#FFF',
				borderColor: this.themeColor.color
			}
		},
		customStyle02() {
			return {
				color: this.themeColor.color,
				borderColor: this.themeColor.color
			}
		}
	},
	methods: {

		getbanner3() {
			var form = {
				ad_type: 11
			}


			this.$http.post(`${indexlistad}`, form).then(r => {
				console.log(r)
				this.xxlist = r.data.list
			}).catch(() => {

			});
		},
		toPage(val) {
			uni.navigateTo({
				url: val,
			});
		},
		choose() {
			this.isShow = !this.isShow;
		},
		decryptPhoneNumber(e) {
			// if (!this.appAgreementDefaultSelect) {
			// 	this.$mHelper.toast('请阅读并同意协议,才能进行下一步哦', 1.5 * 1000);
			// 	this.btnLoading = false;
			// 	return;
			// }

			this.phonenumbercode = e.detail.code;
			let params = {};


			let authApi = mpWechatLogin;

			const _this = this;
			uni.login({
				provider: 'weixin',
				success(loginRes) {
					uni.getUserInfo({
						provider: 'weixin',
						success(infoRes) {
							params = {
								...infoRes,
								...params
							};
							params.code = loginRes.code;
							params.phonenumbercode = e.detail.code;

							_this.thirdPartyAuthLogin(authApi, params);
						},
						fail() {
							_this.btnLoading = false;
						}
					});

				},
				fail() {
					_this.btnLoading = false;
					_this.$mHelper.log('暂不支持小程序登录');
				}
			});





		},


		// 通用跳转
		navTo(route) {
			if (!this.appAgreementDefaultSelect) {
				this.$mHelper.toast('请阅读并同意协议,才能进行下一步哦', 1.5 * 1000);
				return;
			}
			this.$mRouter.redirectTo({
				route
			});
		},
		// 显示协议popup
		handleRfProtocolPopupShow() {
			this.isRfProtocolPopupShow = true;
		},
		// 监听是否同意协议
		popupState(e) {
			if (e) {
				this.appAgreementDefaultSelect = true;
				uni.setStorageSync('notFirstTimeLogin', true);
				this.isRfProtocolPopupShow = false;
			} else {
				this.appAgreementDefaultSelect = false;
				this.isRfProtocolPopupShow = false;
			}
		},
		// 授权登录
		toAuthLogin() {
			this.btnLoading = true;
			if (!this.appAgreementDefaultSelect) {
				this.$mHelper.toast('请阅读并同意协议,才能进行下一步哦', 1.5 * 1000);
				this.btnLoading = false;
				return;
			}
			const _this = this;
			/*  #ifdef H5  */
			if (this.$mPayment.isWechat()) {
				const href = window.location.href;
				window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?
														appid=${this.$mConfig.weixinAppId}&
														redirect_uri=${href}&
														response_type=code&
														scope=snsapi_userinfo&
														state=STATE#wechat_redirect`;
			} else {
				this.$mHelper.toast('当前平台不支持授权登录');
			}
			/*  #endif  */
			let authApi;
			// #ifdef APP-PLUS
			// eslint-disable-next-line
			plus.oauth.getServices(function (services) {
				let weixinService;
				if (services && services.length) {
					for (let i = 0, len = services.length; i < len; i++) {
						if (services[i].id === 'weixin') {
							weixinService = services[i];
							break;
						}
					}
					if (!weixinService) {
						_this.$mHelper.toast('没有微信登录授权服务');
						return;
					}
					let group = 'maiKeIos';
					if (uni.getSystemInfoSync().platform === 'android') {
						group = 'maiKeAndroid';
					}
					weixinService.authorize(e => {
						authApi =
							`${thirdPartyWechatOpenPlatform}?code=${e.code || ''}&group=${group}&promo_code=${_this.promoCodeParams.promo_code || ''}`;
						_this.thirdPartyAuthLogin(authApi);
					}, function (err) {
						// 授权失败 error
						_this.btnLoading = false;
						_this.$mHelper.toast(err.message.split(',')[0]);
					});
				}
			}, function () {
				// 获取 services 失败
				_this.btnLoading = false;
			});
			// #endif
			/*  #ifdef MP-WEIXIN */
			let params = {};

			params.promoCodeParams = this.promoCodeParams;
			authApi = mpWechatLogin;

			if (this.canIUseGetUserProfile) {


				uni.login({
					provider: 'weixin',
					success(loginRes) {

						console.log(1112221)
						params.code = loginRes.code;
					}
				});

				uni.getUserProfile({
					desc: '用于完善基本信息',
					success(infoRes) {
						params = {
							...infoRes,
							...params
						};
						params.phonenumbercode = 2;
						console.log(1112223)
						_this.thirdPartyAuthLogin(authApi, params);
					},
					fail(fail) {
						console.log(1112261)
						_this.btnLoading = false;
					}
				});
			}

			if (!_this.canIUseGetUserProfile) {
				console.log(1111)
				uni.login({
					provider: 'weixin',
					success(loginRes) {
						uni.getUserInfo({
							provider: 'weixin',
							success(infoRes) {
								params = {
									...infoRes,
									...params
								};
								params.code = loginRes.code;


								_this.thirdPartyAuthLogin(authApi, params);
							},
							fail() {
								_this.btnLoading = false;
							}
						});
					},
					fail() {
						_this.btnLoading = false;
						_this.$mHelper.log('暂不支持小程序登录');
					}
				});
			}
			/*  #endif  */
		},
		thirdPartyAuthLogin(authApi, params = {}) {
			const _this = this;
			_this.$http.post(authApi, params).then(async r => {
				_this.btnLoading = false;

				if (!r.data.login) {
					_this.user_info = r.data.user_info;
					uni.showModal({
						content: '您尚未绑定账号，是否跳转登录页面2？',
						success: confirmRes => {
							if (confirmRes.confirm) {

								console.log(_this.user_info);

								uni.setStorageSync(
									'wechatUserInfo',
									JSON.stringify(_this.user_info)
								);
								_this.$mRouter.push({
									route: '/pages/public/login'
								});
							}
						}
					});
				} else {
					await _this.$mStore.commit('login', r.data.user_info);
					_this.$mHelper.toast('已为您授权登录');
					_this.$mWebsocket.initWebsocket();
					const backToPage = uni.getStorageSync('backToPage');
					if (backToPage) {
						if (
							backToPage.indexOf('/pages/profile/profile') !== -1 ||
							//backToPage.indexOf('/pages/cart/cart') !== -1 ||
							backToPage.indexOf('/pages/index/index') !== -1 ||
							//backToPage.indexOf('/pages/notify/notify') !== -1 ||
							//backToPage.indexOf('/pages/category/category') !== -1 ||
							backToPage.indexOf('/pages/adopt/list') !== -1 ||
							backToPage.indexOf('/pages/pet/my-notify') !== -1 ||
							backToPage.indexOf('/pages/pet/forum') !== -1
						) {
							_this.$mRouter.reLaunch(JSON.parse(backToPage));
						} else {
							_this.$mRouter.redirectTo(JSON.parse(backToPage));
						}
						uni.removeStorageSync('backToPage');
						uni.removeStorageSync('wechatUserInfo');
					} else {
						_this.$mRouter.reLaunch({
							route: '/pages/profile/profile'
						});
					}
				}
			}).catch(() => {
				_this.btnLoading = false;
			});
		},
		// 苹果授权登录
		toIosAuthLogin() {
			this.btnLoading = true;
			if (!this.appAgreementDefaultSelect) {
				this.$mHelper.toast('请阅读并同意协议,才能进行下一步哦', 1.5 * 1000);
				this.btnLoading = false;
				return;
			}
			const _this = this;
			// eslint-disable-next-line
			plus.oauth.getServices(function (services) {
				let appleService;
				if (services && services.length) {
					for (let i = 0, len = services.length; i < len; i++) {
						if (services[i].id === 'apple') {
							appleService = services[i];
							break;
						}
					}
					if (!appleService) {
						_this.btnLoading = false;
						_this.$mHelper.toast('没有苹果登录授权服务');
						return;
					}
					appleService.login(e => {
						_this.$http
							.post(thirdPartyApple, {
								...e.target.appleInfo,
								..._this.promoCodeParams
							})
							.then(async r => {
								_this.btnLoading = false;
								if (!r.data.login) {
									_this.user_info = r.data.user_info;
									uni.showModal({
										content: '您尚未绑定账号，是否跳转登录页面3？',
										success: confirmRes => {
											if (confirmRes.confirm) {
												uni.setStorageSync(
													'wechatUserInfo',
													JSON.stringify(_this
														.user_info)
												);
												uni.setStorageSync('oauthClient',
													'iOS');
												_this.$mRouter.push({
													route: '/pages/public/login'
												});
											}
										}
									});
								} else {
									await _this.$mStore.commit('login', r.data.user_info);
									_this.$mHelper.toast('已为您授权登录');
									_this.$mWebsocket.initWebsocket();
									const backToPage = uni.getStorageSync('backToPage');
									if (backToPage) {
										if (
											backToPage.indexOf('/pages/profile/profile') !== -
											1 ||
											//backToPage.indexOf('/pages/cart/cart') !== -1 ||
											backToPage.indexOf('/pages/index/index') !== -1 ||
											//backToPage.indexOf('/pages/notify/notify') !== -1 ||
											//backToPage.indexOf('/pages/category/category') !== -1 ||
											backToPage.indexOf('/pages/adopt/list') !== -1 ||
											backToPage.indexOf('/pages/pet/my-notify') !== -
											1 ||
											backToPage.indexOf('/pages/pet/forum') !== -1
										) {
											_this.$mRouter.reLaunch(JSON.parse(backToPage));
										} else {
											_this.$mRouter.redirectTo(JSON.parse(backToPage));
										}
										uni.removeStorageSync('backToPage');
										uni.removeStorageSync('wechatUserInfo');
									} else {
										_this.$mRouter.reLaunch({
											route: '/pages/profile/profile'
										});
									}
								}
							}).catch(() => {
								_this.btnLoading = false;
							});
					}, function () {
						// 获取 services 失败
						_this.btnLoading = false;
					});
				}
			}, function () {
				// 获取 services 失败
				_this.btnLoading = false;
			});
			// uni.login({
			// 	provider: 'apple',
			// 	success: function() {
			// 		uni.getUserInfo({
			// 			provider: 'apple',
			// 			success: function(infoRes) {
			// 			},
			// 			fail: function() {
			// 				_this.btnLoading = false;
			// 			}
			// 		});
			// 	},
			// 	fail: function(err) {
			// 		_this.btnLoading = false;
			// 		_this.$mHelper.log(err);
			// 	}
			// });
		}
	}
};
</script>
<style lang="scss">
button::after {
	border: none
}

.login-wrapper {
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 1;
	object-fit: cover;
}

.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: auto;
	margin-bottom: 360rpx;
	z-index: 99;
}

.header {
	width: 100%;
	margin-top: 80rpx;
	margin-left: 80rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: rgba(0, 0, 0, 0.5);
	font-weight: bold;
	z-index: 99;
}

.handler {
	background-color: #eefcfe;
	color: #292049;
	font-weight: bold;
	width: 60%;
	height: 100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50rpx;
	margin-top: 40rpx;
}

.login-text {
	margin-left: 10rpx;
}

.look-wrapper {
	color: #292049;
	display: flex;
	align-items: center;
	font-size: 25rpx;
	font-weight: bold;
	margin: 60rpx 0;
}

.info {
	color: #391891 !important;
}

page {
	background: #fff;
	height: calc(100% - 88rpx);
}

.login-type {
	padding-top: 80rpx;

	.logo {
		text-align: center;
		margin-bottom: 80rpx;

		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: 28rpx;
		}
	}

	.login-wrap {
		padding: 0 50rpx;
		text-align: center;
	}

	.confirm-btn {
		//width: 84%;
		margin: 0 7% 50rpx;
		height: 84rpx;
		line-height: 84rpx;
		font-size: $font-lg;
		border: 1rpx solid;
	}

	.confirm-btn-bg {
		background: none;
	}

	.footer {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 40rpx;
		font-size: $font-sm + 2rpx;

		.protocol {
			color: $base-color;
			margin: 0 10rpx;
		}

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			margin-bottom: $spacing-base;
			font-size: $font-base + 2rpx;
			color: $font-color-base;
			position: relative;

			text {
				padding: 0 $spacing-lg;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300rpx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}

		.login-type-list {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.login-type-btn {
				border: none;
				background: none;
				padding: 0 20rpx;
				margin: 0;

				.image {
					width: 64rpx;
					height: 64rpx;
				}

				&:after {
					border: none;
				}
			}

			.iconfont {
				font-size: 50rpx;
				color: $font-color-base;
			}
		}
	}
}
</style>