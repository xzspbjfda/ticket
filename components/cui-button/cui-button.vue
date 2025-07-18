<template>
	<button class="com-btn" :class="[getClass(type, plain, disabled)]" hover-class="hover" :disabled="disabled" :style="{
			width: getWidthStyle,
			height: getHeightStyle,
			fontSize: getFontSize + 'rpx',
			margin: margin,
			color: getColorStyle,
			background: getBackgroundStyle,
			border: getBorderStyle,
			borderRadius: getBorderRadius + 'rpx',
			padding: '6rpx 12rpx'
		}" :loading="loading" :open-type="openType" @getuserinfo="bindgetUserInfo" @tap="btnClick"
		@getphonenumber="bindGetPhoneNumber">
		<slot>按钮</slot>
	</button>
</template>

<script>
	// @params type: 样式类型						primary主要  info信息  danger危险  warning警告   default默认
	// @params width: 宽度								默认: 100%
	// @params height: 高度							默认: 96rpx
	// @params color: 颜色							  默认: ''
	// @params size: 按钮尺寸						可选：large normal small mini
	// @params font-size: 字体大小				默认: 32
	// @params plain: 是否为朴素按钮			默认: false
	// @params disabled: 是否为禁用按钮		默认: false
	// @params round: 是否为圆角		默认: false
	// @params square: 是否为平角		默认: false
	// @params floatBtn: 位于屏幕右下方悬浮的按钮
	export default {
		name: "cui-button",
		props: {
			type: {
				type: String,
				default: 'primary'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '96rpx'
			},
			color: {
				type: String,
				default: ''
			},
			// large normal small mini
			size: {
				type: String,
				default: ''
			},
			fontSize: {
				type: Number,
				default: 0
			},
			plain: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: 'auto'
			},
			loading: {
				type: Boolean,
				default: false
			},
			round: {
				type: Boolean,
				default: false
			},
			square: {
				type: Boolean,
				default: false
			},
			openType: {
				type: String,
				default: ''
			},
			floatBtn: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				themeColors: {
					primary: '#007BFF',
					info: '#007BFF',
					danger: '#FF0000',
					warning: '#fB7E29'
				},
				themeSize: {
					large: {
						'width': '100%',
						height: '96rpx'
					},
					normal: {
						height: '96rpx'
					},
					small: {
						height: '65rpx'
					},
					mini: {
						height: '50rpx'
					}
				}
			};
		},
		computed: {
			getWidthStyle() {
				if (this.size) {
					return this.themeSize[this.size].width || "auto";
				} else {
					return this.width;
				}
			},
			getHeightStyle() {
				if (this.size) {
					return this.themeSize[this.size].height;
				} else {
					return this.height;
				}
			},
			getFontSize() {
				let height = '';
				if (this.getHeightStyle === '100%') {
					height = 96
				} else {
					height = parseInt(this.getHeightStyle)
				}
				if (this.fontSize !== 0) return this.fontSize;
				if (height >= 95) return 32;
				if (height >= 60) return 30;
				if (height >= 50) return 25;
			},
			getColorStyle() {
				if (this.color) {
					return this.plain ? this.color : '#fff';
				} else {
					return this.plain ? this.themeColors[this.type] : '#fff';
				}
			},
			getBackgroundStyle() {
				if (this.color) {
					return this.plain ? 'transparent' : `${this.color} !important`;
				} else {
					return this.plain ? 'transparent' : `${this.themeColors[this.type]} !important`;
				}
			},
			getBorderStyle() {
				return this.color ? `0.5px solid ${this.color}` : `0.5px solid ${this.themeColors[this.type]}`;
			},
			getBorderRadius() {
				let height = '';
				if (this.getHeightStyle === '100%') {
					height = 6
				} else {
					height = parseInt(this.getHeightStyle)
				}
				if (this.round) return this.round ? height / 2 : 6;
				if (this.square) return this.square ? 0 : 6;
				return 6
			}
		},
		methods: {
			bindgetUserInfo(e) {
				this.$emit('getuserinfo', e);
			},
			bindGetPhoneNumber(e) {
				this.$emit('getphonenumber', e);
			},
			btnClick() {
				if (this.disabled) return false;
				this.$emit('click');
			},
			getClass(type, plain, disabled) {
				let disabledClassName = ''; // 禁用按钮类名
				let activeClassName = ''; // 点击效果类名
				if (!disabled) {
					activeClassName = plain ? 'plain-active' : 'no-plain-active';
				} else {
					disabledClassName = plain ? 'com-btn-disabled-border' : 'com-btn-disabled';
				}
				return `${disabledClassName} ${activeClassName} ${this.floatBtn?'float-btn':''}`;
			}
		}
	};
</script>
<style>
	:root {
		/* width: 100%; */
		display: block;
	}
</style>
<style scoped>
	.com-btn {
		width: 100%;
		position: relative;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.com-btn::after {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 0;
	}

	.hover {
		background: #eee !important;
	}

	.hover::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
	}

	/* 禁用 */
	.com-btn-disabled-border {
		background: #f2f2f2 !important;
		color: #999 !important;
		border-color: #f2f2f2 !important;
	}

	.com-btn-disabled {
		color: #fff !important;
		opacity: 0.3;
	}

	.float-btn {
		position: fixed;
		bottom: 160rpx;
		right: 30rpx;
	}
</style>