<template>
	<view>
		<view style="padding: 20rpx;">
			<view>
				<view v-if="peopleList.length <= 0" style="width: 100%;padding: 50rpx;font-size: 35rpx;font-weight: bold;text-align: center;">
					--暂未添加出行人--
				</view>
				<view class="peopleitem" v-for="(item,index) in peopleList" :key="index">
					<view :class="'bg-' + themeColor.name"
						style="width: 70rpx;height: 70rpx;border-radius: 50rpx;text-align: center;line-height: 70rpx;font-size: 28rpx;color: #fff;">
						{{item.name}}
					</view>
					<view style="width: 75%;margin-left: 15rpx;">
						<view>
							{{item.name}} {{item.mobile}}
						</view>
						<view>
							身份证 : {{item.cardNo}}
						</view>
					</view>
					<view style="width: 20%;display: flex;justify-content: space-around;" >
						<u-icon size="35" @click="clickpay(1,item)" name="edit-pen"></u-icon>
						<u-icon size="35" @click="deluseropen(item)" name="trash"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="paybox">
			<view @click="clickpay(0)" class="paybtn" :class="'bg-' + themeColor.name">
				添加出行人
			</view>
		</view>
		<u-popup v-model="show" mode="bottom">
			<view style="padding: 20rpx;">
				<view v-if="type == 0" style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
					新增出行人
				</view>
				<view v-if="type == 1" style="font-size: 30rpx;font-weight: bold;text-align: center;margin-bottom: 20rpx;">
					修改出行人
				</view>
				<view class="formbox">
					<u-form label-width="150rpx" :model="userform" ref="uForm">
						<u-form-item label="姓名">
							<u-input v-model="userform.name" />
						</u-form-item>
						<u-form-item label="证件号码">
							<u-input v-model="userform.cardNo" />
						</u-form-item>
						<u-form-item label="手机号码">
							<u-input v-model="userform.mobile" />
						</u-form-item>
					</u-form>
				</view>
				<view style="display: flex;justify-content: center;margin-bottom: 20rpx;">
					<u-button v-if="type == 0" @click="adduser" type="primary" style="width: 96%;">确定</u-button>
					<u-button v-if="type == 1" @click="edituser" type="primary" style="width: 96%;">确定</u-button>
				</view>
			</view>
		</u-popup>
		<u-modal v-model="shows" :content="content" @confirm="deluser" :show-cancel-button="true"></u-modal>
	</view>
</template>
<script>
	import {
		passengerList
	} from '@/api/passenger.js';
	import {
		passengerinsert
	} from '@/api/passenger.js';
	import {
		passengerupdate
	} from '@/api/passenger.js';
	import {
		passengerdelete
	} from '@/api/passenger.js';
	export default {
		data() {
			return {
				peopleList: [],
				show:false,
				userform:{},
				type:0,
				shows:false,
				content: '确定删除该乘客吗',
				delusers:{}
			};
		},
		onShow() {
			this.getlist()
		},
		methods: {
			getlist() {
				uni.showLoading({
					title: '加载中'
				});
				this.$http.get(`${passengerList}`, this.form).then(r => {
					console.log(r.data)
					this.peopleList = r.data
					uni.hideLoading();
				}).catch(() => {

				});
			},
			clickpay(val,item){
				this.show = true
				if(item){
					this.userform = item
				}
				this.type = val
			},
			getBirthdayFromIdCard(idCard) {
				var birthday = "";
				if (idCard != null && idCard != "") {
					if (idCard.length == 15) {
						birthday = "19" + idCard.substr(6, 6);
					} else if (idCard.length == 18) {
						birthday = idCard.substr(6, 8);
					}
					birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
				}
				return birthday;
			},
			adduser() {
				if (this.userform.cardNo == undefined || this.userform.cardNo == '') {
					uni.showToast({
						title: '请填写身份证',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.name == undefined || this.userform.name == '') {
					uni.showToast({
						title: '请填写姓名',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.mobile == undefined || this.userform.mobile == '') {
					uni.showToast({
						title: '请填写号码',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if(this.$u.test.mobile(this.userform.mobile) == false){
					uni.showToast({
						title: '请输入正确的号码格式',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if(this.$u.test.idCard(this.userform.cardNo) == false){
					uni.showToast({
						title: '请输入正确的身份证',
						icon: 'none',
						duration: 2000
					})
					return
				}
				this.userform.birthday = this.getBirthdayFromIdCard(this.userform.cardNo)
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${passengerinsert}`, this.userform).then(r => {
					console.log(r.data)
					this.show = false
					this.getlist()
					uni.hideLoading();
					uni.showToast({
						title: '添加成功',
						icon: 'none',
						duration: 2000
					})
				}).catch(() => {
			
				});
			},
			edituser(item){
				if (this.userform.cardNo == undefined || this.userform.cardNo == '') {
					uni.showToast({
						title: '请填写身份证',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.name == undefined || this.userform.name == '') {
					uni.showToast({
						title: '请填写姓名',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.userform.mobile == undefined || this.userform.mobile == '') {
					uni.showToast({
						title: '请填写号码',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if(this.$u.test.mobile(this.userform.mobile) == false){
					uni.showToast({
						title: '请输入正确的号码格式',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if(this.$u.test.idCard(this.userform.cardNo) == false){
					uni.showToast({
						title: '请输入正确的身份证',
						icon: 'none',
						duration: 2000
					})
					return
				}
				this.userform.birthday = this.getBirthdayFromIdCard(this.userform.cardNo)
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${passengerupdate}`, this.userform).then(r => {
					console.log(r.data)
					this.show = false
					this.getlist()
					uni.hideLoading();
					uni.showToast({
						title: '修改成功',
						icon: 'none',
						duration: 2000
					})
				}).catch(() => {
							
				});
			},
			deluseropen(item){
				this.shows = true
				this.delusers = item
			},
			deluser(){
				var form = {
					id:this.delusers.id
				}
				uni.showLoading({
					title: '加载中'
				});
				this.$http.post(`${passengerdelete}`, form).then(r => {
					console.log(r.data)
					this.shows = false
					this.getlist()
					uni.hideLoading();
					uni.showToast({
						title: '删除成功',
						icon: 'none',
						duration: 2000
					})
				}).catch(() => {
							
				});
			}
		}
	};
</script>
<style scoped lang="scss">
	.peopleitem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;background: #fff;
		padding: 20rpx;

	}

	.paybox {
		width: 100%;
		height: 130rpx;
		background: #fff;
		padding: 10rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		.paybtn {
			width: 220rpx;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			color: #fff;
			border-radius: 40rpx;
		}
	}
	.formbox {
		background: #fff;
		border-radius: 20rpx;
		padding: 15rpx;
		margin-bottom: 20rpx;
	}
</style>
