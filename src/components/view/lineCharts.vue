<template>
  <dv-border-box-13 :color="['#235fa7','#4fd2dd']">
		<p class="view-chart-title">{{title}}</p>
		<div class="view-row-middle-right-chartbox">
			<dv-charts :option="viewLine" />
		</div>
	</dv-border-box-13>
</template>

<script>
export default {
  name: 'lineCharts',
  props: {
    eData: {
      type: Array,
      default () {
        return []
      }
    },
    xData: {
      type: Array,
      default () {
        let arra = []
        for (let i = 0; i < 61; i++) {
          arra.push(i)
        }
        return arra
      }
    },
    showSplitLine: {
      type: Boolean,
      default: false
    },
    formatter: {
      type: Function,
      default: (dataItem) => {
        if (dataItem.index % 10 === 0) {
          return dataItem.value
        } else {
          return ''
        }
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    eData (news, old) {
      this.setTime(news)
    },
    xData: {
      handler (news, old) {
        this.setXData(news)
      },
      immediate: true
    },
    formatter: {
      handler (news, old) {
        this.setFormatter(news)
      },
      immediate: true
    }
  },

  data () {
    return {
      viewLine: {
        xAxis: { // X轴
          data: [],
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
            show: this.showSplitLine,
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
      }
    }
  },
  mounted () {
  },
  methods: {
    setTime (datas) {
      const { viewLine } = this
      viewLine.series[0].data = datas
      // this.viewLine = { ...viewLine }
      this.viewLine = Object.assign({}, this.viewLine, viewLine)

      // this.$set(this.viewLine.series[0], 'data', data)
    },
    setXData (data) {
      const { viewLine } = this
      viewLine.xAxis.data = data
      this.viewLine = { ...viewLine }
    },
    setFormatter (data) {
      const { viewLine } = this
      viewLine.xAxis.axisLabel.formatter = data

      this.viewLine = { ...viewLine }
    }
  }
}
</script>

<style>
	.view-row-bottom-left .border-box-content {
		padding: 6%;
		width: 88% !important;
		height: 90% !important;
		padding-bottom: 0;
	}
  .view-row-bottom-left-one .border-box-content {
		padding: 6%;
		width: 88% !important;
		height: 90% !important;
		padding-bottom: 0;
	}
  .view-row-bottom-right .border-box-content {
		padding: 6%;
		width: 88% !important;
		height: 90% !important;
		padding-bottom: 0;
	}
</style>
