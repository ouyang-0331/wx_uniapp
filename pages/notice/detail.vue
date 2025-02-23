<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
		<!--<view class="tag" v-if="detail.select"> -->
				<uni-tag inverted text="置顶" type="error" />
			</view>
			<view class="font">椰子柠檬壁纸 , 版权公告</view>			
		</view>
		
		<view class="info">
			<view class="item">椰子柠檬</view>					
			<view class="item">
				<uni-dateformat date="2025-2-18 15:23:45"></uni-dateformat>
				<!-- <uni-dateformat :date="detail.publish_date" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat> -->
			</view>	
		</view>
		
		
		<view class="content">		
			<!-- <mp-html :content="detail.content" /> -->
			<view class="fontzi">
				欢迎点击图片 , 识别小程序码使用 "椰子柠檬壁纸" , 测试用户体验及bug反馈。
			</view>
			<image src="../../static/images/b6qic2vc.png" mode="aspectFill" style="height: 500rpx;width: 500rpx;"></image>
			<!-- <rich-text :nodes="detail.content"></rich-text> -->
			<view class="fongzi">
				"椰子柠檬壁纸" 项目, 所有图片均采集与互联网,在壁纸信息中 , 均设置了图片来源。图片来源如有侵权 ，请联系客服或作者QQ：2411337403 ， 提供侵权证据 ，对图片进行删除
			</view>
		</view>
		
		<view class="count">
			阅读 {{detail.view_count}}	
		</view>
	</view>
</template>

<script setup>
import {apiNoticeDetail} from "@/api/apis.js"
import { ref } from "vue";
import {onLoad} from "@dcloudio/uni-app"

const detail = ref({})
let noticeId
onLoad((e)=>{
	noticeId = e.id
	getNoticeDetail();
})


const getNoticeDetail = ()=>{
	apiNoticeDetail({id:noticeId}).then(res=>{
		detail.value = res.data
		// console.log(res);
	})
}


</script>

<style lang="scss" scoped>
.noticeLayout{
	padding:30rpx;
		.title{
			font-size: 40rpx;
			color:#111;
			line-height: 1.6em;
			padding-bottom:30rpx;
			display: flex;
			.tag{
				transform: scale(0.8);
				transform-origin: left center;
				flex-shrink: 0;	
			}
			.font{
				padding-left:6rpx;
			}
		}
		.info{
			display: flex;
			align-items: center;
			color:#999;
			font-size: 28rpx;
			.item{
				padding-right: 20rpx;
			}
		}
		.content{
			padding:50rpx 0;
		}
		.count{
			color:#999;
			font-size: 28rpx;
		}
}
</style>
