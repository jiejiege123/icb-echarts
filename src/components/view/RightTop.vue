<template>
	<dv-border-box-8 :reverse="true">
		<div class="right-top-outbox">
			<p>日平均响应时间</p>
			<dv-digital-flop :config="config" style="width:100%;height:100%;" />
		</div>
	</dv-border-box-8>
</template>

<script>
	export default {
		name: 'RightTop',
		data() {
			return {
				config: {
					number: [148.27],
					toFixed: 2,
					content: '{nt}s',
					style: {
						fill: "#04fcfc"
					}
				}
			}
		}
	}
</script>

<style>
	.right-top-outbox {
		height: 65%;
		padding-top: 8%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.right-top-outbox p {
		width: 100%;
		text-align: center;
		margin: 0;
		letter-spacing: 2px;
	}
</style>
