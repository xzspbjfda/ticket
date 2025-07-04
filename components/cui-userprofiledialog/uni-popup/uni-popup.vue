<template>
	<view v-if="showPopup" class="uni-popup" :class="[popupstyle, isDesktop ? 'fixforpc-z-index' : '']"
		@touchmove.stop.prevent="clear">
		<view @touchstart="touchstart">
			<uni-transition key="1" v-if="maskShow" name="mask" mode-class="fade" :styles="maskClass"
				:duration="duration" :show="showTrans" @click="onTap" />
			<uni-transition key="2" :mode-class="ani" name="content" :styles="transClass" :duration="duration"
				:show="showTrans" @click="onTap">
				<view class="uni-popup__wrapper" :style="{ backgroundColor: bg }" :class="[popupstyle]" @click="clear">
					<slot />
				</view>
			</uni-transition>
		</view>
	</view>
</template>

<script>
	/**
	 * PopUp 弹出层
	 * @description 弹出层组件，为了解决遮罩弹层的问题
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
	 * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式
	 * 	@value top 顶部弹出
	 * 	@value center 中间弹出
	 * 	@value bottom 底部弹出
	 * 	@value left		左侧弹出
	 * 	@value right  右侧弹出
	 * 	@value message 消息提示
	 * 	@value dialog 对话框
	 * 	@value share 底部分享示例
	 * @property {Boolean} animation = [ture|false] 是否开启动画
	 * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗
	 * @property {String}  backgroundColor 					主窗口背景色
	 * @property {Boolean} safeArea									是否适配底部安全区
	 * @event {Function} change 打开关闭弹窗触发，e={show: false}
	 * @event {Function} maskClick 点击遮罩触发
	 */
	import UniTransition from "./uni-transition/uni-transition.vue"
	export default {
		name: 'uniPopup',
		components: {
			UniTransition
		},
		emits: ['change', 'maskClick'],
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
			// message: 消息提示 ; dialog : 对话框
			type: {
				type: String,
				default: 'center'
			},
			// maskClick
			maskClick: {
				type: Boolean,
				default: true
			},
			backgroundColor: {
				type: String,
				default: 'none'
			},
			safeArea: {
				type: Boolean,
				default: true
			}
		},

		watch: {
			/**
			 * 监听type类型
			 */
			type: {
				handler: function(type) {
					if (!this.config[type]) return
					this[this.config[type]](true)
				},
				immediate: true
			},
			isDesktop: {
				handler: function(newVal) {
					if (!this.config[newVal]) return
					this[this.config[this.type]](true)
				},
				immediate: true
			},
			/**
			 * 监听遮罩是否可点击
			 * @param {Object} val
			 */
			maskClick: {
				handler: function(val) {
					this.mkclick = val
				},
				immediate: true
			}
		},
		data() {
			return {
				duration: 300,
				ani: [],
				showPopup: false,
				showTrans: false,
				popupWidth: 0,
				popupHeight: 0,
				config: {
					top: 'top',
					bottom: 'bottom',
					center: 'center',
					left: 'left',
					right: 'right',
					message: 'top',
					dialog: 'center',
					share: 'bottom'
				},
				maskClass: {
					position: 'fixed',
					bottom: 0,
					top: 0,
					left: 0,
					right: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.4)'
				},
				transClass: {
					position: 'fixed',
					left: 0,
					right: 0
				},
				maskShow: true,
				mkclick: true,
				popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'
			}
		},
		computed: {
			isDesktop() {
				return this.popupWidth >= 500 && this.popupHeight >= 500
			},
			bg() {
				if (this.backgroundColor === '' || this.backgroundColor === 'none') {
					return 'transparent'
				}
				return this.backgroundColor
			}
		},
		mounted() {
			const fixSize = () => {
				const {
					windowWidth,
					windowHeight,
					windowTop,
					safeAreaInsets
				} = uni.getSystemInfoSync()
				this.popupWidth = windowWidth
				this.popupHeight = windowHeight + windowTop
				// 是否适配底部安全区
				if (this.safeArea) {
					this.safeAreaInsets = safeAreaInsets
				} else {
					this.safeAreaInsets = 0
				}
			}
			fixSize()

		},
		created() {
			this.mkclick = this.maskClick
			if (this.animation) {
				this.duration = 300
			} else {
				this.duration = 0
			}
			// TODO 处理 message 组件生命周期异常的问题
			this.messageChild = null
			// TODO 解决头条冒泡的问题
			this.clearPropagation = false
		},
		methods: {
			/**
			 * 公用方法，不显示遮罩层
			 */
			closeMask() {
				this.maskShow = false
			},
			/**
			 * 公用方法，遮罩层禁止点击
			 */
			disableMask() {
				this.mkclick = false
			},
			// TODO nvue 取消冒泡
			clear(e) {
				// #ifndef APP-NVUE
				e.stopPropagation()
				// #endif
				this.clearPropagation = true
			},

			open(direction) {
				let innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share']
				if (!(direction && innerType.indexOf(direction) !== -1)) {
					direction = this.type
				}
				if (!this.config[direction]) {
					console.error('缺少类型：', direction)
					return
				}
				this[this.config[direction]]()
				this.$emit('change', {
					show: true,
					type: direction
				})
			},
			close(type) {
				this.showTrans = false
				this.$emit('change', {
					show: false,
					type: this.type
				})
				clearTimeout(this.timer)
				// // 自定义关闭事件
				// this.customOpen && this.customClose()
				this.timer = setTimeout(() => {
					this.showPopup = false
				}, 300)
			},
			// TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
			touchstart() {
				this.clearPropagation = false
			},

			onTap() {
				if (this.clearPropagation) {
					// fix by mehaotian 兼容 nvue
					this.clearPropagation = false
					return
				}
				this.$emit('maskClick')
				if (!this.mkclick) return
				this.close()
			},
			/**
			 * 顶部弹出样式处理
			 */
			top(type) {
				this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top'
				this.ani = ['slide-top']
				this.transClass = {
					position: 'fixed',
					left: 0,
					right: 0,
					backgroundColor: this.bg
				}
				// TODO 兼容 type 属性 ，后续会废弃
				if (type) return
				this.showPopup = true
				this.showTrans = true
				this.$nextTick(() => {
					if (this.messageChild && this.type === 'message') {
						this.messageChild.timerClose()
					}
				})
			},
			/**
			 * 底部弹出样式处理
			 */
			bottom(type) {
				this.popupstyle = 'bottom'
				this.ani = ['slide-bottom']

				this.transClass = {
					position: 'fixed',
					left: 0,
					right: 0,
					bottom: 0,
					paddingBottom: (this.safeAreaInsets && this.safeAreaInsets.bottom) || 0,
					backgroundColor: this.bg
				}
				// TODO 兼容 type 属性 ，后续会废弃
				if (type) return
				this.showPopup = true
				this.showTrans = true
			},
			/**
			 * 中间弹出样式处理
			 */
			center(type) {
				this.popupstyle = 'center'
				this.ani = ['zoom-out', 'fade']
				this.transClass = {
					position: 'fixed',
					/* #ifndef APP-NVUE */
					display: 'flex',
					flexDirection: 'column',
					/* #endif */
					bottom: 0,
					left: 0,
					right: 0,
					top: 0,
					justifyContent: 'center',
					alignItems: 'center'
				}
				// TODO 兼容 type 属性 ，后续会废弃
				if (type) return
				this.showPopup = true
				this.showTrans = true
			},
			left(type) {
				this.popupstyle = 'left'
				this.ani = ['slide-left']
				this.transClass = {
					position: 'fixed',
					left: 0,
					bottom: 0,
					top: 0,
					backgroundColor: this.bg,
					/* #ifndef APP-NVUE */
					display: 'flex',
					flexDirection: 'column'
					/* #endif */
				}
				// TODO 兼容 type 属性 ，后续会废弃
				if (type) return
				this.showPopup = true
				this.showTrans = true
			},
			right(type) {
				this.popupstyle = 'right'
				this.ani = ['slide-right']
				this.transClass = {
					position: 'fixed',
					bottom: 0,
					right: 0,
					top: 0,
					backgroundColor: this.bg,
					/* #ifndef APP-NVUE */
					display: 'flex',
					flexDirection: 'column'
					/* #endif */
				}
				// TODO 兼容 type 属性 ，后续会废弃
				if (type) return
				this.showPopup = true
				this.showTrans = true
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-popup {
		position: fixed;
		/* #ifndef APP-NVUE */
		z-index: 99;

		/* #endif */
		&.top,
		&.left,
		&.right {
			top: 0;
		}

		.uni-popup__wrapper {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			position: relative;

			/* iphonex 等安全区设置，底部安全区适配 */
			/* #ifndef APP-NVUE */
			// padding-bottom: constant(safe-area-inset-bottom);
			// padding-bottom: env(safe-area-inset-bottom);
			/* #endif */
			&.left,
			&.right {
				/* #ifdef H5 */
				padding-top: var(--window-top);
				/* #endif */
				/* #ifndef H5 */
				padding-top: 0;
				/* #endif */
				flex: 1;
			}
		}
	}

	.fixforpc-z-index {
		/* #ifndef APP-NVUE */
		z-index: 999;
		/* #endif */
	}

	.fixforpc-top {
		top: 0;
	}
</style>