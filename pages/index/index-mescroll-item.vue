<template>
	<mescroll-uni :ref="'mescrollRef' + i" height="100%" top="0" @init="mescrollInit" :up="upOption" @up="upCallback"
		:down="downOption" @down="downCallback" @emptyclick="emptyClick" style="padding-top: 10px;">
		<!-- 		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList1" :key="index"
					@tap="navTo(`/pages/pet/pet-view?id=${item.id}`)">

					<u-lazy-load threshold="-450" border-radius="10" :image="item.poster" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList1" :key="index">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.poster" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
				</view>
			</template>
		</u-waterfall> -->

		<view class="waterfall">
			<view class="waterfall_left">
				<view class="waterfall_list" v-for="(item,index) in leftList1" :key="index" @tap="navTo(`/pages/pet/pet-view?id=${item.id}`)">
					<view class="waterfall_list_img">
						<image :src="item.poster" mode="widthFix"></image>
					</view>
					<view class="msg-box">
						<view class="name single-omit" style="font-size: 25rpx;font-weight: bold;">{{item.title}}</view>
						<view class="price-box flex-align-center">
							<view class="unit"><text style="font-size: 35rpx;font-weight: bold;color: red;">￥</text></view>
						</view>
					</view>
				</view>
			</view>
			<view class="waterfall_right">
				<view class="waterfall_list" v-for="(item,index) in rightList1" :key="index" @tap="navTo(`/pages/pet/pet-view?id=${item.id}`)">
					<view class="waterfall_list_img">
						<image :src="item.poster" mode="widthFix"></image>
					</view>
					<view class="msg-box">
						<view style="font-size: 20rpx;font-weight: bold;" class="name single-omit">{{item.title}}</view>
						
						<view class="price-box flex-align-center">
							<view class="unit"><text style="font-size: 35rpx;font-weight: bold;color: red;">￥</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="u-m-30" v-if="items.length" style="padding-bottom: 150px;">
			<u-button type="default" shape="circle" plain :custom-style="customStyle"
				@click="switchTab(`/pages/adopt/list`)">查看更多</u-button>
		</view>
	</mescroll-uni>
</template>

<script>
	import moment from '@/common/moment';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins';
	import MescrollMoreItemMixin from '@/components/mescroll-uni/mixins/mescroll-more-item';
	import {
		petIndex,
		petList
	} from '@/api/pet';

	export default {
		mixins: [MescrollMixin, MescrollMoreItemMixin],
		data() {
			return {
				leftList1: [],
				rightList1: [],
				flowList: [],
				downOption: {
					native: true,
					use: false, // 是否启用下拉刷新; 默认true
					auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					textLoading: '刷新中 ...'
				},
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: false, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					isLock: true, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 5 // 每页数据的数量,默认10
					},
					noMoreSize: 1, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					toTop: {
						src: '/static/pet/mescroll-totop.png',
						offset: 200
					},
					empty: {
						icon: '/static/pet/mescroll-empty.png',
						tip: '~ 空空如也 ~',
						// btnText: '去看看'
					},
					lazyLoad: {
						use: true,
						attr: 'imgurl'
					}
				},
				items: [],
			}
		},
		props: {
			i: Number,
			index: {
				type: Number,
				default () {
					return 0;
				}
			},
			tabs: {
				type: Array,
				default () {
					return [];
				}
			},
			params: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		computed: {
			customStyle() {
				return {
					color: this.themeColor.color,
					borderColor: this.themeColor.color
				}
			}
		},
		filters: {
			datetime(val) {
				return moment(val * 1000).format('YYYY-MM-DD HH:mm');
			},
		},
		methods: {
			navTo(route) {
				this.$mRouter.push({
					route
				});
			},
			switchTab(route) {
				this.$mRouter.switchTab({
					route
				});
			},
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let pageNum = page.num; // 页码, 默认从1开始
				let pageSize = page.size; // 页长, 默认每页10条
				//let params = { page: pageNum, pageSize: pageSize };
				let params = {};
				let type = this.tabs[this.i].key;
				let city_id = 0;
				let city = uni.getStorageSync('city');
				if (city) city_id = city.id;

				//Object.assign(params, { type: type, city_id: city_id }, this.params);
				Object.assign(params, {
					type: type,
					city_id: city_id
				}, this.params);

				await this.$http.get(`${petList}`, params).then(async r => {
					this.items = r.data;
					for (let i = 0; i < this.items.length; i++) {
						if (i % 2 == 0) {
							this.leftList1.push(this.items[i])
						} else {
							this.rightList1.push(this.items[i])
						}
					}
					this.mescroll.endByPage(r.data.length, this.pageSize);
					// console.log(r,"rrrrrrrrr")
					// this.mescroll.endSuccess();
					// this.mescroll.endSuccess(items.length, this.hasNext);
					// this.mescroll.endBySize(items.length, parseInt(r.headers['x-pagination-total-count']));
				}).catch(() => {
					this.mescroll.endErr();
				});
			},
			emptyClick() {

			}
		}
	}
</script>

<style lang="scss">
	.waterfall {
		width: 100%;
		padding: 5px 10px;
		display: flex;
justify-content: space-between;
		.waterfall_left {
			float: left;
			width: 47%;
			.waterfall_list{
				border-radius: 20rpx;
				overflow: hidden;
				margin-bottom: 15rpx;
				box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
			}
		}

		.waterfall_right {
			float: right;
			width: 47%;
			.waterfall_list{
				border-radius: 20rpx;
				overflow: hidden;
				margin-bottom: 15rpx;
				box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
			}
		}
	}
</style>