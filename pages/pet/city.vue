<template>
	<view class="">
		<view style="padding: 14rpx;">
			<u-search v-model="searchtitle" :clearabled="true" border-color="#ccc" bg-color="#e1e1e1" :show-action="true" action-text='取消'
				@focus="searchclick(0)" @custom="searchclick(1)" @change="searchclick(3)"
				placeholder="请输入城市名"></u-search>
		</view>
		<u-index-list v-if="status == true" :scrollTop="scrollTop">
			<view v-for="(letter, letterIndex) in letterList" :key="letterIndex">
				<u-index-anchor :index="letter" />
				
				<block v-for="(item, index) in citys" :key="index">
					<block v-if="item.pinyin == letter">
						<view class="list-cell u-border-bottom" @tap="getCity(item)">
								{{item.title}}
						</view>
					</block>
				</block>
			</view>
			
			<rfLoading isFullScreen :active="loading"></rfLoading>
			<!-- <rf-back-top :scrollTop="scrollTop"></rf-back-top> -->
			<!-- <rf-back-home></rf-back-home> -->
		</u-index-list>
		<view v-if="status == false" v-for="(item,index) in cityss" :key="index">
			<view @tap="getCity(item)" style="width: 100%;height: 70rpx;line-height: 70rpx;font-size: 30rpx;border-bottom: 1px solid #ccc;padding-left: 20rpx;" >
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { provincesCitys } from '@/api/pet';

export default {
	data() {
		return {
			status: true,
			loading: true,
			searchtitle:'',
			scrollTop: 0,
			letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
				'V', 'W', 'X', 'Y', 'Z'],
			citys: [],
			cityss:[],
		};
	},
	onLoad() {
		this.citys = uni.getStorageSync('citys');
		
		if (this.citys) {
			this.loading = false;
			this.initData();
		} else {
			this.initData();
		}
	},
	onShow() {

	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	mounted() {
	
	},
	computed: {
		
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
				this.cityss = []
				console.log(this.searchtitle)
				for(var i = 0;i<this.citys.length;i++){
					if(this.citys[i].title.indexOf(this.searchtitle) != -1){
						this.cityss.push(this.citys[i])
					}
				}
			}
		},
		navTo(route) {
			this.$mRouter.push({ route });
		},
		getCity(item) {
			uni.setStorageSync('city', item);
			this.$mRouter.back();
		},
		async initData() {
			await this.getProvincesCitys();
		},
		async getProvincesCitys() {
			await this.$http.get(`${provincesCitys}`).then(async r => {
				this.loading = false;
				let items = r.data;
				console.log(r)
				items.forEach((item, index) => {
					switch (item.id) {
						case '110100':
							item.id = 110000;
							break;
						case '120100':
							item.id = 120000;
							break;
						case '310100':
							item.id = 310000;
							break;
						case '500100':
							item.id = 500000;
							break;
						default:
							break;
					}
				});
				
				this.citys = items;
				console.log(this.citys)
				uni.setStorageSync('citys', items);
			}).catch(err => {
				this.loading = false;
			});
		},
	}
};
</script>

<style lang="scss">
page {
	background: #F5F5F5;
	.list-cell {
		width: 100%;
		line-height: 24px;
		background: #FFF;
		color: #323233;
		font-size: 14px;
		display: flex;
		justify-content: left;
		box-sizing: border-box;
		padding: 10px 24rpx;
		overflow: hidden;
		text-align: left;
	}
}
</style>
