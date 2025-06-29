<template>
	<view class="wrap">
		<u-calendar max-date="2950-01-01" v-model="showtime" :mode="range" @change="change"></u-calendar>
		<view class="seachtop">
			<view class="seachtop_left">
				<view style="width: 30%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
					{{form.cityName}}
				</view>
				<view @click="timechange">
					<view style="font-size: 27rpx;">
						住 <text :class="'text-' + themeColor.name">{{statrdata}}</text>
					</view>
					<view style="font-size: 27rpx;">
						离 <text :class="'text-' + themeColor.name">{{enddata}}</text>
					</view>
				</view>
			</view>
			<view class="seachtop_right">
				<u-search shape="square" bg-color="#F4F3F4" placeholder="酒店/地标/关键词" :show-action="false" v-model="keyword"
					@search="searchHotel"></u-search>
			</view>
		</view>
		<HM-filterDropdown :menuTop="88" :filterData="filterData" :defaultSelected="defaultSelected"
			:updateMenuName="true" @confirm="confirm" dataFormat="Object"></HM-filterDropdown>
		<!-- 酒店列表 -->
		<view style="width: 60%;margin: 0 auto;margin-top: 150rpx;" v-if="list.length == 0">
			<image src="https://img11.360buyimg.com/ftfman/jfs/t1/130609/24/19259/35205/5fd03cc7E49456a46/4fb443c24e0cf799.png" mode="widthFix"></image>
			<view style="width: 100%;text-align: center;font-size: 30rpx;font-weight: 700;">当前搜索无结果</view>
		</view>
		<view class="Listbox" style="padding: 20rpx;margin-top: 150rpx;" v-if="list.length>0">
			<view class="List_item" v-for="(item,index) in list" :key="index" @click="goinfo(item.hotelID)">
				<view style="width: 30%;height: 300rpx;">
					<image style="width: 100%;height: 300rpx;border-radius: 20rpx;" mode="aspectFill"
						:src="item.mainImage"></image>
						
				</view>
				<view
					style="width: 70%;height: 300rpx;padding-left: 30rpx;display: flex;flex-direction: column;justify-content: space-between;">
					<view class="title">
						{{item.hotelName}}
					</view>
					<view style="display: flex;">
						<view
							style="padding: 2rpx;border-bottom-right-radius: 10rpx;color: #fff;width: 80rpx;margin-right: 10rpx;font-size: 24rpx;text-align: center;"
							:class="'bg-' + themeColor.name">
							{{item.avgScore}}分
						</view>
					</view>
					<view class="bqbox" :class="'text-' + themeColor.name" :style="'border:1px solid '+themeColor.color">
						<text v-if="item.hotelStar == 0">无星级</text>
						<text v-if="item.hotelStar == 1">一星级</text>
						<text v-if="item.hotelStar == 2">二星级</text>
						<text v-if="item.hotelStar == 3">三星级</text>
						<text v-if="item.hotelStar == 4">四星级</text>
						<text v-if="item.hotelStar == 5">五星级</text>
						<text v-if="item.hotelStar == 6">经济型</text>
						<text v-if="item.hotelStar == 7">舒适型</text>
						<text v-if="item.hotelStar == 8">高档型</text>
						<text v-if="item.hotelStar == 9">豪华型</text>
					</view>
					<view style="width: 100%;" class="textmore">
						{{item.address}}
					</view>
					<view style="width: 100%;">
						<text style="font-size: 35rpx;font-weight: bold;float: right;" :class="'text-' + themeColor.name">￥{{item.startingPrice_addprice}}起</text>
					</view>
				</view>
			</view>
		</view>
		<view class="wrap" style="margin-top: 178rpx;">
			<!-- 		<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="goinfo(item.hotelID)">
				
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image"
							:index="index"></u-lazy-load>
					
						<view class="demo-img-wrap">
							<image class="demo-image" :src="item.mainImage" mode="widthFix"></image>
						</view>
				
						<view class="demo-title">
							{{item.hotelName}}
						</view>
						<view class="demo-price">
							{{item.startingPrice_addprice}}元
						</view>
						<view class="demo-tag">
						
						</view>
						<view class="demo-shop">
							{{item.cityName}}{{item.address}}
						</view>
						
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="goinfo(item.hotelID)">
					
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image"
							:index="index"></u-lazy-load>
				
						<view class="demo-img-wrap">
							<image class="demo-image" :src="item.mainImage" mode="widthFix"></image>
						</view>
		
						<view class="demo-title">
							{{item.hotelName}}
						</view>
						<view class="demo-price">
							{{item.startingPrice_addprice}}元
						</view>
						<view class="demo-tag">
	
						</view>
						<view class="demo-shop">
							{{item.cityName}}{{item.address}}
						</view>
						
					</view>
				</template>
			</u-waterfall> -->
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>

