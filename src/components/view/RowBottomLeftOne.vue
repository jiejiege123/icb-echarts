<template>
	<line-charts title="交易成功率" :eData="transactionSuccessRate" />
</template>

<script>
import lineCharts from '@/components/view/lineCharts'

export default {
  name: 'RowBottomLeftOne',
  components: {
    lineCharts
  },
  props: {
    transactionSuccessRate: {
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
	.view-row-bottom-left-one .border-box-content {
		padding: 6%;
		width: 88%;
		height: 90%;
		padding-bottom: 0;
	}
  .view-row-middle-right-chartbox {
		height: 85%;
	}
</style>
