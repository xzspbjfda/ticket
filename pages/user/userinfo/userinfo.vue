<template>
	<view class="userinfo">
		<!--头像 + 背景-->
		<view class="user-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="userBg"></image>
			<!--#ifdef H5-->
			<!--h5直接上传头像-->
			<view class="portrait-box" @tap="uploadImage">
				<image
					class="portrait"
					:src="profileInfo.head_portrait || headImg"
				></image>
			</view>
			<!-- #endif -->
			<!--#ifndef H5-->
			<!--非h5裁剪头像上传-->
			<view class="portrait-box">
				<avatar
					canRotate="false"
					selWidth="200px"
					selHeight="400rpx"
					@upload="handleUploadFile"
					:avatarSrc="profileInfo.head_portrait || headImg"
					avatarStyle="width: 200rpx; height: 200rpx; border-radius: 100%; border: 6rpx solid #fff;"
				>
				</avatar>
			</view>
			<!-- #endif -->
		</view>
		<view class="input-content">
			<!-- <view class="input-item">
				<text class="tit">昵　称</text>
				<input
					type="text"
					v-model="profileInfo.nickname"
					placeholder="请输入您的昵称"
				/>
			</view> -->
			<view class="input-item">
				<text class="tit">姓　名</text>
				<input
					type="text"
					v-model="profileInfo.realname"
					placeholder="请输入您的姓名"
				/>
			</view>
			<view class="input-item">
				<text class="tit">性　别</text>
				<radio-group @change="handleGenderChange">
					<label
						class="gender-item"
						v-for="(item, index) in genders"
						:key="index"
					>
						<radio
							class="gender-item-radio"
							:color="themeColor.color"
							:value="item.value"
							:checked="item.value === profileInfo.gender"
						/>
						<text class="gender-item-text">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		<view class="input-item">
			<text class="tit">手机号</text>
				<input
					type="number"
					v-model="profileInfo.mobile"
					disabled
					placeholder="请输入手机号码"
				/>
			</view>

			<!-- <view class="input-item">
				<text class="tit">Q　Q</text>
				<input
					type="number"
					v-model="profileInfo.qq"
					placeholder="请输入您的QQ"
				/>
			</view>
			<view class="input-item">
				<text class="tit">邮　箱</text>
				<input v-model="profileInfo.email" placeholder="请输入您的邮箱" />
			</view> -->
			<view class="input-item">
				<text class="tit">所属单位</text>
				<input
					type="text"
					v-model="profileInfo.posts"
					placeholder="请输入您的所属单位"
				/>
			</view>
			<view class="input-item">
				<text class="tit">所属部门</text>
				<input
					type="text"
					v-model="profileInfo.department"
					placeholder="请输入您的所属部门"
				/>
			</view>
			<view class="input-item">
				<text class="tit">身份证</text>
				<input
					type="text"
					v-model="profileInfo.id_card"
					placeholder="请输入您的所属部门"
				/>
			</view>
			
			<button
				class="confirm-btn"
				:class="'bg-' + themeColor.name"
				:disabled="btnLoading"
				:loading="btnLoading"
				@tap="toUpdateInfo"
			>
				修改资料
			</button>
		</view>

		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>

		<!--进度条加载-->
		<rf-load-progress
			:height="CustomBar"
			:progress="loadProgress"
		></rf-load-progress>
	</view>
</template>

<script>
/**
 * @des 修改用户信息
 *
 * @author stav stavyan@qq.com
 * @date 2020-01-10 14:28
 * @copyright 2019
 */
import { memberInfo, memberUpdate, uploadImage } from '@/api/userInfo';
import avatar from '@/components/rf-avatar/rf-avatar';
import moment from '@/common/moment';

