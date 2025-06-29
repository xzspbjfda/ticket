<template>
	<view>
		<view style="padding: 14rpx;">
			<u-search v-model="searchtitle" :clearabled="true" border-color="#ccc" bg-color="#e1e1e1" :show-action="true" action-text='取消'
				@focus="searchclick(0)" @custom="searchclick(1)" @change="searchclick(3)"
				placeholder="请输入城市或机场名"></u-search>
		</view>
		<u-index-list v-if="status == true" :scrollTop="scrollTop">
			<view class="hotcrity">
				<view v-for="(item,index) in crityList" :key="index">
					<u-index-anchor :index="item.index" />
					<view class="itemsbox">
						<view @click="clickcritys(items.cityName,items.cityCode,items.id,items.airportCode)" v-for="items in item.list" :key="items.id" class="list-cell">
							
							{{items.cityName}}
						</view>
					</view>
				</view>
			</view>
		</u-index-list>
		<view v-if="status == false" style="padding: 20rpx;">
			<view v-if="crityListc[0].cityName" style="width: 100%;height: 100rpx;line-height: 100rpx;font-size: 35rpx;border-bottom: 1px solid #ccc;" @click="clickcritys(crityListc[0].cityName,crityListc[0].cityCode,crityListc[0].id,crityListc[0].airportCode)">
				<u-icon name="map" size="35"></u-icon> <text :class="'text-' + themeColor.name" style="margin-right: 15rpx;">{{crityListc[0].cityName}}</text> {{crityListc[0].cityCode}}
			</view>
			<view class="itemsboxs" @click="clickcrity(items)" v-for="items in crityListc" :key="items.id">

					<u-icon name="arrow-right" size="30"></u-icon> <text style="margin-right: 15rpx;">{{items.cityName}}</text> <text style="margin-right: 15rpx;">{{items.airportName}}</text> <text style="margin-right: 15rpx;">{{items.airportCode}}</text>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		ticketList
	} from '@/api/ticket.js';
	import {
		getcity
	} from '@/api/ticket.js';
	export default {
		data() {
			return {
				circle:true,
				searchtitle:'',
				status: true,
				type: '',
				lefttab: [],
				crity: '',
				crityList: {},
				crityListc:[],
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				]
			}
		},
		onLoad: function(option) {
			console.log(option.type);
			if (option.type == 0) {
				this.type = option.type
				uni.setNavigationBarTitle({
					title: '选择出发地'
				})
			}
			if (option.type == 1) {
				this.type = option.type
				uni.setNavigationBarTitle({
					title: '选择目的地'
				})
			}
		},
		mounted() {
			this.getTicketList()
		},
		methods: {
			searchclick(type,value) {
				if (type == 0) {
					this.status = false
				}
				if (type == 1) {
					this.status = true
				}
				if (type == 3) {
					console.log(this.searchtitle)
					var form = {
						keyword:this.searchtitle
					}
					this.$http.post(`${getcity}`,form).then(r => {
						console.log(r.data)
						this.crityListc = r.data
					}).catch(() => {

					});
				}
			},
			clickcritys(cityName,cityCode,id,airportCode){
				var form = {
					cityName:cityName,
					cityCode:cityCode,
					id:id
				}
				let pages = getCurrentPages(); //获取所有页面栈实例列表
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				if (this.type == 0) {
					prevPage.$vm.Departurecrity = form;
				} else {
					prevPage.$vm.destinationcrity = form;
				}
				//修改上一页data里面的searchVal参数值为1211
				uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
					delta: 1
				});
			},
			clickcrity(val) {
				this.crity = val
				let pages = getCurrentPages(); //获取所有页面栈实例列表
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				if (this.type == 0) {
					prevPage.$vm.Departurecrity = this.crity;
				} else {
					prevPage.$vm.destinationcrity = this.crity;
				}
				//修改上一页data里面的searchVal参数值为1211
				uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
					delta: 1
				});
			},
			async getTicketList(refresh) {
				uni.showLoading({
				                    title: '加载中'
				                });
				await this.$http.get(`${ticketList}`, {}).then(async r => {
					console.log(r.data)
					
uni.hideLoading();
					this.crityList = r.data
				}).catch(() => {

				});
			},
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.itemsbox{
		display: flex;
		flex-wrap: wrap;
	}
	.itemsboxs {
		width: 100%;
		padding-left: 30rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 30rpx;
		border-bottom: 1px solid #ccc;
	}

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 20%;
		border: 1rpx solid #ccc;
		border-radius: 10rpx;
		padding: 3rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>