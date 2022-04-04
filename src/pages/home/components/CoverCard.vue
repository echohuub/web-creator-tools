<template>
	<div class="root">
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
				console.log(this.date)
				console.log(this.date.getFullYear())
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
