<template>
  <dv-border-box-13 :color="['#235fa7','#4fd2dd']">
    <p class="view-chart-title">地区类交易率排名</p>
    <div class="view-row-middle-right-chartbox">
      <!-- <dv-charts :option="viewBar" /> -->
      <div :id="idNo" style="width: 100%;height:100%;"></div>

    </div>
  </dv-border-box-13>

</template>

<script>
export default {
  name: 'RowMiddleRight',
  props: {
    idNo: {
      type: String,
      default: 'bar'
    },
    eData: {
      type: Array,
      default () {
        return []
      }
    },
    xData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    // eData: {
    //   handler (news, old) {
    //     this.initOption(news)
    //   },
    //   immediate: true

    // },
    eData (news, old) {
      this.initOption(news)
    },
    xData (news, old) {
      this.setXData(news)
    }
  },
  data () {
    return {
      viewBar: {
        xAxis: {
          data: ['', '成都', '宜宾', '德阳', '眉山', '达州', ''], // 这里为了还原效果图，则首尾的数据一定要为空
          boundaryGap: true, // 刻度点与值的是否对齐
          // splitLine: { // 网格线
          //   show: true
          // },
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
            // formatter: '{value}%', // 格式化
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
      },
      myChart: ''
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById(this.idNo))
    window.resize = () => {
      this.myChart.resize()
    }
    this.initOption()
  },
  methods: {
    initOption (data) {
      // this.myChart.clear()
      this.myChart.setOption({
        grid: { // 图表的上下左右边距
          left: '12%',
          right: '10%',
          top: '10%',
          bottom: '20%'
        },
        xAxis: { // X轴
          data: this.xData,
          boundaryGap: false, // 刻度点与值的是否对齐
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: this.showSplitLine,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            // style: {
            //   fill: '#4a5969'
            // }
            color: function (value, index) {
              return '#4a5969'
            },
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          min: 0,
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: true,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLine: { // 坐标轴线
            show: true,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            // style: {
            //   fill: '#4a5969'
            // }
            color: function (value, index) {
              return '#4a5969'
            },
            fontSize: 10
          }
        },
        series: [{
          data: data || [0, 932, 901, 934, 1290, 1330, 0],
          type: 'bar',
          barWidth: '50%', // 柱状宽度
          // independentColor: true // 独立配色,
          itemStyle: {
            color: function (params) {
              let colorList = [
                '#c23531',
                '#67E0E3',
                '#61a0a8',
                '#9FE6B8',
                '#FFDB5C',
                '#FF9F7F',
                '#FF9F7F'
              ]
              return colorList[params.dataIndex]
            }
          }
        }]
      })
    },
    setData (data) {
      const { viewBar } = this
      viewBar.series[0].data = data

      this.viewBar = { ...viewBar }
    },
    setXData (data) {
      const { viewBar } = this
      viewBar.xAxis.data = data

      this.viewBar = { ...viewBar }
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
