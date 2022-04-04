<template>
	<div class="root">
		<div class="card" id="card-main" @click="exportPic('card-main')">
			<div class="head">
				<div class="head-date-left">
					<div class="month">{{_month}}</div>
					<div class="line">/</div>
					<div class="day">{{_day}}</div>
				</div>
				<div class="head-date-right">
					<div class="week">{{week}}</div>
					<div class="nongli" v-if="nongli">{{'壬寅年' + nongli}}</div>
				</div>
			</div>
			<div class="icon">
				<img class="icon-img" src='../../../assets/brain.png' />
				<div class="icon-year">2022</div>
			</div>
			<div class="content">
				<div class="content-text" v-bind:style="{'text-align': content_align }">{{content}}</div>
				<div class="content-author" v-if="author">{{'—— ' + author}}</div>
			</div>
			<div class="footer">
				不用刻意合群，有趣的人自然会相互吸引。
			</div>
		</div>
		<div class="controller">
			<textarea rows="5" placeholder="请输入内容" v-model="content"></textarea>
			<div style="height: 10px;"></div>
			<div class="author-and-align">
				<input placeholder="请输入作者名" v-model="author" />
				<button @click="changeContentAlign">{{'对齐方式：' + content_align}}</button>
			</div>
		</div>
	</div>
</template>

<script>
	import html2Canvas from 'html2canvas'
	export default {
		name: "MainCard",
		props: {
			date: {
				type: Date,
				required: true
			},
			nongli: {
				type: String,
				required: true,
				default: ''
			}
		},
		data() {
			return {
				content: "世界上只有一种真正的英雄主义，那就是看清生活的真相之后，依然热爱生活。",
				author: "罗曼罗兰",
				content_align: "center"
			}
		},
		computed: {
			_month: function() {
				return this.date.toDateString().split(' ')[1]
			},
			_day: function() {
				var d = this.date.getDate()
				return d < 10 ? '0' + d : d
			},
			week: function() {
				return '星期' + '日一二三四五六'.charAt(this.date.getDay());
			},
		},
		methods: {
			changeContentAlign: function() {
				if (this.content_align == 'center') {
					this.content_align = 'left'
				} else {
					this.content_align = 'center'
				}
			},
			exportPic: function(divId) {
				html2Canvas(document.querySelector("#" + divId)).then(canvas => {
					let dataURL = canvas.toDataURL("image/png");
					var newTab = window.open('about:blank', 'image from canvas');
					newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
				})
			},
			exportPicName: function() {
				var year = this.date.getFullYear();
				var month = this.date.getMonth() + 1;
				var monthStr = month < 10 ? '0' + month : month
				return year + '-' + monthStr + '-' + this._day + '-main'
			}
		}
	}
</script>

<style scoped>
	.card {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding: 20px 20px 10px 20px;
		box-shadow: gray 0px 0px 4px;
		border-radius: 4px;
	}

	.head {
		display: flex;
		flex-direction: row;
		font-weight: 400;
		justify-content: space-between;
		width: 100%;
		color: #5e5e60;
	}

	.head-date-left {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		font-size: 28px;
		font-family: "courier new", Courier, monospace;
	}

	.head-date-left .line {
		font-size: 20px;
		margin-left: 6px;
		margin-right: 6px;
	}

	.head-date-right {
		font-size: 14px;
		line-height: 130%;
	}

	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 40px;
	}

	.icon-img {
		width: 100px;
		height: 100px;
	}

	.icon-year {
		font-size: 14px;
		letter-spacing: 4px;
		margin-top: 4px;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 40px 10px 0px 10px;
	}

	.content-text {
		font-size: 23px;
		color: #181915;
		letter-spacing: 2px;
		line-height: 180%;
		text-align: center;
		/* 响应换行符 */
		white-space: pre-wrap;
	}

	.content-author {
		font-size: 16px;
		color: #181915;
		margin-top: 18px;
		align-self: flex-end;
	}

	.footer {
		font-size: 12px;
		margin-top: 40px;
		text-align: center;
		color: #c9c9c9;
		font-weight: 100;
	}

	.container .controller {
		width: 100%;
		margin-top: 10px;
		box-sizing: border-box;
	}

	.controller textarea {
		width: 100%;
		box-sizing: border-box;
	}

	.author-and-align {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
