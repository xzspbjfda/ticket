<template>
	<view class="set">
		<view
			class="list-cell b-b"
			:class="{ 'm-t': item.class === 'mT' }"
			v-for="item in setList"
			:key="item.title"
			@tap="navTo(item.url)"
			hover-class="cell-hover"
			:hover-stay-time="50"
		>
			<text class="cell-tit">{{ item.title }}</text>
			<text class="cell-tip">{{ item.content }}</text>
			<text class="cell-more iconfont iconyou"></text>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch :checked="notifyChecked" :color="themeColor.color" @change="switchChange" />
		</view>
		<!-- #endif -->
		<view class="cu-list menu sm-border card-menu" v-if="styleUserIsOpen">
			<view class="cu-item">
				<view class="content flex align-center">
					<text
						class="cuIcon-colorlens"
						:class="'text-' + themeColor.name"
					></text>
					<view
						class="padding solid radius shadow-blur"
						:class="'bg-' + themeColor.name"
					></view>
					<view class="title"
					>主题色：<text :class="'text-' + themeColor.name">{{
							themeColor.title
						}}</text></view
					>
				</view>
				<view class="action">
					<button
						class="cu-btn round shadow"
						@click="showColorModal"
						:class="'bg-' + themeColor.name"
					>
						<text class="cuIcon-colorlens"></text> 选择主题
					</button>
				</view>
			</view>
		</view>
		<view
			class="list-cell log-out-btn"
			:class="'text-' + themeColor.name"
			@tap="toLogout"
		>
			<text class="cell-tit">退出登录</text>
		</view>
		<!--版本更新-->
		<!-- #ifdef APP-PLUS -->
		<rf-version-upgrade
			:isTipsShow="isTipsShow"
			@tip="handleTip"
			@close="handleVersionUpgradeShow"
			:isShow="isVersionUpgradeShow"
			:isIos="isIosShow"
		></rf-version-upgrade>
		<!-- #endif -->
		<!-- modal -->
		<!-- 选择颜色模态框 -->
		<view class="cu-modal" :class="{ show: colorModal }">
			<view class="cu-dialog">
				<view class="cu-bar justify-end solid-bottom">
					<view class="content">选择颜色</view>
					<view class="action" @tap="colorModal = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="grid col-5 padding">
					<view
						class="padding-xs"
						v-for="(item, index) in themeList"
						:key="index"
						@tap="SetColor(item)"
						:data-color="item.name"
					>
						<view class="padding-tb radius" :class="'bg-' + item.name">
							{{ item.title }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import { logout } from '@/api/login';
import rfVersionUpgrade from '@/components/rf-version-upgrade';
import {
	notifySubscriptionConfigIndex,
	notifySubscriptionConfigUpConfig
} from '@/api/userInfo';
import { versionsIndex, versionsView } from '@/api/basic';
export default {
	components: { rfVersionUpgrade },
	data() {
		return {
			isIosShow: false,
			isVersionUpgradeShow: false,
			loadProgress: 0,
			CustomBar: this.CustomBar,
			user: {},
			isTipsShow: false,
			setList: this.$mConstDataConfig.setList,
			styleUserIsOpen: this.$mSettingConfig.styleUserIsOpen,
			notifyChecked: false,
			isNewVersion: false,
			colorModal: false,
			themeList: this.$mConstDataConfig.themeList
		};
	},
	onLoad() {
		this.initData();
		// #ifdef APP-PLUS
		if (uni.getSystemInfoSync().platform === 'ios') {
			this.CustomBar = 0;
		}
		// #endif
	},
	methods: {
		handleTip(isNewVersion) {
			console.log('isNewVersion', isNewVersion);
			this.isNewVersion = isNewVersion;
		},
		handleVersionUpgradeShow() {
			this.isVersionUpgradeShow = false;
		},
		// 初始化数据
		initData() {
			this.user = uni.getStorageSync('user');
			// 缓存大小
			this.setList[5].content = `${uni.getStorageInfoSync().currentSize} kb`;
			// #ifdef APP-PLUS
			// eslint-disable-next-line
			this.setList[7].content = `当前版本 ${plus.runtime.version}`;
			this.getNotifySubscriptionConfigIndex();
			// #endif
		},
		// 获取消息提醒配置
		async getNotifySubscriptionConfigIndex() {
			await this.$http.get(notifySubscriptionConfigIndex).then(r => {
				this.notifyChecked = r.data.all;
			});
		},
		// 通用跳转
		navTo(route) {
			if (!route) return;
			if (route === 'clearCache') {
				uni.showModal({
					content: '确定要清除缓存吗',
					success: e => {
						if (e.confirm) {
							uni.clearStorageSync();
							this.setList[5].content = '0 kb';
							this.$mStore.commit('login', this.user);
							this.$mHelper.toast('清除缓存成功');
						}
					}
				});
				return;
			} else if (route === 'versionUpgrade') {
				this.isVersionUpgradeShow = true;
				this.isTipsShow = true;
				if (this.isNewVersion) {
					this.$mHelper.toast('已经是最新版本');
				}
				if (uni.getSystemInfoSync().platform.toLowerCase() === 'ios') {
					// eslint-disable-next-line
					this.getVersionsInfo(plus.runtime.version);
				}
				return;
			}
			this.$mRouter.push({ route });
		},
		/* 版本比较是否需要更新 */
		async getVersionsInfo(version) {
			const _this = this;
			await this.$http
				.get(`${versionsIndex}`, { type: 2, version, cate_name: 'TinyShop' })
				.then(r => {
					if (!r.data) {
						this.$mHelper.toast('已经是最新版本');
						return;
					}
					uni.showModal({
						content: `发现新版本 [${r.data.version}], 是否跳转至App Store更新?`,
						success: confirmRes => {
							if (confirmRes.confirm) {
								_this.getVersionsView(r.data.id);
								console.log(r.data);
								// eslint-disable-next-line
								plus.runtime.launchApplication({
									action: `itms-apps://itunes.apple.com/cn/app/id${r.data.url}?mt=8`
								}, function(e) {
									this.$mHelper.log('Open system default browser failed: ' + e.message);
								});
							} else {
								this.isShow = false;
							}
						}
					});
				});
		},
		// 增加下载记录
		async getVersionsView(id) {
			await this.$http
				.get(`${versionsView}`, { id });
		},
		// 退出登录
		toLogout() {
			uni.showModal({
				content: '确定要退出登录么',
				success: e => {
					if (e.confirm) {
						this.$http.post(`${logout}`).then(() => {
							this.$mStore.commit('logout');
							uni.reLaunch({
								url: '/pages/profile/profile'
							});
						});
					}
				}
			});
		},
		// 监听消息推送是否打开
		async switchChange(e) {
			await this.$http
				.post(notifySubscriptionConfigUpConfig, { all: e.detail.value ? 1 : 0 })
				.then(() => {
					this.$mHelper.toast(`${e.detail.value ? '打开' : '关闭'}消息推送`);
				});
		},
		showColorModal() {
			this.colorModal = true;
		},
		SetColor(item) {
			this.colorModal = false;
			this.themeColor = item;
			console.log(item)
			this.$mStore.commit('setThemeColor', item);
		}
	}
};
</script>
<style lang="scss">
page {
	background: $page-color-base;
}
.set {
	padding: $spacing-base 0;
}
.cu-list.card-menu {
	margin: $spacing-base 0;
	.title {
		margin-left: $spacing-base;
	}
}
</style>
