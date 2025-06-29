<template>
	<div>
		<uni-popup ref="popup" type="bottom" background-color="rgba(0,0,0,0)" @change="onPopupChange">
			<view class="radio">
				<form @submit="onSubmit">
					<div class="header">{{title}}</div>
					<div v-if="options.desc" class="desc">{{options.desc}}</div>
					<div class="content">
						<view v-if="!options.avatarUrl.disable" class="section-line">
							<view class="section-line-title">头像</view>
							<button v-if="userNewUserProfileMethod" class="avatar-wrapper flex-cncc"
								@chooseavatar="tapAvatar" open-type="chooseAvatar">
								<image mode="aspectFit" class="avatar" src="@/static/tab-my.png"></image>
							</button>
							<button v-else class="avatar-wrapper flex-cncc" @click="tapAvatarByOldMethod">
								<image mode="aspectFit" class="avatar" :src="formData.avatarUrl"></image>
							</button>
						</view>
						<view v-if="!options.nickName.disable" class="section-line">
							<view class="section-line-title">昵称</view>
							<input class="section-line-inputText" type="nickname" name="nickName" placeholder="请输入昵称"
								v-model="formData.nickName" maxlength="16"></input>
						</view>
					</div>
				
					<div class="footer">
<!-- 						<button @click="tapCancel">保存</button>
						<button formType="submit" class="btn" hover-class="hover-btn">
							<cui-button class="btn" square plain @click="tapCancel">取消</cui-button>
						</button>
						 -->
						<button formType="submit" class="btn" hover-class="hover-btn" style="display: flex;align-items: center;">
							<cui-button class="btn" square type="primary" style="height: 100%;">保存</cui-button>
						</button>
					</div>
				</form>
				<div :style="{height:paddingBottom}"></div>
				<div class="iphoneX_bottom"></div>
				
			</view>
		</uni-popup>
		<ImageCropper ref="imageCropper"></ImageCropper>

	</div>


</template>

<script>
	// import CosWrap from "@lib/cos/cos_wrap.js";
	import ImageCropper from "./ImageCropper/ImageCropper.vue";
	import UniPopup from "./uni-popup/uni-popup.vue";
		import { uploadImage } from '@/api/userInfo';
	function deepMerge(target, other) {
		const targetToString = Object.prototype.toString.call(target);
		const otherToString = Object.prototype.toString.call(target);
		if (targetToString === "[object Object]" && otherToString === "[object Object]") {
			for (let [key, val] of Object.entries(other)) {
				if (!target[key]) {
					target[key] = val;
				} else {
					target[key] = deepMerge(target[key], val);
				}
			}
		} else if (targetToString === "[object Array]" && otherToString === "[object Array]") {
			for (let [key, val] of Object.entries(other)) {
				if (target[key]) {
					target[key] = deepMerge(target[key], val);
				} else {
					target.push(val);
				}
			}
		}
		return target;
	}
	/**
	 * 判断字符串是否为空
	 */
	function isEmptyStr(str) {
		return str == null || str.trim().length == 0;
	}

	export default {
		name: "UserProfileDialog",
		props: {
			paddingBottom: {
				type: String,
				default: "0rpx"
			},
		},
		components: {
			ImageCropper,
			UniPopup
		},
		data() {
			return {
				title: "111",
				confirmFunc: () => {},
				cancelFunc: () => {},
				cancel: false,
				formData: {
					avatarUrl: null,
					nickName: null
				},
				options: {
					desc: null, //描述
					nickName: {
						requried: true, // 是否必填
						disable: false // 是否隐藏
					},
					avatarUrl: {
						requried: null, // 是否必填
						disable: false // 是否隐藏
					}
				},
				userNewUserProfileMethod: true
			};
		},
		onShow() {
			this.userNewUserProfileMethod = true
		},
		methods: {
			/**
			 * 
			 */
			show(options) {
				if (options) {
					deepMerge(this.options, options);
				}
				let titleEle = [];
				if (!this.options.avatarUrl.disable) {
					titleEle.push("头像")
				}
				if (!this.options.nickName.disable) {
					titleEle.push("昵称")
				}
				this.title = "请输入" + titleEle.join("和");

				this.cancel = false;
				return new Promise((resolve, reject) => {
					this.$refs["popup"].open();
					this.confirmFunc = resolve;
					this.cancelFunc = reject;
				});
			},


			tapAvatar(e) {
				this.$refs["imageCropper"].show({
					w: 128,
					h: 128,
					avatarUrl: e.detail.avatarUrl
				}).then(res => {
					let self = this;
					this.formData.avatarUrl = res.tempFilePath;
					this.userNewUserProfileMethod = false
					console.log('上传头像')
					
					const _this = this;
					const filePath = res.tempFilePath;
					_this.$http
						.upload(uploadImage, {
							filePath,
							name: 'file'
						})
						.then(r => {
							
							console.log(r.data.url)
							//_this.userInfo.head_portrait = r.data.url;
							this.$emit("userData",r.data.url);
						});
					
					
					
					//this.handleUploadFile(this.formData.avatarUrl)
				})
			},

			tapAvatarByOldMethod() {
				uni.chooseImage({
					count: 1,
				}).then(res => {
					console.log(res);

					let tempFilePath = res.tempFilePaths[0];
					this.tapAvatar({
						detail: {
							avatarUrl: tempFilePath
						}
					})
				});
			},

			onSubmit(e) {
				// console.log("!!!!", this.options)
				// 通过微信api获取的昵称，没有进一步修改的情况下只能在form的submit回调中获得成功
				this.formData.nickName = e.detail.value.nickName;

				if (!this.formData.avatarUrl && !this.options.avatarUrl.disable && this.options.avatarUrl.requried) {
					uni.showToast({
						icon: "none",
						title: "请上传头像"
					})
					return;
				}
				// console.log(Util.isEmptyStr(this.formData.nickName), !this.options.nickName.disable, this.options.nickName
				// 	.requried)
				if (isEmptyStr(this.formData.nickName) && !this.options.nickName.disable && this.options.nickName
					.requried) {
					uni.showToast({
						icon: "none",
						title: "请输入昵称"
					})
					return;
				}
				let resultData = Object.assign({}, this.formData);

				this.confirmFunc(resultData);
				this.$refs["popup"].close();
			},

			close() {
				this.$refs["popup"].close();
			},
			tapCancel() {
				this.cancel = true;
				this.$refs["popup"].close();
			},
			onPopupChange(e) {
				if (!e.show) {
					this.cancelFunc(this.cancel ? "cancel" : "close");
				}
			},
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
						console.log(r.data.url)
					});
			},		

		},
	};
