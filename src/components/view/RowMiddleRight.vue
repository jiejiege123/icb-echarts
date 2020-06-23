<template>
	<div style="height: 100%;">
		<div class="view-row-middle-right-chartOutBox">
			<dv-border-box-13 :color="['#235fa7','#4fd2dd']">
				<p class="view-chart-title">服务响应时间</p>
				<div class="view-row-middle-right-chartbox">
					<dv-charts :option="viewLine" />
				</div>
			</dv-border-box-13>
		</div>
		<div class="view-row-middle-right-chartOutBox" style="margin-top: 4.2%;">
			<dv-border-box-13 :color="['#235fa7','#4fd2dd']">
				<p class="view-chart-title">地区类交易率排名</p>
				<div class="view-row-middle-right-chartbox">
					<dv-charts :option="viewBar" />
				</div>
			</dv-border-box-13>
		</div>
	</div>
</template>

<script>
export default {
  name: 'RowMiddleRight',
  props: {
    rightData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    rightData (news, old) {
      this.setTime(news)
    }
  },
  data () {
    let xData = (function () {
      let array = []
      for (let index = 0; index < 61; index++) {
        array.push(index.toString())
      }
      return array
    })()
    return {
      viewLine: {
        xAxis: { // X轴
          data: xData,
          boundaryGap: false, // 刻度点与值的是否对齐
          axisLine: {
            show: true,
            style: {
              stroke: '#2f4253'
            }
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
          axisLabel: { // 坐标轴标签
            style: {
              fill: '#4a5969'
            },
            formatter: (dataItem) => {
              if (dataItem.index % 10 === 0) {
                return dataItem.value
              } else {
                return ''
              }
            }
          }
        },
        yAxis: { // y轴
          name: '',
          data: 'value',
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
          data: [0.8, 0.7, 1.3, 1.2, 2.3, 1.9, 3.2],
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
      },
      viewBar: {
        xAxis: {
          data: ['', '成都', '宜宾', '德阳', '眉山', '达州', ''], // 这里为了还原效果图，则首尾的数据一定要为空
          boundaryGap: false, // 刻度点与值的是否对齐
          splitLine: { // 网格线
            show: true
          },
          splitNumber: 3,
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
        yAxis: {
          data: 'value', // x,y两个中必有一个设置为 value. 且，很多其他相关参数配置都在为value的时候才会生效，详见文档
          interval: 25, // 刻度间距
          min: 0,
          axisLabel: { // 坐标轴标签
            formatter: '{value}%', // 格式化
            style: {
              fill: '#4a5969'
            }
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
          }
        },
        grid: { // 图表的上下左右边距
          left: '12%',
          right: '10%',
          top: '10%',
          bottom: '20%'
        },
        series: [{
          data: [0, 78, 65, 53, 48, 40, 0],
          type: 'bar',
          barWidth: '50%', // 柱状宽度
          independentColor: true // 独立配色

        }]
      }
    }
  },
  mounted () {
  },
  methods: {
    setTime (data) {
      const { viewLine } = this
      viewLine.series[0].data = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.viewLine = { ...viewLine }
    }
  }
}
</script>

<style>
	.view-row-middle-right-chartOutBox {
		height: 48.3%;
	}

	.view-row-middle-right-chartOutBox .border-box-content {
		padding: 6%;
		width: 88%;
		height: 90%;
		padding-bottom: 0;
	}

	.view-chart-title {
		margin: 0;
		font-size: 14px;
	}

	.view-row-middle-right-chartbox {
		height: 85%;
	}
</style>
