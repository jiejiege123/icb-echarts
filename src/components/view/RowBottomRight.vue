<template>
	<dv-border-box-13 :color="['#235fa7','#4fd2dd']">
		<p class="view-chart-title">交易并发量</p>
		<div class="view-row-middle-right-chartbox">
			<dv-charts :option="viewLine" />
		</div>
	</dv-border-box-13>
</template>

<script>
export default {
  name: 'RowBottomRight',
  data () {
    return {
      viewLine: {
        xAxis: { // X轴
          data: ['0', '1', '2', '3', '4', '5', '6'],
          boundaryGap: false, // 刻度点与值的是否对齐
          axisLine: {
            show: true
          },
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: true,
            style: {
              stroke: '#2f4253'
            }
          },
          axisLine: { // 坐标轴线
            style: {
              stroke: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            style: {
              fill: '#4a5969'
            }
          }
        },
        yAxis: { // y轴
          name: '',
          data: 'value',
          interval: 25, // 刻度间距
          min: 0,
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: true,
            style: {
              stroke: '#2f4253'
            }
          },
          axisLine: { // 坐标轴线
            style: {
              stroke: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            formatter: '{value}%',
            style: {
              fill: '#4a5969'
            }
          }
        },
        grid: { // 图表的上下左右边距
          left: '12%',
          right: '10%',
          top: '10%',
          bottom: '20%'
        },
        series: [{
          data: [27, 54, 28, 28, 76, 30, 24],
          xAxisIndex: 0,
          yAxisIndex: 0,
          type: 'line',
          lineArea: { // 折线区域
            show: true,
            style: {
              fill: '#053a4c',
              opacity: 0.8
            }
          },
          linePoint: {
            show: false
          },
          lineStyle: { // 折线样式
            lineWidth: 2,
            stroke: '#05ffff'
          }
        }]
      }
    }
  }
}
</script>

<style>
	.view-row-bottom-right .border-box-content {
		padding: 6%;
		width: 88% !important;
		height: 90% !important;
		padding-bottom: 0;
	}
</style>
