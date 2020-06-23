<template>
	<div style="width: 70%;height: 120%;margin: 0 auto;">
		<dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
	</div>

</template>

<script>
	export default {
		name: 'RowMiddleMap',
		data() {
			return {
				config: {
					points: [{
							name: '后台中心',
							icon: {
								src: '/static/mapCenterPoint.png',
								width: 30,
								height: 30
							},
							coordinate: [0.59, 0.47],
							halo: {
								show: true,
							},
						},
						{
							name: '遂宁',
							coordinate: [0.72, 0.46]
						},
						{
							name: '攀枝花',
							coordinate: [0.39, 0.82]
						},
						{
							name: '宜宾',
							coordinate: [0.65, 0.66]
						},
						{
							name: '成都',
							coordinate: [0.53, 0.44]
						},
						{
							name: '阿坝',
							coordinate: [0.48, 0.29]
						},
						{
							name: '达州',
							coordinate: [0.88, 0.40]
						}
					],
					lines: [

						{
							source: '遂宁',
							target: '后台中心'
						},
						{
							source: '攀枝花',
							target: '后台中心'
						},
						{
							source: '宜宾',
							target: '后台中心'
						},
						{
							source: '成都',
							target: '后台中心'
						},
						{
							source: '阿坝',
							target: '后台中心'
						},
						{
							source: '达州',
							target: '后台中心'
						}
					],
					text: {
						show: true,
					},
					icon: {
						show: true,
						src: '/static/mapPoint.png'
					},
					bgImgSrc: '/static/map2.png'

				}
			}
		}
	}
</script>

<style>

</style>
