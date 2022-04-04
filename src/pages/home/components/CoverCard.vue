<template>
	<div class="root" id="card-cover" @click="exportPic('card-cover')">
		<div class="head">
			<div class="head-year-month">{{yearMonth}}</div>
			<div class="head-nongli" v-if="nongli">{{'农历' + nongli}}</div>
		</div>
		<div class="day">{{day}}</div>
		<div class="week">
			<div class="week-zh">{{weekZh}}</div>
			<div class="week-divider">|</div>
			<div class="week-en">{{weekEn}}</div>
		</div>
	</div>
</template>

<script>
	import html2Canvas from 'html2canvas'
	export default {
		name: "CoverCard",
		props: {
			date: {
				type: Date,
				required: true,
				// default: function() {
				// 	return new Date();
				// }
			},
			nongli: {
				type: String,
				required: true,
				default: ''
			}
		},
		data() {
			return {}
		},
		computed: {
			yearMonth: function() {
				var year = this.date.getFullYear();
				var month = this.date.getMonth() + 1;
				return year + '年' + month + '月';
			},
			day: function() {
				var day = this.date.getDate();
				return day < 10 ? '0' + day : day;
			},
			weekZh: function() {
				return '星期' + '日一二三四五六'.charAt(this.date.getDay());
			},
			weekEn() {
				var arr = [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				];
				return arr[this.date.getDay()];
			}
		},
		methods: {
			exportPic: function(divId) {
				html2Canvas(document.querySelector("#" + divId)).then(canvas => {
					let dataURL = canvas.toDataURL("image/png");
					var newTab = window.open('about:blank','image from canvas');
					newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
				})
			},
			exportPicName: function() {
				var year = this.date.getFullYear();
				var month = this.date.getMonth() + 1;
				var monthStr = month < 10 ? '0' + month : month
				return year + '-' + monthStr + '-' + this.day + '-cover.png'
			}
		}
	}
</script>

<style scoped>
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		width: 100%;
		height: 42.55vw;
		box-shadow: gray 0px 0px 4px;
		border-radius: 4px;
	}

	.head {
		display: flex;
		flex-direction: row;
		color: #606060;
		font-size: 14px;
	}

	.head-year-month {}

	.head-nongli {
		margin-left: 10px;
	}

	.day {
		color: #5e5e60;
		font-size: 80px;
	}

	.week {
		display: flex;
		flex-direction: row;
		color: #6e6e6e;
		font-size: 18px;
	}

	.week-divider {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
