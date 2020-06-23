<template>
	<div style="height: 100%;">
		<div class="view-row-middle-right-chartOutBox">
			<line-charts title="服务响应时间(ms)" :eData="severResTime" />
		</div>
		<div class="view-row-middle-right-chartOutBox" style="margin-top: 4.2%;">
			<bar-charts :eData="transactionRank" />
		</div>
	</div>
</template>

<script>
import lineCharts from '@/components/view/lineCharts'
import barCharts from '@/components/view/barCharts'
export default {
  name: 'RowMiddleRight',
  components: {
    lineCharts,
    barCharts
  },
  props: {
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