</script>

<style lang="scss" scoped>
	.radio{
		height: 40vh;
		background: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 30rpx;
		padding-top: 40rpx;
	}
	.header {
		width: 100%;
		box-sizing: border-box;
		font-size: 30rpx;
		margin-bottom: 5rpx;
		font-weight: 700;
	}

	.desc {
		width: 100%;
		box-sizing: border-box;
font-size: 28rpx;
		color: #666;
		font-weight: 700;
		margin-bottom: 20rpx;
	}

	.content {
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 42rpx;
	}

	.footer {
		width: 100%;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;

		.btn {
			width: 100%;
			border-radius: 45rpx;
		}

	}


	.section-line {
		position: relative;
		display: flex;
		justify-content: flex-start;
		text-align: left;
		width: 100%;
		padding: 0;
		align-items: center;
		background-color: white;
	}


	.section-line-title {
		font-size: 31rpx;
		width: 100rpx;
		margin-right: 20rpx;
	}

	.section-line-inputText {
		font-size: 32rpx;
		height: 118rpx;
		text-align: left;
		line-height: 118rpx;
	}

	.section-line:nth-child(n+2)::after {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		width: 714rpx;
		height: 2rpx !important;
		background-color: #f5f5f5;
	}

	.avatar-wrapper {
		padding: 8rpx 0rpx;
	}

	.avatar {
		width: 80rpx;
		height: 80rpx;
		margin-left: 10rpx;
		box-sizing: border-box;
		border-radius: 40rpx;
		overflow: hidden;
	}

	button {
		padding: unset;
		background-color: transparent;
		border-radius: 0;
		border: none;
		box-sizing: unset;
		margin: unset;
		line-height: normal;
	}

	button::after {
		border: none;
		border-style: none;
		border-width: 0;
		border-radius: 0;
	}

	button text {
		line-height: 1;
	}

	.iphoneX_bottom {
		height: env(safe-area-inset-bottom);
	}

	.flex-cncc {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>