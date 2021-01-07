<!--
 * @Author: your name
 * @Date: 2020-06-24 08:26:32
 * @LastEditTime: 2020-06-28 12:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\RowMiddleRight.vue
-->
<template>
	<div style="height: 100%;">
		<div class="view-row-middle-right-chartOutBox">
			<!-- <line-charts title="服务响应时间(ms)" :eData="severResTime" /> -->
      <line-echarts :xData="timeData" title="服务响应时间(ms)" :eData="severResTime" />
		</div>
		<div class="view-row-middle-right-chartOutBox" style="margin-top: 4.2%;">
			<!-- <bar-charts :xData="xData" :eData="transactionRank" /> -->
      <bar-echarts :interval='1' idNo="diqbar" :xData="xData" :eData="transactionRank" />
		</div>
	</div>
</template>

<script>
import lineCharts from '@/components/view/lineCharts'
import lineEcharts from '@/components/view/lineEcharts'
import barEcharts from '@/components/view/barEcharts'
import barCharts from '@/components/view/barCharts'
export default {
  name: 'RowMiddleRight',
  components: {
    lineCharts,
    barCharts,
    barEcharts,
    lineEcharts
  },
  props: {
    timeData: {
      type: Array,
      default () {
        return []
      }
    },
    severResTime: {
      type: Array,
      default () {
        return []
      }
    },
    transactionRank: {
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

  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style >
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
