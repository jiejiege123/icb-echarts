<template>
  <dv-border-box-13 :color="['#235fa7','#4fd2dd']">
		<p class="view-chart-title">{{title}}</p>
		<div class="view-row-middle-right-chartbox">
			<ul class="view-row-bottom-right-one-ulbox">
				<li v-for="(item,i) in list" :key="i" v-text="item"></li>
			</ul>
			<dv-charts :option="viewRadar" />
		</div>
	</dv-border-box-13>
  <!-- <dv-charts :option="viewLine" /> -->
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
    list: {
      type: Array,
      default () {
        return ['A：柜面', 'B：手机银行', 'C：网上银行', 'D：机构客户', 'E：公司客户', 'F：个人客户']
      }
    },
    title: {
      type: String,
      default: ''
    },
    indicator: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    eData (news, old) {
      this.setTime(news)
    },
    indicator (news, old) {
      this.setIndicator(news)
    }
  },
  computed: {

  },
  data () {
    return {
      viewRadar: {
        radar: {
          radius: '83%', // 半径
          indicator: [
            {
              name: 'A',
              max: 100
            },
            {
              name: 'B',
              max: 100
            },
            {
              name: 'C',
              max: 100
            },
            {
              name: 'D',
              max: 100
            },
            {
              name: 'E',
              max: 100
            },
            {
              name: 'F',
              max: 100
            },
            {
              name: 'g',
              max: 100
            }
          ],
          polygon: true, // 多边形
          axisLine: { // 坐标轴线
            show: false
          },
          splitLine: { // 坐标轴分割线
            style: {
              stroke: 'rgba(5, 255, 255, 0)', // 边线
              fill: 'rgba(5, 255, 255, .1)' // 填充色
            }
          },
          axisLabel: {
            show: true,
            labelGap: 5,
            style: {
              fill: '#4a5969',
              rotate: -30,
              fontSize: 8
            }
          }

        },
        series: [{
          type: 'radar',
          data: [11, 56, 78, 52, 66, 32, 88],
          radarStyle: { // 雷达图自定义样式
            lineWidth: 2,
            stroke: '#05ffff', // 边线
            fill: 'rgba(5, 255, 255, 0)' // 填充色
          },
          point: { // 圆点
            style: {
              fill: '#008eff'
            }
          },
          label: { // 坐标点标签
            show: false
          }
        }]
      }
    }
  },
  mounted () {
  },
  methods: {
    setTime (data) {
      const { viewRadar } = this
      viewRadar.series[0].data = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.viewRadar = { ...viewRadar }
    },
    setIndicator (data) {
      const { viewRadar } = this
      viewRadar.radar.indicator = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.viewRadar = { ...viewRadar }
    }
  }
}
</script>

<style>
	ul,
	li {
		list-style: none;
	}

	.view-row-bottom-right-one .view-row-middle-right-chartbox {
		display: flex;
	}

	.view-row-bottom-right-one-ulbox {
		width: 40%;
		color: #4fd2dd;
		margin: 0;
		padding: 0;
		font-size: 12px;
		padding-left: 6%;
		padding-top: 3%;

	}

	.view-row-bottom-right-one-ulbox li {
		margin-bottom: 3%;
	}

	.view-row-bottom-right-one .border-box-content {
		padding: 6%;
		width: 88% !important;
		height: 90% !important;
		padding-bottom: 0;
	}

	.view-row-bottom-right-one .dv-charts-container {
		transform: rotate(30deg);
	}
</style>
