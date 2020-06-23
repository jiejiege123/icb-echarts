<template>
	<div>
		<div class="center-title-box">
			<p>分布式微服务数据监控大屏</p>
			<dv-decoration-5 :color="['#2daae0','#2daae0']" />
		</div>
	</div>

</template>

<script>
	export default {
		name: 'MiddleTop',
		data() {
			return {

			}
		}
	}
</script>

<style>
	.center-title-box {
		width: 100%;
		height: 60px;
		position: relative;
		padding-top: 2%;
		margin-top: 2%;
	}

	.center-title-box p {
		margin: 0;
		padding: 0;
		position: absolute;
		top: 0;
		text-align: center;
		font-size: 28px;
		width: 100%;
	}
</style>
