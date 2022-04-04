<template>
	<router-view />
</template>

<script>
	export default {
		name: 'App',
		components: {}
	}
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
		background-color: #edf1f6;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* 禁止复制文本 */
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	img {
		/* 禁止长按保存图片 */
		pointer-events: none;
	}
</style>