<script>
	import {
		searchHotelList
	} from '@/api/Hotel.js';
	import datas from '@/common/datas.js'; //筛选菜单数据
	export default {
		data() {
			return {
				scrollTop: 0,
				range: '',
				showtime: false,
				form: {},
				keyword: '',
				list: [],
				loadStatus: 'loadmore',
				flowList: [],
				citys: {
					id: 0,
					title: '全国'
				},
				statrdata: '',
				enddata: '',
				filterData: [],
				defaultSelected: [],
			}
		},
		onLoad(option) {
			const Item = JSON.parse(decodeURIComponent(option.item));
			console.log(111,Item)
			this.filterData = datas;
			this.form = Item
			this.statrdata = Item.checkInDate.substring(5, 10)
			this.enddata = Item.checkOutDate.substring(5, 10)
			this.form.sort = 0,
				this.keyword = this.form.queryText
			// this.clear()
			let city = uni.getStorageSync('city');
			this.form.pageIndex = 1
			if (city && this.citys.id != city.id) {
				this.citys = city;
				this.getlist()
				// this.$nextTick(() => {
				// 	for (let tab of this.$mData.types) {
				// 		this.getMescroll(tab.key - 1).triggerDownScroll();
				// 	}
				// });
			} else {
				this.getlist()
			}
		},
		onShow() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.getlist()
			}, 1000)
		},
		methods: {
			confirm(e) {
				this.indexArr = e.index;
				this.valueArr = e.value;
				console.log(e)
				this.list = []
				this.flowList = []
				// this.clear()
				this.form.pageIndex = 1
				this.form.sort = e.value[0][0]
				this.form.hotelStars = e.value[1][0].toString();
				this.getlist()
			},
			timechange() {
				this.showtime = true
			},
			change(e) {
				console.log(e);
				this.statrdata = e.startDate.substring(5, 10)
				this.enddata = e.endDate.substring(5, 10)
				this.list = []
				this.flowList = []
				// this.clear()
				this.form.pageIndex = 1
				this.form.checkInDate = e.startDate
				this.form.checkOutDate = e.endDate
				this.getlist()
			},
			addRandomData() {
				this.flowList = this.list
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			// clear() {
			// 	this.$refs.uWaterfall.clear();
			// },
			searchHotel(value) {
				this.list = []
				this.flowList = []
				// this.clear()
				this.form.pageIndex = 1
				console.log(value)
				this.form.queryText = value
				this.getlist()
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${searchHotelList}`, this.form).then(r => {
					console.log(r)
					console.log(r.data.hotelList.length)
					if (r.data.hotelList.length > 0) {
						if (r.data.hotelList.length == 20) {
							this.form.pageIndex++
						}
						for (var i = 0; i < r.data.hotelList.length; i++) {
							this.list.push(r.data.hotelList[i])
						}
						this.addRandomData();
					}
					this.form.queryText = ''
					uni.hideLoading();
				}).catch(() => {
					uni.hideLoading();
				});
			},
			// 通用跳转
			navTo(route) {
				this.list = []
				this.flowList = []
				console.log(111, this.list, this.flowList)
				this.$mRouter.push({
					route
				});
			},
			goinfo(val) {
				var form = {
					hotelID: val,
					checkInDate: this.form.checkInDate,
					checkOutDate: this.form.checkOutDate
				}
				uni.navigateTo({
					url: '/pages/pet/Hotel/Hotel_info?item=' + encodeURIComponent(JSON.stringify(form))
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.bqbox {
		width: 100rpx;
		text-align: center;
		border-radius: 10rpx;
		padding: 2rpx;
		font-size: 22rpx;
	}

	.textmore {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/*隐藏溢出*/
		/*当文本溢出包含元素时显示省略符号来代表被修剪的文本*/
		/*规定段落中的文本不进行换行*/
	}

	page {
		background: #fff !important;
	}

	.title {
		width: 100%;
		font-size: 35rpx;
		font-weight: bold;
		word-wrap: break-word;
		word-break: break-all;
		white-space: pre-line;
	}

	.wrap {
		width: 100%;
		height: 100%;
		background: #fff;
	}

	.List_item {
		display: flex;
		width: 100%;
		margin-top: 20rpx;
	}

	.siftbox {
		width: 100%;
		background: #fff;
	}

	.seachtop {
		display: flex;
		align-items: center;
		z-index: 10999;
		height: 110rpx;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		border-radius: 20rpx;
		width: 100%;
		padding: 20rpx;

		.seachtop_left {
			width: 40%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background: #F4F3F4;
			border-top-left-radius: 35rpx;
			border-bottom-left-radius: 35rpx;
		}

		.seachtop_right {
			overflow: hidden;
			margin-left: 2rpx;
			display: flex;
			align-items: center;
			width: 60%;
			height: 100%;
			background: #F4F3F4;
			border-top-right-radius: 35rpx;
			border-bottom-right-radius: 35rpx;
		}
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
</style>