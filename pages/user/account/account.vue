<template>
	<view class="my-account">
		<!--账户信息面板-->
		<view class="header" :class="'bg-' + themeColor.name">
			<view class="account">
				<view class="assets">
					<view>总资产(元)</view>
					<view class="money">
						{{
							(userInfo && userInfo.account && userInfo.account.user_money) ||
								'0.00'
						}}
					</view>
				</view>
				
				
				<text v-if="isOpenRecharge" @tap="navTo('/pages/user/account/withdrawal')" class="recharge" :class="'text-' + themeColor.name"
					>提现</text
				>
			</view>
			
		</view>
		<!--余额/积分导航-->
		<view class="nav">
			<view
				class="item"
				v-for="item in navList"
				:key="item.title"
				@tap="navTo(item.url)"
			>
				<text class="iconfont" :class="[item.icon, 'text-' + themeColor.name]"></text>
				<text>{{ item.title }}</text>
			</view>
		</view>

		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script>
/**
 * @des 用户账户中心
 *
 * @author stav stavyan@qq.com
 * @date 2020-01-10 15:17
 * @copyright 2019
 */
import { memberInfo } from '@/api/userInfo';

export default {
	data() {
		return {
			userInfo: {},
			loading: true,
			isOpenRecharge: this.$mSettingConfig.isOpenRecharge,
			navList: [
				{
					title: '账单记录',
					icon: 'icondaifukuan',
					url: '/pages/user/account/bill'
				},
				{
					title: '消费记录',
					icon: 'iconzuheduozhongxiaofeifangshizuhexiaofei',
					url: '/pages/user/account/bill?state=3'
				},
			]
		};
	},
	onShow() {
		this.initData();
	},
	methods: {
		// 初始化数据
		initData() {
			this.getMemberInfo();
		},
		// 获取用户信息
		async getMemberInfo() {
			await this.$http
				.get(memberInfo)
				.then(async r => {
					this.loading = false;
					this.userInfo = r.data;
				})
				.catch(() => {
					this.loading = false;
				});
		},
		navTo(route) {
			this.$mRouter.push({ route });
		}
	}
};
</script>
<style scoped lang="scss">
page {
	background-color: $color-white;
}
.my-account {
	background-color: $color-white;
	/*  #ifndef H5  */
	height: 100vh;
	/*  #endif  */
	padding: 32rpx 20rpx;
	width: 100%;
	.header {
		padding: 30rpx;
		height: 320rpx;
		opacity: 0.9;
		border-radius: 20rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: $font-sm;
		position: relative;
		.account {
			width: calc(100% - 60rpx);
			display: flex;
			position: absolute;
			z-index: 2;
			justify-content: space-between;
			.assets {
				.money {
					color: #fff;
					font-size: $font-lg + 10rpx;
					margin: 0;
				}
			}
			.recharge {
				font-size: $font-base;
				width: 150rpx;
				height: 54rpx;
				line-height: 54rpx;
				border-radius: $font-base;
				background-color: #fff9f8;
				text-align: center;
				margin-top: 10rpx;
			}
		}
		.cumulative {
			width: calc(100% - 240rpx);
			position: absolute;
			bottom: 20rpx;
			display: flex;
			justify-content: space-between;
			.money {
				color: #fff;
				font-size: $font-lg + 4rpx;
				margin: 0;
			}
		}
		.header-bg {
			position: absolute;
			width: 100%;
			height: 320rpx;
			z-index: 1;
			top: 0;
			image {
				width: 100%;
				height: 320rpx;
			}
		}
	}
	.nav {
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		.item {
			flex: 1;
			margin: 20rpx;
			font-size: $font-base - 4rpx;
			display: inline-block;
			text-align: center;
			color: #999;
			.iconfont {
				display: block;
				margin: 0 auto;
				font-size: $font-lg + 20rpx;
			}
		}
	}
	.advert {
		display: flex;
		.item {
			flex: 1;
			border-radius: 24rpx;
			padding: 10rpx 0;
			margin: 20rpx 10rpx;
			display: flex;
			justify-content: space-between;
			.iconfont {
				font-size: $font-lg + 20rpx;
				margin-right: 20rpx;
			}
			.text {
				margin-left: 20rpx;
				.name {
					font-size: $font-base;
					font-weight: bold;
					height: 40rpx;
				}
				.desc {
					font-size: $font-sm - 2rpx;
				}
			}
		}
		.on {
			background-color: #fff3f3;
		}
	}
}
</style>
