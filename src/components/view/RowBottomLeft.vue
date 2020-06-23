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
		width: 88%;
		height: 90%;
		padding-bottom: 0;
	}
</style>
