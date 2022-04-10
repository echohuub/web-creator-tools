<template>
	<div class="container">
		<div class="title">GRAVITY运营助手</div>
		<CoverCard v-bind:date="date" v-bind:nongli="nongli" />
		<div class="divider"></div>
		<MainCard v-bind:date="date" v-bind:content="content" v-bind:author="author" v-bind:nongli="nongli" />
		<div class="divider"></div>
		<div class="date">
			<input type="date" v-model="dateStr" />
			<input placeholder="请输入农历" v-model="nongli" />
		</div>
	</div>
</template>

<script>
	import CoverCard from './components/CoverCard.vue'
	import MainCard from './components/MainCard.vue'

	export default {
		name: "HomePage",
		components: {
			CoverCard,
			MainCard
		},
		data() {
			return {
				dateStr: this.getFormatDate(),
				nongli: "三月十一",
			}
		},
		computed: {
			date: {
				get() {
					return new Date(this.dateStr)
				}
			}
		},
		methods: {
			getFormatDate() {
				var d = new Date()
				var month = d.getMonth() + 1
				var monthStr = month < 10 ? "0" + month : month
				var day = d.getDate()
				var dayStr = day < 10 ? '0' + day : day
				return d.getFullYear() + '-' + monthStr + '-' + dayStr
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 40px 10px 40px 10px;
	}

	.title {
		text-align: center;
		font-size: 20px;
		color: #5e5e60;
		margin-bottom: 20px;
	}

	.date {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.divider {
		height: 10px;
	}
</style>
