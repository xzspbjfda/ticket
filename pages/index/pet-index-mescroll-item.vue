<template>
	 <mescroll-uni :ref="'mescrollRef' + i" height="100%" top="0"  @init="mescrollInit" :up="upOption" @up="upCallback" :down="downOption" @down="downCallback" @emptyclick="emptyClick" style="padding-top: 10px;">
		<view class="item" v-for="(item, index) in items" :key="index" @tap="navTo(`/pages/pet/pet-view?id=${item.id}`)" style="">
			<view class="left"><u-image :src="item.poster" width="100%" height="220" border-radius="20" mode="aspectFill" /></view>
			
			<view class="right">
				<view class="title u-line-2">{{item.title}}</view>
					
				<view class="base">
					<view class="tag">{{item.cate_name}}</view>
					<view class="tag">{{item.gender_name}}</view>
					<view class="tag">{{item.age_name}}</view>
				</view>
				
				<view class="status" v-if="tabs[i].key == 1">
					<view class="tag">{{item.vaccine_name}}</view>
					<view class="tag">{{item.deworm_name}}</view>
					<view class="tag">{{item.sterilize_name}}</view>
				</view>
				
				<view class="area"><u-icon name="map" :color="themeColor.color" /> {{item.area}}</view>
				
				<view class="reward" v-if="tabs[i].key == 2">悬赏￥<text class="money">{{item.money}}</text></view>
				<view class="summary u-line-2" v-if="tabs[i].key != 2">{{item.content}}</view>
			</view>
			
			<u-line color="info" :hair-line="false" margin="30rpx 0 0 0" />
		</view>
		
		<view class="u-m-30" v-if="items.length" style="padding-bottom: 150px;">
			<u-button type="default" shape="circle" plain :custom-style="customStyle" @click="switchTab(`/pages/adopt/list`)">查看更多</u-button>
		</view>
	</mescroll-uni>
</template>

<script>
import moment from '@/common/moment';
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins';
import MescrollMoreItemMixin from '@/components/mescroll-uni/mixins/mescroll-more-item';
import { petIndex, petList } from '@/api/pet';

export default {
	mixins: [MescrollMixin, MescrollMoreItemMixin],
	data() {
		return {
			downOption:{
				native: true,
				use: false, // 是否启用下拉刷新; 默认true
				auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				textLoading: '刷新中 ...'
			},
			upOption:{
				use: true, // 是否启用上拉加载; 默认true
				auto: false, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				isLock: true, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 5 // 每页数据的数量,默认10
				},
				noMoreSize: 1 ,// 配置列表的总数量要大于等于5条才显示'-- END --'的提示
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
	props:{
		i: Number,
		index: {
			type: Number,
			default() {
				return 0;
			}
		},
		tabs: {
			type: Array,
			default() {
				return [];
			}
		},
		params: {
			type: Object,
			default() {
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
			this.$mRouter.push({ route });
		},
		switchTab(route) {
			this.$mRouter.switchTab({ route });
		},
		downCallback() {
			this.mescroll.resetUpScroll();
		},
		async upCallback(page) {
			let pageNum = page.num; // 页码, 默认从1开始
			let pageSize = page.size; // 页长, 默认每页10条
			//let params = { page: pageNum, pageSize: pageSize };
			let params = { };
			let type = this.tabs[this.i].key;
			let city_id = 0;
			let city = uni.getStorageSync('city');
			if (city) city_id = city.id;
			
			//Object.assign(params, { type: type, city_id: city_id }, this.params);
			Object.assign(params, { type: type, city_id: city_id }, this.params);

			await this.$http.get(`${petList}`, params).then(async r => {
				this.items = r.data;
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
.item {
	display: flex;
	flex-wrap: wrap;
	margin: 30rpx;
	.left {
		flex-basis: 33%;
	}
	.right {
		//flex-grow: 1;
		//flex-basis: 67%;
		width: 67%;
		padding: 0 24rpx;
		.title {
			font-size: 30rpx;
			margin-top: -10rpx;
		}
		.base {
			margin-top: 12rpx;
			.tag {
				height: 40rpx;
				line-height: 40rpx;
				background: #F6F7FB;
				color: #666;
				font-size: 24rpx;
				border-radius: 10rpx;
				padding: 0 20rpx;
				margin-right: 14rpx;
				display: inline-block;
			}
			.tag:nth-child(3) {
				margin-right: 0;
			}
		}
		.status {
			margin-top: 12rpx;
			.tag {
				height: 38rpx;
				line-height: 38rpx;
				color: #CCC;
				font-size: 24rpx;
				border: 2rpx #CCC solid;
				border-radius: 10rpx;
				padding: 0 20rpx;
				margin-right: 14rpx;
				display: inline-block;
			}
			.tag:nth-child(3) {
				margin-right: 0;
			}
		}
		.area {
			color: #666;
			font-size: 24rpx;
			margin-top: 12rpx;
		}
		.reward {
			color: #EB568F;
			font-size: 24rpx;
			.money {
				color: #EB568F;
				font-size: 40rpx;
			}
		}
		.summary {
			color: #666;
			font-size: 24rpx;
			margin-top: 12rpx;
		}
	}
	.u-line {
		color: #F1F1F1;
	}
	::v-deep u-line {
		flex-basis: 100%;
		color: #F1F1F1;
	}
}
</style>