<!--
 * @Author: your name
 * @Date: 2020-06-24 08:26:32
 * @LastEditTime: 2020-06-28 11:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\pieCharts.vue
-->
<template>
  <div style="width: 50%;">
    <div :id="idNo" style="width: 100%;height:100%;"></div>
    <!-- <dv-active-ring-chart :config="config" style="width:100%;height:100%" /> -->
  </div>
</template>

<script>
export default {
  name: 'pieCharts',
  props: {
    idNo: {
      type: String,
      default: 'line'
    },
    eData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    eData (news, old) {
      // this.setTime(news)
      this.initOption(news)
    }
  },
  data () {
    return {
      config: {
        radius: '70%',
        activeRadius: '80%',
        lineWidth: '15',
        digitalFlopStyle: {
          fontSize: 16,
          fill: '#fff'
        },
        data: [
          {
            name: '柜面',
            value: 55
          },
          {
            name: '手机银行',
            value: 120
          },
          {
            name: '网上银行',
            value: 78
          },
          {
            name: '机构客户',
            value: 66
          },
          {
            name: '公司客户',
            value: 80
          },
          {
            name: '个人客户',
            value: 80
          }
        ],
        digitalFlopToFixed: 2
      }
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
        graphic: { // 图形中间文字
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '66',
            textAlign: 'center',
            fill: '#fff',
            fontSize: 60
          }
        },
        series: [
          {
            name: '交易量',
            type: 'pie',
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 335, name: 'API调用'},
              {value: 310, name: '前置渠道'},
              {value: 234, name: '后置渠道'}
            ]
          }
        ]
      })
    },
    setTime (data) {
      const { config } = this
      config.data = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.config = { ...config }
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
		width: 88% !important;
		height: 90% !important;
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