export default {
	components: { avatar },
	data() {
		return {
			loadProgress: 0,
			CustomBar: this.CustomBar,
			profileInfo: {},
			reqBody: {},
			genders: [
				{
					value: '0',
					name: '保密'
				},
				{
					value: '1',
					name: '男'
				},
				{
					value: '2',
					name: '女'
				}
			],
			date: moment().format('YYYY-MM-DD'),
			token: null,
			loading: true,
			headImg: this.$mAssetsPath.headImg,
			userBg: this.$mAssetsPath.userBg,
			btnLoading: false
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 上传头像
		uploadImage() {
			// 从相册选择图片
			const _this = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function(res) {
					_this.handleUploadFile(res.tempFilePaths);
				}
			});
		},
		// 上传头像
		handleUploadFile(data) {
			const _this = this;
			const filePath = data.path || data[0];
			_this.$http
				.upload(uploadImage, {
					filePath,
					name: 'file'
				})
				.then(r => {
					_this.profileInfo.head_portrait = r.data.url;
					_this.handleUpdateInfo(_this.profileInfo);
				});
		},
		// 监听日期更改
		bindDateChange(e) {
			this.date = e.target.value;
		},
		// 监听性别更改
		handleGenderChange(e) {
			this.profileInfo.gender = e.detail.value;
		},
		// 数据初始化
		initData() {
			this.token = uni.getStorageSync('accessToken') || undefined;
			this.getMemberInfo();
		},
		// 获取用户信息
		async getMemberInfo() {
			await this.$http
				.get(memberInfo)
				.then(r => {
					this.loading = false;
					this.profileInfo = r.data;
					this.date = this.profileInfo.birthday;
				})
				.catch(() => {
					this.loading = false;
				});
		},
		// 更新用户信息
		async toUpdateInfo() {
			await this.handleUpdateInfo();
		},
		// 更新用户信息
		async handleUpdateInfo() {
			if(this.profileInfo.realname == ''||this.profileInfo.realname == undefined){
				uni.showToast({
					title: '请填写姓名',
					icon: 'none', //如果要纯文本，不要icon，将值设为'none'
					duration: 500 //持续时间为 2秒
				})
				return
			}
			if(this.profileInfo.mobile == ''||this.profileInfo.mobile == undefined){
				uni.showToast({
					title: '请填写号码',
					icon: 'none', //如果要纯文本，不要icon，将值设为'none'
					duration: 500 //持续时间为 2秒
				})
				return
			}
			if(this.profileInfo.posts == ''||this.profileInfo.posts == undefined){
				uni.showToast({
					title: '请填写单位',
					icon: 'none', //如果要纯文本，不要icon，将值设为'none'
					duration: 500 //持续时间为 2秒
				})
				return
			}
			if(this.profileInfo.department == ''||this.profileInfo.department == undefined){
				uni.showToast({
					title: '请填写所属部门',
					icon: 'none', //如果要纯文本，不要icon，将值设为'none'
					duration: 500 //持续时间为 2秒
				})
				return
			}
			if(this.profileInfo.id_card == ''||this.profileInfo.id_card == undefined){
				uni.showToast({
					title: '请填写身份证',
					icon: 'none', //如果要纯文本，不要icon，将值设为'none'
					duration: 500 //持续时间为 2秒
				})
				return
			}
			this.btnLoading = true;
			this.reqBody = this.profileInfo;

			await this.$http
				.post(`${memberUpdate}`, {
					...this.profileInfo,
					id:this.profileInfo.id,
					birthday: this.date
				})
				.then(() => {
					this.loadProgress = 0;
					this.$mHelper.toast('恭喜您, 资料修改成功!');
					setTimeout(() => {
						this.$mRouter.back();
					}, 1 * 1000);
				})
				.catch(() => {
					this.btnLoading = false;
				});
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: $color-white;
}

.userinfo {
	.user-section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 320rpx;
		padding: 40rpx 30rpx 0;
		overflow: hidden;
		position: relative;
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			opacity: 0.84;
		}

		.portrait-box {
			clear: both;
			z-index: 2;
		}

		.portrait {
			position: relative;
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			border: 6rpx solid #fff;
		}

		.yticon {
			position: absolute;
			line-height: 1;
			z-index: 5;
			font-size: 48rpx;
			color: #fff;
			padding: 4rpx 6rpx;
			border-radius: 6rpx;
			background: rgba(0, 0, 0, 0.4);
		}

		.pt-upload-btn {
			right: 0;
			bottom: 10rpx;
		}

		.bg-upload-btn {
			right: 20rpx;
			bottom: 16rpx;
		}
	}

	.input-content {
		padding: 40rpx 60rpx;

		.input-item {
			display: flex;
			padding: 0 30rpx;
			background: $page-color-light;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 4px;
			margin-bottom: 30rpx;

			&:last-child {
				margin-bottom: 0;
			}

			.tit {
				width: 150rpx;
				font-size: $font-sm + 2rpx;
				color: $font-color-base;
			}

			input {
				width: calc(100% - 100rpx);
				height: 80rpx;
				line-height: 80rpx;
				font-size: $font-base + 2rpx;
				color: $font-color-dark;
			}

			.date {
				height: 80rpx;
				line-height: 80rpx;
				font-size: $font-base + 2rpx;
				color: $font-color-dark;
			}

			.gender-item {
				margin-right: 20rpx;

				.gender-item-text {
					padding-left: 10rpx;
				}

				radio .wx-radio-input.wx-radio-input-checked {
					background: $uni-color-primary;
					border-color: $uni-color-primary;
				}
			}
		}
	}
}
</style>
