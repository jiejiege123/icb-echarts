<!--
 * @Author: your name
 * @Date: 2020-06-24 08:26:32
 * @LastEditTime: 2020-06-28 09:02:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\RowBottomLeft.vue
-->
<template>
	<line-charts title="交易率(笔/分钟)" :eData="transactionRate" />
</template>

<script>
import lineCharts from '@/components/view/lineCharts'
export default {
  name: 'RowBottomLeft',
  components: {
    lineCharts
  },
  props: {
    transactionRate: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
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
</style>
